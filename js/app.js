/* ==========================================================================
   Quick & Fun — vocabulary study app (vanilla JS, no dependencies)
   Data: window.VOCAB_DATA (js/data.js)
   Features: learn + phrases · flashcards · practice (MC / fill / listen)
             · spaced-repetition review · comprehensive test · search
   ========================================================================== */
(function () {
  "use strict";

  var DATA = (window.VOCAB_DATA && window.VOCAB_DATA.units) ? window.VOCAB_DATA.units : [];
  DATA.sort(function (a, b) { return a.id - b.id; });

  var main = document.getElementById("main");
  var DAY = 86400000;

  /* ------------------------------------------------------------------ *
   * Persistence
   * ------------------------------------------------------------------ */
  var LS = {
    get: function (k, fb) { try { var v = localStorage.getItem(k); return v == null ? fb : JSON.parse(v); } catch (e) { return fb; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  var learned  = LS.get("qf_learned", {});   // "unitId::word" -> true
  var quizBest = LS.get("qf_quiz", {});       // unitId -> best %
  var testBest = LS.get("qf_test_best", 0);   // best % on comprehensive test
  var srs      = LS.get("qf_srs", {});        // key -> {level,due,reps,lapses}
  var srsDaily = LS.get("qf_srs_daily", { date: "", newToday: 0 });
  var ttsSource = LS.get("qf_tts", "device"); // "device" | "google"
  var ttsLang   = LS.get("qf_tts_lang", "en-GB"); // "en-GB" | "en-US"
  var NEW_PER_DAY = 20;
  var SRS_INTERVALS = [10 * 60000, 1 * DAY, 3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY, 90 * DAY, 180 * DAY];

  function wordKey(unitId, word) { return unitId + "::" + String(word).toLowerCase(); }
  function isLearned(unitId, word) { return !!learned[wordKey(unitId, word)]; }
  function setLearned(unitId, word, val) {
    var k = wordKey(unitId, word);
    if (val) learned[k] = true; else delete learned[k];
    LS.set("qf_learned", learned);
  }
  function unitLearnedCount(u) {
    var n = 0; for (var i = 0; i < u.words.length; i++) if (isLearned(u.id, u.words[i].word)) n++; return n;
  }
  function totalWords() { return DATA.reduce(function (s, u) { return s + u.words.length; }, 0); }
  function totalLearned() { return DATA.reduce(function (s, u) { return s + unitLearnedCount(u); }, 0); }

  /* ------------------------------------------------------------------ *
   * Utilities
   * ------------------------------------------------------------------ */
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function escapeRe(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function findUnit(id) { for (var i = 0; i < DATA.length; i++) if (DATA[i].id === id) return DATA[i]; return null; }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function norm(s) { return String(s || "").toLowerCase().trim().replace(/[.,!?;:"'`]/g, "").replace(/\s+/g, " "); }
  function todayStr() { var d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
  function now() { return new Date().getTime(); }

  // flat list of every word with its unit
  function allRefs() {
    var out = [];
    DATA.forEach(function (u) { u.words.forEach(function (w) { out.push({ u: u, w: w, key: wordKey(u.id, w.word) }); }); });
    return out;
  }

  var toastTimer;
  function toast(msg) {
    var t = document.getElementById("qf-toast");
    if (!t) { t = el('<div class="toast" id="qf-toast"></div>'); document.body.appendChild(t); }
    t.textContent = msg;
    requestAnimationFrame(function () { t.classList.add("show"); });
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1600);
  }

  /* ------------------------------------------------------------------ *
   * Spaced repetition (SM-2 lite)
   * ------------------------------------------------------------------ */
  function srsSave() { LS.set("qf_srs", srs); LS.set("qf_srs_daily", srsDaily); }
  function resetDailyIfNeeded() { if (srsDaily.date !== todayStr()) { srsDaily = { date: todayStr(), newToday: 0 }; LS.set("qf_srs_daily", srsDaily); } }
  function srsGrade(key, grade) {
    var s = srs[key] || { level: 0, due: 0, reps: 0, lapses: 0, isNew: true };
    if (s.isNew) { resetDailyIfNeeded(); srsDaily.newToday++; }
    s.isNew = false; s.reps++;
    if (grade === "again") { s.level = 0; s.lapses++; s.due = now() + SRS_INTERVALS[0]; }
    else if (grade === "good") { s.level = Math.min(s.level + 1, SRS_INTERVALS.length - 1); s.due = now() + SRS_INTERVALS[s.level]; }
    else { s.level = Math.min(s.level + 2, SRS_INTERVALS.length - 1); s.due = now() + SRS_INTERVALS[s.level]; } // easy
    srs[key] = s; srsSave();
  }
  function reviewQueue() {
    resetDailyIfNeeded();
    var refs = allRefs(), t = now();
    var due = refs.filter(function (r) { return srs[r.key] && !srs[r.key].isNew && srs[r.key].due <= t; });
    var freshAll = refs.filter(function (r) { return !srs[r.key]; });
    var room = Math.max(0, NEW_PER_DAY - srsDaily.newToday);
    var fresh = shuffle(freshAll).slice(0, room);
    return { due: due, fresh: fresh, dueCount: due.length, freshCount: fresh.length, freshTotal: freshAll.length };
  }
  function srsStats() {
    var refs = allRefs(), t = now(), learning = 0, mature = 0, seen = 0;
    refs.forEach(function (r) { var s = srs[r.key]; if (s && !s.isNew) { seen++; if (s.level >= 4) mature++; else learning++; } });
    return { seen: seen, learning: learning, mature: mature, total: refs.length };
  }

  /* ------------------------------------------------------------------ *
   * Pronunciation — device voice (Web Speech) or Google Translate TTS
   * ------------------------------------------------------------------ */
  var speechOK = ("speechSynthesis" in window) && ("SpeechSynthesisUtterance" in window);
  var voices = [];
  function loadVoices() { if (speechOK) voices = window.speechSynthesis.getVoices() || []; }
  if (speechOK) { loadVoices(); if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") window.speechSynthesis.onvoiceschanged = loadVoices; }
  function pickVoice() {
    if (!voices.length) loadVoices();
    var pref = (ttsLang === "en-US") ? ["en-us", "en_us", "en-gb", "en_gb", "en"] : ["en-gb", "en_gb", "en-us", "en_us", "en"];
    for (var p = 0; p < pref.length; p++) for (var i = 0; i < voices.length; i++)
      if (voices[i].lang && voices[i].lang.toLowerCase().indexOf(pref[p]) === 0) return voices[i];
    return null;
  }
  var currentAudio = null;
  function stopSpeak() {
    try { if (speechOK) window.speechSynthesis.cancel(); } catch (e) {}
    if (currentAudio) { try { currentAudio.pause(); } catch (e) {} currentAudio = null; }
  }
  function speakDevice(text) {
    if (!speechOK) { toast("Trình duyệt không hỗ trợ phát âm"); return; }
    try {
      stopSpeak();
      var u = new SpeechSynthesisUtterance(text);
      var v = pickVoice(); if (v) { u.voice = v; u.lang = v.lang; } else u.lang = ttsLang || "en-GB";
      u.rate = 0.92; window.speechSynthesis.speak(u);
    } catch (e) { toast("Không phát âm được"); }
  }
  // Google Translate's public tw-ob TTS endpoint. Not an official API — used only as
  // an <audio> source (playback needs no CORS). Falls back to the device voice on any error.
  function speakGoogle(text) {
    stopSpeak();
    var tl = (ttsLang === "en-US") ? "en-US" : (ttsLang === "en-GB" ? "en-GB" : "en");
    var url = "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=" +
      encodeURIComponent(tl) + "&q=" + encodeURIComponent(text);
    try {
      var a = new Audio(url); currentAudio = a;
      a.onerror = function () { speakDevice(text); };
      var pr = a.play();
      if (pr && pr.catch) pr.catch(function () { speakDevice(text); });
    } catch (e) { speakDevice(text); }
  }
  function speak(text) { if (ttsSource === "google") speakGoogle(text); else speakDevice(text); }
  function speakerHTML(cls) { return '<button class="pill-btn speak-btn ' + (cls || "") + '" data-speak title="Nghe phát âm" aria-label="Nghe phát âm">🔊</button>'; }

  /* ------------------------------------------------------------------ *
   * Theme
   * ------------------------------------------------------------------ */
  function applyTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    var btn = document.getElementById("btn-theme");
    if (btn) btn.textContent = (mode === "dark") ? "☀️" : "🌙";
  }
  (function initTheme() {
    var saved = LS.get("qf_theme", "auto");
    if (saved === "auto") {
      applyTheme("auto");
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      var b = document.getElementById("btn-theme"); if (b) b.textContent = prefersDark ? "☀️" : "🌙";
    } else applyTheme(saved);
  })();
  document.getElementById("btn-theme").addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme"), next;
    if (cur === "dark") next = "light";
    else if (cur === "light") next = "dark";
    else { var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches; next = prefersDark ? "light" : "dark"; }
    applyTheme(next); LS.set("qf_theme", next);
  });
  document.getElementById("btn-search").addEventListener("click", function () { location.hash = "#/search"; });
  document.getElementById("btn-settings").addEventListener("click", function () { location.hash = "#/settings"; });

  /* ------------------------------------------------------------------ *
   * Progress ring
   * ------------------------------------------------------------------ */
  function ringHTML(percent) {
    var r = 26, c = 2 * Math.PI * r, off = c * (1 - percent / 100);
    return '<div class="ring" style="--p:' + percent + '"><svg width="62" height="62" viewBox="0 0 62 62">' +
      '<circle class="bg" cx="31" cy="31" r="' + r + '" fill="none" stroke-width="7"/>' +
      '<circle class="fg" cx="31" cy="31" r="' + r + '" fill="none" stroke-width="7" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/>' +
      '</svg><b>' + percent + '%</b></div>';
  }

  /* ================================================================== *
   * HOME
   * ================================================================== */
  function viewHome() {
    var tw = totalWords(), tl = totalLearned(), p = pct(tl, tw);
    var rq = reviewQueue();
    var due = rq.dueCount + rq.freshCount;
    var wrap = el('<div class="fade-in"></div>');

    wrap.appendChild(el(
      '<section class="hero"><div class="hero-top"><div>' +
        '<h1>Xin chào 👋</h1>' +
        '<p>Học nhanh 1000+ từ vựng tiếng Anh theo 20 chủ đề. Chọn chủ đề, hoặc ôn tập ngay bên dưới.</p>' +
      '</div>' + ringHTML(p) + '</div>' +
      '<div class="hero-stats">' +
        '<div class="hero-stat"><b>' + tl + '</b><span>từ đã thuộc</span></div>' +
        '<div class="hero-stat"><b>' + tw + '</b><span>tổng số từ</span></div>' +
        '<div class="hero-stat"><b>' + DATA.length + '</b><span>chủ đề</span></div>' +
      '</div></section>'
    ));

    // Review + Test cards
    wrap.appendChild(el('<div class="section-head"><h2>Ôn tập &amp; đánh giá</h2></div>'));
    var rc = el('<div class="review-cards"></div>');
    rc.appendChild(el(
      '<button class="review-card srs" data-go="review">' +
        '<span class="rc-emoji">🔁</span>' +
        '<span class="rc-title">Ôn tập ngắt quãng</span>' +
        '<span class="rc-sub">' + (due > 0 ? (due + ' thẻ cần ôn hôm nay') : 'Đã ôn xong hôm nay 🎉') + '</span>' +
        (due > 0 ? '<span class="rc-badge">' + due + '</span>' : '') +
      '</button>'
    ));
    rc.appendChild(el(
      '<button class="review-card test" data-go="test">' +
        '<span class="rc-emoji">🎯</span>' +
        '<span class="rc-title">Kiểm tra tổng hợp</span>' +
        '<span class="rc-sub">' + (testBest ? ('Kỷ lục: ' + testBest + '%') : 'Đánh giá kiến thức cả 20 chủ đề') + '</span>' +
      '</button>'
    ));
    wrap.appendChild(rc);
    rc.addEventListener("click", function (e) { var b = e.target.closest("[data-go]"); if (b) location.hash = "#/" + b.getAttribute("data-go"); });

    // Units
    wrap.appendChild(el('<div class="section-head"><h2>Chủ đề</h2><span class="muted">' + DATA.length + ' units</span></div>'));
    var grid = el('<div class="unit-grid"></div>');
    DATA.forEach(function (u) {
      var lc = unitLearnedCount(u), up = pct(lc, u.words.length);
      grid.appendChild(el(
        '<button class="unit-card" data-goto="' + u.id + '">' +
          '<span class="u-no">Unit ' + u.id + '</span>' +
          '<span class="u-emoji">' + (u.emoji || "📘") + '</span>' +
          '<span class="u-title">' + esc(u.title_en) + '</span>' +
          '<span class="u-sub">' + esc(u.title_vi) + '</span>' +
          '<span class="u-meta">' + lc + '/' + u.words.length + ' từ · ' + up + '%</span>' +
          '<span class="bar"><i style="width:' + up + '%"></i></span>' +
        '</button>'
      ));
    });
    wrap.appendChild(grid);
    grid.addEventListener("click", function (e) { var b = e.target.closest("[data-goto]"); if (b) location.hash = "#/u/" + b.getAttribute("data-goto"); });

    render(wrap);
  }

  /* ================================================================== *
   * UNIT (tabs: learn / cards / practice)
   * ================================================================== */
  function viewUnit(id, tab) {
    var u = findUnit(id);
    if (!u) { renderNotFound(); return; }
    if (tab === "quiz") tab = "practice"; // back-compat
    tab = tab || "learn";

    var wrap = el('<div class="fade-in"></div>');
    wrap.appendChild(el('<button class="crumb" data-home>← Tất cả chủ đề</button>'));
    wrap.appendChild(el(
      '<div class="unit-hero"><div class="big-emoji">' + (u.emoji || "📘") + '</div>' +
      '<div><h1>Unit ' + u.id + ': ' + esc(u.title_en) + '</h1>' +
      '<div class="sub">' + esc(u.title_vi) + ' · ' + u.words.length + ' từ' + (u.phrases && u.phrases.length ? ' · ' + u.phrases.length + ' cụm từ' : '') + '</div></div></div>'
    ));
    var tabs = el(
      '<div class="tabs" role="tablist">' +
        '<button class="tab" role="tab" data-tab="learn">📖 Học</button>' +
        '<button class="tab" role="tab" data-tab="cards">🃏 Flashcard</button>' +
        '<button class="tab" role="tab" data-tab="practice">🎓 Luyện tập</button>' +
      '</div>'
    );
    wrap.appendChild(tabs);
    var body = el('<div id="unit-body"></div>');
    wrap.appendChild(body);

    tabs.querySelectorAll(".tab").forEach(function (t) {
      t.setAttribute("aria-selected", t.getAttribute("data-tab") === tab ? "true" : "false");
      t.addEventListener("click", function () { location.hash = "#/u/" + u.id + "/" + t.getAttribute("data-tab"); });
    });
    wrap.querySelector("[data-home]").addEventListener("click", function () { location.hash = "#/"; });
    render(wrap);

    if (tab === "cards") renderFlashcards(u, body);
    else if (tab === "practice") renderPractice(u, body);
    else renderLearn(u, body);
  }

  /* ---------------- Learn: words + phrases ---------------- */
  function renderLearn(u, body) {
    var hasPhrases = u.phrases && u.phrases.length;
    body.innerHTML = "";
    var head = el(
      '<div>' +
        (hasPhrases ?
          '<div class="seg" role="tablist">' +
            '<button class="seg-btn" data-seg="words" aria-selected="true">📗 Từ vựng (' + u.words.length + ')</button>' +
            '<button class="seg-btn" data-seg="phrases" aria-selected="false">🔗 Cụm từ (' + u.phrases.length + ')</button>' +
          '</div>' : '') +
        '<div class="list-tools">' +
          '<label class="search-input">🔎<input type="search" placeholder="Lọc trong chủ đề này…" id="unit-filter" /></label>' +
          '<span class="count-chip" id="unit-progress">' + unitLearnedCount(u) + '/' + u.words.length + '</span>' +
        '</div>' +
        '<div id="learn-list"></div>' +
      '</div>'
    );
    body.appendChild(head);
    var listEl = head.querySelector("#learn-list");
    var mode = "words";

    function paintWords(filter) {
      listEl.innerHTML = ""; var f = (filter || "").trim().toLowerCase(); var shown = 0;
      u.words.forEach(function (w, idx) {
        if (f && (w.word + " " + w.vi + " " + (w.example_en || "")).toLowerCase().indexOf(f) === -1) return;
        shown++;
        var done = isLearned(u.id, w.word);
        var card = el(
          '<div class="word-card' + (done ? " done" : "") + '">' +
            '<div class="word-top"><div class="word-emoji">' + (w.emoji || "•") + '</div><div class="word-main">' +
              '<div class="word-headline"><span class="word-en">' + esc(w.word) + '</span>' +
                '<span class="pos">' + esc(w.pos) + '</span><span class="word-ipa">' + esc(w.ipa) + '</span></div>' +
              '<div class="word-vi">' + esc(w.vi) + '</div>' +
              (w.example_en ? '<div class="word-ex"><div class="en">' + esc(w.example_en) + '</div><div class="vi">' + esc(w.example_vi || "") + '</div></div>' : "") +
              '<div class="word-actions"><button class="pill-btn toggle' + (done ? " on" : "") + '" data-toggle>' + (done ? "✓ Đã thuộc" : "Đánh dấu thuộc") + '</button>' + speakerHTML() + '</div>' +
            '</div></div></div>'
        );
        card.querySelector("[data-speak]").addEventListener("click", function () { speak(w.word); });
        card.querySelector("[data-toggle]").addEventListener("click", function () {
          var nd = !isLearned(u.id, w.word); setLearned(u.id, w.word, nd);
          card.classList.toggle("done", nd);
          var btn = card.querySelector("[data-toggle]"); btn.classList.toggle("on", nd); btn.textContent = nd ? "✓ Đã thuộc" : "Đánh dấu thuộc";
          head.querySelector("#unit-progress").textContent = unitLearnedCount(u) + "/" + u.words.length;
        });
        listEl.appendChild(card);
      });
      if (!shown) listEl.appendChild(el('<div class="empty"><span class="big">🔍</span>Không tìm thấy từ nào.</div>'));
    }
    function paintPhrases(filter) {
      listEl.innerHTML = ""; var f = (filter || "").trim().toLowerCase(); var shown = 0;
      u.phrases.forEach(function (p) {
        if (f && (p.en + " " + p.vi + " " + (p.example_en || "")).toLowerCase().indexOf(f) === -1) return;
        shown++;
        var card = el(
          '<div class="word-card"><div class="word-top"><div class="word-emoji">🔗</div><div class="word-main">' +
            '<div class="word-headline"><span class="word-en" style="font-size:16px">' + esc(p.en) + '</span></div>' +
            '<div class="word-vi">' + esc(p.vi) + '</div>' +
            (p.example_en ? '<div class="word-ex"><div class="en">' + esc(p.example_en) + '</div><div class="vi">' + esc(p.example_vi || "") + '</div></div>' : "") +
            '<div class="word-actions">' + speakerHTML() + '</div>' +
          '</div></div></div>'
        );
        card.querySelector("[data-speak]").addEventListener("click", function () { speak(p.en); });
        listEl.appendChild(card);
      });
      if (!shown) listEl.appendChild(el('<div class="empty"><span class="big">🔍</span>Không tìm thấy cụm từ nào.</div>'));
    }
    function repaint() { var v = head.querySelector("#unit-filter").value; if (mode === "phrases") paintPhrases(v); else paintWords(v); }

    paintWords("");
    head.querySelector("#unit-filter").addEventListener("input", repaint);
    if (hasPhrases) {
      head.querySelectorAll(".seg-btn").forEach(function (b) {
        b.addEventListener("click", function () {
          mode = b.getAttribute("data-seg");
          head.querySelectorAll(".seg-btn").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
          head.querySelector("#unit-progress").style.display = (mode === "phrases") ? "none" : "";
          repaint();
        });
      });
    }
  }

  /* ---------------- Flashcards ---------------- */
  function renderFlashcards(u, body) {
    var order = shuffle(u.words.map(function (_, i) { return i; })), pos = 0;
    body.innerHTML = "";
    var wrap = el(
      '<div class="fc-wrap">' +
        '<div class="fc-progress"><span id="fc-count"></span><button class="crumb" id="fc-shuffle">🔀 Xáo lại</button></div>' +
        '<div class="flashcard" id="flashcard"><div class="fc-inner"><div class="fc-face fc-front"></div><div class="fc-face fc-back"></div></div></div>' +
        '<div class="fc-controls"><button class="btn danger" id="fc-again">Chưa thuộc</button><button class="btn ghost" id="fc-speak">🔊 Nghe</button><button class="btn success" id="fc-known">Đã thuộc ✓</button></div>' +
        '<button class="btn ghost block" id="fc-next">Từ tiếp theo →</button>' +
      '</div>'
    );
    body.appendChild(wrap);
    var cardEl = wrap.querySelector("#flashcard"), front = wrap.querySelector(".fc-front"), back = wrap.querySelector(".fc-back");
    function paint() {
      if (!order.length) { body.innerHTML = '<div class="empty">Chủ đề này chưa có từ.</div>'; return; }
      var w = u.words[order[pos]];
      cardEl.classList.remove("flipped");
      front.innerHTML = '<div class="big">' + (w.emoji || "📘") + '</div><div class="en">' + esc(w.word) + '</div><div class="ipa">' + esc(w.ipa) + '</div><div class="hint">Chạm để lật thẻ</div>';
      back.innerHTML = '<div class="vi">' + esc(w.vi) + '</div>' + (w.example_en ? '<div class="ex">“' + esc(w.example_en) + '”<br><i>' + esc(w.example_vi || "") + '</i></div>' : "") + '<div class="hint">Chạm để lật lại</div>';
      wrap.querySelector("#fc-count").textContent = "Thẻ " + (pos + 1) + " / " + order.length;
    }
    function next() { pos = (pos + 1) % order.length; paint(); }
    cardEl.addEventListener("click", function () { cardEl.classList.toggle("flipped"); });
    wrap.querySelector("#fc-next").addEventListener("click", next);
    wrap.querySelector("#fc-speak").addEventListener("click", function () { speak(u.words[order[pos]].word); });
    wrap.querySelector("#fc-shuffle").addEventListener("click", function () { order = shuffle(order); pos = 0; paint(); toast("Đã xáo trộn thẻ"); });
    wrap.querySelector("#fc-known").addEventListener("click", function () { setLearned(u.id, u.words[order[pos]].word, true); toast("✓ Đã thuộc"); next(); });
    wrap.querySelector("#fc-again").addEventListener("click", function () { setLearned(u.id, u.words[order[pos]].word, false); next(); });
    paint();
  }

  /* ---------------- Practice hub (MC / fill / listen) ---------------- */
  function renderPractice(u, body) {
    body.innerHTML = "";
    var chips = el(
      '<div class="mode-chips">' +
        '<button class="chip" data-mode="mc" aria-selected="true">📝 Trắc nghiệm</button>' +
        '<button class="chip" data-mode="fill" aria-selected="false">✏️ Điền từ</button>' +
        '<button class="chip" data-mode="listen" aria-selected="false">🎧 Nghe &amp; viết</button>' +
      '</div>'
    );
    var pane = el('<div id="practice-pane"></div>');
    body.appendChild(chips); body.appendChild(pane);
    function select(mode) {
      chips.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-selected", c.getAttribute("data-mode") === mode ? "true" : "false"); });
      if (mode === "fill") quizFill(u, pane);
      else if (mode === "listen") quizListen(u, pane);
      else quizMC(u, pane);
    }
    chips.addEventListener("click", function (e) { var c = e.target.closest("[data-mode]"); if (c) select(c.getAttribute("data-mode")); });
    select("mc");
  }

  // shared distractor helper (Vietnamese meanings or English words)
  function distractors(correct, dir, sourceWords, n) {
    var out = [], pool = shuffle(sourceWords);
    for (var i = 0; i < pool.length && out.length < n; i++) {
      var cand = dir === "en2vi" ? pool[i].vi : pool[i].word;
      if (cand !== correct && out.indexOf(cand) === -1) out.push(cand);
    }
    if (out.length < n) {
      var g = shuffle(allRefs());
      for (var j = 0; j < g.length && out.length < n; j++) {
        var c2 = dir === "en2vi" ? g[j].w.vi : g[j].w.word;
        if (c2 !== correct && out.indexOf(c2) === -1) out.push(c2);
      }
    }
    return out;
  }

  /* ---- Multiple choice (per unit) ---- */
  function quizMC(u, pane) {
    if (u.words.length < 4) { pane.innerHTML = '<div class="empty"><span class="big">🙃</span>Cần ít nhất 4 từ.</div>'; return; }
    var QN = Math.min(10, u.words.length);
    var questions = shuffle(u.words).slice(0, QN).map(function (w) {
      var dir = Math.random() < 0.5 ? "en2vi" : "vi2en";
      var correct = dir === "en2vi" ? w.vi : w.word;
      return {
        dir: dir, prompt: dir === "en2vi" ? w.word : w.vi, sub: dir === "en2vi" ? w.ipa : "",
        correct: correct, speakText: w.word, options: shuffle(distractors(correct, dir, u.words.filter(function (x) { return x.word !== w.word; }), 3).concat([correct]))
      };
    });
    runMCQuiz(pane, questions, u.words.length, function (p) {
      var best = quizBest[u.id] || 0; if (p > best) { quizBest[u.id] = p; LS.set("qf_quiz", quizBest); }
      return { best: Math.max(best, p), isRecord: p >= best && p > 0, retry: function () { quizMC(u, pane); }, learnHref: "#/u/" + u.id + "/learn" };
    });
  }

  // generic MC runner: questions[], onFinish(percent)->{best,isRecord,retry,learnHref}
  function runMCQuiz(pane, questions, poolSize, onFinish) {
    var idx = 0, score = 0, answered = false;
    pane.innerHTML = ""; var wrap = el('<div class="quiz-wrap"></div>'); pane.appendChild(wrap);
    function paint() {
      answered = false; var q = questions[idx]; wrap.innerHTML = "";
      wrap.appendChild(el('<div class="quiz-head"><span>Câu ' + (idx + 1) + ' / ' + questions.length + '</span><span>Điểm: <b id="q-score">' + score + '</b></span></div>'));
      var card = el(
        '<div class="quiz-q">' +
          '<div class="prompt-label">' + (q.dir === "en2vi" ? "Nghĩa của từ này là gì?" : "Từ tiếng Anh nào có nghĩa này?") + '</div>' +
          '<div class="prompt">' + esc(q.prompt) + (q.sub ? '<small>' + esc(q.sub) + '</small>' : "") + '</div>' +
          (q.dir === "en2vi" ? '<div style="margin-top:10px">' + speakerHTML() + '</div>' : "") +
        '</div>'
      );
      wrap.appendChild(card);
      var sp = card.querySelector("[data-speak]"); if (sp) sp.addEventListener("click", function () { speak(q.speakText); });
      var opts = el('<div class="opts"></div>');
      q.options.forEach(function (opt) { var b = el('<button class="opt">' + esc(opt) + '</button>'); b.addEventListener("click", function () { choose(b, opt, q, opts); }); opts.appendChild(b); });
      wrap.appendChild(opts);
      var nb = el('<button class="btn primary block" id="q-next" disabled>' + (idx + 1 < questions.length ? "Câu tiếp theo →" : "Xem kết quả") + '</button>');
      nb.addEventListener("click", function () { if (idx + 1 < questions.length) { idx++; paint(); } else finish(); });
      wrap.appendChild(nb);
    }
    function choose(btn, opt, q, opts) {
      if (answered) return; answered = true;
      var correct = opt === q.correct;
      if (correct) { score++; btn.classList.add("correct"); btn.innerHTML = esc(opt) + '<span class="tick">✓</span>'; var sc = wrap.querySelector("#q-score"); if (sc) sc.textContent = score; }
      else { btn.classList.add("wrong"); btn.innerHTML = esc(opt) + '<span class="tick">✗</span>'; opts.querySelectorAll(".opt").forEach(function (o) { if (o.textContent === q.correct) { o.classList.add("correct"); o.innerHTML = esc(q.correct) + '<span class="tick">✓</span>'; } }); }
      opts.querySelectorAll(".opt").forEach(function (o) { o.disabled = true; });
      if (q.dir !== "en2vi") speak(q.speakText);
      wrap.querySelector("#q-next").disabled = false;
      q._got = correct;
    }
    function finish() {
      var p = pct(score, questions.length); var info = onFinish ? onFinish(p) : {};
      var msg = p === 100 ? "Xuất sắc! Trọn vẹn 🎉" : p >= 70 ? "Tốt lắm, tiếp tục nhé! 💪" : "Cố gắng ôn thêm nhé 🌱";
      wrap.innerHTML = "";
      var res = el(
        '<div class="quiz-result"><div class="score">' + score + '/' + questions.length + '</div>' +
        '<div class="msg">' + msg + ' · ' + p + '%' + (info.isRecord ? ' · Kỷ lục mới!' : (info.best ? ' · Kỷ lục: ' + info.best + '%' : '')) + '</div>' +
        '<div class="btn-row" style="justify-content:center"><button class="btn primary" id="q-retry">Làm lại</button>' +
        (info.learnHref ? '<button class="btn ghost" id="q-learn">📖 Ôn từ vựng</button>' : '') + '</div></div>'
      );
      wrap.appendChild(res);
      res.querySelector("#q-retry").addEventListener("click", function () { if (info.retry) info.retry(); });
      if (info.learnHref) res.querySelector("#q-learn").addEventListener("click", function () { location.hash = info.learnHref; });
    }
    paint();
  }

  /* ---- Fill in the blank (from example sentences) ---- */
  function buildBlank(example, word) {
    var re = new RegExp("\\b(" + escapeRe(word) + "(?:s|es|ed|ing|d)?)\\b", "i");
    var m = example.match(re); if (!m) return null;
    return { blanked: example.replace(re, '<span class="blank">_____</span>'), answer: m[1], word: word };
  }
  function quizFill(u, pane) {
    var pool = [];
    u.words.forEach(function (w) { if (w.example_en) { var b = buildBlank(w.example_en, w.word); if (b) pool.push({ w: w, b: b }); } });
    if (pool.length < 1) { pane.innerHTML = '<div class="empty"><span class="big">🙂</span>Chủ đề này chưa đủ ví dụ để luyện điền từ.</div>'; return; }
    var qs = shuffle(pool).slice(0, Math.min(10, pool.length)), idx = 0, score = 0;
    pane.innerHTML = ""; var wrap = el('<div class="quiz-wrap"></div>'); pane.appendChild(wrap);
    function paint() {
      var q = qs[idx]; wrap.innerHTML = "";
      wrap.appendChild(el('<div class="quiz-head"><span>Câu ' + (idx + 1) + ' / ' + qs.length + '</span><span>Điểm: <b>' + score + '</b></span></div>'));
      var card = el(
        '<div class="quiz-q fill-q">' +
          '<div class="prompt-label">Điền từ còn thiếu</div>' +
          '<div class="fill-sentence">' + q.b.blanked + '</div>' +
          '<div class="fill-hint">Gợi ý: <b>' + esc(q.w.vi) + '</b> · ' + esc(q.w.ipa) + '</div>' +
          '<input class="fill-input" id="fill-in" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Nhập từ tiếng Anh…" />' +
          '<div class="fill-feedback" id="fill-fb"></div>' +
        '</div>'
      );
      wrap.appendChild(card);
      var input = card.querySelector("#fill-in");
      var checkBtn = el('<button class="btn primary block" id="fill-check">Kiểm tra</button>');
      var nextBtn = el('<button class="btn ghost block" id="fill-next" style="display:none">' + (idx + 1 < qs.length ? "Câu tiếp theo →" : "Xem kết quả") + '</button>');
      wrap.appendChild(checkBtn); wrap.appendChild(nextBtn);
      var done = false;
      function check() {
        if (done) return;
        var val = norm(input.value);
        if (!val) { input.focus(); return; }
        done = true;
        var ok = val === norm(q.b.answer) || val === norm(q.w.word);
        var fb = card.querySelector("#fill-fb");
        input.disabled = true;
        if (ok) { score++; input.classList.add("ok"); fb.innerHTML = '<span class="ok">✓ Chính xác!</span>'; }
        else { input.classList.add("bad"); fb.innerHTML = '<span class="bad">✗ Đáp án: <b>' + esc(q.b.answer) + '</b></span>'; }
        speak(q.w.word);
        checkBtn.style.display = "none"; nextBtn.style.display = "";
        nextBtn.focus();
      }
      checkBtn.addEventListener("click", check);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); if (!done) check(); else nextBtn.click(); } });
      nextBtn.addEventListener("click", function () { if (idx + 1 < qs.length) { idx++; paint(); } else finish(); });
      setTimeout(function () { input.focus(); }, 30);
    }
    function finish() {
      var p = pct(score, qs.length); wrap.innerHTML = "";
      var res = el('<div class="quiz-result"><div class="score">' + score + '/' + qs.length + '</div><div class="msg">' + p + '% · Điền từ</div>' +
        '<div class="btn-row" style="justify-content:center"><button class="btn primary" id="r">Làm lại</button><button class="btn ghost" id="l">📖 Ôn từ vựng</button></div></div>');
      wrap.appendChild(res);
      res.querySelector("#r").addEventListener("click", function () { quizFill(u, pane); });
      res.querySelector("#l").addEventListener("click", function () { location.hash = "#/u/" + u.id + "/learn"; });
    }
    paint();
  }

  /* ---- Listen & type ---- */
  function quizListen(u, pane) {
    if (!speechOK) { pane.innerHTML = '<div class="empty"><span class="big">🔇</span>Trình duyệt này không hỗ trợ phát âm nên không dùng được chế độ Nghe &amp; viết.</div>'; return; }
    var qs = shuffle(u.words).slice(0, Math.min(10, u.words.length)), idx = 0, score = 0;
    pane.innerHTML = ""; var wrap = el('<div class="quiz-wrap"></div>'); pane.appendChild(wrap);
    function paint() {
      var w = qs[idx]; wrap.innerHTML = "";
      wrap.appendChild(el('<div class="quiz-head"><span>Câu ' + (idx + 1) + ' / ' + qs.length + '</span><span>Điểm: <b>' + score + '</b></span></div>'));
      var card = el(
        '<div class="quiz-q listen-q">' +
          '<div class="prompt-label">Nghe và viết lại từ</div>' +
          '<button class="listen-play" id="ls-play" aria-label="Phát âm">🔊</button>' +
          '<div class="fill-hint">Gợi ý nghĩa: <b>' + esc(w.vi) + '</b></div>' +
          '<input class="fill-input" id="ls-in" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Nghe rồi gõ từ tiếng Anh…" />' +
          '<div class="fill-feedback" id="ls-fb"></div>' +
        '</div>'
      );
      wrap.appendChild(card);
      var input = card.querySelector("#ls-in");
      card.querySelector("#ls-play").addEventListener("click", function () { speak(w.word); });
      var checkBtn = el('<button class="btn primary block" id="ls-check">Kiểm tra</button>');
      var nextBtn = el('<button class="btn ghost block" id="ls-next" style="display:none">' + (idx + 1 < qs.length ? "Câu tiếp theo →" : "Xem kết quả") + '</button>');
      wrap.appendChild(checkBtn); wrap.appendChild(nextBtn);
      var done = false;
      function check() {
        if (done) return; var val = norm(input.value); if (!val) { input.focus(); return; }
        done = true; var ok = val === norm(w.word); input.disabled = true;
        var fb = card.querySelector("#ls-fb");
        if (ok) { score++; input.classList.add("ok"); fb.innerHTML = '<span class="ok">✓ Chính xác — ' + esc(w.word) + ' ' + esc(w.ipa) + '</span>'; }
        else { input.classList.add("bad"); fb.innerHTML = '<span class="bad">✗ Đáp án: <b>' + esc(w.word) + '</b> ' + esc(w.ipa) + '</span>'; }
        checkBtn.style.display = "none"; nextBtn.style.display = ""; nextBtn.focus();
      }
      checkBtn.addEventListener("click", check);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); if (!done) check(); else nextBtn.click(); } });
      nextBtn.addEventListener("click", function () { if (idx + 1 < qs.length) { idx++; paint(); } else finish(); });
      setTimeout(function () { speak(w.word); input.focus(); }, 120);
    }
    function finish() {
      var p = pct(score, qs.length); wrap.innerHTML = "";
      var res = el('<div class="quiz-result"><div class="score">' + score + '/' + qs.length + '</div><div class="msg">' + p + '% · Nghe &amp; viết</div>' +
        '<div class="btn-row" style="justify-content:center"><button class="btn primary" id="r">Làm lại</button><button class="btn ghost" id="l">📖 Ôn từ vựng</button></div></div>');
      wrap.appendChild(res);
      res.querySelector("#r").addEventListener("click", function () { quizListen(u, pane); });
      res.querySelector("#l").addEventListener("click", function () { location.hash = "#/u/" + u.id + "/learn"; });
    }
    paint();
  }

  /* ================================================================== *
   * SPACED-REPETITION REVIEW
   * ================================================================== */
  function viewReview() {
    var q = reviewQueue();
    var queue = shuffle(q.due).concat(q.fresh); // due first-ish, then new
    var wrap = el('<div class="fade-in"></div>');
    wrap.appendChild(el('<button class="crumb" data-home>← Trang chủ</button>'));
    render(wrap);
    wrap.querySelector("[data-home]").addEventListener("click", function () { location.hash = "#/"; });

    var st = srsStats();
    if (!queue.length) {
      wrap.appendChild(el(
        '<div class="empty"><span class="big">🎉</span>Tuyệt vời! Hôm nay bạn không còn thẻ nào cần ôn.' +
        '<div class="srs-stats"><span>👁️ Đã học: <b>' + st.seen + '</b></span><span>🌱 Đang nhớ: <b>' + st.learning + '</b></span><span>🌳 Nhớ chắc: <b>' + st.mature + '</b></span></div>' +
        '<div class="btn-row" style="justify-content:center;margin-top:16px"><button class="btn primary" onclick="location.hash=\'#/test\'">🎯 Làm bài kiểm tra tổng hợp</button>' +
        '<button class="btn ghost" onclick="location.hash=\'#/\'">Về trang chủ</button></div></div>'
      ));
      return;
    }

    var total = queue.length, doneCount = 0;
    var head = el('<div class="unit-hero"><div class="big-emoji">🔁</div><div><h1>Ôn tập ngắt quãng</h1><div class="sub" id="rv-sub"></div></div></div>');
    wrap.appendChild(head);
    var barWrap = el('<div class="bar" style="margin:4px 0 16px"><i id="rv-bar" style="width:0%"></i></div>');
    wrap.appendChild(barWrap);
    var pane = el('<div id="rv-pane"></div>');
    wrap.appendChild(pane);

    function updateHead() {
      head.querySelector("#rv-sub").textContent = "Còn " + queue.length + " thẻ · đã ôn " + doneCount;
      barWrap.querySelector("#rv-bar").style.width = pct(doneCount, total + queue.length - (total - doneCount) === 0 ? 1 : (doneCount + queue.length)) + "%";
    }
    function paint() {
      if (!queue.length) { finish(); return; }
      updateHead();
      var ref = queue[0], w = ref.w, isNew = !srs[ref.key] || srs[ref.key].isNew;
      pane.innerHTML = "";
      var card = el(
        '<div class="rv-card">' +
          (isNew ? '<span class="rv-tag new">Từ mới</span>' : '<span class="rv-tag due">Ôn lại</span>') +
          '<div class="rv-emoji">' + (w.emoji || "📘") + '</div>' +
          '<div class="rv-en">' + esc(w.word) + '</div>' +
          '<div class="rv-ipa">' + esc(w.ipa) + ' · <span class="rv-unit">Unit ' + ref.u.id + '</span></div>' +
          '<div class="rv-back" id="rv-back" hidden>' +
            '<div class="rv-vi">' + esc(w.vi) + '</div>' +
            (w.example_en ? '<div class="rv-ex">“' + esc(w.example_en) + '”<br><i>' + esc(w.example_vi || "") + '</i></div>' : "") +
          '</div>' +
        '</div>'
      );
      pane.appendChild(card);
      var reveal = el('<div class="rv-controls"><button class="btn ghost" id="rv-speak">🔊 Nghe</button><button class="btn primary" id="rv-show">Hiện đáp án</button></div>');
      pane.appendChild(reveal);
      reveal.querySelector("#rv-speak").addEventListener("click", function () { speak(w.word); });
      reveal.querySelector("#rv-show").addEventListener("click", function () {
        card.querySelector("#rv-back").hidden = false;
        speak(w.word);
        pane.removeChild(reveal);
        var grades = el(
          '<div class="rv-grades">' +
            '<button class="btn danger" data-g="again">😕 Chưa nhớ<small>10 phút</small></button>' +
            '<button class="btn primary" data-g="good">🙂 Nhớ<small>' + fmtNext("good", ref.key) + '</small></button>' +
            '<button class="btn success" data-g="easy">😎 Quá dễ<small>' + fmtNext("easy", ref.key) + '</small></button>' +
          '</div>'
        );
        pane.appendChild(grades);
        grades.addEventListener("click", function (e) { var b = e.target.closest("[data-g]"); if (!b) return; grade(ref, b.getAttribute("data-g")); });
      });
    }
    function fmtNext(g, key) {
      var s = srs[key] || { level: 0 };
      var lvl = g === "good" ? Math.min(s.level + 1, SRS_INTERVALS.length - 1) : Math.min(s.level + 2, SRS_INTERVALS.length - 1);
      var ms = SRS_INTERVALS[lvl];
      if (ms < DAY) return "< 1 ngày";
      var d = Math.round(ms / DAY); return d + " ngày";
    }
    function grade(ref, g) {
      srsGrade(ref.key, g);
      queue.shift();
      if (g === "again") queue.push(ref); // repeat later this session
      else doneCount++;
      paint();
    }
    function finish() {
      var st2 = srsStats();
      pane.innerHTML = "";
      head.querySelector("#rv-sub").textContent = "Hoàn thành!";
      barWrap.querySelector("#rv-bar").style.width = "100%";
      pane.appendChild(el(
        '<div class="quiz-result"><div class="score">🎉</div><div class="msg">Đã ôn xong ' + doneCount + ' thẻ hôm nay!</div>' +
        '<div class="srs-stats" style="justify-content:center"><span>🌱 Đang nhớ: <b>' + st2.learning + '</b></span><span>🌳 Nhớ chắc: <b>' + st2.mature + '</b></span></div>' +
        '<div class="btn-row" style="justify-content:center;margin-top:16px"><button class="btn primary" id="rv-again">Ôn tiếp</button><button class="btn ghost" id="rv-home">Về trang chủ</button></div></div>'
      ));
      pane.querySelector("#rv-again").addEventListener("click", function () { viewReview(); });
      pane.querySelector("#rv-home").addEventListener("click", function () { location.hash = "#/"; });
    }
    paint();
  }

  /* ================================================================== *
   * COMPREHENSIVE TEST
   * ================================================================== */
  function viewTest() {
    var wrap = el('<div class="fade-in"></div>');
    wrap.appendChild(el('<button class="crumb" data-home>← Trang chủ</button>'));
    wrap.appendChild(el('<div class="unit-hero"><div class="big-emoji">🎯</div><div><h1>Kiểm tra tổng hợp</h1><div class="sub">Đánh giá kiến thức trên cả ' + DATA.length + ' chủ đề</div></div></div>'));
    var cfg = el(
      '<div class="test-config">' +
        '<p>Chọn số câu hỏi (rút ngẫu nhiên từ toàn bộ từ vựng):</p>' +
        '<div class="test-lens">' +
          '<button class="btn ghost" data-n="20">20 câu</button>' +
          '<button class="btn primary" data-n="30">30 câu</button>' +
          '<button class="btn ghost" data-n="40">40 câu</button>' +
        '</div>' +
        (testBest ? '<p class="muted" style="margin-top:14px">Kỷ lục hiện tại: <b>' + testBest + '%</b></p>' : '') +
      '</div>'
    );
    wrap.appendChild(cfg);
    wrap.querySelector("[data-home]").addEventListener("click", function () { location.hash = "#/"; });
    cfg.addEventListener("click", function (e) { var b = e.target.closest("[data-n]"); if (b) startTest(parseInt(b.getAttribute("data-n"), 10)); });
    render(wrap);
  }

  function startTest(n) {
    var refs = shuffle(allRefs());
    n = Math.min(n, refs.length);
    var picked = refs.slice(0, n);
    var questions = picked.map(function (ref) {
      var w = ref.w, dir = Math.random() < 0.5 ? "en2vi" : "vi2en";
      var correct = dir === "en2vi" ? w.vi : w.word;
      var sameUnit = ref.u.words.filter(function (x) { return x.word !== w.word; });
      return {
        unitId: ref.u.id, dir: dir, prompt: dir === "en2vi" ? w.word : w.vi, sub: dir === "en2vi" ? w.ipa : "",
        correct: correct, speakText: w.word, options: shuffle(distractors(correct, dir, sameUnit, 3).concat([correct]))
      };
    });

    var idx = 0, score = 0, answered = false;
    var wrap = el('<div class="fade-in"></div>');
    wrap.appendChild(el('<button class="crumb" data-home>← Thoát</button>'));
    var pane = el('<div></div>'); wrap.appendChild(pane);
    wrap.querySelector("[data-home]").addEventListener("click", function () { if (confirm("Thoát bài kiểm tra? Kết quả chưa lưu.")) location.hash = "#/"; });
    render(wrap);

    function paint() {
      answered = false; var q = questions[idx]; pane.innerHTML = "";
      var qwrap = el('<div class="quiz-wrap"></div>'); pane.appendChild(qwrap);
      qwrap.appendChild(el('<div class="quiz-head"><span>Câu ' + (idx + 1) + ' / ' + questions.length + ' · Unit ' + q.unitId + '</span><span>Điểm: <b id="t-score">' + score + '</b></span></div>'));
      var card = el('<div class="quiz-q"><div class="prompt-label">' + (q.dir === "en2vi" ? "Nghĩa của từ này là gì?" : "Từ tiếng Anh nào có nghĩa này?") + '</div><div class="prompt">' + esc(q.prompt) + (q.sub ? '<small>' + esc(q.sub) + '</small>' : "") + '</div>' + (q.dir === "en2vi" ? '<div style="margin-top:10px">' + speakerHTML() + '</div>' : "") + '</div>');
      qwrap.appendChild(card);
      var sp = card.querySelector("[data-speak]"); if (sp) sp.addEventListener("click", function () { speak(q.speakText); });
      var opts = el('<div class="opts"></div>');
      q.options.forEach(function (opt) { var b = el('<button class="opt">' + esc(opt) + '</button>'); b.addEventListener("click", function () { choose(b, opt, q, opts); }); opts.appendChild(b); });
      qwrap.appendChild(opts);
      var nb = el('<button class="btn primary block" id="t-next" disabled>' + (idx + 1 < questions.length ? "Câu tiếp theo →" : "Xem kết quả") + '</button>');
      nb.addEventListener("click", function () { if (idx + 1 < questions.length) { idx++; paint(); } else finish(); });
      qwrap.appendChild(nb);
      function choose(btn, opt, q, opts) {
        if (answered) return; answered = true; q._got = (opt === q.correct);
        if (q._got) { score++; btn.classList.add("correct"); btn.innerHTML = esc(opt) + '<span class="tick">✓</span>'; var sc = qwrap.querySelector("#t-score"); if (sc) sc.textContent = score; }
        else { btn.classList.add("wrong"); btn.innerHTML = esc(opt) + '<span class="tick">✗</span>'; opts.querySelectorAll(".opt").forEach(function (o) { if (o.textContent === q.correct) { o.classList.add("correct"); o.innerHTML = esc(q.correct) + '<span class="tick">✓</span>'; } }); }
        opts.querySelectorAll(".opt").forEach(function (o) { o.disabled = true; });
        qwrap.querySelector("#t-next").disabled = false;
      }
    }
    function finish() {
      var p = pct(score, questions.length);
      if (p > testBest) { testBest = p; LS.set("qf_test_best", testBest); }
      // per-unit breakdown
      var byUnit = {};
      questions.forEach(function (q) { var b = byUnit[q.unitId] || (byUnit[q.unitId] = { c: 0, t: 0 }); b.t++; if (q._got) b.c++; });
      var rows = Object.keys(byUnit).map(function (uid) { var u = findUnit(parseInt(uid, 10)); var b = byUnit[uid]; return { u: u, c: b.c, t: b.t, p: pct(b.c, b.t) }; });
      rows.sort(function (a, b) { return a.p - b.p; });
      var msg = p >= 90 ? "Xuất sắc! 🏆" : p >= 70 ? "Khá tốt! 💪" : p >= 50 ? "Ổn, cần ôn thêm 🌱" : "Hãy ôn lại nhé 📚";

      pane.innerHTML = "";
      var res = el(
        '<div class="quiz-result"><div class="score">' + score + '/' + questions.length + '</div>' +
        '<div class="msg">' + msg + ' · ' + p + '%' + (p >= testBest && p > 0 ? ' · Kỷ lục mới!' : ' · Kỷ lục: ' + testBest + '%') + '</div></div>'
      );
      pane.appendChild(res);
      pane.appendChild(el('<div class="section-head"><h2>Kết quả theo chủ đề</h2><span class="muted">yếu nhất trước</span></div>'));
      var table = el('<div class="breakdown"></div>');
      rows.forEach(function (r) {
        var cls = r.p >= 80 ? "good" : r.p >= 50 ? "mid" : "bad";
        var row = el(
          '<button class="bd-row" data-u="' + r.u.id + '">' +
            '<span class="bd-emoji">' + (r.u.emoji || "📘") + '</span>' +
            '<span class="bd-name">Unit ' + r.u.id + ' · ' + esc(r.u.title_en) + '</span>' +
            '<span class="bd-bar"><i class="' + cls + '" style="width:' + r.p + '%"></i></span>' +
            '<span class="bd-score ' + cls + '">' + r.c + '/' + r.t + '</span>' +
          '</button>'
        );
        table.appendChild(row);
      });
      pane.appendChild(table);
      table.addEventListener("click", function (e) { var b = e.target.closest("[data-u]"); if (b) location.hash = "#/u/" + b.getAttribute("data-u") + "/learn"; });

      var actions = el('<div class="btn-row" style="margin-top:18px">' +
        '<button class="btn primary" id="t-retry">Làm lại</button>' +
        (rows.length ? '<button class="btn danger" id="t-weak">📖 Ôn chủ đề yếu nhất</button>' : '') +
        '<button class="btn ghost" id="t-home">Về trang chủ</button></div>');
      pane.appendChild(actions);
      actions.querySelector("#t-retry").addEventListener("click", function () { startTest(questions.length); });
      actions.querySelector("#t-home").addEventListener("click", function () { location.hash = "#/"; });
      if (rows.length) actions.querySelector("#t-weak").addEventListener("click", function () { location.hash = "#/u/" + rows[0].u.id + "/learn"; });
    }
    paint();
  }

  /* ================================================================== *
   * SEARCH
   * ================================================================== */
  function viewSearch() {
    var wrap = el('<div class="fade-in"></div>');
    wrap.appendChild(el('<button class="crumb" data-home>← Trang chủ</button>'));
    wrap.appendChild(el('<h1 style="font-size:20px;margin-bottom:12px">Tìm kiếm từ vựng</h1>'));
    wrap.appendChild(el('<div class="list-tools"><label class="search-input">🔎<input type="search" id="global-search" placeholder="Nhập từ tiếng Anh hoặc nghĩa tiếng Việt…" /></label></div>'));
    var results = el('<div id="search-results"></div>'); wrap.appendChild(results);
    wrap.querySelector("[data-home]").addEventListener("click", function () { location.hash = "#/"; });
    render(wrap);
    var input = wrap.querySelector("#global-search");
    function paint(qraw) {
      var q = (qraw || "").trim().toLowerCase(); results.innerHTML = "";
      if (!q) { results.appendChild(el('<div class="empty"><span class="big">📚</span>Gõ để tìm trong ' + totalWords() + ' từ vựng.</div>')); return; }
      var hits = [];
      allRefs().forEach(function (r) { var w = r.w; if ((w.word + " " + w.vi + " " + (w.example_en || "")).toLowerCase().indexOf(q) !== -1) hits.push(r); });
      if (!hits.length) { results.appendChild(el('<div class="empty"><span class="big">🤔</span>Không tìm thấy “' + esc(q) + '”.</div>')); return; }
      results.appendChild(el('<div class="section-head"><h2>' + hits.length + ' kết quả</h2></div>'));
      hits.slice(0, 60).forEach(function (h) {
        var w = h.w;
        var card = el('<div class="word-card"><div class="result-unit">Unit ' + h.u.id + ' · ' + esc(h.u.title_en) + '</div><div class="word-top" style="margin-top:6px"><div class="word-emoji">' + (w.emoji || "•") + '</div><div class="word-main"><div class="word-headline"><span class="word-en">' + esc(w.word) + '</span><span class="pos">' + esc(w.pos) + '</span><span class="word-ipa">' + esc(w.ipa) + '</span></div><div class="word-vi">' + esc(w.vi) + '</div><div class="word-actions"><button class="pill-btn" data-open>Mở chủ đề →</button>' + speakerHTML() + '</div></div></div></div>');
        card.querySelector("[data-speak]").addEventListener("click", function () { speak(w.word); });
        card.querySelector("[data-open]").addEventListener("click", function () { location.hash = "#/u/" + h.u.id + "/learn"; });
        results.appendChild(card);
      });
      if (hits.length > 60) results.appendChild(el('<div class="empty">…và ' + (hits.length - 60) + ' kết quả nữa. Hãy gõ cụ thể hơn.</div>'));
    }
    input.addEventListener("input", function (e) { paint(e.target.value); });
    paint(""); setTimeout(function () { input.focus(); }, 30);
  }

  /* ================================================================== *
   * SETTINGS (pronunciation)
   * ================================================================== */
  function optionCard(val, on, title, desc) {
    return el('<button class="opt-card' + (on ? " on" : "") + '" data-opt="' + val + '">' +
      '<span class="oc-check">' + (on ? "●" : "○") + '</span>' +
      '<span class="oc-main"><b>' + title + '</b><small>' + desc + '</small></span></button>');
  }
  function viewSettings() {
    var wrap = el('<div class="fade-in"></div>');
    wrap.appendChild(el('<button class="crumb" data-home>← Trang chủ</button>'));
    wrap.appendChild(el('<div class="unit-hero"><div class="big-emoji">⚙️</div><div><h1>Cài đặt</h1><div class="sub">Tùy chỉnh giọng phát âm</div></div></div>'));

    wrap.appendChild(el('<div class="section-head"><h2>Nguồn phát âm</h2></div>'));
    var srcBox = el('<div class="set-group"></div>');
    srcBox.appendChild(optionCard("device", ttsSource === "device", "📴 Giọng thiết bị", "Miễn phí, chạy offline. Chất lượng tùy máy."));
    srcBox.appendChild(optionCard("google", ttsSource === "google", "🌐 Giọng Google Dịch", "Nghe tự nhiên hơn. Cần kết nối mạng."));
    wrap.appendChild(srcBox);

    wrap.appendChild(el('<div class="section-head"><h2>Chất giọng</h2></div>'));
    var accBox = el('<div class="set-group"></div>');
    accBox.appendChild(optionCard("en-GB", ttsLang === "en-GB", "🇬🇧 Anh - Anh", "British English (en-GB)"));
    accBox.appendChild(optionCard("en-US", ttsLang === "en-US", "🇺🇸 Anh - Mỹ", "American English (en-US)"));
    wrap.appendChild(accBox);

    wrap.appendChild(el('<div class="section-head"><h2>Nghe thử</h2></div>'));
    var test = el('<div class="btn-row"><button class="btn primary" id="s-t1">🔊 “beautiful”</button><button class="btn ghost" id="s-t2">🔊 “Nice to meet you”</button></div>');
    wrap.appendChild(test);

    wrap.appendChild(el('<p class="muted" style="margin-top:18px;font-size:12.5px;line-height:1.6">Lưu ý: “Giọng Google Dịch” dùng endpoint phát âm công khai của Google Translate — <b>không phải API chính thức</b>, cần mạng và có thể bị giới hạn. Khi không tải được, ứng dụng tự động chuyển về giọng thiết bị.</p>'));

    render(wrap);
    wrap.querySelector("[data-home]").addEventListener("click", function () { location.hash = "#/"; });
    srcBox.addEventListener("click", function (e) { var b = e.target.closest("[data-opt]"); if (!b) return; ttsSource = b.getAttribute("data-opt"); LS.set("qf_tts", ttsSource); toast(ttsSource === "google" ? "Đã bật giọng Google Dịch" : "Đã dùng giọng thiết bị"); viewSettings(); setTimeout(function () { speak("beautiful"); }, 60); });
    accBox.addEventListener("click", function (e) { var b = e.target.closest("[data-opt]"); if (!b) return; ttsLang = b.getAttribute("data-opt"); LS.set("qf_tts_lang", ttsLang); viewSettings(); setTimeout(function () { speak("beautiful"); }, 60); });
    test.querySelector("#s-t1").addEventListener("click", function () { speak("beautiful"); });
    test.querySelector("#s-t2").addEventListener("click", function () { speak("Nice to meet you"); });
  }

  function renderNotFound() {
    render(el('<div class="empty fade-in"><span class="big">🧭</span>Không tìm thấy trang.<br><button class="btn primary" style="margin-top:14px" onclick="location.hash=\'#/\'">Về trang chủ</button></div>'));
  }

  /* ------------------------------------------------------------------ *
   * Render + Router
   * ------------------------------------------------------------------ */
  function render(node) { main.innerHTML = ""; main.appendChild(node); main.scrollTop = 0; window.scrollTo(0, 0); }

  function router() {
    var h = location.hash.replace(/^#\/?/, ""); var parts = h.split("/").filter(Boolean);
    if (parts.length === 0) return viewHome();
    if (parts[0] === "search") return viewSearch();
    if (parts[0] === "settings") return viewSettings();
    if (parts[0] === "review") return viewReview();
    if (parts[0] === "test") return viewTest();
    if (parts[0] === "u" && parts[1]) { var id = parseInt(parts[1], 10); if (isNaN(id)) return renderNotFound(); return viewUnit(id, parts[2] || "learn"); }
    return viewHome();
  }
  window.addEventListener("hashchange", router);
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") { e.preventDefault(); location.hash = "#/search"; }
  });

  /* ------------------------------------------------------------------ *
   * Boot
   * ------------------------------------------------------------------ */
  if (!DATA.length) {
    main.innerHTML = '<div class="empty"><span class="big">📭</span>Chưa có dữ liệu từ vựng.<br><small style="color:var(--text-faint)">Chạy <code>node build.js</code> để tạo <code>js/data.js</code>.</small></div>';
  } else {
    router();
  }
})();
