/* ==========================================================================
   Quick & Fun — vocabulary study app (vanilla JS, no dependencies)
   Data comes from window.VOCAB_DATA (js/data.js).
   ========================================================================== */
(function () {
  "use strict";

  var DATA = (window.VOCAB_DATA && window.VOCAB_DATA.units) ? window.VOCAB_DATA.units : [];
  DATA.sort(function (a, b) { return a.id - b.id; });

  var main = document.getElementById("main");

  /* ------------------------------------------------------------------ *
   * Persistence helpers (localStorage, fail-safe)
   * ------------------------------------------------------------------ */
  var LS = {
    get: function (k, fb) {
      try { var v = localStorage.getItem(k); return v == null ? fb : JSON.parse(v); }
      catch (e) { return fb; }
    },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  var learned = LS.get("qf_learned", {});   // { "unitId::word": true }
  var quizBest = LS.get("qf_quiz", {});      // { unitId: bestPercent }

  function wordKey(unitId, word) { return unitId + "::" + String(word).toLowerCase(); }
  function isLearned(unitId, word) { return !!learned[wordKey(unitId, word)]; }
  function setLearned(unitId, word, val) {
    var k = wordKey(unitId, word);
    if (val) learned[k] = true; else delete learned[k];
    LS.set("qf_learned", learned);
  }
  function unitLearnedCount(u) {
    var n = 0;
    for (var i = 0; i < u.words.length; i++) if (isLearned(u.id, u.words[i].word)) n++;
    return n;
  }
  function totalWords() { return DATA.reduce(function (s, u) { return s + u.words.length; }, 0); }
  function totalLearned() { return DATA.reduce(function (s, u) { return s + unitLearnedCount(u); }, 0); }

  /* ------------------------------------------------------------------ *
   * Small utilities
   * ------------------------------------------------------------------ */
  function el(html) { var t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function findUnit(id) { for (var i = 0; i < DATA.length; i++) if (DATA[i].id === id) return DATA[i]; return null; }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }

  var toastTimer;
  function toast(msg) {
    var t = document.getElementById("qf-toast");
    if (!t) { t = el('<div class="toast" id="qf-toast"></div>'); document.body.appendChild(t); }
    t.textContent = msg;
    requestAnimationFrame(function () { t.classList.add("show"); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1600);
  }

  /* ------------------------------------------------------------------ *
   * Pronunciation (Web Speech API — offline, no external assets)
   * ------------------------------------------------------------------ */
  var speechOK = ("speechSynthesis" in window) && ("SpeechSynthesisUtterance" in window);
  var voices = [];
  function loadVoices() { if (speechOK) voices = window.speechSynthesis.getVoices() || []; }
  if (speechOK) {
    loadVoices();
    if (typeof window.speechSynthesis.onvoiceschanged !== "undefined") {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }
  function pickVoice() {
    if (!voices.length) loadVoices();
    var pref = ["en-GB", "en_GB", "en-US", "en_US", "en"];
    for (var p = 0; p < pref.length; p++) {
      for (var i = 0; i < voices.length; i++) {
        if (voices[i].lang && voices[i].lang.toLowerCase().indexOf(pref[p].toLowerCase()) === 0) return voices[i];
      }
    }
    return null;
  }
  function speak(text) {
    if (!speechOK) { toast("Trình duyệt không hỗ trợ phát âm"); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      var v = pickVoice();
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-GB"; }
      u.rate = 0.92;
      window.speechSynthesis.speak(u);
    } catch (e) { toast("Không phát âm được"); }
  }
  function speakerHTML(cls) {
    return '<button class="pill-btn speak-btn ' + (cls || "") + '" data-speak title="Nghe phát âm" aria-label="Nghe phát âm">🔊</button>';
  }

  /* ------------------------------------------------------------------ *
   * Theme
   * ------------------------------------------------------------------ */
  function applyTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    var btn = document.getElementById("btn-theme");
    if (btn) btn.textContent = mode === "dark" ? "☀️" : "🌙";
  }
  (function initTheme() {
    var saved = LS.get("qf_theme", "auto");
    // Represent as light/dark for the toggle; "auto" resolves via media query.
    if (saved === "auto") {
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme("auto");
      var b = document.getElementById("btn-theme");
      if (b) b.textContent = prefersDark ? "☀️" : "🌙";
    } else {
      applyTheme(saved);
    }
  })();
  document.getElementById("btn-theme").addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var next;
    if (cur === "dark") next = "light";
    else if (cur === "light") next = "dark";
    else { // auto -> pick opposite of current system pref
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      next = prefersDark ? "light" : "dark";
    }
    applyTheme(next);
    LS.set("qf_theme", next);
  });

  document.getElementById("btn-search").addEventListener("click", function () { location.hash = "#/search"; });

  /* ------------------------------------------------------------------ *
   * Progress ring (SVG)
   * ------------------------------------------------------------------ */
  function ringHTML(percent) {
    var r = 26, c = 2 * Math.PI * r, off = c * (1 - percent / 100);
    return '<div class="ring" style="--p:' + percent + '">' +
      '<svg width="62" height="62" viewBox="0 0 62 62">' +
      '<circle class="bg" cx="31" cy="31" r="' + r + '" fill="none" stroke-width="7"/>' +
      '<circle class="fg" cx="31" cy="31" r="' + r + '" fill="none" stroke-width="7" ' +
      'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/>' +
      '</svg><b>' + percent + '%</b></div>';
  }

  /* ================================================================== *
   * VIEWS
   * ================================================================== */

  function viewHome() {
    var tw = totalWords(), tl = totalLearned(), p = pct(tl, tw);
    var wrap = el('<div class="fade-in"></div>');

    wrap.appendChild(el(
      '<section class="hero">' +
        '<div class="hero-top">' +
          '<div>' +
            '<h1>Xin chào 👋</h1>' +
            '<p>Học nhanh 1000+ từ vựng tiếng Anh theo 20 chủ đề. Chọn một chủ đề để bắt đầu.</p>' +
          '</div>' +
          ringHTML(p) +
        '</div>' +
        '<div class="hero-stats">' +
          '<div class="hero-stat"><b>' + tl + '</b><span>từ đã thuộc</span></div>' +
          '<div class="hero-stat"><b>' + tw + '</b><span>tổng số từ</span></div>' +
          '<div class="hero-stat"><b>' + DATA.length + '</b><span>chủ đề</span></div>' +
        '</div>' +
      '</section>'
    ));

    wrap.appendChild(el(
      '<div class="section-head"><h2>Chủ đề</h2><span class="muted">' + DATA.length + ' units</span></div>'
    ));

    var grid = el('<div class="unit-grid"></div>');
    DATA.forEach(function (u) {
      var lc = unitLearnedCount(u), up = pct(lc, u.words.length);
      var card = el(
        '<button class="unit-card" data-goto="' + u.id + '">' +
          '<span class="u-no">Unit ' + u.id + '</span>' +
          '<span class="u-emoji">' + (u.emoji || "📘") + '</span>' +
          '<span class="u-title">' + esc(u.title_en) + '</span>' +
          '<span class="u-sub">' + esc(u.title_vi) + '</span>' +
          '<span class="u-meta">' + lc + '/' + u.words.length + ' từ · ' + up + '%</span>' +
          '<span class="bar"><i style="width:' + up + '%"></i></span>' +
        '</button>'
      );
      grid.appendChild(card);
    });
    wrap.appendChild(grid);

    grid.addEventListener("click", function (e) {
      var b = e.target.closest("[data-goto]");
      if (b) location.hash = "#/u/" + b.getAttribute("data-goto");
    });

    render(wrap);
  }

  /* ---------------- Unit shell with tabs ---------------- */
  function viewUnit(id, tab) {
    var u = findUnit(id);
    if (!u) { renderNotFound(); return; }
    tab = tab || "learn";

    var wrap = el('<div class="fade-in"></div>');
    wrap.appendChild(el('<button class="crumb" data-home>← Tất cả chủ đề</button>'));
    wrap.appendChild(el(
      '<div class="unit-hero">' +
        '<div class="big-emoji">' + (u.emoji || "📘") + '</div>' +
        '<div><h1>Unit ' + u.id + ': ' + esc(u.title_en) + '</h1>' +
        '<div class="sub">' + esc(u.title_vi) + ' · ' + u.words.length + ' từ</div></div>' +
      '</div>'
    ));

    var tabs = el(
      '<div class="tabs" role="tablist">' +
        '<button class="tab" role="tab" data-tab="learn">📖 Học</button>' +
        '<button class="tab" role="tab" data-tab="cards">🃏 Flashcard</button>' +
        '<button class="tab" role="tab" data-tab="quiz">✍️ Kiểm tra</button>' +
      '</div>'
    );
    wrap.appendChild(tabs);

    var body = el('<div id="unit-body"></div>');
    wrap.appendChild(body);

    tabs.querySelectorAll(".tab").forEach(function (t) {
      var active = t.getAttribute("data-tab") === tab;
      t.setAttribute("aria-selected", active ? "true" : "false");
      t.addEventListener("click", function () { location.hash = "#/u/" + u.id + "/" + t.getAttribute("data-tab"); });
    });
    wrap.querySelector("[data-home]").addEventListener("click", function () { location.hash = "#/"; });

    render(wrap);

    if (tab === "cards") renderFlashcards(u, body);
    else if (tab === "quiz") renderQuiz(u, body);
    else renderLearn(u, body);
  }

  /* ---------------- Learn (vocab list) ---------------- */
  function renderLearn(u, body) {
    var lc = unitLearnedCount(u);
    var head = el(
      '<div>' +
        '<div class="list-tools">' +
          '<label class="search-input">🔎<input type="search" placeholder="Lọc từ trong chủ đề này…" id="unit-filter" /></label>' +
          '<span class="count-chip" id="unit-progress">' + lc + '/' + u.words.length + '</span>' +
        '</div>' +
        '<div id="word-list"></div>' +
      '</div>'
    );
    body.innerHTML = "";
    body.appendChild(head);

    var listEl = head.querySelector("#word-list");

    function paint(filter) {
      listEl.innerHTML = "";
      var f = (filter || "").trim().toLowerCase();
      var shown = 0;
      u.words.forEach(function (w, idx) {
        if (f) {
          var hay = (w.word + " " + w.vi + " " + (w.example_en || "")).toLowerCase();
          if (hay.indexOf(f) === -1) return;
        }
        shown++;
        var done = isLearned(u.id, w.word);
        var card = el(
          '<div class="word-card' + (done ? " done" : "") + '" data-idx="' + idx + '">' +
            '<div class="word-top">' +
              '<div class="word-emoji">' + (w.emoji || "•") + '</div>' +
              '<div class="word-main">' +
                '<div class="word-headline">' +
                  '<span class="word-en">' + esc(w.word) + '</span>' +
                  '<span class="pos">' + esc(w.pos) + '</span>' +
                  '<span class="word-ipa">' + esc(w.ipa) + '</span>' +
                '</div>' +
                '<div class="word-vi">' + esc(w.vi) + '</div>' +
                (w.example_en ? ('<div class="word-ex"><div class="en">' + esc(w.example_en) + '</div>' +
                  '<div class="vi">' + esc(w.example_vi || "") + '</div></div>') : "") +
                '<div class="word-actions">' +
                  '<button class="pill-btn toggle' + (done ? " on" : "") + '" data-toggle>' +
                    (done ? "✓ Đã thuộc" : "Đánh dấu thuộc") + '</button>' +
                  speakerHTML() +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
        card.querySelector("[data-speak]").addEventListener("click", function (e) { e.stopPropagation(); speak(w.word); });
        card.querySelector("[data-toggle]").addEventListener("click", function () {
          var nowDone = !isLearned(u.id, w.word);
          setLearned(u.id, w.word, nowDone);
          card.classList.toggle("done", nowDone);
          var btn = card.querySelector("[data-toggle]");
          btn.classList.toggle("on", nowDone);
          btn.textContent = nowDone ? "✓ Đã thuộc" : "Đánh dấu thuộc";
          head.querySelector("#unit-progress").textContent = unitLearnedCount(u) + "/" + u.words.length;
        });
        listEl.appendChild(card);
      });
      if (shown === 0) listEl.appendChild(el('<div class="empty"><span class="big">🔍</span>Không tìm thấy từ nào.</div>'));
    }

    paint("");
    head.querySelector("#unit-filter").addEventListener("input", function (e) { paint(e.target.value); });
  }

  /* ---------------- Flashcards ---------------- */
  function renderFlashcards(u, body) {
    var order = shuffle(u.words.map(function (_, i) { return i; }));
    var pos = 0;

    body.innerHTML = "";
    var wrap = el(
      '<div class="fc-wrap">' +
        '<div class="fc-progress"><span id="fc-count"></span><button class="crumb" id="fc-shuffle">🔀 Xáo lại</button></div>' +
        '<div class="flashcard" id="flashcard"><div class="fc-inner">' +
          '<div class="fc-face fc-front"></div>' +
          '<div class="fc-face fc-back"></div>' +
        '</div></div>' +
        '<div class="fc-controls">' +
          '<button class="btn danger" id="fc-again">Chưa thuộc</button>' +
          '<button class="btn ghost" id="fc-speak">🔊 Nghe</button>' +
          '<button class="btn success" id="fc-known">Đã thuộc ✓</button>' +
        '</div>' +
        '<button class="btn ghost block" id="fc-next">Từ tiếp theo →</button>' +
      '</div>'
    );
    body.appendChild(wrap);

    var cardEl = wrap.querySelector("#flashcard");
    var front = wrap.querySelector(".fc-front");
    var back = wrap.querySelector(".fc-back");

    function paint() {
      if (!order.length) { body.innerHTML = '<div class="empty">Chủ đề này chưa có từ.</div>'; return; }
      var w = u.words[order[pos]];
      cardEl.classList.remove("flipped");
      front.innerHTML =
        '<div class="big">' + (w.emoji || "📘") + '</div>' +
        '<div class="en">' + esc(w.word) + '</div>' +
        '<div class="ipa">' + esc(w.ipa) + '</div>' +
        '<div class="hint">Chạm để lật thẻ</div>';
      back.innerHTML =
        '<div class="vi">' + esc(w.vi) + '</div>' +
        (w.example_en ? '<div class="ex">“' + esc(w.example_en) + '”<br><i>' + esc(w.example_vi || "") + '</i></div>' : "") +
        '<div class="hint">Chạm để lật lại</div>';
      wrap.querySelector("#fc-count").textContent = "Thẻ " + (pos + 1) + " / " + order.length;
    }
    function next() { pos = (pos + 1) % order.length; paint(); }

    cardEl.addEventListener("click", function () { cardEl.classList.toggle("flipped"); });
    wrap.querySelector("#fc-next").addEventListener("click", next);
    wrap.querySelector("#fc-speak").addEventListener("click", function () { speak(u.words[order[pos]].word); });
    wrap.querySelector("#fc-shuffle").addEventListener("click", function () { order = shuffle(order); pos = 0; paint(); toast("Đã xáo trộn thẻ"); });
    wrap.querySelector("#fc-known").addEventListener("click", function () {
      setLearned(u.id, u.words[order[pos]].word, true); toast("✓ Đã thuộc"); next();
    });
    wrap.querySelector("#fc-again").addEventListener("click", function () {
      setLearned(u.id, u.words[order[pos]].word, false); next();
    });

    paint();
  }

  /* ---------------- Quiz (auto-generated multiple choice) ---------------- */
  function renderQuiz(u, body) {
    if (u.words.length < 4) {
      body.innerHTML = '<div class="empty"><span class="big">🙃</span>Cần ít nhất 4 từ để tạo bài kiểm tra.</div>';
      return;
    }
    var QN = Math.min(10, u.words.length);
    var pool = shuffle(u.words).slice(0, QN);
    // distractor pool: other words in the unit (fallback to global)
    var globalWords = DATA.reduce(function (a, uu) { return a.concat(uu.words); }, []);

    var questions = pool.map(function (w) {
      var dir = Math.random() < 0.5 ? "en2vi" : "vi2en";
      var correct = dir === "en2vi" ? w.vi : w.word;
      var promptText = dir === "en2vi" ? w.word : w.vi;
      var promptSub = dir === "en2vi" ? w.ipa : "";
      // build 3 distractors
      var others = shuffle(u.words.filter(function (x) { return x.word !== w.word; }));
      var distract = [];
      for (var i = 0; i < others.length && distract.length < 3; i++) {
        var cand = dir === "en2vi" ? others[i].vi : others[i].word;
        if (cand !== correct && distract.indexOf(cand) === -1) distract.push(cand);
      }
      // fallback to global if the unit is tiny
      if (distract.length < 3) {
        var g = shuffle(globalWords);
        for (var j = 0; j < g.length && distract.length < 3; j++) {
          var c2 = dir === "en2vi" ? g[j].vi : g[j].word;
          if (c2 !== correct && distract.indexOf(c2) === -1) distract.push(c2);
        }
      }
      return {
        dir: dir, prompt: promptText, sub: promptSub, correct: correct,
        speakText: w.word,
        options: shuffle(distract.concat([correct]))
      };
    });

    var idx = 0, score = 0, answered = false;

    body.innerHTML = "";
    var wrap = el('<div class="quiz-wrap"></div>');
    body.appendChild(wrap);

    function paint() {
      answered = false;
      var q = questions[idx];
      wrap.innerHTML = "";
      wrap.appendChild(el(
        '<div class="quiz-head"><span>Câu ' + (idx + 1) + ' / ' + questions.length + '</span>' +
        '<span>Điểm: <b id="q-score">' + score + '</b></span></div>'
      ));
      var card = el(
        '<div class="quiz-q">' +
          '<div class="prompt-label">' + (q.dir === "en2vi" ? "Nghĩa của từ này là gì?" : "Từ tiếng Anh nào có nghĩa này?") + '</div>' +
          '<div class="prompt">' + esc(q.prompt) +
            (q.sub ? '<small>' + esc(q.sub) + '</small>' : "") +
          '</div>' +
          (q.dir === "en2vi" ? '<div style="margin-top:10px">' + speakerHTML() + '</div>' : "") +
        '</div>'
      );
      wrap.appendChild(card);
      var sp = card.querySelector("[data-speak]");
      if (sp) sp.addEventListener("click", function () { speak(q.speakText); });

      var opts = el('<div class="opts"></div>');
      q.options.forEach(function (opt) {
        var b = el('<button class="opt">' + esc(opt) + '</button>');
        b.addEventListener("click", function () { choose(b, opt, q, opts); });
        opts.appendChild(b);
      });
      wrap.appendChild(opts);

      var nextBtn = el('<button class="btn primary block" id="q-next" disabled>' +
        (idx + 1 < questions.length ? "Câu tiếp theo →" : "Xem kết quả") + '</button>');
      nextBtn.addEventListener("click", function () {
        if (idx + 1 < questions.length) { idx++; paint(); }
        else finish();
      });
      wrap.appendChild(nextBtn);
    }

    function choose(btn, opt, q, opts) {
      if (answered) return;
      answered = true;
      var correct = opt === q.correct;
      if (correct) {
        score++; btn.classList.add("correct"); btn.innerHTML = esc(opt) + '<span class="tick">✓</span>';
        var sc = wrap.querySelector("#q-score"); if (sc) sc.textContent = score;
      }
      else {
        btn.classList.add("wrong"); btn.innerHTML = esc(opt) + '<span class="tick">✗</span>';
        // reveal the right one
        opts.querySelectorAll(".opt").forEach(function (o) {
          if (o.textContent === q.correct) { o.classList.add("correct"); o.innerHTML = esc(q.correct) + '<span class="tick">✓</span>'; }
        });
      }
      opts.querySelectorAll(".opt").forEach(function (o) { o.disabled = true; });
      if (q.dir !== "en2vi") speak(q.speakText); // hear the English answer
      wrap.querySelector("#q-next").disabled = false;
    }

    function finish() {
      var p = pct(score, questions.length);
      var best = quizBest[u.id] || 0;
      if (p > best) { quizBest[u.id] = p; LS.set("qf_quiz", quizBest); }
      var msg = p === 100 ? "Xuất sắc! Trọn vẹn 🎉" : p >= 70 ? "Tốt lắm, tiếp tục nhé! 💪" : "Cố gắng ôn thêm nhé 🌱";
      wrap.innerHTML = "";
      var res = el(
        '<div class="quiz-result">' +
          '<div class="score">' + score + '/' + questions.length + '</div>' +
          '<div class="msg">' + msg + ' · ' + p + '%' + (p >= best && p > 0 ? ' · Kỷ lục mới!' : (best ? ' · Kỷ lục: ' + best + '%' : '')) + '</div>' +
          '<div class="btn-row" style="justify-content:center">' +
            '<button class="btn primary" id="q-retry">Làm lại</button>' +
            '<button class="btn ghost" id="q-learn">📖 Ôn từ vựng</button>' +
          '</div>' +
        '</div>'
      );
      wrap.appendChild(res);
      res.querySelector("#q-retry").addEventListener("click", function () { renderQuiz(u, body); });
      res.querySelector("#q-learn").addEventListener("click", function () { location.hash = "#/u/" + u.id + "/learn"; });
    }

    paint();
  }

  /* ---------------- Global search ---------------- */
  function viewSearch() {
    var wrap = el('<div class="fade-in"></div>');
    wrap.appendChild(el('<button class="crumb" data-home>← Trang chủ</button>'));
    wrap.appendChild(el('<h1 style="font-size:20px;margin-bottom:12px">Tìm kiếm từ vựng</h1>'));
    wrap.appendChild(el(
      '<div class="list-tools"><label class="search-input">🔎' +
      '<input type="search" id="global-search" placeholder="Nhập từ tiếng Anh hoặc nghĩa tiếng Việt…" autofocus />' +
      '</label></div>'
    ));
    var results = el('<div id="search-results"></div>');
    wrap.appendChild(results);
    wrap.querySelector("[data-home]").addEventListener("click", function () { location.hash = "#/"; });
    render(wrap);

    var input = wrap.querySelector("#global-search");

    function paint(q) {
      q = (q || "").trim().toLowerCase();
      results.innerHTML = "";
      if (!q) { results.appendChild(el('<div class="empty"><span class="big">📚</span>Gõ để tìm trong ' + totalWords() + ' từ vựng.</div>')); return; }
      var hits = [];
      DATA.forEach(function (u) {
        u.words.forEach(function (w) {
          var hay = (w.word + " " + w.vi + " " + (w.example_en || "")).toLowerCase();
          if (hay.indexOf(q) !== -1) hits.push({ u: u, w: w });
        });
      });
      if (!hits.length) { results.appendChild(el('<div class="empty"><span class="big">🤔</span>Không tìm thấy “' + esc(q) + '”.</div>')); return; }
      results.appendChild(el('<div class="section-head"><h2>' + hits.length + ' kết quả</h2></div>'));
      hits.slice(0, 60).forEach(function (h) {
        var w = h.w;
        var card = el(
          '<div class="word-card">' +
            '<div class="result-unit">Unit ' + h.u.id + ' · ' + esc(h.u.title_en) + '</div>' +
            '<div class="word-top" style="margin-top:6px">' +
              '<div class="word-emoji">' + (w.emoji || "•") + '</div>' +
              '<div class="word-main">' +
                '<div class="word-headline"><span class="word-en">' + esc(w.word) + '</span>' +
                  '<span class="pos">' + esc(w.pos) + '</span><span class="word-ipa">' + esc(w.ipa) + '</span></div>' +
                '<div class="word-vi">' + esc(w.vi) + '</div>' +
                '<div class="word-actions"><button class="pill-btn" data-open>Mở chủ đề →</button>' + speakerHTML() + '</div>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
        card.querySelector("[data-speak]").addEventListener("click", function () { speak(w.word); });
        card.querySelector("[data-open]").addEventListener("click", function () { location.hash = "#/u/" + h.u.id + "/learn"; });
        results.appendChild(card);
      });
      if (hits.length > 60) results.appendChild(el('<div class="empty">…và ' + (hits.length - 60) + ' kết quả nữa. Hãy gõ cụ thể hơn.</div>'));
    }

    input.addEventListener("input", function (e) { paint(e.target.value); });
    paint("");
    setTimeout(function () { input.focus(); }, 30);
  }

  function renderNotFound() {
    render(el('<div class="empty fade-in"><span class="big">🧭</span>Không tìm thấy trang.<br><button class="btn primary" style="margin-top:14px" onclick="location.hash=\'#/\'">Về trang chủ</button></div>'));
  }

  /* ------------------------------------------------------------------ *
   * Render + Router
   * ------------------------------------------------------------------ */
  function render(node) {
    main.innerHTML = "";
    main.appendChild(node);
    main.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function router() {
    var h = location.hash.replace(/^#\/?/, "");   // e.g. "u/3/quiz"
    var parts = h.split("/").filter(Boolean);
    if (parts.length === 0) return viewHome();
    if (parts[0] === "search") return viewSearch();
    if (parts[0] === "u" && parts[1]) {
      var id = parseInt(parts[1], 10);
      if (isNaN(id)) return renderNotFound();
      return viewUnit(id, parts[2] || "learn");
    }
    return viewHome();
  }

  window.addEventListener("hashchange", router);

  // keyboard: "/" focuses search
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement && document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault(); location.hash = "#/search";
    }
  });

  /* ------------------------------------------------------------------ *
   * Boot
   * ------------------------------------------------------------------ */
  if (!DATA.length) {
    main.innerHTML = '<div class="empty"><span class="big">📭</span>Chưa có dữ liệu từ vựng.<br>' +
      '<small style="color:var(--text-faint)">Tệp <code>js/data.js</code> chưa được tạo.</small></div>';
  } else {
    router();
  }
})();
