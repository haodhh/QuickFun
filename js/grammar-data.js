/* Grammar lessons for Quick & Fun — hand-authored, Vietnamese explanations.
   Exposed as a global so the site works on GitHub Pages AND opened directly.
   Shape (per lesson):
     { id, slug, title_en, title_vi, emoji, level, intro,
       usage:   [ "…", … ],
       formulas:[ { label, form, example_en, example_vi }, … ],
       notes:   [ "…", … ],
       quiz:    [ { q, options:[…], answer, explain }, … ] }
*/
window.GRAMMAR_DATA = {
  lessons: [
    {
      id: 1,
      slug: "present-simple",
      title_en: "Present Simple",
      title_vi: "Thì hiện tại đơn",
      emoji: "⏰",
      level: "A1",
      intro: "Thì hiện tại đơn diễn tả thói quen, sự thật hiển nhiên và lịch trình cố định.",
      usage: [
        "Thói quen, hành động lặp đi lặp lại: I go to school every day.",
        "Sự thật hiển nhiên, chân lý: The sun rises in the east.",
        "Lịch trình, thời gian biểu cố định: The train leaves at 7 a.m."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + V(s/es)", example_en: "She works in a bank.", example_vi: "Cô ấy làm việc ở ngân hàng." },
        { label: "Phủ định", form: "S + do/does + not + V", example_en: "He doesn't like coffee.", example_vi: "Anh ấy không thích cà phê." },
        { label: "Nghi vấn", form: "Do/Does + S + V?", example_en: "Do you play tennis?", example_vi: "Bạn có chơi quần vợt không?" }
      ],
      notes: [
        "Với chủ ngữ ngôi thứ 3 số ít (he/she/it), động từ thêm -s/-es.",
        "Động từ tận cùng -o, -s, -ss, -sh, -ch, -x thêm -es: go → goes, watch → watches.",
        "Động từ tận cùng phụ âm + y → đổi thành -ies: study → studies (nhưng play → plays vì nguyên âm + y)."
      ],
      quiz: [
        { q: "She ___ English every evening.", options: ["study", "studies", "studys", "studyes"], answer: "studies", explain: "Ngôi thứ 3 số ít + phụ âm + y → đổi thành -ies: study → studies." },
        { q: "They ___ in Ha Noi.", options: ["live", "lives", "living", "to live"], answer: "live", explain: "Chủ ngữ 'they' (số nhiều) dùng động từ nguyên thể không thêm -s." },
        { q: "___ he like pizza?", options: ["Do", "Does", "Is", "Are"], answer: "Does", explain: "Câu hỏi với 'he' (số ít) dùng trợ động từ 'Does'." },
        { q: "My father ___ coffee in the morning.", options: ["don't drink", "doesn't drink", "doesn't drinks", "not drink"], answer: "doesn't drink", explain: "'My father' dùng 'doesn't', và sau đó động từ về nguyên thể: drink." },
        { q: "The sun ___ in the east.", options: ["rise", "rises", "rising", "rose"], answer: "rises", explain: "Sự thật hiển nhiên; 'the sun' là số ít nên thêm -s: rises." },
        { q: "We ___ TV on Sundays.", options: ["watches", "watch", "watching", "watchs"], answer: "watch", explain: "'We' (số nhiều) dùng động từ nguyên thể: watch." }
      ]
    },
    {
      id: 2,
      slug: "present-continuous",
      title_en: "Present Continuous",
      title_vi: "Thì hiện tại tiếp diễn",
      emoji: "🏃",
      level: "A1",
      intro: "Thì hiện tại tiếp diễn diễn tả hành động đang xảy ra ngay lúc nói hoặc quanh thời điểm hiện tại.",
      usage: [
        "Hành động đang diễn ra ngay bây giờ: She is reading a book now.",
        "Hành động tạm thời quanh hiện tại: I am studying English this year.",
        "Kế hoạch chắc chắn trong tương lai gần: We are meeting Tom tonight."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + am/is/are + V-ing", example_en: "They are playing football.", example_vi: "Họ đang chơi bóng đá." },
        { label: "Phủ định", form: "S + am/is/are + not + V-ing", example_en: "She isn't sleeping.", example_vi: "Cô ấy không đang ngủ." },
        { label: "Nghi vấn", form: "Am/Is/Are + S + V-ing?", example_en: "Are you listening?", example_vi: "Bạn có đang nghe không?" }
      ],
      notes: [
        "Động từ tận cùng -e thì bỏ e rồi thêm -ing: write → writing, make → making.",
        "Động từ 1 âm tiết tận cùng nguyên âm + phụ âm thì gấp đôi phụ âm: run → running, sit → sitting.",
        "Động từ chỉ trạng thái (like, love, know, want, need) thường KHÔNG chia tiếp diễn."
      ],
      quiz: [
        { q: "Listen! The baby ___.", options: ["cry", "cries", "is crying", "crying"], answer: "is crying", explain: "Dấu hiệu 'Listen!' → hành động đang xảy ra; 'the baby' số ít dùng is + V-ing." },
        { q: "Look! They ___ football.", options: ["play", "plays", "are playing", "is playing"], answer: "are playing", explain: "'They' dùng 'are' + V-ing." },
        { q: "I ___ a letter now.", options: ["write", "am writing", "writing", "writes"], answer: "am writing", explain: "Chủ ngữ 'I' đi với 'am' + V-ing." },
        { q: "She ___ TV at the moment.", options: ["isn't watch", "isn't watching", "doesn't watch", "not watching"], answer: "isn't watching", explain: "'at the moment' → tiếp diễn; phủ định: isn't + V-ing." },
        { q: "___ you doing your homework?", options: ["Is", "Do", "Are", "Does"], answer: "Are", explain: "Câu hỏi tiếp diễn với 'you' dùng 'Are' + V-ing." },
        { q: "He ___ on the chair.", options: ["is sitting", "is siting", "sitting", "sits"], answer: "is sitting", explain: "sit là 1 âm tiết nguyên âm + phụ âm → gấp đôi t: sitting." }
      ]
    },
    {
      id: 3,
      slug: "past-simple",
      title_en: "Past Simple",
      title_vi: "Thì quá khứ đơn",
      emoji: "⏪",
      level: "A1-A2",
      intro: "Thì quá khứ đơn diễn tả hành động đã xảy ra và kết thúc tại một thời điểm xác định trong quá khứ.",
      usage: [
        "Hành động đã xảy ra và kết thúc trong quá khứ: I visited my grandmother last week.",
        "Một chuỗi hành động trong quá khứ: She woke up, had breakfast and went to work."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + V-ed / V2", example_en: "He played tennis yesterday.", example_vi: "Anh ấy đã chơi quần vợt hôm qua." },
        { label: "Phủ định", form: "S + did not (didn't) + V", example_en: "They didn't come.", example_vi: "Họ đã không đến." },
        { label: "Nghi vấn", form: "Did + S + V?", example_en: "Did you see her?", example_vi: "Bạn có gặp cô ấy không?" },
        { label: "Với động từ 'to be'", form: "S + was/were (not)", example_en: "I was tired. They were happy.", example_vi: "Tôi đã mệt. Họ đã vui." }
      ],
      notes: [
        "Động từ có quy tắc thêm -ed: work → worked; tận cùng -e thêm -d: like → liked; phụ âm + y → -ied: study → studied.",
        "Nhiều động từ bất quy tắc phải học thuộc: go → went, see → saw, have → had, buy → bought.",
        "Trong câu có did/didn't, động từ chính về nguyên thể: didn't go (KHÔNG phải didn't went)."
      ],
      quiz: [
        { q: "I ___ to the cinema last night.", options: ["go", "went", "gone", "goes"], answer: "went", explain: "'last night' → quá khứ; go là bất quy tắc: went." },
        { q: "She ___ her homework yesterday.", options: ["do", "did", "does", "done"], answer: "did", explain: "Dạng quá khứ của 'do' là 'did'." },
        { q: "They ___ at home last Sunday.", options: ["was", "were", "are", "is"], answer: "were", explain: "'They' đi với dạng quá khứ 'were'." },
        { q: "He ___ come to the party.", options: ["didn't", "doesn't", "wasn't", "isn't"], answer: "didn't", explain: "Phủ định quá khứ của động từ thường dùng 'didn't' + V." },
        { q: "___ you buy the tickets?", options: ["Did", "Do", "Was", "Were"], answer: "Did", explain: "Câu hỏi quá khứ của động từ thường dùng 'Did' + V nguyên thể." },
        { q: "We ___ a great time in Da Nang.", options: ["have", "had", "has", "having"], answer: "had", explain: "Quá khứ của 'have' là 'had'." }
      ]
    },
    {
      id: 4,
      slug: "present-perfect",
      title_en: "Present Perfect",
      title_vi: "Thì hiện tại hoàn thành",
      emoji: "✅",
      level: "A2-B1",
      intro: "Thì hiện tại hoàn thành nối quá khứ với hiện tại: trải nghiệm, kết quả, hoặc hành động kéo dài đến bây giờ.",
      usage: [
        "Trải nghiệm tính đến hiện tại: I have visited Japan twice.",
        "Hành động vừa xảy ra, còn để lại kết quả: She has just finished her work.",
        "Hành động bắt đầu trong quá khứ, kéo dài đến hiện tại (với for/since): They have lived here for five years."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + have/has + V3", example_en: "I have seen this film.", example_vi: "Tôi đã xem phim này rồi." },
        { label: "Phủ định", form: "S + have/has + not + V3", example_en: "He hasn't eaten yet.", example_vi: "Anh ấy vẫn chưa ăn." },
        { label: "Nghi vấn", form: "Have/Has + S + V3?", example_en: "Have you finished?", example_vi: "Bạn xong chưa?" }
      ],
      notes: [
        "he/she/it dùng 'has'; các chủ ngữ còn lại dùng 'have'.",
        "'for' + khoảng thời gian (for two years); 'since' + mốc thời gian (since 2020).",
        "'already' dùng trong câu khẳng định; 'yet' dùng cuối câu phủ định và nghi vấn."
      ],
      quiz: [
        { q: "I ___ finished my homework.", options: ["have", "has", "am", "was"], answer: "have", explain: "Chủ ngữ 'I' dùng 'have' + V3." },
        { q: "She ___ never been to London.", options: ["have", "has", "is", "was"], answer: "has", explain: "'She' (ngôi thứ 3 số ít) dùng 'has'." },
        { q: "They have lived here ___ 2015.", options: ["for", "since", "from", "in"], answer: "since", explain: "2015 là một mốc thời gian nên dùng 'since'." },
        { q: "Have you eaten ___?", options: ["already", "yet", "just", "ever"], answer: "yet", explain: "Trong câu nghi vấn, 'yet' đứng cuối câu." },
        { q: "He ___ eaten yet.", options: ["hasn't", "haven't", "didn't", "isn't"], answer: "hasn't", explain: "'He' + phủ định hoàn thành: hasn't + V3." },
        { q: "We have known each other ___ ten years.", options: ["since", "for", "in", "at"], answer: "for", explain: "'ten years' là khoảng thời gian nên dùng 'for'." }
      ]
    },
    {
      id: 5,
      slug: "future-will-going-to",
      title_en: "Future: will & be going to",
      title_vi: "Thì tương lai: will & be going to",
      emoji: "🔮",
      level: "A2",
      intro: "Diễn tả tương lai bằng 'will' (quyết định tức thời, dự đoán, lời hứa) và 'be going to' (kế hoạch, dự định có sẵn).",
      usage: [
        "will: quyết định ngay lúc nói, dự đoán, lời hứa — I'll help you. It will rain tomorrow.",
        "be going to: kế hoạch đã định sẵn — I'm going to visit my aunt next week.",
        "be going to: dự đoán dựa vào dấu hiệu hiện tại — Look at the clouds; it's going to rain."
      ],
      formulas: [
        { label: "will", form: "S + will + V", example_en: "She will call you later.", example_vi: "Cô ấy sẽ gọi bạn sau." },
        { label: "be going to", form: "S + am/is/are + going to + V", example_en: "We are going to buy a car.", example_vi: "Chúng tôi sẽ mua một chiếc xe hơi." },
        { label: "Phủ định", form: "S + won't / am/is/are not going to + V", example_en: "I won't be late.", example_vi: "Tôi sẽ không đến trễ." }
      ],
      notes: [
        "'will' hợp với quyết định tức thời; 'be going to' hợp với kế hoạch đã định trước.",
        "won't = will not.",
        "Sau 'will' và 'be going to' luôn là động từ nguyên thể (không chia)."
      ],
      quiz: [
        { q: "I think it ___ rain tomorrow.", options: ["will", "is going", "going", "will to"], answer: "will", explain: "Dự đoán theo ý kiến cá nhân ('I think') dùng 'will' + V." },
        { q: "Look at those clouds! It ___ rain.", options: ["will", "is going to", "goes to", "going"], answer: "is going to", explain: "Dự đoán dựa vào dấu hiệu nhìn thấy → 'be going to'." },
        { q: "They ___ buy a new house next year.", options: ["are going to", "is going to", "will to", "going"], answer: "are going to", explain: "'They' đi với 'are going to' + V." },
        { q: "Don't worry, I ___ help you.", options: ["will", "am going", "going to", "will to"], answer: "will", explain: "Lời hứa/quyết định ngay lúc nói dùng 'will'." },
        { q: "She ___ come to the party.", options: ["won't", "willn't", "doesn't", "amn't"], answer: "won't", explain: "Phủ định của 'will' là 'won't' (= will not)." },
        { q: "We ___ visit Ha Long Bay this summer; we already booked the hotel.", options: ["will", "are going to", "going", "is going to"], answer: "are going to", explain: "Kế hoạch đã định sẵn (đã đặt khách sạn) → 'be going to'." }
      ]
    },
    {
      id: 6,
      slug: "articles",
      title_en: "Articles: a / an / the",
      title_vi: "Mạo từ: a / an / the",
      emoji: "🅰️",
      level: "A1-A2",
      intro: "Mạo từ đứng trước danh từ. 'a/an' là mạo từ không xác định; 'the' là mạo từ xác định.",
      usage: [
        "a/an: trước danh từ đếm được số ít, nhắc lần đầu, chưa xác định — I have a dog.",
        "the: khi cả người nói và người nghe đều biết vật được nhắc tới — The dog is friendly.",
        "the: vật duy nhất hoặc tên biển/sông/dãy núi — the sun, the moon, the Pacific."
      ],
      formulas: [
        { label: "a + âm phụ âm", form: "a book, a university", example_en: "I bought a university textbook.", example_vi: "Tôi đã mua một cuốn giáo trình đại học." },
        { label: "an + âm nguyên âm", form: "an apple, an hour", example_en: "I waited for an hour.", example_vi: "Tôi đã đợi một tiếng." },
        { label: "the + danh từ xác định", form: "the + N", example_en: "The book on the table is mine.", example_vi: "Cuốn sách trên bàn là của tôi." }
      ],
      notes: [
        "Chọn a/an theo ÂM đầu, không theo chữ cái: an hour (h câm), a university (đọc /juː/).",
        "Không dùng a/an với danh từ không đếm được hay số nhiều: water (not a water), books (not a books).",
        "Không dùng 'the' với tên riêng, tên nước thông thường (Vietnam), bữa ăn (breakfast) hay môn thể thao."
      ],
      quiz: [
        { q: "I saw ___ elephant at the zoo.", options: ["a", "an", "the", "(không dùng)"], answer: "an", explain: "'elephant' bắt đầu bằng âm nguyên âm → 'an'." },
        { q: "She is ___ university student.", options: ["a", "an", "the", "(không dùng)"], answer: "a", explain: "'university' đọc là /juː/ (âm phụ âm) → 'a'." },
        { q: "Can you pass ___ salt, please?", options: ["a", "an", "the", "(không dùng)"], answer: "the", explain: "Vật đã xác định mà cả hai đều biết → 'the'." },
        { q: "He waited for ___ hour.", options: ["a", "an", "the", "(không dùng)"], answer: "an", explain: "'hour' có 'h' câm, bắt đầu bằng âm nguyên âm → 'an'." },
        { q: "___ sun is very bright today.", options: ["A", "An", "The", "(không dùng)"], answer: "The", explain: "Vật duy nhất (mặt trời) dùng 'The'." },
        { q: "I need ___ information about the trip.", options: ["a", "an", "the", "(không dùng)"], answer: "(không dùng)", explain: "'information' là danh từ không đếm được nên không dùng a/an." }
      ]
    },
    {
      id: 7,
      slug: "comparatives-superlatives",
      title_en: "Comparatives & Superlatives",
      title_vi: "So sánh hơn & so sánh nhất",
      emoji: "📊",
      level: "A2",
      intro: "So sánh hơn (comparative) so sánh giữa 2 đối tượng; so sánh nhất (superlative) so sánh 1 đối tượng với tất cả còn lại.",
      usage: [
        "So sánh hơn: dùng khi so sánh 2 người/vật — He is taller than me.",
        "So sánh nhất: dùng khi so sánh 1 với cả nhóm — He is the tallest in the class."
      ],
      formulas: [
        { label: "Tính từ ngắn", form: "adj + -er + than  |  the + adj + -est", example_en: "She is younger than me. She is the youngest.", example_vi: "Cô ấy trẻ hơn tôi. Cô ấy là người trẻ nhất." },
        { label: "Tính từ dài", form: "more + adj + than  |  the most + adj", example_en: "It is more beautiful. It is the most beautiful.", example_vi: "Nó đẹp hơn. Nó đẹp nhất." },
        { label: "Bất quy tắc", form: "good→better→best; bad→worse→worst", example_en: "This is the best coffee here.", example_vi: "Đây là cà phê ngon nhất ở đây." }
      ],
      notes: [
        "Tính từ ngắn tận cùng phụ âm-nguyên âm-phụ âm thì gấp đôi phụ âm cuối: big → bigger → biggest.",
        "Tính từ tận cùng -y đổi thành -ier/-iest: happy → happier → happiest.",
        "So sánh nhất thường đi kèm 'the'."
      ],
      quiz: [
        { q: "This box is ___ than that one.", options: ["heavy", "heavier", "heaviest", "more heavy"], answer: "heavier", explain: "Tính từ tận cùng -y đổi thành -ier: heavy → heavier." },
        { q: "Mount Everest is the ___ mountain in the world.", options: ["high", "higher", "highest", "most high"], answer: "highest", explain: "So sánh nhất của tính từ ngắn: high → the highest." },
        { q: "Her dress is ___ than mine.", options: ["beautiful", "beautifuler", "more beautiful", "most beautiful"], answer: "more beautiful", explain: "Tính từ dài dùng 'more … than'." },
        { q: "My results are ___ than yours.", options: ["good", "better", "best", "gooder"], answer: "better", explain: "So sánh hơn bất quy tắc của 'good' là 'better'." },
        { q: "It's the ___ day of my life.", options: ["bad", "worse", "worst", "baddest"], answer: "worst", explain: "So sánh nhất bất quy tắc của 'bad' là 'the worst'." },
        { q: "A car is ___ than a bicycle.", options: ["fast", "faster", "fastest", "more fast"], answer: "faster", explain: "Tính từ ngắn thêm -er: fast → faster." }
      ]
    },
    {
      id: 8,
      slug: "modal-verbs",
      title_en: "Modal Verbs",
      title_vi: "Động từ khuyết thiếu",
      emoji: "🗝️",
      level: "A2-B1",
      intro: "Động từ khuyết thiếu (can, could, should, must, may, might…) bổ nghĩa cho động từ chính để nói về khả năng, sự cho phép, lời khuyên hay sự bắt buộc.",
      usage: [
        "can/could: khả năng, xin phép — I can swim. Could you help me?",
        "should: lời khuyên — You should see a doctor.",
        "must / have to: sự bắt buộc — You must stop at the red light.",
        "may/might: khả năng có thể xảy ra, xin phép lịch sự — It may rain. May I come in?"
      ],
      formulas: [
        { label: "Khẳng định", form: "S + modal + V (nguyên thể không 'to')", example_en: "She can drive.", example_vi: "Cô ấy biết lái xe." },
        { label: "Phủ định", form: "S + modal + not + V", example_en: "You mustn't smoke here.", example_vi: "Bạn không được hút thuốc ở đây." },
        { label: "Nghi vấn", form: "Modal + S + V?", example_en: "Can you help me?", example_vi: "Bạn có thể giúp tôi không?" }
      ],
      notes: [
        "Sau động từ khuyết thiếu luôn là động từ nguyên thể KHÔNG 'to': can go (không phải can to go).",
        "Động từ khuyết thiếu không thêm -s ở ngôi thứ 3: She can (không phải She cans).",
        "'mustn't' = cấm; 'don't have to' = không cần thiết — hai nghĩa khác nhau."
      ],
      quiz: [
        { q: "___ you speak English?", options: ["Can", "Do", "Are", "Have"], answer: "Can", explain: "Hỏi về khả năng dùng 'Can' + V." },
        { q: "You ___ see a doctor. You look ill.", options: ["should", "should to", "shoulds", "musts"], answer: "should", explain: "Lời khuyên dùng 'should' + V nguyên thể, không có 'to'." },
        { q: "She can ___ the piano.", options: ["plays", "play", "playing", "to play"], answer: "play", explain: "Sau modal 'can' là động từ nguyên thể không 'to': play." },
        { q: "You ___ smoke here. It's forbidden.", options: ["mustn't", "don't have to", "should", "can"], answer: "mustn't", explain: "Điều bị cấm dùng 'mustn't'." },
        { q: "It's cloudy. It ___ rain later.", options: ["might", "musts", "cans", "have to"], answer: "might", explain: "Khả năng có thể xảy ra dùng 'might' + V." },
        { q: "___ I open the window?", options: ["May", "Do", "Am", "Have"], answer: "May", explain: "Xin phép lịch sự dùng 'May I…?'." }
      ]
    },
    {
      id: 9,
      slug: "prepositions-in-on-at",
      title_en: "Prepositions: in / on / at",
      title_vi: "Giới từ: in / on / at",
      emoji: "📍",
      level: "A1-A2",
      intro: "Giới từ in, on, at dùng để chỉ thời gian và nơi chốn.",
      usage: [
        "Thời gian — at: giờ/thời điểm (at 6 o'clock, at night); on: ngày/thứ (on Monday); in: tháng/năm/mùa/buổi (in May, in 2020, in the morning).",
        "Nơi chốn — at: một điểm cụ thể (at the door); on: trên bề mặt (on the table); in: bên trong (in the room, in Ha Noi)."
      ],
      formulas: [
        { label: "at", form: "at + giờ / điểm cụ thể", example_en: "I get up at 6 a.m.", example_vi: "Tôi thức dậy lúc 6 giờ sáng." },
        { label: "on", form: "on + ngày / bề mặt", example_en: "We meet on Sunday.", example_vi: "Chúng tôi gặp nhau vào Chủ nhật." },
        { label: "in", form: "in + tháng, năm, mùa / không gian bên trong", example_en: "She was born in April.", example_vi: "Cô ấy sinh vào tháng Tư." }
      ],
      notes: [
        "'at night' NHƯNG 'in the morning/afternoon/evening'.",
        "Khi có ngày cụ thể thì dùng 'on': on Monday morning.",
        "Một số cụm cố định: at home, at work, at school, in bed, on time."
      ],
      quiz: [
        { q: "The meeting is ___ 9 o'clock.", options: ["at", "on", "in", "to"], answer: "at", explain: "Giờ cụ thể dùng 'at'." },
        { q: "My birthday is ___ July.", options: ["at", "on", "in", "of"], answer: "in", explain: "Tháng dùng 'in': in July." },
        { q: "I'll see you ___ Monday.", options: ["at", "on", "in", "to"], answer: "on", explain: "Thứ trong tuần dùng 'on'." },
        { q: "The keys are ___ the table.", options: ["at", "on", "in", "to"], answer: "on", explain: "Trên bề mặt dùng 'on'." },
        { q: "She was born ___ 1998.", options: ["at", "on", "in", "since"], answer: "in", explain: "Năm dùng 'in': in 1998." },
        { q: "He is waiting ___ the bus stop.", options: ["at", "on", "in", "to"], answer: "at", explain: "Một điểm cụ thể dùng 'at': at the bus stop." }
      ]
    },
    {
      id: 10,
      slug: "there-is-there-are",
      title_en: "There is / There are",
      title_vi: "Cấu trúc There is / There are",
      emoji: "📦",
      level: "A1",
      intro: "Cấu trúc 'There is / There are' dùng để nói về sự tồn tại của người hay vật — nghĩa là 'có…'.",
      usage: [
        "There is + danh từ số ít / không đếm được: There is a book on the desk. There is some milk.",
        "There are + danh từ số nhiều: There are two cats in the garden."
      ],
      formulas: [
        { label: "Khẳng định", form: "There is (There's) + N số ít  |  There are + N số nhiều", example_en: "There is a park near my house.", example_vi: "Có một công viên gần nhà tôi." },
        { label: "Phủ định", form: "There isn't / There aren't + N", example_en: "There aren't any chairs.", example_vi: "Không có cái ghế nào." },
        { label: "Nghi vấn", form: "Is there…? / Are there…?", example_en: "Is there a bank near here?", example_vi: "Gần đây có ngân hàng không?" }
      ],
      notes: [
        "Chọn is/are theo danh từ NGAY SAU nó: There is a pen and two books (danh từ đầu là số ít → is).",
        "Danh từ không đếm được dùng 'There is': There is some water.",
        "'some' dùng trong câu khẳng định; 'any' dùng trong câu phủ định và nghi vấn."
      ],
      quiz: [
        { q: "___ a cat on the roof.", options: ["There is", "There are", "There have", "It are"], answer: "There is", explain: "'a cat' là số ít → 'There is'." },
        { q: "___ four seasons in a year.", options: ["There is", "There are", "It is", "There has"], answer: "There are", explain: "'four seasons' số nhiều → 'There are'." },
        { q: "There ___ some milk in the fridge.", options: ["is", "are", "have", "be"], answer: "is", explain: "'milk' không đếm được → dùng 'is'." },
        { q: "___ any students in the classroom?", options: ["Is there", "Are there", "There are", "Have there"], answer: "Are there", explain: "'students' số nhiều, câu hỏi → 'Are there…?'." },
        { q: "There ___ many people at the party.", options: ["isn't", "aren't", "wasn't", "hasn't"], answer: "aren't", explain: "'many people' số nhiều, phủ định hiện tại → 'aren't'." },
        { q: "There ___ a book and three pens on the desk.", options: ["is", "are", "have", "were"], answer: "is", explain: "Chia theo danh từ ngay sau: 'a book' là số ít → 'is'." }
      ]
    },
    {
      id: 11,
      slug: "plural-nouns",
      title_en: "Plural Nouns",
      title_vi: "Danh từ số nhiều",
      emoji: "🔠",
      level: "A1",
      intro: "Danh từ số nhiều chỉ từ hai người/vật trở lên. Đa số thêm -s, nhưng có nhiều quy tắc chính tả và trường hợp bất quy tắc.",
      usage: [
        "Chỉ số lượng nhiều (từ 2 trở lên): one book → two books.",
        "Đa số danh từ chỉ cần thêm -s vào cuối: cat → cats, pen → pens."
      ],
      formulas: [
        { label: "Thêm -s (đa số)", form: "N + s", example_en: "I have three cats.", example_vi: "Tôi có ba con mèo." },
        { label: "Thêm -es (sau -s, -ss, -sh, -ch, -x, -o)", form: "N + es", example_en: "I bought two boxes.", example_vi: "Tôi đã mua hai cái hộp." },
        { label: "Phụ âm + y → -ies", form: "…y → …ies", example_en: "The babies are sleeping.", example_vi: "Những em bé đang ngủ." },
        { label: "Bất quy tắc", form: "man→men, child→children, foot→feet", example_en: "My feet are cold.", example_vi: "Chân tôi lạnh." }
      ],
      notes: [
        "Danh từ tận cùng nguyên âm + y thì chỉ thêm -s: boy → boys, key → keys.",
        "Một số danh từ tận cùng -f/-fe đổi thành -ves: leaf → leaves, knife → knives.",
        "Bất quy tắc hay gặp: man→men, woman→women, child→children, foot→feet, tooth→teeth, mouse→mice, person→people; fish và sheep giữ nguyên."
      ],
      quiz: [
        { q: "One child, two ___.", options: ["childs", "children", "childrens", "childes"], answer: "children", explain: "child là danh từ bất quy tắc → children." },
        { q: "There are two ___ on the table.", options: ["boxs", "boxes", "boxen", "box"], answer: "boxes", explain: "Danh từ tận cùng -x thêm -es: box → boxes." },
        { q: "I brush my ___ every day.", options: ["tooths", "teeth", "teeths", "tooth"], answer: "teeth", explain: "tooth → teeth là bất quy tắc." },
        { q: "There are many ___ in the country.", options: ["citys", "cities", "cityes", "city"], answer: "cities", explain: "Phụ âm + y đổi thành -ies: city → cities." },
        { q: "Those two ___ are my friends.", options: ["womans", "women", "womens", "woman"], answer: "women", explain: "woman → women là bất quy tắc." },
        { q: "He bought five ___.", options: ["keys", "keies", "key", "keis"], answer: "keys", explain: "Nguyên âm + y (key) chỉ thêm -s → keys." }
      ]
    },
    {
      id: 12,
      slug: "countable-uncountable",
      title_en: "Countable & Uncountable Nouns",
      title_vi: "Danh từ đếm được & không đếm được",
      emoji: "🥛",
      level: "A1-A2",
      intro: "Danh từ đếm được có thể đếm và có số nhiều (a book, two books). Danh từ không đếm được thì không đếm trực tiếp và không có số nhiều (water, rice, money).",
      usage: [
        "Đếm được: dùng a/an, có cả số ít và số nhiều — an apple, three apples.",
        "Không đếm được: không dùng a/an, luôn ở dạng số ít — some water (không nói 'a water' hay 'waters').",
        "Muốn đếm danh từ không đếm được, dùng đơn vị: a glass of water, two cups of coffee."
      ],
      formulas: [
        { label: "Đếm được số ít", form: "a/an + N", example_en: "I want an egg.", example_vi: "Tôi muốn một quả trứng." },
        { label: "Đếm được số nhiều", form: "số + N-s", example_en: "I want two eggs.", example_vi: "Tôi muốn hai quả trứng." },
        { label: "Không đếm được", form: "(some) + N", example_en: "I want some milk.", example_vi: "Tôi muốn một ít sữa." },
        { label: "Đơn vị đo lường", form: "a + đơn vị + of + N", example_en: "a bottle of water", example_vi: "một chai nước" }
      ],
      notes: [
        "Không đếm được thường gặp: water, milk, rice, bread, money, information, advice, music, time, homework.",
        "Danh từ không đếm được đi với động từ số ít: The news is good (không phải 'are').",
        "Dùng 'much' cho danh từ không đếm được, 'many' cho danh từ đếm được số nhiều."
      ],
      quiz: [
        { q: "Which word is UNCOUNTABLE? (Từ nào không đếm được?)", options: ["apple", "water", "book", "car"], answer: "water", explain: "water không đếm trực tiếp được, không có số nhiều." },
        { q: "I need some ___ about the trip.", options: ["information", "informations", "an information", "two information"], answer: "information", explain: "information không đếm được → không có số nhiều, không dùng a/an." },
        { q: "Can I have a ___ of coffee?", options: ["cup", "piece", "slice", "loaf"], answer: "cup", explain: "Đơn vị đúng cho coffee là 'a cup of coffee'." },
        { q: "There is ___ rice in the bowl.", options: ["some", "a", "an", "many"], answer: "some", explain: "rice không đếm được → dùng 'some', không dùng a/an." },
        { q: "How many ___ do you have?", options: ["money", "water", "books", "rice"], answer: "books", explain: "'many' đi với danh từ đếm được số nhiều: books." },
        { q: "She gave me some good ___.", options: ["advice", "advices", "an advice", "advise"], answer: "advice", explain: "advice không đếm được, không có số nhiều (advise là động từ)." }
      ]
    },
    {
      id: 13,
      slug: "some-any",
      title_en: "some / any",
      title_vi: "some / any",
      emoji: "🍎",
      level: "A1",
      intro: "some và any đứng trước danh từ để chỉ 'một ít / một vài' mà không nói rõ số lượng.",
      usage: [
        "some: dùng trong câu khẳng định — There is some milk. I have some friends.",
        "any: dùng trong câu phủ định và nghi vấn — There isn't any milk. Do you have any friends?",
        "some: dùng trong câu hỏi khi mời hoặc đề nghị — Would you like some tea?"
      ],
      formulas: [
        { label: "Khẳng định", form: "S + V + some + N", example_en: "I bought some apples.", example_vi: "Tôi đã mua vài quả táo." },
        { label: "Phủ định", form: "S + don't/doesn't + V + any + N", example_en: "I don't have any money.", example_vi: "Tôi không có đồng nào." },
        { label: "Nghi vấn", form: "Do/Does/Is/Are + … + any + N?", example_en: "Is there any water?", example_vi: "Có nước không?" }
      ],
      notes: [
        "some & any dùng được với cả danh từ số nhiều đếm được và danh từ không đếm được.",
        "Dùng 'some' trong câu hỏi khi mời/đề nghị: Would you like some cake?",
        "'any' còn nghĩa 'bất kỳ' trong câu khẳng định: Take any book you like."
      ],
      quiz: [
        { q: "There are ___ books on the desk.", options: ["some", "any", "a", "much"], answer: "some", explain: "Câu khẳng định → dùng 'some'." },
        { q: "I don't have ___ money.", options: ["some", "any", "a", "an"], answer: "any", explain: "Câu phủ định → dùng 'any'." },
        { q: "Is there ___ juice in the fridge?", options: ["some", "any", "a", "an"], answer: "any", explain: "Câu nghi vấn → dùng 'any'." },
        { q: "Would you like ___ tea?", options: ["any", "some", "a", "an"], answer: "some", explain: "Lời mời/đề nghị → dùng 'some'." },
        { q: "She bought ___ oranges.", options: ["any", "some", "a", "an"], answer: "some", explain: "Câu khẳng định → dùng 'some'." },
        { q: "We didn't see ___ people there.", options: ["some", "any", "a", "much"], answer: "any", explain: "Câu phủ định → dùng 'any'." }
      ]
    },
    {
      id: 14,
      slug: "possessive-case",
      title_en: "Possessive: 's / of",
      title_vi: "Sở hữu cách ('s / of)",
      emoji: "🔑",
      level: "A1-A2",
      intro: "Để chỉ sự sở hữu (cái gì của ai), tiếng Anh dùng 's với người/động vật và 'of' với vật.",
      usage: [
        "Người / động vật: thêm 's — Nam's book (sách của Nam), the dog's tail.",
        "Vật: dùng 'of' — the roof of the house, hoặc dùng danh từ ghép: the car door.",
        "Danh từ số nhiều đã tận cùng -s: chỉ thêm dấu ' — the students' room."
      ],
      formulas: [
        { label: "Người số ít", form: "N + 's + N", example_en: "This is Lan's bag.", example_vi: "Đây là túi của Lan." },
        { label: "Số nhiều tận cùng -s", form: "Ns' + N", example_en: "The boys' team won.", example_vi: "Đội của các cậu bé đã thắng." },
        { label: "Vật", form: "N + of + N", example_en: "the roof of the house", example_vi: "mái của ngôi nhà" }
      ],
      notes: [
        "Hai người cùng sở hữu một thứ thì thêm 's vào người sau: Tom and Jerry's house.",
        "'s cũng dùng cho thời gian: today's news, a week's holiday.",
        "Danh từ số nhiều bất quy tắc (không có -s) vẫn thêm 's: the children's toys."
      ],
      quiz: [
        { q: "This is ___ car.", options: ["Nam car", "Nams car", "Nam's car", "car of Nam"], answer: "Nam's car", explain: "Sở hữu của người → thêm 's: Nam's car." },
        { q: "The ___ tail is long.", options: ["dog's", "dogs", "dogs'", "dog"], answer: "dog's", explain: "Một con chó (số ít) → dog's." },
        { q: "That is the ___ room. (nhiều học sinh)", options: ["student's", "students's", "students'", "students"], answer: "students'", explain: "Số nhiều đã tận cùng -s → chỉ thêm dấu '." },
        { q: "I like the color ___ the wall.", options: ["'s", "of", "for", "from"], answer: "of", explain: "Sở hữu của vật → dùng 'of'." },
        { q: "These are the ___ toys.", options: ["childrens", "children's", "childrens'", "children"], answer: "children's", explain: "children là số nhiều bất quy tắc → thêm 's." },
        { q: "Have you seen ___ new phone?", options: ["Mai's", "Mais", "Mai", "of Mai"], answer: "Mai's", explain: "Sở hữu của người → Mai's." }
      ]
    },
    {
      id: 15,
      slug: "personal-object-pronouns",
      title_en: "Personal & Object Pronouns",
      title_vi: "Đại từ nhân xưng & tân ngữ",
      emoji: "🙋",
      level: "A1",
      intro: "Đại từ nhân xưng thay cho danh từ. Đại từ chủ ngữ (I, you, he…) làm chủ ngữ; đại từ tân ngữ (me, you, him…) làm tân ngữ.",
      usage: [
        "Chủ ngữ (đứng trước động từ): I, you, he, she, it, we, they — She is my friend.",
        "Tân ngữ (đứng sau động từ hoặc giới từ): me, you, him, her, it, us, them — I know her."
      ],
      formulas: [
        { label: "Chủ ngữ", form: "I / you / he / she / it / we / they + V", example_en: "They live in Hue.", example_vi: "Họ sống ở Huế." },
        { label: "Tân ngữ", form: "V / giới từ + me / you / him / her / it / us / them", example_en: "Please help me.", example_vi: "Làm ơn giúp tôi." }
      ],
      notes: [
        "Cặp tương ứng: I–me, he–him, she–her, we–us, they–them; you và it giữ nguyên.",
        "Sau giới từ luôn dùng đại từ tân ngữ: with me, for him, to us (không nói 'with I').",
        "'it' thay cho vật, con vật hoặc điều đã được nhắc tới."
      ],
      quiz: [
        { q: "___ is my brother.", options: ["Him", "He", "His", "Them"], answer: "He", explain: "Làm chủ ngữ → dùng đại từ chủ ngữ 'He'." },
        { q: "Can you help ___?", options: ["I", "me", "my", "mine"], answer: "me", explain: "Làm tân ngữ sau động từ → 'me'." },
        { q: "This present is for ___.", options: ["she", "her", "hers", "they"], answer: "her", explain: "Sau giới từ 'for' → đại từ tân ngữ 'her'." },
        { q: "___ are good friends.", options: ["Us", "We", "Our", "Them"], answer: "We", explain: "Làm chủ ngữ → 'We'." },
        { q: "I saw ___ at the party.", options: ["they", "them", "their", "theirs"], answer: "them", explain: "Làm tân ngữ → 'them'." },
        { q: "Give the book to ___.", options: ["he", "him", "his", "he's"], answer: "him", explain: "Sau giới từ 'to' → 'him'." }
      ]
    },
    {
      id: 16,
      slug: "possessive-adjectives-pronouns",
      title_en: "Possessive Adjectives & Pronouns",
      title_vi: "Tính từ & đại từ sở hữu",
      emoji: "🎒",
      level: "A1",
      intro: "Tính từ sở hữu (my, your, his…) đứng trước danh từ; đại từ sở hữu (mine, yours, his…) đứng một mình, thay cho cụm 'sở hữu + danh từ'.",
      usage: [
        "Tính từ sở hữu + danh từ: my book, her car, their house.",
        "Đại từ sở hữu đứng một mình: This book is mine (= my book)."
      ],
      formulas: [
        { label: "Tính từ sở hữu", form: "my/your/his/her/its/our/their + N", example_en: "This is my pen.", example_vi: "Đây là bút của tôi." },
        { label: "Đại từ sở hữu", form: "mine/yours/his/hers/ours/theirs", example_en: "This pen is mine.", example_vi: "Bút này là của tôi." }
      ],
      notes: [
        "Cặp tương ứng: my–mine, your–yours, her–hers, our–ours, their–theirs; 'his' giữ nguyên; 'its' không có dạng đại từ sở hữu.",
        "Đại từ sở hữu KHÔNG đi kèm danh từ: nói 'It's mine' (không nói 'It's mine book').",
        "Đừng nhầm 'its' (sở hữu) với 'it's' (= it is)."
      ],
      quiz: [
        { q: "This is ___ house.", options: ["my", "mine", "me", "I"], answer: "my", explain: "Đứng trước danh từ → tính từ sở hữu 'my'." },
        { q: "That car is ___.", options: ["her", "hers", "she", "her's"], answer: "hers", explain: "Đứng một mình → đại từ sở hữu 'hers'." },
        { q: "___ dog is very cute.", options: ["Their", "Theirs", "Them", "They"], answer: "Their", explain: "Đứng trước danh từ → 'Their'." },
        { q: "Is this pen ___?", options: ["your", "yours", "you", "you's"], answer: "yours", explain: "Đứng một mình → 'yours'." },
        { q: "We love ___ school.", options: ["our", "ours", "us", "we"], answer: "our", explain: "Đứng trước danh từ → 'our'." },
        { q: "These books are ___.", options: ["my", "mine", "me", "mines"], answer: "mine", explain: "Đứng một mình → 'mine' (không có dạng 'mines')." }
      ]
    },
    {
      id: 17,
      slug: "demonstratives",
      title_en: "this / that / these / those",
      title_vi: "Đại từ chỉ định",
      emoji: "👉",
      level: "A1",
      intro: "this, that, these, those chỉ vào người/vật, phân biệt theo khoảng cách (gần/xa) và số lượng (ít/nhiều).",
      usage: [
        "Gần — số ít: this; số nhiều: these — This is my bag. These are my shoes.",
        "Xa — số ít: that; số nhiều: those — That is his car. Those are birds."
      ],
      formulas: [
        { label: "Gần", form: "this (số ít) / these (số nhiều)", example_en: "This book is new.", example_vi: "Cuốn sách này thì mới." },
        { label: "Xa", form: "that (số ít) / those (số nhiều)", example_en: "Those flowers are beautiful.", example_vi: "Những bông hoa kia thì đẹp." }
      ],
      notes: [
        "this/that đi với danh từ và động từ số ít (is); these/those đi với số nhiều (are).",
        "Có thể đứng trước danh từ (this book) hoặc đứng một mình (This is nice).",
        "Khi gọi điện, người Anh nói: 'This is Nam' (Tôi là Nam đây)."
      ],
      quiz: [
        { q: "___ is my friend, Lan.", options: ["This", "These", "Those", "Them"], answer: "This", explain: "Giới thiệu một người (số ít, gần) → 'This'." },
        { q: "___ are my new shoes.", options: ["This", "That", "These", "It"], answer: "These", explain: "Số nhiều, ở gần → 'These'." },
        { q: "Look at ___ mountains over there.", options: ["this", "that", "these", "those"], answer: "those", explain: "Số nhiều, ở xa ('over there') → 'those'." },
        { q: "___ book here is interesting.", options: ["This", "These", "Those", "Them"], answer: "This", explain: "Số ít, ở gần ('here') → 'This'." },
        { q: "___ flowers over there are lovely.", options: ["This", "That", "These", "Those"], answer: "Those", explain: "Số nhiều, ở xa → 'Those'." },
        { q: "___ is a pen, and that is a pencil.", options: ["This", "These", "Those", "Them"], answer: "This", explain: "Đối lập gần–xa, số ít → 'This … that …'." }
      ]
    },
    {
      id: 18,
      slug: "imperatives",
      title_en: "Imperatives",
      title_vi: "Câu mệnh lệnh",
      emoji: "📢",
      level: "A1",
      intro: "Câu mệnh lệnh dùng để ra lệnh, yêu cầu, chỉ dẫn hoặc mời. Động từ ở dạng nguyên thể và thường không có chủ ngữ.",
      usage: [
        "Ra lệnh / yêu cầu: Sit down. Open the door.",
        "Chỉ dẫn đường: Turn left at the corner.",
        "Lời mời / đề nghị: Have a seat. Help yourself."
      ],
      formulas: [
        { label: "Khẳng định", form: "V (nguyên thể) + …", example_en: "Close the window, please.", example_vi: "Làm ơn đóng cửa sổ lại." },
        { label: "Phủ định", form: "Don't + V + …", example_en: "Don't touch it.", example_vi: "Đừng chạm vào nó." },
        { label: "Rủ (chúng ta)", form: "Let's + V", example_en: "Let's go home.", example_vi: "Về nhà thôi." }
      ],
      notes: [
        "Câu mệnh lệnh không có chủ ngữ; động từ luôn ở dạng nguyên thể (không thêm -s, -ed).",
        "Thêm 'please' để lịch sự hơn: Please wait here / Wait here, please.",
        "Phủ định của 'Let's' là 'Let's not': Let's not argue."
      ],
      quiz: [
        { q: "___ the door, please.", options: ["Closing", "Close", "Closes", "To close"], answer: "Close", explain: "Câu mệnh lệnh → động từ nguyên thể 'Close'." },
        { q: "___ be late!", options: ["Don't", "Not", "No", "Doesn't"], answer: "Don't", explain: "Mệnh lệnh phủ định → 'Don't' + V." },
        { q: "___ go to the beach!", options: ["Let's", "Lets", "Let us to", "We"], answer: "Let's", explain: "Rủ nhau cùng làm → 'Let's' + V." },
        { q: "Please ___ down.", options: ["sitting", "sits", "sit", "to sit"], answer: "sit", explain: "Mệnh lệnh → động từ nguyên thể 'sit'." },
        { q: "___ worry, everything is fine.", options: ["Don't", "Not", "Doesn't", "No"], answer: "Don't", explain: "Mệnh lệnh phủ định → 'Don't'." },
        { q: "Turn left and ___ straight.", options: ["going", "go", "goes", "went"], answer: "go", explain: "Chuỗi mệnh lệnh → động từ nguyên thể 'go'." }
      ]
    },
    {
      id: 19,
      slug: "wh-questions",
      title_en: "Wh- Questions",
      title_vi: "Câu hỏi Wh-",
      emoji: "❓",
      level: "A1",
      intro: "Câu hỏi với từ để hỏi (Wh-) dùng để hỏi thông tin cụ thể như ai, gì, ở đâu, khi nào, tại sao, thế nào.",
      usage: [
        "Hỏi thông tin cụ thể (không phải câu Yes/No): What is your name? Where do you live?",
        "Các từ để hỏi thường gặp: what, who, where, when, why, how, which, whose."
      ],
      formulas: [
        { label: "Với 'to be'", form: "Wh- + am/is/are + S?", example_en: "Where are you now?", example_vi: "Bây giờ bạn ở đâu?" },
        { label: "Với động từ thường", form: "Wh- + do/does + S + V?", example_en: "What do you want?", example_vi: "Bạn muốn gì?" },
        { label: "Hỏi về chủ ngữ", form: "Who/What + V?", example_en: "Who lives here?", example_vi: "Ai sống ở đây?" }
      ],
      notes: [
        "Trật tự: Wh- + trợ động từ + chủ ngữ + động từ chính.",
        "How kết hợp: how many (bao nhiêu – đếm được), how much (giá/không đếm được), how old, how often.",
        "Khi hỏi về chủ ngữ, không dùng do/does: 'Who wants tea?' (không phải 'Who does want tea?')."
      ],
      quiz: [
        { q: "___ is your teacher?", options: ["What", "Who", "Where", "When"], answer: "Who", explain: "Hỏi về người → dùng 'Who'." },
        { q: "___ do you live?", options: ["What", "Who", "Where", "Why"], answer: "Where", explain: "Hỏi về nơi chốn → 'Where'." },
        { q: "___ are you sad?", options: ["Where", "Why", "Who", "Which"], answer: "Why", explain: "Hỏi về lý do → 'Why'." },
        { q: "___ old are you?", options: ["What", "How", "Who", "When"], answer: "How", explain: "Hỏi tuổi → 'How old'." },
        { q: "___ does the film start?", options: ["What", "Who", "When", "Which"], answer: "When", explain: "Hỏi về thời gian → 'When'." },
        { q: "___ book is yours, the red or the blue?", options: ["Who", "Which", "Why", "When"], answer: "Which", explain: "Chọn lựa giữa các phương án → 'Which'." }
      ]
    },
    {
      id: 20,
      slug: "coordinating-conjunctions",
      title_en: "Conjunctions: and / but / or / so / because",
      title_vi: "Liên từ kết hợp",
      emoji: "🔗",
      level: "A1-A2",
      intro: "Liên từ kết hợp nối các từ, cụm từ hoặc mệnh đề ngang hàng: and, but, or, so, because.",
      usage: [
        "and: thêm/liệt kê — tea and coffee.",
        "but: tương phản — small but strong.",
        "or: lựa chọn — tea or coffee?",
        "so: kết quả; because: nguyên nhân — It rained, so we stayed home because it was wet."
      ],
      formulas: [
        { label: "and / but / or", form: "A + and/but/or + B", example_en: "I like tea but not coffee.", example_vi: "Tôi thích trà nhưng không thích cà phê." },
        { label: "so (kết quả)", form: "nguyên nhân, so + kết quả", example_en: "I was tired, so I slept.", example_vi: "Tôi mệt nên tôi đi ngủ." },
        { label: "because (nguyên nhân)", form: "kết quả + because + nguyên nhân", example_en: "I slept because I was tired.", example_vi: "Tôi ngủ vì tôi mệt." }
      ],
      notes: [
        "'so' đứng trước KẾT QUẢ; 'because' đứng trước NGUYÊN NHÂN.",
        "'and' dùng để liệt kê nhiều thứ: A, B and C.",
        "'or' dùng trong câu hỏi lựa chọn và sau phủ định."
      ],
      quiz: [
        { q: "I like apples ___ oranges.", options: ["but", "and", "so", "because"], answer: "and", explain: "Liệt kê/thêm vào → 'and'." },
        { q: "She is rich ___ unhappy.", options: ["and", "but", "or", "so"], answer: "but", explain: "Hai ý tương phản → 'but'." },
        { q: "Hurry up, ___ we'll be late.", options: ["because", "but", "or", "so"], answer: "so", explain: "Chỉ kết quả → 'so'." },
        { q: "He stayed home ___ he was sick.", options: ["so", "but", "because", "and"], answer: "because", explain: "Chỉ nguyên nhân → 'because'." },
        { q: "Do you want tea ___ coffee?", options: ["and", "but", "or", "so"], answer: "or", explain: "Câu hỏi lựa chọn → 'or'." },
        { q: "It was cold, ___ I wore a coat.", options: ["because", "or", "so", "but"], answer: "so", explain: "Chỉ kết quả → 'so'." }
      ]
    },
    {
      id: 21,
      slug: "numbers",
      title_en: "Cardinal & Ordinal Numbers",
      title_vi: "Số đếm & số thứ tự",
      emoji: "🔢",
      level: "A1",
      intro: "Số đếm (one, two, three…) dùng để đếm số lượng; số thứ tự (first, second, third…) dùng để chỉ thứ hạng, ngày tháng.",
      usage: [
        "Số đếm: đếm số lượng — three books, twenty students.",
        "Số thứ tự: thứ hạng / ngày — the first day, June 3rd (the third)."
      ],
      formulas: [
        { label: "Số đếm", form: "one, two, three, … twenty, hundred", example_en: "I have two brothers.", example_vi: "Tôi có hai anh em trai." },
        { label: "Số thứ tự", form: "first, second, third, fourth, fifth…", example_en: "This is my first time here.", example_vi: "Đây là lần đầu tôi đến đây." },
        { label: "Viết tắt số thứ tự", form: "1st, 2nd, 3rd, 4th…", example_en: "She won 1st prize.", example_vi: "Cô ấy đoạt giải nhất." }
      ],
      notes: [
        "Nhiều số thứ tự = số đếm + th: four → fourth, six → sixth, ten → tenth.",
        "Bất quy tắc: one → first, two → second, three → third, five → fifth, eight → eighth, nine → ninth, twelve → twelfth.",
        "Tận cùng -y đổi thành -ieth: twenty → twentieth."
      ],
      quiz: [
        { q: "He came ___ in the race.", options: ["three", "third", "threeth", "thirdth"], answer: "third", explain: "Chỉ thứ hạng → số thứ tự 'third'." },
        { q: "January is the ___ month.", options: ["one", "first", "oneth", "firstth"], answer: "first", explain: "one → first (bất quy tắc)." },
        { q: "I have ___ apples.", options: ["fifth", "five", "fiveth", "the five"], answer: "five", explain: "Chỉ số lượng → số đếm 'five'." },
        { q: "Today is her ___ birthday.", options: ["nine", "ninth", "nineth", "9"], answer: "ninth", explain: "nine → ninth (bỏ 'e')." },
        { q: "The ___ of May is a holiday.", options: ["two", "second", "twoth", "secondth"], answer: "second", explain: "two → second (bất quy tắc)." },
        { q: "There are ___ days in a week.", options: ["seventh", "seven", "sevens", "the seven"], answer: "seven", explain: "Chỉ số lượng → số đếm 'seven'." }
      ]
    },
    {
      id: 22,
      slug: "time-and-dates",
      title_en: "Telling Time & Dates",
      title_vi: "Nói giờ & ngày tháng",
      emoji: "🕐",
      level: "A1",
      intro: "Cách hỏi và nói giờ, ngày tháng trong tiếng Anh.",
      usage: [
        "Hỏi giờ: What time is it? — It's seven o'clock.",
        "Phút: It's half past six (6:30), a quarter to nine (8:45), ten past five (5:10).",
        "Ngày tháng: on Monday, in July, on July 5th, in 2020."
      ],
      formulas: [
        { label: "Giờ đúng", form: "It's + số + o'clock", example_en: "It's ten o'clock.", example_vi: "Bây giờ là 10 giờ." },
        { label: "Giờ hơn / kém", form: "past (hơn) / to (kém)", example_en: "It's a quarter past three.", example_vi: "Bây giờ là 3 giờ 15." },
        { label: "Ngày", form: "on + thứ / ngày", example_en: "My birthday is on May 1st.", example_vi: "Sinh nhật tôi vào ngày 1 tháng 5." }
      ],
      notes: [
        "past = hơn (dùng cho phút 1–30); to = kém (dùng cho phút 31–59).",
        "half past = rưỡi (30 phút); a quarter = 15 phút.",
        "Đọc năm: 1999 = nineteen ninety-nine; 2020 = twenty twenty."
      ],
      quiz: [
        { q: "'What ___ is it?' 'It's 8 o'clock.'", options: ["time", "hour", "clock", "date"], answer: "time", explain: "Hỏi giờ dùng 'What time is it?'." },
        { q: "6:30 = It's ___ past six.", options: ["quarter", "half", "o'clock", "ten"], answer: "half", explain: "30 phút = 'half past'." },
        { q: "My birthday is ___ June.", options: ["on", "at", "in", "to"], answer: "in", explain: "Tháng dùng 'in'." },
        { q: "The meeting is ___ Monday.", options: ["in", "on", "at", "to"], answer: "on", explain: "Thứ trong tuần dùng 'on'." },
        { q: "8:45 = It's a quarter ___ nine.", options: ["past", "to", "before", "after"], answer: "to", explain: "Phút kém (sau nửa giờ) dùng 'to'." },
        { q: "It's ten ___ five. (5:10)", options: ["to", "past", "half", "quarter"], answer: "past", explain: "Phút hơn (trước nửa giờ) dùng 'past'." }
      ]
    },
    {
      id: 23,
      slug: "prepositions-of-place",
      title_en: "Prepositions of Place",
      title_vi: "Giới từ chỉ nơi chốn",
      emoji: "🧭",
      level: "A1",
      intro: "Ngoài in/on/at, còn nhiều giới từ chỉ vị trí: under, in front of, behind, next to, between, near, above, below.",
      usage: [
        "Vị trí tương đối giữa các vật: The cat is under the table. The bank is next to the school.",
        "in front of ↔ behind; above ↔ below; between (ở giữa hai vật)."
      ],
      formulas: [
        { label: "Trên / dưới", form: "on / under / above / below", example_en: "The lamp is above the desk.", example_vi: "Cái đèn ở phía trên bàn." },
        { label: "Trước / sau / cạnh", form: "in front of / behind / next to", example_en: "He sat behind me.", example_vi: "Anh ấy ngồi sau tôi." },
        { label: "Giữa / gần", form: "between / near", example_en: "The shop is between the bank and the café.", example_vi: "Cửa hàng nằm giữa ngân hàng và quán cà phê." }
      ],
      notes: [
        "between dùng cho HAI vật/người; among dùng cho từ ba trở lên.",
        "next to = beside = ngay cạnh.",
        "under (ngay bên dưới) khác below (thấp hơn nói chung)."
      ],
      quiz: [
        { q: "The ball is ___ the box (bên trong).", options: ["in", "on", "under", "next"], answer: "in", explain: "Bên trong → 'in'." },
        { q: "The cat is ___ the table (bên dưới).", options: ["on", "in", "under", "above"], answer: "under", explain: "Ngay bên dưới → 'under'." },
        { q: "The bank is ___ to the school (ngay cạnh).", options: ["next", "near", "between", "behind"], answer: "next", explain: "Ngay cạnh → 'next to'." },
        { q: "She is standing ___ me (phía sau).", options: ["in front of", "behind", "next", "on"], answer: "behind", explain: "Phía sau → 'behind'." },
        { q: "The picture is ___ the wall.", options: ["in", "on", "under", "between"], answer: "on", explain: "Trên bề mặt → 'on'." },
        { q: "The café is ___ the bank and the shop.", options: ["between", "among", "next", "behind"], answer: "between", explain: "Ở giữa HAI vật → 'between'." }
      ]
    },
    {
      id: 24,
      slug: "adverbs-of-frequency",
      title_en: "Adverbs of Frequency",
      title_vi: "Trạng từ tần suất",
      emoji: "🔁",
      level: "A1-A2",
      intro: "Trạng từ tần suất cho biết một việc xảy ra thường xuyên đến mức nào: always, usually, often, sometimes, rarely, never.",
      usage: [
        "Chỉ mức độ thường xuyên: always (100%), usually, often, sometimes, rarely, never (0%).",
        "Thường dùng với thì hiện tại đơn để nói thói quen."
      ],
      formulas: [
        { label: "Với động từ thường", form: "S + adv + V", example_en: "She always gets up early.", example_vi: "Cô ấy luôn dậy sớm." },
        { label: "Với 'to be'", form: "S + be + adv", example_en: "He is never late.", example_vi: "Anh ấy không bao giờ trễ." }
      ],
      notes: [
        "Trạng từ tần suất đứng TRƯỚC động từ thường nhưng SAU động từ 'to be'.",
        "Thứ tự giảm dần: always > usually > often > sometimes > rarely > never.",
        "'sometimes' có thể đứng đầu câu: Sometimes I walk to school."
      ],
      quiz: [
        { q: "She ___ late for work.", options: ["is never", "never is", "is not never", "never"], answer: "is never", explain: "Sau động từ 'to be' → 'is never'." },
        { q: "They ___ to the gym.", options: ["often go", "go often", "often goes", "goes often"], answer: "often go", explain: "Trước động từ thường → 'often go' (they → go)." },
        { q: "Choose the correct sentence:", options: ["I always drink water.", "I drink always water.", "Always I drink water.", "I am always drink water."], answer: "I always drink water.", explain: "Trạng từ tần suất đứng trước động từ thường." },
        { q: "Which means 100%?", options: ["never", "always", "sometimes", "rarely"], answer: "always", explain: "'always' = luôn luôn = 100%." },
        { q: "He is ___ friendly.", options: ["usual", "usually", "usualy", "use"], answer: "usually", explain: "Trạng từ là 'usually' (không phải tính từ 'usual')." },
        { q: "We ___ watch TV at night.", options: ["sometimes", "sometime", "some times", "sometimes are"], answer: "sometimes", explain: "'sometimes' + động từ thường." }
      ]
    },
    {
      id: 25,
      slug: "past-continuous",
      title_en: "Past Continuous",
      title_vi: "Quá khứ tiếp diễn",
      emoji: "🎞️",
      level: "A2",
      intro: "Thì quá khứ tiếp diễn diễn tả hành động đang xảy ra tại một thời điểm trong quá khứ, hoặc đang xảy ra thì bị hành động khác cắt ngang.",
      usage: [
        "Hành động đang diễn ra tại một thời điểm quá khứ: At 8 p.m. last night, I was studying.",
        "Một hành động đang xảy ra thì hành động khác xen vào: I was cooking when he called.",
        "Hai hành động song song (while): She was reading while he was cooking."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + was/were + V-ing", example_en: "They were playing football.", example_vi: "Họ lúc đó đang chơi bóng đá." },
        { label: "Phủ định", form: "S + was/were + not + V-ing", example_en: "I wasn't sleeping.", example_vi: "Lúc đó tôi không ngủ." },
        { label: "Nghi vấn", form: "Was/Were + S + V-ing?", example_en: "What were you doing?", example_vi: "Bạn đang làm gì thế?" }
      ],
      notes: [
        "I/he/she/it → was; you/we/they → were.",
        "Hành động dài (đang diễn ra) dùng tiếp diễn; hành động ngắn cắt ngang dùng quá khứ đơn.",
        "'while' thường + quá khứ tiếp diễn; 'when' thường + quá khứ đơn."
      ],
      quiz: [
        { q: "At 7 p.m. yesterday, I ___ dinner.", options: ["have", "had", "was having", "am having"], answer: "was having", explain: "Đang diễn ra tại một thời điểm quá khứ → was + V-ing." },
        { q: "They ___ TV when I arrived.", options: ["watched", "were watching", "are watching", "watch"], answer: "were watching", explain: "Hành động đang diễn ra thì bị cắt ngang → were watching." },
        { q: "While she ___, the phone rang.", options: ["slept", "was sleeping", "sleeps", "is sleeping"], answer: "was sleeping", explain: "'while' + quá khứ tiếp diễn." },
        { q: "___ you working at 9 last night?", options: ["Was", "Were", "Did", "Are"], answer: "Were", explain: "Chủ ngữ 'you' → 'Were' + V-ing." },
        { q: "He ___ listening; he was asleep.", options: ["wasn't", "weren't", "didn't", "isn't"], answer: "wasn't", explain: "'He' → phủ định 'wasn't' + V-ing." },
        { q: "We were studying ___ it started to rain.", options: ["while", "when", "during", "so"], answer: "when", explain: "Hành động ngắn cắt ngang (started) → nối bằng 'when'." }
      ]
    },
    {
      id: 26,
      slug: "used-to",
      title_en: "used to",
      title_vi: "used to (thói quen quá khứ)",
      emoji: "🕰️",
      level: "A2",
      intro: "'used to' diễn tả thói quen hoặc trạng thái trong quá khứ mà bây giờ không còn nữa.",
      usage: [
        "Thói quen quá khứ đã chấm dứt: I used to smoke, but I stopped.",
        "Trạng thái quá khứ không còn: There used to be a cinema here."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + used to + V", example_en: "She used to live in Hue.", example_vi: "Cô ấy từng sống ở Huế." },
        { label: "Phủ định", form: "S + didn't use to + V", example_en: "He didn't use to like tea.", example_vi: "Trước đây anh ấy không thích trà." },
        { label: "Nghi vấn", form: "Did + S + use to + V?", example_en: "Did you use to play sports?", example_vi: "Trước đây bạn có chơi thể thao không?" }
      ],
      notes: [
        "Ở phủ định và nghi vấn, bỏ '-d': didn't use to / Did … use to.",
        "Sau 'used to' luôn là động từ nguyên thể.",
        "Đừng nhầm với 'be used to + V-ing' (quen với việc gì) — nghĩa khác."
      ],
      quiz: [
        { q: "I ___ play the piano when I was young.", options: ["use to", "used to", "am used to", "using to"], answer: "used to", explain: "Thói quen quá khứ → 'used to' + V." },
        { q: "She ___ like coffee, but now she loves it.", options: ["didn't used to", "didn't use to", "doesn't use to", "not used to"], answer: "didn't use to", explain: "Phủ định → 'didn't use to' (bỏ -d)." },
        { q: "There ___ a shop here.", options: ["used to be", "use to be", "used to being", "uses to be"], answer: "used to be", explain: "Trạng thái quá khứ không còn → 'used to be'." },
        { q: "___ you use to live here?", options: ["Did", "Do", "Was", "Used"], answer: "Did", explain: "Câu hỏi → 'Did … use to'." },
        { q: "He used to ___ a lot.", options: ["travelled", "travels", "travel", "traveling"], answer: "travel", explain: "Sau 'used to' là động từ nguyên thể." },
        { q: "We ___ have a dog when I was a kid.", options: ["used to", "use to", "are used to", "using"], answer: "used to", explain: "Thói quen quá khứ → 'used to'." }
      ]
    },
    {
      id: 27,
      slug: "quantifiers-much-many",
      title_en: "much / many / a lot of / few / little",
      title_vi: "Lượng từ (much / many / few / little)",
      emoji: "⚖️",
      level: "A2",
      intro: "Các lượng từ chỉ số lượng: many/few/a few dùng với danh từ đếm được; much/little/a little dùng với danh từ không đếm được; a lot of dùng với cả hai.",
      usage: [
        "Đếm được số nhiều: many books, a few friends.",
        "Không đếm được: much water, a little sugar.",
        "Cả hai (thường trong câu khẳng định): a lot of / lots of."
      ],
      formulas: [
        { label: "Đếm được", form: "many / (a) few + N số nhiều", example_en: "I have many friends.", example_vi: "Tôi có nhiều bạn." },
        { label: "Không đếm được", form: "much / (a) little + N", example_en: "There isn't much time.", example_vi: "Không có nhiều thời gian." },
        { label: "Cả hai", form: "a lot of / lots of + N", example_en: "She has a lot of money.", example_vi: "Cô ấy có nhiều tiền." }
      ],
      notes: [
        "'much' thường dùng trong câu phủ định/nghi vấn; 'a lot of' dùng trong câu khẳng định.",
        "a few / a little = một ít (đủ, tích cực); few / little = ít ỏi (gần như không, tiêu cực).",
        "many + đếm được; much + không đếm được."
      ],
      quiz: [
        { q: "How ___ water do you drink?", options: ["many", "much", "few", "a lot"], answer: "much", explain: "water không đếm được → 'much'." },
        { q: "I don't have ___ friends here.", options: ["much", "many", "a little", "little water"], answer: "many", explain: "friends đếm được → 'many'." },
        { q: "She has a ___ of books.", options: ["lot", "much", "many", "few"], answer: "lot", explain: "'a lot of' + danh từ." },
        { q: "There is ___ milk in the cup. (một ít)", options: ["a little", "a few", "many", "few"], answer: "a little", explain: "milk không đếm được, nghĩa 'một ít' → 'a little'." },
        { q: "He has ___ friends. (một vài)", options: ["a little", "much", "a few", "little"], answer: "a few", explain: "friends đếm được, nghĩa 'một vài' → 'a few'." },
        { q: "How ___ apples are there?", options: ["much", "many", "little", "a lot"], answer: "many", explain: "apples đếm được → 'many'." }
      ]
    },
    {
      id: 28,
      slug: "reflexive-pronouns",
      title_en: "Reflexive Pronouns",
      title_vi: "Đại từ phản thân",
      emoji: "🪞",
      level: "A2",
      intro: "Đại từ phản thân (myself, yourself, himself…) dùng khi chủ ngữ và tân ngữ là cùng một người, hoặc để nhấn mạnh.",
      usage: [
        "Chủ ngữ và tân ngữ trùng nhau: I hurt myself.",
        "Nhấn mạnh: She did it herself.",
        "by + phản thân = tự mình / một mình: He lives by himself."
      ],
      formulas: [
        { label: "Số ít", form: "myself / yourself / himself / herself / itself", example_en: "He cut himself.", example_vi: "Anh ấy tự cắt vào tay mình." },
        { label: "Số nhiều", form: "ourselves / yourselves / themselves", example_en: "They enjoyed themselves.", example_vi: "Họ đã có khoảng thời gian vui vẻ." }
      ],
      notes: [
        "Số ít kết thúc bằng -self; số nhiều kết thúc bằng -selves.",
        "by myself = một mình / tự mình.",
        "Nhiều động từ tiếng Anh không dùng phản thân dù tiếng Việt có 'tự': He got dressed."
      ],
      quiz: [
        { q: "I taught ___ to swim.", options: ["me", "myself", "mine", "my"], answer: "myself", explain: "Chủ ngữ và tân ngữ cùng là 'I' → 'myself'." },
        { q: "She looked at ___ in the mirror.", options: ["her", "herself", "hers", "she"], answer: "herself", explain: "Cùng một người → 'herself'." },
        { q: "They enjoyed ___ at the party.", options: ["theirself", "themself", "themselves", "theirselves"], answer: "themselves", explain: "Số nhiều → 'themselves'." },
        { q: "He lives by ___.", options: ["himself", "hisself", "him", "his"], answer: "himself", explain: "by himself = một mình." },
        { q: "We made the cake ___.", options: ["ourself", "ourselves", "us", "our"], answer: "ourselves", explain: "'we' số nhiều → 'ourselves'." },
        { q: "Be careful! Don't hurt ___.", options: ["you", "yourself", "yours", "your"], answer: "yourself", explain: "Cùng người → 'yourself'." }
      ]
    },
    {
      id: 29,
      slug: "indefinite-pronouns",
      title_en: "Indefinite Pronouns",
      title_vi: "Đại từ bất định",
      emoji: "🫥",
      level: "A2",
      intro: "Đại từ bất định (someone, anything, everybody, nowhere…) chỉ người, vật, nơi chốn không xác định cụ thể.",
      usage: [
        "some- trong câu khẳng định: Someone is knocking.",
        "any- trong câu phủ định/nghi vấn: I didn't see anyone. Is there anything?",
        "every- (mọi) và no- (không): Everyone is here. Nobody came."
      ],
      formulas: [
        { label: "Người", form: "someone/anyone/everyone/no one", example_en: "Everyone is welcome.", example_vi: "Mọi người đều được chào đón." },
        { label: "Vật", form: "something/anything/everything/nothing", example_en: "I need something to eat.", example_vi: "Tôi cần gì đó để ăn." },
        { label: "Nơi chốn", form: "somewhere/anywhere/everywhere/nowhere", example_en: "Let's go somewhere quiet.", example_vi: "Đi đâu đó yên tĩnh đi." }
      ],
      notes: [
        "Đại từ bất định đi với động từ SỐ ÍT: Everyone is here (không phải 'are').",
        "no-/nothing/nobody đã mang nghĩa phủ định → động từ ở dạng khẳng định: Nobody knows.",
        "some- dùng trong câu mời/đề nghị: Would you like something to drink?"
      ],
      quiz: [
        { q: "___ is knocking at the door.", options: ["Someone", "Anyone", "Anything", "Nowhere"], answer: "Someone", explain: "Câu khẳng định, chỉ người → 'Someone'." },
        { q: "I didn't tell ___.", options: ["someone", "anyone", "everyone", "no"], answer: "anyone", explain: "Câu phủ định → 'anyone'." },
        { q: "___ knows the answer. (không ai)", options: ["Nobody", "Anybody", "Somebody", "Everybody"], answer: "Nobody", explain: "Nghĩa 'không ai' → 'Nobody' (+ động từ khẳng định)." },
        { q: "Everyone ___ happy.", options: ["are", "is", "were", "have"], answer: "is", explain: "Đại từ bất định đi với động từ số ít → 'is'." },
        { q: "Would you like ___ to drink?", options: ["anything", "something", "nothing", "nowhere"], answer: "something", explain: "Lời mời → dùng 'some-' → 'something'." },
        { q: "I looked ___ but couldn't find it.", options: ["somewhere", "everywhere", "nowhere", "anywhere"], answer: "everywhere", explain: "Nghĩa 'khắp mọi nơi' → 'everywhere'." }
      ]
    },
    {
      id: 30,
      slug: "one-ones",
      title_en: "one / ones",
      title_vi: "one / ones",
      emoji: "1️⃣",
      level: "A2",
      intro: "'one' (số ít) và 'ones' (số nhiều) dùng để thay cho một danh từ đã nhắc tới, tránh lặp lại.",
      usage: [
        "Thay danh từ đếm được số ít: I lost my pen, so I bought a new one.",
        "Thay danh từ số nhiều: These shoes are old; I want new ones.",
        "Sau 'which': Which one do you want?"
      ],
      formulas: [
        { label: "Số ít", form: "a/the/this + (adj) + one", example_en: "This book is boring; give me that one.", example_vi: "Cuốn này chán; đưa tôi cuốn kia." },
        { label: "Số nhiều", form: "(adj) + ones", example_en: "I like the red ones.", example_vi: "Tôi thích những cái màu đỏ." }
      ],
      notes: [
        "one/ones chỉ thay cho danh từ ĐẾM ĐƯỢC (không thay danh từ không đếm được).",
        "Sau tính từ, dùng one/ones: the big one, the small ones.",
        "'one' thay danh từ số ít, 'ones' thay danh từ số nhiều."
      ],
      quiz: [
        { q: "My phone is broken; I need a new ___.", options: ["one", "ones", "it", "that"], answer: "one", explain: "Thay danh từ số ít 'phone' → 'one'." },
        { q: "These apples are bad; give me the good ___.", options: ["one", "ones", "it", "them"], answer: "ones", explain: "Thay danh từ số nhiều → 'ones'." },
        { q: "Which ___ do you prefer, the blue or the green?", options: ["one", "ones", "it", "thing"], answer: "one", explain: "Chọn một → 'one'." },
        { q: "I don't like these cups. Show me some other ___.", options: ["one", "ones", "it", "them"], answer: "ones", explain: "Số nhiều 'cups' → 'ones'." },
        { q: "That car is nice, but I like this ___ better.", options: ["one", "ones", "it", "car"], answer: "one", explain: "Số ít → 'one'." },
        { q: "The red shoes or the black ___?", options: ["one", "ones", "it", "them"], answer: "ones", explain: "shoes số nhiều → 'ones'." }
      ]
    },
    {
      id: 31,
      slug: "adverbs-of-manner",
      title_en: "Adverbs of Manner",
      title_vi: "Trạng từ chỉ cách thức",
      emoji: "🏃",
      level: "A2",
      intro: "Trạng từ chỉ cách thức cho biết hành động được thực hiện NHƯ THẾ NÀO (quickly, slowly, well, carefully). Đa số tạo bằng cách thêm -ly vào tính từ.",
      usage: [
        "Mô tả cách thức của hành động: She sings beautifully. He drives carefully.",
        "Thường đứng sau động từ hoặc sau tân ngữ."
      ],
      formulas: [
        { label: "Tạo trạng từ", form: "adjective + ly", example_en: "quick → quickly", example_vi: "nhanh → một cách nhanh" },
        { label: "Vị trí", form: "S + V (+ O) + adv", example_en: "He speaks English fluently.", example_vi: "Anh ấy nói tiếng Anh trôi chảy." }
      ],
      notes: [
        "Tính từ tận cùng -y đổi thành -ily: happy → happily; -le đổi thành -ly: gentle → gently.",
        "Bất quy tắc: good → well; fast → fast; hard → hard.",
        "Đừng nhầm: 'hardly' nghĩa là 'hầu như không', không phải 'chăm chỉ'."
      ],
      quiz: [
        { q: "She sings ___.", options: ["beautiful", "beautifully", "beauty", "beautiful ly"], answer: "beautifully", explain: "Bổ nghĩa cho động từ 'sing' → trạng từ 'beautifully'." },
        { q: "He runs very ___.", options: ["quick", "quickly", "quik", "quicker"], answer: "quickly", explain: "quick → quickly." },
        { q: "The adverb of 'good' is ___.", options: ["goodly", "well", "good", "gooder"], answer: "well", explain: "Trạng từ của 'good' là 'well' (bất quy tắc)." },
        { q: "They worked ___. (chăm chỉ)", options: ["hardly", "hard", "hardness", "harder"], answer: "hard", explain: "'hard' vừa là tính từ vừa là trạng từ; 'hardly' = hầu như không." },
        { q: "Please drive ___.", options: ["careful", "carefully", "carefuly", "care"], answer: "carefully", explain: "careful → carefully." },
        { q: "The children played ___. (vui vẻ)", options: ["happy", "happily", "happyly", "happiness"], answer: "happily", explain: "happy → happily (-y đổi thành -ily)." }
      ]
    },
    {
      id: 32,
      slug: "adverbs-of-degree",
      title_en: "Adverbs of Degree",
      title_vi: "Trạng từ chỉ mức độ",
      emoji: "📶",
      level: "A2",
      intro: "Trạng từ chỉ mức độ (very, too, quite, really, so, enough) cho biết MỨC ĐỘ của một tính từ, trạng từ hoặc hành động.",
      usage: [
        "Tăng mức độ: very hot, really good, so tired.",
        "'too' = quá (mang nghĩa tiêu cực): too expensive.",
        "'enough' = đủ, đứng SAU tính từ: old enough."
      ],
      formulas: [
        { label: "Trước tính từ/trạng từ", form: "very/too/quite/really + adj", example_en: "It's very cold today.", example_vi: "Hôm nay trời rất lạnh." },
        { label: "enough (sau tính từ)", form: "adj + enough", example_en: "He isn't tall enough.", example_vi: "Anh ấy không đủ cao." }
      ],
      notes: [
        "'very' (rất, trung tính) khác 'too' (quá, tiêu cực): very hot vs too hot to drink.",
        "'enough' đứng SAU tính từ/trạng từ nhưng TRƯỚC danh từ: good enough / enough money.",
        "quite = khá; really = thực sự."
      ],
      quiz: [
        { q: "This coffee is ___ hot to drink. (quá)", options: ["very", "too", "enough", "so"], answer: "too", explain: "Nghĩa tiêu cực 'quá … để không thể' → 'too'." },
        { q: "She is ___ tired.", options: ["very", "too much", "enough", "an"], answer: "very", explain: "'very' + tính từ." },
        { q: "He isn't old ___ to drive.", options: ["enough", "very", "too", "quite"], answer: "enough", explain: "'enough' đứng sau tính từ 'old'." },
        { q: "The film was ___ good. (thực sự)", options: ["real", "really", "realy", "reallly"], answer: "really", explain: "Trạng từ 'really' bổ nghĩa cho 'good'." },
        { q: "It's ___ cold to go out. (quá)", options: ["very", "enough", "too", "quite"], answer: "too", explain: "Nghĩa tiêu cực → 'too'." },
        { q: "Do we have ___? (đủ tiền)", options: ["money enough", "enough money", "too money", "enough of money"], answer: "enough money", explain: "'enough' đứng TRƯỚC danh từ → 'enough money'." }
      ]
    },
    {
      id: 33,
      slug: "already-yet-just-still",
      title_en: "already / yet / just / still",
      title_vi: "already / yet / just / still",
      emoji: "⏱️",
      level: "A2",
      intro: "already, yet, just, still là các trạng từ chỉ thời gian, cho biết trạng thái của hành động.",
      usage: [
        "just: vừa mới — I have just finished.",
        "already: đã rồi (sớm hơn mong đợi, câu khẳng định) — She has already left.",
        "yet: chưa/đã…chưa (câu phủ định & nghi vấn, cuối câu) — He hasn't arrived yet.",
        "still: vẫn còn (việc tiếp diễn) — I still live here."
      ],
      formulas: [
        { label: "just / already", form: "S + have + just/already + V3", example_en: "I've already seen it.", example_vi: "Tôi đã xem nó rồi." },
        { label: "yet (cuối câu)", form: "… + yet? / not … yet", example_en: "Has it started yet?", example_vi: "Nó bắt đầu chưa?" },
        { label: "still", form: "S + still + V", example_en: "She still works here.", example_vi: "Cô ấy vẫn còn làm việc ở đây." }
      ],
      notes: [
        "already & just thường đứng giữa (sau trợ động từ, trước động từ chính).",
        "yet đứng CUỐI câu, chỉ dùng trong câu phủ định và nghi vấn.",
        "still đứng trước động từ thường, sau 'to be'; nhấn mạnh việc vẫn tiếp diễn."
      ],
      quiz: [
        { q: "I have ___ finished my work. (đã rồi)", options: ["yet", "already", "still", "ever"], answer: "already", explain: "Câu khẳng định, nghĩa 'đã rồi' → 'already'." },
        { q: "Has the bus arrived ___?", options: ["already", "yet", "just", "still"], answer: "yet", explain: "Câu hỏi, đứng cuối → 'yet'." },
        { q: "She has ___ arrived. (vừa mới)", options: ["still", "yet", "just", "ever"], answer: "just", explain: "Nghĩa 'vừa mới' → 'just'." },
        { q: "He ___ lives with his parents. (vẫn còn)", options: ["yet", "already", "still", "just"], answer: "still", explain: "Nghĩa 'vẫn còn' → 'still'." },
        { q: "They haven't eaten ___.", options: ["already", "yet", "just", "still"], answer: "yet", explain: "Câu phủ định, đứng cuối → 'yet'." },
        { q: "We've ___ started; it's too early to stop. (vừa)", options: ["yet", "just", "still", "ago"], answer: "just", explain: "Nghĩa 'vừa mới' → 'just'." }
      ]
    },
    {
      id: 34,
      slug: "as-as",
      title_en: "as ... as (Equal Comparison)",
      title_vi: "So sánh bằng (as … as)",
      emoji: "🟰",
      level: "A2",
      intro: "Cấu trúc so sánh bằng 'as … as' dùng để nói hai đối tượng ngang nhau về một đặc điểm; phủ định 'not as … as' nghĩa là không bằng.",
      usage: [
        "Bằng nhau: She is as tall as her brother.",
        "Không bằng: This film isn't as good as that one.",
        "Với số lượng: as many/much … as."
      ],
      formulas: [
        { label: "Bằng nhau", form: "as + adj/adv + as", example_en: "He runs as fast as me.", example_vi: "Anh ấy chạy nhanh như tôi." },
        { label: "Không bằng", form: "not as/so + adj + as", example_en: "Today isn't as cold as yesterday.", example_vi: "Hôm nay không lạnh bằng hôm qua." },
        { label: "Số lượng", form: "as many/much + N + as", example_en: "I have as many books as you.", example_vi: "Tôi có nhiều sách bằng bạn." }
      ],
      notes: [
        "Giữa 'as … as' là tính từ/trạng từ ở dạng NGUYÊN GỐC (không thêm -er).",
        "not as … as = not so … as (kém hơn).",
        "as many + đếm được; as much + không đếm được."
      ],
      quiz: [
        { q: "She is as tall ___ her sister.", options: ["as", "than", "like", "so"], answer: "as", explain: "Cấu trúc 'as + adj + as'." },
        { q: "He runs as ___ as a horse.", options: ["faster", "fast", "fastest", "more fast"], answer: "fast", explain: "Giữa 'as … as' dùng dạng nguyên gốc 'fast'." },
        { q: "This book isn't as interesting ___ that one.", options: ["than", "as", "like", "so"], answer: "as", explain: "not as … as." },
        { q: "I have as ___ money as you. (không đếm được)", options: ["many", "much", "more", "lot"], answer: "much", explain: "money không đếm được → 'as much'." },
        { q: "Today is ___ cold as yesterday. (không bằng)", options: ["not as", "as not", "not than", "no as"], answer: "not as", explain: "Phủ định 'not as … as'." },
        { q: "Her car is as expensive ___ mine.", options: ["than", "as", "like", "that"], answer: "as", explain: "as … as." }
      ]
    },
    {
      id: 35,
      slug: "too-enough",
      title_en: "too / enough (+ to V)",
      title_vi: "too / enough (+ to V)",
      emoji: "➕",
      level: "A2",
      intro: "'too' và 'enough' diễn tả mức độ so với một mục đích: too = quá (đến mức không thể), enough = đủ (để làm gì).",
      usage: [
        "too + adj/adv (+ to V): quá … để (không thể) — It's too hot to drink.",
        "adj/adv + enough (+ to V): đủ … để — He's old enough to drive.",
        "enough + danh từ: đủ (số lượng) — We have enough chairs."
      ],
      formulas: [
        { label: "too", form: "too + adj/adv (+ to V)", example_en: "She's too young to work.", example_vi: "Cô ấy quá trẻ để đi làm." },
        { label: "enough (sau adj)", form: "adj + enough (+ to V)", example_en: "Is it warm enough to swim?", example_vi: "Trời có đủ ấm để bơi không?" },
        { label: "enough (trước N)", form: "enough + N", example_en: "I don't have enough time.", example_vi: "Tôi không có đủ thời gian." }
      ],
      notes: [
        "'too' đứng TRƯỚC tính từ; 'enough' đứng SAU tính từ nhưng TRƯỚC danh từ.",
        "'too' mang nghĩa tiêu cực (quá mức); 'very' chỉ là 'rất' (trung tính).",
        "Sau cấu trúc thường có 'to + V' chỉ mục đích/kết quả."
      ],
      quiz: [
        { q: "The box is ___ heavy to lift.", options: ["too", "enough", "very much", "so that"], answer: "too", explain: "'quá nặng để nhấc' → 'too'." },
        { q: "He isn't tall ___ to reach the shelf.", options: ["too", "enough", "very", "so"], answer: "enough", explain: "'đủ cao' → 'tall enough'." },
        { q: "We don't have ___ chairs for everyone.", options: ["too", "enough", "very", "much"], answer: "enough", explain: "'enough' đứng trước danh từ 'chairs'." },
        { q: "It's ___ late to call her now.", options: ["enough", "too", "so that", "very much"], answer: "too", explain: "'quá muộn để gọi' → 'too'." },
        { q: "She is old ___ to make her own decisions.", options: ["too", "enough", "very", "so"], answer: "enough", explain: "'old enough' → 'enough' sau tính từ." },
        { q: "This tea is too hot ___ drink.", options: ["for", "to", "that", "so"], answer: "to", explain: "Cấu trúc 'too … to V'." }
      ]
    },
    {
      id: 36,
      slug: "ed-ing-adjectives",
      title_en: "-ed / -ing Adjectives",
      title_vi: "Tính từ đuôi -ed / -ing",
      emoji: "😴",
      level: "A2",
      intro: "Nhiều tính từ có cả dạng -ed và -ing. Dạng -ed mô tả CẢM XÚC của người; dạng -ing mô tả TÍNH CHẤT của sự vật/sự việc gây ra cảm xúc.",
      usage: [
        "-ed (cảm xúc của người): I am bored. She was surprised.",
        "-ing (bản chất gây cảm xúc): The film is boring. The news was surprising."
      ],
      formulas: [
        { label: "-ed (người cảm thấy)", form: "S (người) + be + adj-ed", example_en: "I'm interested in history.", example_vi: "Tôi thấy hứng thú với lịch sử." },
        { label: "-ing (vật/việc gây ra)", form: "S (vật/việc) + be + adj-ing", example_en: "History is interesting.", example_vi: "Lịch sử thì thú vị." }
      ],
      notes: [
        "Người thường đi với -ed (khi nói về cảm xúc của họ).",
        "Cặp hay gặp: bored/boring, interested/interesting, tired/tiring, excited/exciting, surprised/surprising, confused/confusing.",
        "Sau 'interested' dùng 'in'; sau 'excited/worried' dùng 'about'."
      ],
      quiz: [
        { q: "I was ___ by the long lecture.", options: ["boring", "bored", "bore", "bores"], answer: "bored", explain: "Người cảm thấy → dạng -ed 'bored'." },
        { q: "The movie was really ___.", options: ["excited", "exciting", "excite", "excites"], answer: "exciting", explain: "Vật/việc gây cảm xúc → dạng -ing 'exciting'." },
        { q: "She felt ___ after the trip.", options: ["tiring", "tired", "tire", "tires"], answer: "tired", explain: "Người cảm thấy → 'tired'." },
        { q: "This book is very ___.", options: ["interested", "interesting", "interest", "interests"], answer: "interesting", explain: "Vật gây cảm xúc → 'interesting'." },
        { q: "Are you ___ about the trip?", options: ["exciting", "excited", "excite", "excites"], answer: "excited", explain: "Người cảm thấy → 'excited'." },
        { q: "The instructions were ___.", options: ["confused", "confusing", "confuse", "confuses"], answer: "confusing", explain: "Vật gây bối rối → 'confusing'." }
      ]
    },
    {
      id: 37,
      slug: "zero-article",
      title_en: "Zero Article",
      title_vi: "Không dùng mạo từ",
      emoji: "🚫",
      level: "A2",
      intro: "Nhiều trường hợp danh từ KHÔNG dùng mạo từ (a/an/the): danh từ số nhiều/không đếm được mang nghĩa chung, tên riêng, bữa ăn, môn thể thao, ngôn ngữ…",
      usage: [
        "Danh từ số nhiều/không đếm được mang nghĩa chung: Cats are cute. Water is important.",
        "Tên riêng, hầu hết tên nước, thành phố: Vietnam, London, Mary.",
        "Bữa ăn, môn thể thao, ngôn ngữ, môn học: have breakfast, play football, speak English."
      ],
      formulas: [
        { label: "Nghĩa chung", form: "Ø + N số nhiều / không đếm được", example_en: "Dogs are loyal.", example_vi: "Chó thì trung thành." },
        { label: "Cụm cố định", form: "Ø + breakfast / football / school", example_en: "I go to school by bike.", example_vi: "Tôi đi học bằng xe đạp." }
      ],
      notes: [
        "Nói chung chung (mọi con mèo) → không mạo từ; nói cụ thể → dùng 'the'.",
        "go to school/bed/work (mục đích) không mạo từ; nhưng 'go to the school' (tòa nhà cụ thể) có 'the'.",
        "Không dùng 'the' với: tên người, hầu hết tên nước (Vietnam), thành phố, ngôn ngữ, môn học."
      ],
      quiz: [
        { q: "___ dogs are friendly animals. (nói chung)", options: ["The", "A", "An", "Ø (không mạo từ)"], answer: "Ø (không mạo từ)", explain: "Danh từ số nhiều nghĩa chung → không mạo từ." },
        { q: "She speaks ___ French very well.", options: ["a", "an", "the", "Ø (không mạo từ)"], answer: "Ø (không mạo từ)", explain: "Tên ngôn ngữ → không mạo từ." },
        { q: "I have ___ breakfast at 7.", options: ["a", "an", "the", "Ø (không mạo từ)"], answer: "Ø (không mạo từ)", explain: "Bữa ăn → không mạo từ." },
        { q: "We live in ___ Vietnam.", options: ["a", "an", "the", "Ø (không mạo từ)"], answer: "Ø (không mạo từ)", explain: "Hầu hết tên nước → không mạo từ." },
        { q: "They play ___ football on Sunday.", options: ["a", "the", "an", "Ø (không mạo từ)"], answer: "Ø (không mạo từ)", explain: "Môn thể thao → không mạo từ." },
        { q: "The ___ water in this bottle is dirty. (cụ thể)", options: ["A", "An", "The", "Ø (không mạo từ)"], answer: "The", explain: "Nói cụ thể (nước trong chai này) → dùng 'The'." }
      ]
    },
    {
      id: 38,
      slug: "prepositions-of-movement",
      title_en: "Prepositions of Movement",
      title_vi: "Giới từ chỉ chuyển động",
      emoji: "➡️",
      level: "A2",
      intro: "Giới từ chỉ chuyển động mô tả hướng di chuyển: to, into, out of, onto, through, across, along, up, down, towards.",
      usage: [
        "Đến một đích: go to school, run to the door.",
        "Vào trong / ra khỏi: go into the room, come out of the house.",
        "Xuyên qua / băng qua: walk through the park, swim across the river."
      ],
      formulas: [
        { label: "Hướng đến", form: "to / towards / into / onto", example_en: "She walked into the room.", example_vi: "Cô ấy đi vào phòng." },
        { label: "Qua / dọc", form: "through / across / along", example_en: "We drove across the bridge.", example_vi: "Chúng tôi lái xe qua cầu." }
      ],
      notes: [
        "into = vào bên trong (không gian 3 chiều); onto = lên trên bề mặt.",
        "through = xuyên qua bên trong (through the tunnel); across = băng qua bề mặt (across the street).",
        "'go home' không dùng giới từ (không nói 'go to home')."
      ],
      quiz: [
        { q: "She jumped ___ the pool.", options: ["into", "on", "at", "through"], answer: "into", explain: "Vào trong (không gian) → 'into'." },
        { q: "We walked ___ the bridge.", options: ["across", "into", "out", "onto"], answer: "across", explain: "Băng qua bề mặt → 'across'." },
        { q: "The train went ___ the tunnel.", options: ["across", "through", "onto", "along"], answer: "through", explain: "Xuyên qua bên trong → 'through'." },
        { q: "He ran ___ the door quickly.", options: ["to", "at", "of", "onto"], answer: "to", explain: "Hướng đến một đích → 'to'." },
        { q: "The cat climbed ___ the roof.", options: ["into", "onto", "through", "across"], answer: "onto", explain: "Lên trên bề mặt → 'onto'." },
        { q: "They walked ___ the river. (dọc theo)", options: ["across", "through", "along", "into"], answer: "along", explain: "Dọc theo → 'along'." }
      ]
    },
    {
      id: 39,
      slug: "time-clauses",
      title_en: "Time Clauses",
      title_vi: "Mệnh đề thời gian",
      emoji: "⏳",
      level: "A2",
      intro: "Mệnh đề thời gian bắt đầu bằng when, while, before, after, as soon as, until… cho biết thời điểm hành động xảy ra.",
      usage: [
        "when (khi), while (trong khi), before (trước khi), after (sau khi), as soon as (ngay khi), until (cho đến khi).",
        "Mệnh đề thời gian có thể đứng đầu hoặc cuối câu."
      ],
      formulas: [
        { label: "Vị trí", form: "When + mệnh đề, mệnh đề chính", example_en: "When it rains, I stay home.", example_vi: "Khi trời mưa, tôi ở nhà." },
        { label: "Chỉ tương lai", form: "as soon as + hiện tại đơn (không dùng will)", example_en: "I'll call you as soon as I arrive.", example_vi: "Tôi sẽ gọi bạn ngay khi đến nơi." }
      ],
      notes: [
        "Trong mệnh đề thời gian chỉ tương lai, dùng THÌ HIỆN TẠI (không dùng will).",
        "Nếu mệnh đề thời gian đứng đầu, có dấu phẩy sau nó.",
        "until = cho đến khi; before/after chỉ trình tự trước/sau."
      ],
      quiz: [
        { q: "___ I finish work, I'll go home.", options: ["When", "While", "During", "So"], answer: "When", explain: "Chỉ thời điểm → 'When'." },
        { q: "I'll wait here ___ you come back.", options: ["until", "while", "before", "after"], answer: "until", explain: "'cho đến khi' → 'until'." },
        { q: "Call me as soon as you ___.", options: ["will arrive", "arrive", "arrived", "arriving"], answer: "arrive", explain: "Mệnh đề thời gian chỉ tương lai → dùng hiện tại đơn." },
        { q: "___ she was cooking, he was reading.", options: ["While", "Until", "Before", "As soon as"], answer: "While", explain: "Hai việc song song → 'While'." },
        { q: "Brush your teeth ___ you go to bed.", options: ["before", "until", "while", "as"], answer: "before", explain: "'trước khi' → 'before'." },
        { q: "We had dinner ___ the movie finished.", options: ["until", "after", "while", "so"], answer: "after", explain: "'sau khi' → 'after'." }
      ]
    },
    {
      id: 40,
      slug: "question-tags",
      title_en: "Question Tags",
      title_vi: "Câu hỏi đuôi",
      emoji: "🏷️",
      level: "A2",
      intro: "Câu hỏi đuôi là phần hỏi ngắn ở cuối câu để xác nhận thông tin. Câu khẳng định → đuôi phủ định, và ngược lại.",
      usage: [
        "Câu khẳng định → đuôi phủ định: She is a doctor, isn't she?",
        "Câu phủ định → đuôi khẳng định: He can't swim, can he?"
      ],
      formulas: [
        { label: "Khẳng định → phủ định", form: "S + V …, trợ động từ + not + đại từ?", example_en: "You like tea, don't you?", example_vi: "Bạn thích trà, đúng không?" },
        { label: "Phủ định → khẳng định", form: "S + V-not …, trợ động từ + đại từ?", example_en: "She isn't here, is she?", example_vi: "Cô ấy không ở đây, phải không?" }
      ],
      notes: [
        "Đuôi dùng cùng trợ động từ với mệnh đề chính (is→isn't, do→don't, can→can't, have→haven't).",
        "Nếu không có trợ động từ (hiện tại/quá khứ đơn), dùng do/does/did.",
        "'I am' → đuôi là 'aren't I?'."
      ],
      quiz: [
        { q: "She is a teacher, ___?", options: ["isn't she", "is she", "doesn't she", "isn't it"], answer: "isn't she", explain: "Câu khẳng định với 'is' → đuôi 'isn't she'." },
        { q: "You don't like coffee, ___?", options: ["do you", "don't you", "are you", "you do"], answer: "do you", explain: "Câu phủ định → đuôi khẳng định 'do you'." },
        { q: "He can swim, ___?", options: ["can he", "can't he", "does he", "is he"], answer: "can't he", explain: "Khẳng định với 'can' → đuôi 'can't he'." },
        { q: "They went home, ___?", options: ["did they", "didn't they", "do they", "don't they"], answer: "didn't they", explain: "Quá khứ đơn khẳng định → đuôi 'didn't they'." },
        { q: "It isn't raining, ___?", options: ["is it", "isn't it", "does it", "it is"], answer: "is it", explain: "Câu phủ định → đuôi khẳng định 'is it'." },
        { q: "We have finished, ___?", options: ["have we", "haven't we", "do we", "didn't we"], answer: "haven't we", explain: "Khẳng định với 'have' → đuôi 'haven't we'." }
      ]
    },
    {
      id: 41,
      slug: "exclamations",
      title_en: "Exclamations: What...! / How...!",
      title_vi: "Câu cảm thán",
      emoji: "❗",
      level: "A2",
      intro: "Câu cảm thán bày tỏ cảm xúc mạnh (ngạc nhiên, thích thú). Dùng 'What' với danh từ và 'How' với tính từ/trạng từ.",
      usage: [
        "What + (a/an) + (adj) + danh từ: What a beautiful day!",
        "How + tính từ/trạng từ: How beautiful! How fast he runs!"
      ],
      formulas: [
        { label: "What (số ít đếm được)", form: "What + a/an + adj + N!", example_en: "What a lovely garden!", example_vi: "Khu vườn đẹp làm sao!" },
        { label: "What (số nhiều/không đếm được)", form: "What + adj + N!", example_en: "What beautiful flowers!", example_vi: "Những bông hoa đẹp quá!" },
        { label: "How", form: "How + adj/adv!", example_en: "How interesting!", example_vi: "Thú vị thật!" }
      ],
      notes: [
        "'What' đi với DANH TỪ; 'How' đi với TÍNH TỪ/TRẠNG TỪ.",
        "Danh từ đếm được số ít cần a/an sau 'What'; số nhiều và không đếm được thì không.",
        "Câu cảm thán thường kết thúc bằng dấu chấm than (!)."
      ],
      quiz: [
        { q: "___ a beautiful day!", options: ["What", "How", "Which", "Who"], answer: "What", explain: "Có danh từ 'day' → 'What'." },
        { q: "___ interesting!", options: ["What", "How", "What a", "Which"], answer: "How", explain: "Có tính từ đứng một mình → 'How'." },
        { q: "___ delicious food!", options: ["What a", "What", "How", "How a"], answer: "What", explain: "food không đếm được → 'What' + adj + N (không có 'a')." },
        { q: "___ a clever boy!", options: ["How", "What", "How a", "Which"], answer: "What", explain: "Danh từ đếm được số ít → 'What a'." },
        { q: "___ fast she runs!", options: ["What", "What a", "How", "Which"], answer: "How", explain: "Có trạng từ 'fast' → 'How'." },
        { q: "___ expensive these shoes are!", options: ["What", "What a", "How", "How a"], answer: "How", explain: "Có tính từ 'expensive' → 'How'." }
      ]
    },
    {
      id: 42,
      slug: "present-continuous-future",
      title_en: "Present Continuous for the Future",
      title_vi: "Hiện tại tiếp diễn chỉ tương lai",
      emoji: "📅",
      level: "A2",
      intro: "Thì hiện tại tiếp diễn còn dùng để nói về kế hoạch, sắp xếp đã định trước cho tương lai gần (đã có lịch cụ thể).",
      usage: [
        "Kế hoạch/cuộc hẹn đã sắp xếp: I'm meeting Tom tomorrow.",
        "Thường có trạng từ chỉ tương lai: tonight, tomorrow, next week."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + am/is/are + V-ing + (thời gian tương lai)", example_en: "We're leaving tonight.", example_vi: "Tối nay chúng tôi sẽ đi." },
        { label: "Nghi vấn", form: "Am/Is/Are + S + V-ing …?", example_en: "Are you doing anything this weekend?", example_vi: "Cuối tuần này bạn có làm gì không?" }
      ],
      notes: [
        "Dùng khi kế hoạch đã CHẮC CHẮN, đã sắp xếp (có thời gian, địa điểm).",
        "Khác 'will' (quyết định tức thời) và gần nghĩa với 'be going to'.",
        "Cần có mốc thời gian tương lai để không nhầm với hành động đang xảy ra."
      ],
      quiz: [
        { q: "I ___ my friends tonight. (đã hẹn)", options: ["meet", "am meeting", "met", "will meeting"], answer: "am meeting", explain: "Kế hoạch đã định → hiện tại tiếp diễn 'am meeting'." },
        { q: "She ___ to Paris next week. (đã đặt vé)", options: ["flies", "is flying", "fly", "flew"], answer: "is flying", explain: "Kế hoạch đã sắp xếp → 'is flying'." },
        { q: "___ you doing anything tomorrow?", options: ["Are", "Do", "Will", "Is"], answer: "Are", explain: "'you' → 'Are' + V-ing." },
        { q: "We ___ dinner with them on Friday.", options: ["have", "are having", "has", "will having"], answer: "are having", explain: "Kế hoạch đã hẹn → 'are having'." },
        { q: "They ___ married next month. (đã lên kế hoạch)", options: ["get", "are getting", "gets", "got"], answer: "are getting", explain: "Kế hoạch chắc chắn → 'are getting'." },
        { q: "He ___ the early train tomorrow.", options: ["is taking", "takes", "take", "will taking"], answer: "is taking", explain: "Sắp xếp cụ thể → 'is taking'." }
      ]
    },
    {
      id: 43,
      slug: "zero-conditional",
      title_en: "Zero Conditional",
      title_vi: "Câu điều kiện loại 0",
      emoji: "0️⃣",
      level: "A2",
      intro: "Câu điều kiện loại 0 diễn tả sự thật hiển nhiên, quy luật tự nhiên, thói quen luôn đúng. Cả hai vế đều dùng thì hiện tại đơn.",
      usage: [
        "Sự thật/quy luật: If you heat ice, it melts.",
        "Thói quen/hướng dẫn: If I'm tired, I go to bed early."
      ],
      formulas: [
        { label: "Cấu trúc", form: "If + hiện tại đơn, hiện tại đơn", example_en: "If you mix blue and yellow, you get green.", example_vi: "Nếu trộn xanh dương và vàng, bạn được màu xanh lá." }
      ],
      notes: [
        "Có thể thay 'if' bằng 'when' vì kết quả luôn đúng.",
        "Cả hai vế đều dùng hiện tại đơn.",
        "Diễn tả điều LUÔN đúng, không phải tình huống giả định."
      ],
      quiz: [
        { q: "If you heat water to 100°C, it ___.", options: ["boil", "boils", "will boil", "boiled"], answer: "boils", explain: "Điều kiện loại 0: cả hai vế hiện tại đơn → 'boils'." },
        { q: "Ice ___ if you leave it in the sun.", options: ["melt", "melts", "will melt", "melted"], answer: "melts", explain: "Quy luật tự nhiên → hiện tại đơn 'melts'." },
        { q: "If I ___ tired, I go to bed.", options: ["am", "will be", "was", "be"], answer: "am", explain: "Vế if dùng hiện tại đơn → 'am'." },
        { q: "Plants die if they ___ enough water.", options: ["don't get", "won't get", "didn't get", "not get"], answer: "don't get", explain: "Hiện tại đơn phủ định → 'don't get'." },
        { q: "If you press this button, the machine ___.", options: ["start", "starts", "will start", "started"], answer: "starts", explain: "Kết quả luôn đúng → hiện tại đơn 'starts'." },
        { q: "When it ___, the roads get wet.", options: ["rain", "rains", "will rain", "rained"], answer: "rains", explain: "'when' thay 'if' trong loại 0 → 'rains'." }
      ]
    },
    {
      id: 44,
      slug: "first-conditional",
      title_en: "First Conditional",
      title_vi: "Câu điều kiện loại 1",
      emoji: "🌦️",
      level: "A2",
      intro: "Câu điều kiện loại 1 diễn tả tình huống CÓ THỂ xảy ra ở hiện tại/tương lai và kết quả của nó. Vế if dùng hiện tại đơn, vế chính dùng will.",
      usage: [
        "Điều có khả năng thật xảy ra: If it rains, I'll stay home.",
        "Lời hứa, cảnh báo, điều kiện: If you study hard, you'll pass."
      ],
      formulas: [
        { label: "Cấu trúc", form: "If + hiện tại đơn, S + will + V", example_en: "If you call me, I'll come.", example_vi: "Nếu bạn gọi tôi, tôi sẽ đến." },
        { label: "Đảo vế", form: "S + will + V + if + hiện tại đơn", example_en: "I'll help you if you ask.", example_vi: "Tôi sẽ giúp nếu bạn nhờ." }
      ],
      notes: [
        "Vế 'if' KHÔNG dùng will: 'If it rains' (không phải 'If it will rain').",
        "Có thể thay will bằng can/may/should tuỳ nghĩa.",
        "Khi vế if đứng đầu, có dấu phẩy ngăn cách."
      ],
      quiz: [
        { q: "If it rains, I ___ at home.", options: ["stay", "will stay", "stayed", "would stay"], answer: "will stay", explain: "Loại 1: vế chính dùng 'will' → 'will stay'." },
        { q: "If you ___ hard, you'll pass.", options: ["study", "will study", "studied", "would study"], answer: "study", explain: "Vế if dùng hiện tại đơn → 'study'." },
        { q: "She ___ angry if you're late.", options: ["is", "will be", "was", "would be"], answer: "will be", explain: "Vế chính → 'will be'." },
        { q: "If I see him, I ___ him.", options: ["tell", "will tell", "told", "would tell"], answer: "will tell", explain: "Vế chính → 'will tell'." },
        { q: "We'll go out if it ___ sunny.", options: ["is", "will be", "was", "be"], answer: "is", explain: "Vế if → hiện tại đơn 'is'." },
        { q: "If you don't hurry, you ___ the bus.", options: ["miss", "will miss", "missed", "would miss"], answer: "will miss", explain: "Vế chính → 'will miss'." }
      ]
    },
    {
      id: 45,
      slug: "second-conditional",
      title_en: "Second Conditional",
      title_vi: "Câu điều kiện loại 2",
      emoji: "💭",
      level: "B1",
      intro: "Câu điều kiện loại 2 diễn tả tình huống KHÔNG CÓ THẬT hoặc khó xảy ra ở hiện tại/tương lai. Vế if dùng quá khứ đơn, vế chính dùng would + V.",
      usage: [
        "Giả định trái hiện tại: If I were rich, I would travel the world.",
        "Lời khuyên: If I were you, I would see a doctor."
      ],
      formulas: [
        { label: "Cấu trúc", form: "If + quá khứ đơn, S + would + V", example_en: "If I had time, I would help you.", example_vi: "Nếu tôi có thời gian, tôi sẽ giúp bạn." },
        { label: "Lời khuyên", form: "If I were you, I would…", example_en: "If I were you, I'd apologize.", example_vi: "Nếu tôi là bạn, tôi sẽ xin lỗi." }
      ],
      notes: [
        "Với động từ 'to be', dùng 'were' cho mọi ngôi (If I were / he were).",
        "'would' có thể thay bằng could/might.",
        "Diễn tả điều không có thật ở HIỆN TẠI, không phải quá khứ."
      ],
      quiz: [
        { q: "If I ___ rich, I would buy a house.", options: ["am", "was", "were", "will be"], answer: "were", explain: "Loại 2 với 'to be' dùng 'were' cho mọi ngôi." },
        { q: "If I were you, I ___ study harder.", options: ["will", "would", "can", "am"], answer: "would", explain: "Vế chính loại 2 → 'would'." },
        { q: "She would travel if she ___ more money.", options: ["has", "had", "will have", "have"], answer: "had", explain: "Vế if → quá khứ đơn 'had'." },
        { q: "If he ___ here, he would help us.", options: ["is", "were", "will be", "be"], answer: "were", explain: "'to be' trong loại 2 → 'were'." },
        { q: "What would you do if you ___ the lottery?", options: ["win", "won", "will win", "would win"], answer: "won", explain: "Vế if → quá khứ đơn 'won'." },
        { q: "I ___ tell him if I knew the answer.", options: ["will", "would", "am", "can"], answer: "would", explain: "Vế chính → 'would'." }
      ]
    },
    {
      id: 46,
      slug: "third-conditional",
      title_en: "Third Conditional",
      title_vi: "Câu điều kiện loại 3",
      emoji: "⏮️",
      level: "B1",
      intro: "Câu điều kiện loại 3 diễn tả tình huống KHÔNG CÓ THẬT trong QUÁ KHỨ và kết quả giả định của nó. Vế if dùng quá khứ hoàn thành, vế chính dùng would have + V3.",
      usage: [
        "Giả định trái quá khứ (tiếc nuối): If I had studied, I would have passed.",
        "Điều đã không xảy ra: If she had left earlier, she wouldn't have missed the train."
      ],
      formulas: [
        { label: "Cấu trúc", form: "If + had + V3, S + would have + V3", example_en: "If you had told me, I would have come.", example_vi: "Nếu bạn nói cho tôi, tôi đã đến rồi." }
      ],
      notes: [
        "Cả hai vế đều nói về quá khứ KHÔNG CÓ THẬT (đã không xảy ra).",
        "'would have' có thể thay bằng could have / might have.",
        "Rút gọn: I'd have = I would have; hadn't = had not."
      ],
      quiz: [
        { q: "If I had known, I ___ you.", options: ["would help", "would have helped", "will help", "helped"], answer: "would have helped", explain: "Loại 3: vế chính → 'would have + V3'." },
        { q: "She would have passed if she ___ harder.", options: ["studied", "had studied", "studies", "would study"], answer: "had studied", explain: "Vế if loại 3 → quá khứ hoàn thành 'had studied'." },
        { q: "If they had left earlier, they ___ the train.", options: ["wouldn't miss", "wouldn't have missed", "didn't miss", "won't miss"], answer: "wouldn't have missed", explain: "Vế chính → 'would (not) have + V3'." },
        { q: "We would have won if we ___ better.", options: ["play", "played", "had played", "would play"], answer: "had played", explain: "Vế if → 'had played'." },
        { q: "If he ___ me, I would have answered.", options: ["called", "had called", "calls", "would call"], answer: "had called", explain: "Vế if → 'had called'." },
        { q: "I would have come if you ___ me.", options: ["invited", "had invited", "invite", "would invite"], answer: "had invited", explain: "Vế if → 'had invited'." }
      ]
    },
    {
      id: 47,
      slug: "wish-clauses",
      title_en: "Wish Clauses",
      title_vi: "Câu ước (wish)",
      emoji: "🌠",
      level: "B1",
      intro: "'wish' (và 'if only') diễn tả điều ước, mong muốn về một tình huống trái với thực tế ở hiện tại hoặc quá khứ.",
      usage: [
        "Ước về hiện tại (dùng quá khứ đơn): I wish I had a car. (thực tế: không có).",
        "Ước về quá khứ (dùng quá khứ hoàn thành): I wish I had studied harder.",
        "Phàn nàn về thói quen người khác (would): I wish you wouldn't smoke."
      ],
      formulas: [
        { label: "Ước hiện tại", form: "wish + S + quá khứ đơn", example_en: "I wish I were taller.", example_vi: "Ước gì tôi cao hơn." },
        { label: "Ước quá khứ", form: "wish + S + had + V3", example_en: "I wish I hadn't said that.", example_vi: "Ước gì tôi đã không nói điều đó." }
      ],
      notes: [
        "wish + quá khứ đơn → ước về HIỆN TẠI; wish + quá khứ hoàn thành → ước về QUÁ KHỨ.",
        "Với 'to be' trong câu ước hiện tại, thường dùng 'were' cho mọi ngôi.",
        "'If only' dùng tương tự 'wish' nhưng nhấn mạnh hơn."
      ],
      quiz: [
        { q: "I wish I ___ rich.", options: ["am", "was", "were", "will be"], answer: "were", explain: "Ước hiện tại với 'to be' → 'were'." },
        { q: "She wishes she ___ how to swim.", options: ["knows", "knew", "had known", "know"], answer: "knew", explain: "Ước hiện tại → quá khứ đơn 'knew'." },
        { q: "I wish I ___ harder for the exam. (quá khứ)", options: ["study", "studied", "had studied", "would study"], answer: "had studied", explain: "Ước về quá khứ → 'had studied'." },
        { q: "He wishes he ___ that mistake. (quá khứ)", options: ["didn't make", "hadn't made", "doesn't make", "wouldn't make"], answer: "hadn't made", explain: "Ước về quá khứ → 'hadn't made'." },
        { q: "I wish I ___ a bigger house. (hiện tại)", options: ["have", "had", "had had", "will have"], answer: "had", explain: "Ước hiện tại → quá khứ đơn 'had'." },
        { q: "If only I ___ you sooner! (quá khứ)", options: ["met", "had met", "meet", "would meet"], answer: "had met", explain: "Tiếc nuối quá khứ → 'had met'." }
      ]
    },
    {
      id: 48,
      slug: "passive-voice",
      title_en: "Passive Voice",
      title_vi: "Câu bị động",
      emoji: "🔄",
      level: "B1",
      intro: "Câu bị động nhấn mạnh vào ĐỐI TƯỢNG bị tác động thay vì người thực hiện. Dùng 'be + V3', chia 'be' theo thì của câu chủ động.",
      usage: [
        "Khi không biết/không quan trọng ai làm: The window was broken.",
        "Nhấn mạnh đối tượng: English is spoken here.",
        "Người thực hiện (nếu cần) đi sau 'by': The cake was made by Lan."
      ],
      formulas: [
        { label: "Hiện tại đơn", form: "am/is/are + V3", example_en: "Rice is grown in Vietnam.", example_vi: "Lúa được trồng ở Việt Nam." },
        { label: "Quá khứ đơn", form: "was/were + V3", example_en: "The house was built in 1990.", example_vi: "Ngôi nhà được xây năm 1990." },
        { label: "Với người thực hiện", form: "… + by + tân ngữ", example_en: "This book was written by him.", example_vi: "Cuốn sách này do anh ấy viết." }
      ],
      notes: [
        "Tân ngữ của câu chủ động trở thành chủ ngữ của câu bị động.",
        "Chia 'be' theo đúng thì; động từ chính luôn ở dạng V3.",
        "Chỉ động từ có tân ngữ (ngoại động từ) mới chuyển sang bị động được."
      ],
      quiz: [
        { q: "English ___ in many countries.", options: ["speaks", "is spoken", "spoke", "speaking"], answer: "is spoken", explain: "Bị động hiện tại đơn → 'is spoken'." },
        { q: "The letter ___ yesterday.", options: ["sends", "was sent", "is sent", "sent"], answer: "was sent", explain: "Bị động quá khứ đơn → 'was sent'." },
        { q: "This song ___ by a famous singer.", options: ["sang", "was sung", "is singing", "sings"], answer: "was sung", explain: "Bị động quá khứ → 'was sung' (V3 của sing)." },
        { q: "Rice ___ in Asia.", options: ["grows", "is grown", "grew", "growing"], answer: "is grown", explain: "Bị động hiện tại → 'is grown'." },
        { q: "The room ___ every day.", options: ["cleans", "is cleaned", "cleaned", "clean"], answer: "is cleaned", explain: "Bị động hiện tại → 'is cleaned'." },
        { q: "The thief ___ by the police last night.", options: ["catches", "was caught", "is caught", "caught"], answer: "was caught", explain: "Bị động quá khứ → 'was caught'." }
      ]
    },
    {
      id: 49,
      slug: "reported-speech",
      title_en: "Reported Speech",
      title_vi: "Câu tường thuật",
      emoji: "💬",
      level: "B1",
      intro: "Câu tường thuật thuật lại lời của người khác mà không trích nguyên văn. Thì thường lùi một bậc, và các đại từ/trạng từ chỉ thời gian thay đổi.",
      usage: [
        "Thuật lại câu kể: 'I am tired' → He said (that) he was tired.",
        "Thuật lại câu hỏi: 'Where do you live?' → She asked where I lived."
      ],
      formulas: [
        { label: "Câu kể", form: "S + said (that) + mệnh đề (lùi thì)", example_en: "He said he was busy.", example_vi: "Anh ấy nói anh ấy bận." },
        { label: "Lùi thì", form: "is→was, do→did, will→would, can→could", example_en: "She said she would call.", example_vi: "Cô ấy nói cô ấy sẽ gọi." },
        { label: "Câu hỏi", form: "asked + (if/wh-) + S + V (lùi thì)", example_en: "He asked if I was ready.", example_vi: "Anh ấy hỏi tôi đã sẵn sàng chưa." }
      ],
      notes: [
        "Lùi thì: hiện tại đơn→quá khứ đơn, will→would, can→could, must→had to.",
        "Đổi đại từ và trạng từ: now→then, today→that day, tomorrow→the next day.",
        "Câu hỏi Yes/No dùng 'if/whether'; câu Wh- giữ từ để hỏi và không đảo ngữ."
      ],
      quiz: [
        { q: "'I am happy.' → He said he ___ happy.", options: ["is", "was", "were", "has been"], answer: "was", explain: "Lùi thì: am → was." },
        { q: "'I will come.' → She said she ___ come.", options: ["will", "would", "can", "could"], answer: "would", explain: "Lùi thì: will → would." },
        { q: "'Do you like tea?' → He asked ___ I liked tea.", options: ["that", "if", "what", "do"], answer: "if", explain: "Câu hỏi Yes/No → dùng 'if'." },
        { q: "'I can swim.' → She said she ___ swim.", options: ["can", "could", "will", "would"], answer: "could", explain: "Lùi thì: can → could." },
        { q: "'Where do you live?' → He asked where I ___.", options: ["live", "lived", "do live", "living"], answer: "lived", explain: "Lùi thì và không đảo ngữ → 'lived'." },
        { q: "'I am working.' → She said she ___ working.", options: ["is", "was", "were", "had"], answer: "was", explain: "Lùi thì: am working → was working." }
      ]
    },
    {
      id: 50,
      slug: "gerunds-infinitives",
      title_en: "Gerunds & Infinitives",
      title_vi: "Danh động từ & động từ nguyên thể",
      emoji: "🎯",
      level: "A2-B1",
      intro: "Khi một động từ theo sau động từ khác, nó có thể ở dạng V-ing (danh động từ) hoặc to + V (nguyên thể), tùy động từ đứng trước.",
      usage: [
        "Một số động từ + V-ing: enjoy, finish, avoid, mind, suggest — I enjoy reading.",
        "Một số động từ + to V: want, decide, hope, plan, promise — I want to go.",
        "Sau giới từ luôn dùng V-ing: good at swimming, interested in learning."
      ],
      formulas: [
        { label: "V + V-ing", form: "enjoy/finish/avoid/mind + V-ing", example_en: "She enjoys cooking.", example_vi: "Cô ấy thích nấu ăn." },
        { label: "V + to V", form: "want/decide/hope/plan + to V", example_en: "They decided to leave.", example_vi: "Họ quyết định rời đi." },
        { label: "Giới từ + V-ing", form: "prep + V-ing", example_en: "He's good at drawing.", example_vi: "Anh ấy vẽ giỏi." }
      ],
      notes: [
        "Sau giới từ (in, at, of, about, before, after…) luôn dùng V-ing.",
        "Một số động từ (like, love, hate, start, begin) dùng được cả hai, nghĩa gần như nhau.",
        "'look forward to' và 'be used to' có 'to' là giới từ → theo sau là V-ing."
      ],
      quiz: [
        { q: "I enjoy ___ books.", options: ["read", "to read", "reading", "reads"], answer: "reading", explain: "Sau 'enjoy' → V-ing." },
        { q: "She wants ___ a doctor.", options: ["be", "to be", "being", "is"], answer: "to be", explain: "Sau 'want' → to + V." },
        { q: "He's good at ___.", options: ["cook", "to cook", "cooking", "cooks"], answer: "cooking", explain: "Sau giới từ 'at' → V-ing." },
        { q: "They decided ___ early.", options: ["leave", "to leave", "leaving", "left"], answer: "to leave", explain: "Sau 'decide' → to + V." },
        { q: "Would you mind ___ the window?", options: ["open", "to open", "opening", "opens"], answer: "opening", explain: "Sau 'mind' → V-ing." },
        { q: "We hope ___ you soon.", options: ["see", "to see", "seeing", "saw"], answer: "to see", explain: "Sau 'hope' → to + V." }
      ]
    },
    {
      id: 51,
      slug: "relative-clauses",
      title_en: "Relative Clauses",
      title_vi: "Mệnh đề quan hệ",
      emoji: "🧵",
      level: "B1",
      intro: "Mệnh đề quan hệ bổ nghĩa cho danh từ, bắt đầu bằng đại từ quan hệ: who (người), which (vật), that (người/vật), whose (sở hữu), where (nơi chốn).",
      usage: [
        "who: cho người — The man who called is my uncle.",
        "which: cho vật — The book which I bought is good.",
        "whose: sở hữu; where: nơi chốn — the house where I was born."
      ],
      formulas: [
        { label: "Người", form: "N (người) + who/that + V…", example_en: "The woman who lives here is a nurse.", example_vi: "Người phụ nữ sống ở đây là y tá." },
        { label: "Vật", form: "N (vật) + which/that + …", example_en: "The car which he drives is new.", example_vi: "Chiếc xe anh ấy lái thì mới." },
        { label: "Sở hữu / nơi chốn", form: "whose + N / where", example_en: "That's the school where I studied.", example_vi: "Đó là ngôi trường tôi từng học." }
      ],
      notes: [
        "who cho người, which cho vật; that dùng được cho cả hai (trong mệnh đề xác định).",
        "Có thể lược bỏ đại từ quan hệ khi nó là TÂN NGỮ: The book (which) I read.",
        "whose chỉ sự sở hữu; where chỉ nơi chốn; when chỉ thời gian."
      ],
      quiz: [
        { q: "The man ___ lives next door is a doctor.", options: ["which", "who", "whose", "where"], answer: "who", explain: "Bổ nghĩa cho người → 'who'." },
        { q: "This is the book ___ I told you about.", options: ["who", "which", "whose", "where"], answer: "which", explain: "Bổ nghĩa cho vật → 'which'." },
        { q: "She's the girl ___ father is a pilot.", options: ["who", "which", "whose", "where"], answer: "whose", explain: "Chỉ sự sở hữu (cha của cô ấy) → 'whose'." },
        { q: "That's the restaurant ___ we had lunch.", options: ["which", "who", "where", "whose"], answer: "where", explain: "Chỉ nơi chốn → 'where'." },
        { q: "I met a woman ___ speaks five languages.", options: ["which", "who", "whose", "where"], answer: "who", explain: "Bổ nghĩa cho người → 'who'." },
        { q: "The phone ___ I bought is broken.", options: ["who", "whose", "which", "where"], answer: "which", explain: "Bổ nghĩa cho vật → 'which'." }
      ]
    },
    {
      id: 52,
      slug: "past-perfect",
      title_en: "Past Perfect",
      title_vi: "Quá khứ hoàn thành",
      emoji: "📜",
      level: "B1",
      intro: "Thì quá khứ hoàn thành diễn tả hành động xảy ra và hoàn thành TRƯỚC một hành động/thời điểm khác trong quá khứ.",
      usage: [
        "Hành động trước một hành động quá khứ khác: When I arrived, the train had left.",
        "Thường đi cùng quá khứ đơn để cho thấy cái nào xảy ra trước."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + had + V3", example_en: "She had finished before he came.", example_vi: "Cô ấy đã làm xong trước khi anh ấy đến." },
        { label: "Phủ định", form: "S + had + not + V3", example_en: "I hadn't seen it before.", example_vi: "Trước đó tôi chưa từng thấy nó." },
        { label: "Nghi vấn", form: "Had + S + V3?", example_en: "Had they left when you called?", example_vi: "Họ đã đi chưa khi bạn gọi?" }
      ],
      notes: [
        "Dùng 'had + V3' cho hành động XẢY RA TRƯỚC; quá khứ đơn cho hành động sau.",
        "Thường có before, after, when, by the time để nối hai mốc.",
        "'had' dùng cho mọi ngôi."
      ],
      quiz: [
        { q: "When I got home, she ___ already left.", options: ["has", "had", "have", "was"], answer: "had", explain: "Hành động xảy ra trước → 'had left'." },
        { q: "They ___ dinner before the guests arrived.", options: ["had had", "have had", "has had", "had"], answer: "had had", explain: "Quá khứ hoàn thành của 'have' → 'had had'." },
        { q: "I couldn't get in because I ___ my key.", options: ["lose", "lost", "had lost", "have lost"], answer: "had lost", explain: "Việc mất chìa xảy ra trước → 'had lost'." },
        { q: "By the time we arrived, the film ___.", options: ["started", "has started", "had started", "starts"], answer: "had started", explain: "Trước thời điểm 'arrived' → 'had started'." },
        { q: "She ___ never seen snow before that trip.", options: ["has", "had", "have", "was"], answer: "had", explain: "'had never seen' trước một mốc quá khứ." },
        { q: "He told me he ___ finished the report.", options: ["has", "had", "have", "was"], answer: "had", explain: "Hành động trước khi 'told' → 'had finished'." }
      ]
    },
    {
      id: 53,
      slug: "present-perfect-continuous",
      title_en: "Present Perfect Continuous",
      title_vi: "Hiện tại hoàn thành tiếp diễn",
      emoji: "♻️",
      level: "B1",
      intro: "Thì hiện tại hoàn thành tiếp diễn nhấn mạnh sự KÉO DÀI/liên tục của một hành động bắt đầu trong quá khứ và còn tiếp diễn đến hiện tại (hoặc vừa mới dừng).",
      usage: [
        "Hành động kéo dài đến hiện tại (nhấn mạnh quá trình): I have been studying for three hours.",
        "Hành động vừa dừng nhưng để lại dấu vết: She's tired because she has been running."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + have/has + been + V-ing", example_en: "They have been waiting for an hour.", example_vi: "Họ đã đợi được một tiếng rồi." },
        { label: "Nghi vấn", form: "Have/Has + S + been + V-ing?", example_en: "How long have you been learning English?", example_vi: "Bạn đã học tiếng Anh bao lâu rồi?" }
      ],
      notes: [
        "Nhấn mạnh QUÁ TRÌNH/thời lượng (how long); hiện tại hoàn thành thường nhấn mạnh KẾT QUẢ.",
        "Đi với 'for' (khoảng thời gian) và 'since' (mốc thời gian).",
        "Động từ chỉ trạng thái (know, like) không dùng dạng tiếp diễn."
      ],
      quiz: [
        { q: "I ___ studying since morning.", options: ["have been", "has been", "am", "was"], answer: "have been", explain: "'I' → 'have been' + V-ing." },
        { q: "She ___ been working here for years.", options: ["have", "has", "is", "had"], answer: "has", explain: "'She' → 'has been'." },
        { q: "How long ___ you been waiting?", options: ["has", "have", "are", "did"], answer: "have", explain: "'you' → 'have been'." },
        { q: "They have been ___ football.", options: ["play", "played", "playing", "plays"], answer: "playing", explain: "Cấu trúc 'been + V-ing'." },
        { q: "He's tired because he ___ running.", options: ["has been", "have been", "is", "was"], answer: "has been", explain: "'He' → 'has been running'." },
        { q: "We have been living here ___ 2019.", options: ["for", "since", "from", "in"], answer: "since", explain: "2019 là mốc thời gian → 'since'." }
      ]
    },
    {
      id: 54,
      slug: "future-continuous",
      title_en: "Future Continuous",
      title_vi: "Tương lai tiếp diễn",
      emoji: "🛰️",
      level: "B1",
      intro: "Thì tương lai tiếp diễn diễn tả hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.",
      usage: [
        "Hành động đang diễn ra tại thời điểm tương lai: This time tomorrow, I'll be flying to Tokyo.",
        "Hành động đã dự kiến sẽ diễn ra: Don't call at 8; we'll be having dinner."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + will be + V-ing", example_en: "At 9 p.m. I'll be studying.", example_vi: "Lúc 9 giờ tối tôi sẽ đang học." },
        { label: "Nghi vấn", form: "Will + S + be + V-ing?", example_en: "Will you be using the car tonight?", example_vi: "Tối nay bạn có dùng xe không?" }
      ],
      notes: [
        "Cấu trúc luôn là 'will be + V-ing'.",
        "Thường đi với mốc thời gian tương lai cụ thể (at 8 tomorrow, this time next week).",
        "Khác tương lai đơn (will + V) vốn chỉ nêu sự việc, không nhấn mạnh 'đang diễn ra'."
      ],
      quiz: [
        { q: "This time tomorrow, I ___ on the beach.", options: ["will lie", "will be lying", "lie", "am lying"], answer: "will be lying", explain: "Đang diễn ra tại thời điểm tương lai → 'will be lying'." },
        { q: "At 8 p.m. we ___ dinner.", options: ["will have", "will be having", "have", "are having"], answer: "will be having", explain: "Đang diễn ra lúc 8h → 'will be having'." },
        { q: "___ you be working late tonight?", options: ["Will", "Do", "Are", "Have"], answer: "Will", explain: "Nghi vấn tương lai tiếp diễn → 'Will … be V-ing'." },
        { q: "She will ___ studying at 10.", options: ["be", "being", "been", "is"], answer: "be", explain: "'will be + V-ing'." },
        { q: "Don't call at noon; they ___ lunch.", options: ["will have", "will be having", "have", "had"], answer: "will be having", explain: "Đang ăn trưa lúc đó → 'will be having'." },
        { q: "Next week he ___ traveling in Japan.", options: ["will be", "will", "is", "be"], answer: "will be", explain: "'will be + V-ing'." }
      ]
    },
    {
      id: 55,
      slug: "future-perfect",
      title_en: "Future Perfect",
      title_vi: "Tương lai hoàn thành",
      emoji: "🏁",
      level: "B1",
      intro: "Thì tương lai hoàn thành diễn tả hành động sẽ HOÀN THÀNH TRƯỚC một thời điểm hoặc hành động khác trong tương lai.",
      usage: [
        "Hoàn thành trước mốc tương lai: By 2030, I will have graduated.",
        "Thường đi với 'by' + thời điểm tương lai."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + will have + V3", example_en: "By next month, they will have finished.", example_vi: "Đến tháng sau, họ sẽ hoàn thành xong." },
        { label: "Nghi vấn", form: "Will + S + have + V3?", example_en: "Will you have left by then?", example_vi: "Đến lúc đó bạn đã đi chưa?" }
      ],
      notes: [
        "Cấu trúc luôn là 'will have + V3 (past participle)'.",
        "Đi kèm 'by + thời điểm' (by 2030, by the time…).",
        "Trong 'by the time + …', mệnh đề thời gian dùng hiện tại đơn."
      ],
      quiz: [
        { q: "By next year, I ___ my studies.", options: ["will finish", "will have finished", "finish", "finished"], answer: "will have finished", explain: "Hoàn thành trước mốc tương lai → 'will have finished'." },
        { q: "By 8 o'clock, they ___ home.", options: ["will arrive", "will have arrived", "arrive", "arrived"], answer: "will have arrived", explain: "'will have + V3'." },
        { q: "She ___ the book by Friday.", options: ["will read", "will have read", "reads", "read"], answer: "will have read", explain: "Hoàn thành trước thứ Sáu → 'will have read'." },
        { q: "By the time you come, I ___.", options: ["will leave", "will have left", "leave", "left"], answer: "will have left", explain: "'will have left' trước khi bạn đến." },
        { q: "___ you have finished by noon?", options: ["Will", "Do", "Are", "Have"], answer: "Will", explain: "Nghi vấn → 'Will … have V3'." },
        { q: "We will ___ eaten by then.", options: ["have", "has", "had", "having"], answer: "have", explain: "'will have + V3'." }
      ]
    },
    {
      id: 56,
      slug: "causative",
      title_en: "Causative (have/get something done)",
      title_vi: "Thể sai khiến",
      emoji: "🧰",
      level: "B1",
      intro: "Thể sai khiến diễn tả việc nhờ/thuê người khác làm gì cho mình. Dùng have/get + tân ngữ + V3.",
      usage: [
        "Nhờ/thuê ai làm: I had my car repaired. (Tôi mang xe đi sửa).",
        "'get' mang nghĩa tương tự, thân mật hơn: She got her hair cut.",
        "Nhờ trực tiếp một người: have somebody do / get somebody to do."
      ],
      formulas: [
        { label: "have + O + V3", form: "have + tân ngữ + V3", example_en: "I had my hair cut.", example_vi: "Tôi đã đi cắt tóc." },
        { label: "get + O + V3", form: "get + tân ngữ + V3", example_en: "She got her phone fixed.", example_vi: "Cô ấy mang điện thoại đi sửa." },
        { label: "have somebody do", form: "have + người + V (nguyên thể)", example_en: "I had the mechanic check the car.", example_vi: "Tôi nhờ thợ máy kiểm tra xe." }
      ],
      notes: [
        "Cấu trúc 'have/get + VẬT + V3': vật được làm (bởi người khác).",
        "'have + NGƯỜI + V nguyên thể' hoặc 'get + NGƯỜI + to V': nhờ trực tiếp người đó.",
        "Chia 'have/get' theo thì của câu."
      ],
      quiz: [
        { q: "I had my car ___ yesterday.", options: ["repair", "repaired", "repairing", "to repair"], answer: "repaired", explain: "have + vật + V3 → 'repaired'." },
        { q: "She got her hair ___.", options: ["cut", "cutting", "to cut", "cuts"], answer: "cut", explain: "get + vật + V3 → 'cut' (V3 của cut)." },
        { q: "We're going to have the house ___.", options: ["paint", "painted", "painting", "to paint"], answer: "painted", explain: "have + vật + V3 → 'painted'." },
        { q: "He had the plumber ___ the pipe.", options: ["fix", "fixed", "fixing", "to fixed"], answer: "fix", explain: "have + NGƯỜI + V nguyên thể → 'fix'." },
        { q: "You should get your eyes ___.", options: ["test", "tested", "testing", "to test"], answer: "tested", explain: "get + vật + V3 → 'tested'." },
        { q: "They had their photos ___ at the studio.", options: ["take", "taken", "taking", "to take"], answer: "taken", explain: "have + vật + V3 → 'taken'." }
      ]
    },
    {
      id: 57,
      slug: "phrasal-verbs",
      title_en: "Phrasal Verbs",
      title_vi: "Cụm động từ",
      emoji: "🪝",
      level: "B1",
      intro: "Cụm động từ gồm một động từ + tiểu từ (giới từ/trạng từ) tạo thành nghĩa mới, thường khác nghĩa gốc: get up, turn on, look after…",
      usage: [
        "Nghĩa mới không đoán từ nghĩa gốc: give up (từ bỏ), look after (chăm sóc).",
        "Có loại tách được (turn it on) và không tách được (look after him)."
      ],
      formulas: [
        { label: "Nội động từ", form: "V + tiểu từ", example_en: "Please sit down.", example_vi: "Mời ngồi xuống." },
        { label: "Ngoại động từ (tách được)", form: "V + O + tiểu từ / V + tiểu từ + O", example_en: "Turn the light on. / Turn on the light.", example_vi: "Bật đèn lên." }
      ],
      notes: [
        "Với cụm tách được, đại từ (it/them) phải đứng GIỮA: 'turn it on' (không nói 'turn on it').",
        "Nhiều cụm phải học thuộc vì nghĩa không đoán được.",
        "Cụm hay gặp: get up, wake up, turn on/off, put on, take off, look for, look after, give up."
      ],
      quiz: [
        { q: "I usually ___ at 6 a.m. (thức dậy)", options: ["get up", "get on", "get off", "get in"], answer: "get up", explain: "'thức dậy' → 'get up'." },
        { q: "Please turn ___ the TV. (tắt)", options: ["off", "on", "up", "in"], answer: "off", explain: "'tắt' → 'turn off'." },
        { q: "She looks ___ her little brother. (chăm sóc)", options: ["for", "after", "up", "at"], answer: "after", explain: "'chăm sóc' → 'look after'." },
        { q: "Turn ___! (bật nó lên)", options: ["on it", "it on", "on", "it"], answer: "it on", explain: "Đại từ 'it' đứng giữa → 'turn it on'." },
        { q: "He gave ___ smoking. (từ bỏ)", options: ["up", "in", "off", "on"], answer: "up", explain: "'từ bỏ' → 'give up'." },
        { q: "I'm looking ___ my keys. (tìm)", options: ["after", "for", "up", "on"], answer: "for", explain: "'tìm kiếm' → 'look for'." }
      ]
    },
    {
      id: 58,
      slug: "order-of-adjectives",
      title_en: "Order of Adjectives",
      title_vi: "Trật tự tính từ",
      emoji: "📐",
      level: "B1",
      intro: "Khi có nhiều tính từ đứng trước một danh từ, chúng theo trật tự: ý kiến → kích thước → tuổi → hình dạng → màu sắc → nguồn gốc → chất liệu → danh từ.",
      usage: [
        "Trật tự thường gặp: opinion, size, age, shape, colour, origin, material.",
        "Ví dụ: a beautiful small old round brown wooden table."
      ],
      formulas: [
        { label: "Trật tự", form: "Ý kiến–Kích thước–Tuổi–Màu–Chất liệu + N", example_en: "a nice big new red car", example_vi: "một chiếc xe hơi đẹp, to, mới, màu đỏ" },
        { label: "Ví dụ", form: "opinion + size + colour + N", example_en: "a lovely little black cat", example_vi: "một chú mèo đen nhỏ đáng yêu" }
      ],
      notes: [
        "Tính từ chỉ Ý KIẾN (nice, beautiful) đứng TRƯỚC tính từ chỉ SỰ THẬT (big, red).",
        "Kích thước đứng trước màu sắc: a big red ball (không phải 'a red big ball').",
        "Thường không dùng quá 3 tính từ liên tiếp trong thực tế."
      ],
      quiz: [
        { q: "She has a ___ dress.", options: ["red beautiful", "beautiful red", "red a beautiful", "beautiful a red"], answer: "beautiful red", explain: "Ý kiến (beautiful) trước màu (red)." },
        { q: "It's a ___ table.", options: ["wooden small", "small wooden", "wooden a small", "small a wooden"], answer: "small wooden", explain: "Kích thước (small) trước chất liệu (wooden)." },
        { q: "a ___ car", options: ["big new", "new big", "big a new", "new a big"], answer: "big new", explain: "Kích thước (big) trước tuổi (new)." },
        { q: "an ___ house", options: ["old lovely", "lovely old", "old a lovely", "lovely a old"], answer: "lovely old", explain: "Ý kiến (lovely) trước tuổi (old)." },
        { q: "a ___ ball", options: ["red big", "big red", "big a red", "red a big"], answer: "big red", explain: "Kích thước (big) trước màu (red)." },
        { q: "a ___ bag", options: ["leather black", "black leather", "leather a black", "black a leather"], answer: "black leather", explain: "Màu (black) trước chất liệu (leather)." }
      ]
    },
    {
      id: 59,
      slug: "so-such",
      title_en: "so / such",
      title_vi: "so / such",
      emoji: "🎭",
      level: "B1",
      intro: "'so' và 'such' dùng để nhấn mạnh, mang nghĩa 'quá/rất đến mức'. 'so' đi với tính từ/trạng từ; 'such' đi với (a/an +) danh từ.",
      usage: [
        "so + tính từ/trạng từ: It was so hot.",
        "such + (a/an) + (adj) + danh từ: It was such a hot day.",
        "Thường theo sau bởi 'that + kết quả': so tired that I slept."
      ],
      formulas: [
        { label: "so", form: "so + adj/adv (+ that…)", example_en: "She was so tired that she slept.", example_vi: "Cô ấy mệt đến nỗi ngủ thiếp đi." },
        { label: "such", form: "such + (a/an) + (adj) + N (+ that…)", example_en: "It was such a good film that we watched it twice.", example_vi: "Đó là bộ phim hay đến mức chúng tôi xem hai lần." }
      ],
      notes: [
        "'so' + TÍNH TỪ/TRẠNG TỪ (đứng một mình); 'such' + DANH TỪ (có thể kèm tính từ).",
        "'so much/many' + danh từ: so much money, so many people.",
        "Cấu trúc 'so/such … that …' chỉ kết quả."
      ],
      quiz: [
        { q: "It was ___ cold that we stayed home.", options: ["so", "such", "such a", "very much"], answer: "so", explain: "'so' + tính từ 'cold'." },
        { q: "She is ___ a kind person.", options: ["so", "such", "very", "so a"], answer: "such", explain: "'such a' + danh từ đếm được số ít." },
        { q: "They have ___ much money.", options: ["so", "such", "such a", "very"], answer: "so", explain: "'so much' + danh từ không đếm được." },
        { q: "It was ___ an interesting book.", options: ["so", "such", "very", "so an"], answer: "such", explain: "'such an' + danh từ." },
        { q: "He runs ___ fast.", options: ["so", "such", "such a", "much"], answer: "so", explain: "'so' + trạng từ 'fast'." },
        { q: "It was ___ good weather.", options: ["so", "such", "such a", "so a"], answer: "such", explain: "weather không đếm được → 'such' + adj + N (không có 'a')." }
      ]
    },
    {
      id: 60,
      slug: "so-do-i-neither",
      title_en: "So do I / Neither do I",
      title_vi: "Đảo ngữ đồng tình (So/Neither)",
      emoji: "🤝",
      level: "B1",
      intro: "Để đồng tình ngắn gọn: 'So + trợ động từ + S' (đồng tình câu khẳng định), 'Neither/Nor + trợ động từ + S' (đồng tình câu phủ định).",
      usage: [
        "Đồng tình khẳng định: 'I like tea.' – 'So do I.'",
        "Đồng tình phủ định: 'I don't smoke.' – 'Neither do I.'"
      ],
      formulas: [
        { label: "Khẳng định", form: "So + trợ động từ + S", example_en: "'I'm tired.' – 'So am I.'", example_vi: "'Tôi mệt.' – 'Tôi cũng vậy.'" },
        { label: "Phủ định", form: "Neither/Nor + trợ động từ + S", example_en: "'I can't swim.' – 'Neither can I.'", example_vi: "'Tôi không biết bơi.' – 'Tôi cũng không.'" }
      ],
      notes: [
        "Trợ động từ phải khớp với câu gốc: be→am/is/are, do→do/does/did, can→can, have→have.",
        "'So' cho câu khẳng định; 'Neither/Nor' cho câu phủ định.",
        "Trật tự bị đảo: trợ động từ đứng TRƯỚC chủ ngữ (So do I, không phải 'So I do')."
      ],
      quiz: [
        { q: "'I love pizza.' '___ I.'", options: ["So do", "So am", "Neither do", "So I do"], answer: "So do", explain: "Câu 'love' (động từ thường) khẳng định → 'So do I'." },
        { q: "'I can't drive.' '___ can I.'", options: ["So", "Neither", "Also", "Too"], answer: "Neither", explain: "Câu phủ định → 'Neither can I'." },
        { q: "'She is happy.' 'So ___ he.'", options: ["does", "is", "do", "has"], answer: "is", explain: "Câu gốc dùng 'is' → 'So is he'." },
        { q: "'They don't like it.' '___ do we.'", options: ["So", "Neither", "Either", "Also"], answer: "Neither", explain: "Câu phủ định → 'Neither do we'." },
        { q: "'I have finished.' 'So ___ I.'", options: ["do", "am", "have", "did"], answer: "have", explain: "Câu gốc dùng 'have' → 'So have I'." },
        { q: "'He won't come.' 'Neither ___ I.'", options: ["do", "will", "am", "have"], answer: "will", explain: "Câu gốc dùng 'won't (will)' → 'Neither will I'." }
      ]
    },
    {
      id: 61,
      slug: "dependent-prepositions",
      title_en: "Verb / Adjective + Preposition",
      title_vi: "Giới từ đi kèm động từ / tính từ",
      emoji: "🧷",
      level: "B1",
      intro: "Nhiều động từ và tính từ luôn đi cùng một giới từ cố định. Cần học thuộc từng cụm: depend on, good at, afraid of…",
      usage: [
        "Động từ + giới từ: depend on, listen to, wait for, agree with.",
        "Tính từ + giới từ: good at, afraid of, interested in, proud of.",
        "Sau giới từ, nếu là động từ thì dùng V-ing."
      ],
      formulas: [
        { label: "Động từ + giới từ", form: "V + prep + O", example_en: "It depends on the weather.", example_vi: "Điều đó tùy vào thời tiết." },
        { label: "Tính từ + giới từ", form: "be + adj + prep + O", example_en: "She's afraid of dogs.", example_vi: "Cô ấy sợ chó." }
      ],
      notes: [
        "Các cụm phải học thuộc: good at, interested in, afraid of, proud of, worried about.",
        "listen TO, wait FOR, look AT, depend ON, belong TO.",
        "Sau giới từ dùng V-ing: good at swimming, interested in learning."
      ],
      quiz: [
        { q: "I'm good ___ maths.", options: ["at", "in", "on", "for"], answer: "at", explain: "'good at' — giỏi về." },
        { q: "She's afraid ___ spiders.", options: ["of", "from", "for", "with"], answer: "of", explain: "'afraid of' — sợ." },
        { q: "It depends ___ you.", options: ["of", "on", "at", "to"], answer: "on", explain: "'depend on' — tùy thuộc vào." },
        { q: "We're waiting ___ the bus.", options: ["for", "to", "at", "on"], answer: "for", explain: "'wait for' — chờ đợi." },
        { q: "He's interested ___ history.", options: ["on", "at", "in", "for"], answer: "in", explain: "'interested in' — hứng thú với." },
        { q: "Please listen ___ me.", options: ["at", "to", "for", "on"], answer: "to", explain: "'listen to' — lắng nghe." }
      ]
    },
    {
      id: 62,
      slug: "purpose-clauses",
      title_en: "Purpose: to / in order to / so that",
      title_vi: "Mệnh đề chỉ mục đích",
      emoji: "🏹",
      level: "B1",
      intro: "Để diễn tả MỤC ĐÍCH, dùng 'to + V', 'in order to + V', 'so as to + V', hoặc 'so that + mệnh đề'.",
      usage: [
        "to / in order to / so as to + V (nguyên thể): I study hard to pass the exam.",
        "so that + mệnh đề (có chủ ngữ riêng, thường có can/will/would): I spoke slowly so that they could understand."
      ],
      formulas: [
        { label: "to + V", form: "… + (in order) to + V", example_en: "She left early to catch the train.", example_vi: "Cô ấy đi sớm để kịp chuyến tàu." },
        { label: "so that + mệnh đề", form: "… so that + S + can/will/would + V", example_en: "He saves money so that he can travel.", example_vi: "Anh ấy tiết kiệm tiền để có thể đi du lịch." }
      ],
      notes: [
        "'to / in order to' + động từ nguyên thể (không có chủ ngữ mới).",
        "'so that' + cả một mệnh đề (có chủ ngữ), thường kèm can/could/will/would.",
        "Phủ định mục đích: 'so as not to / in order not to + V'."
      ],
      quiz: [
        { q: "I study hard ___ pass the exam.", options: ["to", "for", "so that", "because"], answer: "to", explain: "Mục đích + động từ nguyên thể → 'to'." },
        { q: "She spoke loudly ___ everyone could hear.", options: ["to", "in order to", "so that", "for"], answer: "so that", explain: "Có mệnh đề (everyone could hear) → 'so that'." },
        { q: "He whispered ___ not to wake the baby.", options: ["so as", "so that", "to", "for"], answer: "so as", explain: "Phủ định mục đích → 'so as not to'." },
        { q: "We use a map ___ find the way.", options: ["to", "so that", "for", "because"], answer: "to", explain: "Mục đích + nguyên thể → 'to'." },
        { q: "I'll write it down ___ I don't forget.", options: ["to", "so that", "in order to", "for"], answer: "so that", explain: "Có mệnh đề (I don't forget) → 'so that'." },
        { q: "They practice every day ___ improve.", options: ["to", "so that", "for", "because"], answer: "to", explain: "Mục đích + nguyên thể → 'to'." }
      ]
    },
    {
      id: 63,
      slug: "although-despite-however",
      title_en: "although / despite / however",
      title_vi: "Từ nối nhượng bộ",
      emoji: "↔️",
      level: "B1",
      intro: "Các từ nối chỉ tương phản/nhượng bộ: although/though/even though + mệnh đề; despite/in spite of + danh từ/V-ing; however (tuy nhiên) nối hai câu.",
      usage: [
        "although/though + mệnh đề (S + V): Although it was late, we continued.",
        "despite/in spite of + danh từ/V-ing: Despite the rain, we went out.",
        "however: đứng đầu câu sau, ngăn bởi dấu chấm/chấm phẩy: It was expensive. However, we bought it."
      ],
      formulas: [
        { label: "although + mệnh đề", form: "Although + S + V, …", example_en: "Although he's rich, he's unhappy.", example_vi: "Mặc dù anh ấy giàu, anh ấy không hạnh phúc." },
        { label: "despite + N/V-ing", form: "Despite + N/V-ing, …", example_en: "Despite the noise, she slept.", example_vi: "Mặc cho tiếng ồn, cô ấy vẫn ngủ." },
        { label: "however", form: "…. However, + S + V", example_en: "It was hard. However, we finished.", example_vi: "Nó khó. Tuy nhiên, chúng tôi đã hoàn thành." }
      ],
      notes: [
        "although/though/even though + MỆNH ĐỀ (có chủ ngữ + động từ).",
        "despite/in spite of + DANH TỪ hoặc V-ing (không có mệnh đề).",
        "'however' là trạng từ nối, thường có dấu phẩy sau: 'However, …'."
      ],
      quiz: [
        { q: "___ it was raining, we went out.", options: ["Although", "Despite", "However", "In spite"], answer: "Although", explain: "Theo sau là mệnh đề → 'Although'." },
        { q: "___ the rain, we went out.", options: ["Although", "Despite", "However", "Though"], answer: "Despite", explain: "Theo sau là danh từ 'the rain' → 'Despite'." },
        { q: "He's poor. ___, he's happy.", options: ["Although", "Despite", "However", "In spite of"], answer: "However", explain: "Nối hai câu, đứng đầu câu sau → 'However'." },
        { q: "___ being tired, she kept working.", options: ["Although", "Despite", "However", "Though"], answer: "Despite", explain: "Theo sau là V-ing 'being' → 'Despite'." },
        { q: "___ she studied hard, she failed.", options: ["Despite", "In spite of", "Although", "However"], answer: "Although", explain: "Theo sau là mệnh đề → 'Although'." },
        { q: "In spite ___ the cost, they bought it.", options: ["of", "for", "to", "on"], answer: "of", explain: "Cụm cố định 'in spite of'." }
      ]
    },
    {
      id: 64,
      slug: "compound-nouns",
      title_en: "Compound Nouns",
      title_vi: "Danh từ ghép",
      emoji: "🧱",
      level: "B1",
      intro: "Danh từ ghép là danh từ tạo từ hai (hoặc nhiều) từ ghép lại, mang một nghĩa mới: bus stop, toothbrush, swimming pool.",
      usage: [
        "Danh từ + danh từ: bus stop, football match, kitchen table.",
        "Có thể viết liền (toothbrush), có dấu gạch nối (mother-in-law) hoặc tách rời (bus stop)."
      ],
      formulas: [
        { label: "N + N", form: "danh từ 1 (bổ nghĩa) + danh từ 2 (chính)", example_en: "a bus stop = a stop for buses", example_vi: "trạm xe buýt" },
        { label: "V-ing + N", form: "V-ing + N", example_en: "a swimming pool = a pool for swimming", example_vi: "hồ bơi" }
      ],
      notes: [
        "Từ đứng ĐẦU bổ nghĩa cho từ đứng SAU (từ chính): 'a car key' là chìa khóa (dùng cho) xe.",
        "Từ đầu thường ở dạng số ít: 'a shoe shop' (không phải 'shoes shop').",
        "Khi số nhiều, thường đổi từ CHÍNH (từ sau): 'bus stops', 'toothbrushes'."
      ],
      quiz: [
        { q: "A place where you wait for buses is a ___.", options: ["bus stop", "stop bus", "buses stop", "stop of bus"], answer: "bus stop", explain: "Danh từ ghép 'bus stop'." },
        { q: "A brush for your teeth is a ___.", options: ["teeth brush", "toothbrush", "tooth brushes", "brush tooth"], answer: "toothbrush", explain: "'toothbrush' — từ đầu số ít 'tooth'." },
        { q: "A pool for swimming is a ___.", options: ["swim pool", "swimming pool", "pool swimming", "pools swimming"], answer: "swimming pool", explain: "V-ing + N → 'swimming pool'." },
        { q: "In 'a car key', the main thing is a ___.", options: ["car", "key", "car key", "keys"], answer: "key", explain: "Từ chính (sau) là 'key'." },
        { q: "The plural of 'bus stop' is ___.", options: ["buses stop", "bus stops", "buses stops", "bus stop"], answer: "bus stops", explain: "Đổi từ chính (sau) sang số nhiều → 'bus stops'." },
        { q: "A shop that sells shoes is a ___.", options: ["shoes shop", "shoe shop", "shop shoe", "shoes shops"], answer: "shoe shop", explain: "Từ đầu ở dạng số ít → 'shoe shop'." }
      ]
    },
    {
      id: 65,
      slug: "mixed-conditionals",
      title_en: "Mixed Conditionals",
      title_vi: "Câu điều kiện hỗn hợp",
      emoji: "🔀",
      level: "B2",
      intro: "Câu điều kiện hỗn hợp kết hợp hai mốc thời gian khác nhau — thường là điều kiện quá khứ với kết quả hiện tại, hoặc ngược lại.",
      usage: [
        "Quá khứ → hiện tại: If I had studied medicine, I would be a doctor now.",
        "Hiện tại → quá khứ: If I were more careful, I wouldn't have made that mistake."
      ],
      formulas: [
        { label: "Quá khứ → hiện tại", form: "If + had + V3, S + would + V", example_en: "If I had saved money, I would be rich now.", example_vi: "Nếu tôi đã tiết kiệm, giờ tôi đã giàu." },
        { label: "Hiện tại → quá khứ", form: "If + quá khứ đơn, S + would have + V3", example_en: "If he were taller, he would have been a model.", example_vi: "Nếu anh ấy cao hơn, anh ấy đã làm người mẫu." }
      ],
      notes: [
        "Kết hợp vế if của loại 3 (had + V3) với vế chính của loại 2 (would + V) — hoặc ngược lại.",
        "Dùng khi thời gian của điều kiện và kết quả KHÁC nhau.",
        "Thường có trạng từ 'now', 'today' để chỉ hệ quả ở hiện tại."
      ],
      quiz: [
        { q: "If I had studied harder, I ___ a better job now.", options: ["would have", "would have had", "will have", "had"], answer: "would have", explain: "Điều kiện quá khứ → kết quả hiện tại: 'would + V (have)'." },
        { q: "If she ___ money, she would have bought the car.", options: ["had", "had had", "has", "would have"], answer: "had", explain: "Điều kiện hiện tại ('had money') → kết quả quá khứ." },
        { q: "If he weren't so lazy, he ___ the exam.", options: ["would pass", "would have passed", "will pass", "passed"], answer: "would have passed", explain: "Điều kiện hiện tại → kết quả quá khứ: 'would have + V3'." },
        { q: "If I ___ you, I wouldn't have said that.", options: ["were", "was", "had been", "am"], answer: "were", explain: "Điều kiện hiện tại → 'were'." },
        { q: "If they had caught the train, they ___ here now.", options: ["would be", "would have been", "will be", "are"], answer: "would be", explain: "Điều kiện quá khứ → kết quả hiện tại: 'would be'." },
        { q: "I would be happier now if I ___ that decision.", options: ["didn't make", "hadn't made", "don't make", "wouldn't make"], answer: "hadn't made", explain: "Điều kiện quá khứ → kết quả hiện tại: 'had (not) + V3'." }
      ]
    },
    {
      id: 66,
      slug: "past-perfect-continuous",
      title_en: "Past Perfect Continuous",
      title_vi: "Quá khứ hoàn thành tiếp diễn",
      emoji: "⌛",
      level: "B2",
      intro: "Thì quá khứ hoàn thành tiếp diễn nhấn mạnh sự KÉO DÀI của một hành động diễn ra liên tục TRƯỚC một thời điểm/hành động khác trong quá khứ.",
      usage: [
        "Hành động kéo dài đến một mốc quá khứ: She had been waiting for an hour when he arrived.",
        "Giải thích nguyên nhân của một tình huống quá khứ: He was tired because he had been working all day."
      ],
      formulas: [
        { label: "Khẳng định", form: "S + had been + V-ing", example_en: "They had been playing for hours.", example_vi: "Họ đã chơi suốt mấy tiếng." },
        { label: "Nghi vấn", form: "Had + S + been + V-ing?", example_en: "Had you been waiting long?", example_vi: "Bạn đã đợi lâu chưa?" }
      ],
      notes: [
        "Cấu trúc luôn là 'had been + V-ing' cho mọi ngôi.",
        "Nhấn mạnh THỜI LƯỢNG/quá trình trước một mốc quá khứ (thường đi với for/since).",
        "Khác quá khứ hoàn thành (had + V3) vốn nhấn mạnh sự hoàn thành."
      ],
      quiz: [
        { q: "She ___ waiting for an hour when the bus came.", options: ["has been", "had been", "was", "had"], answer: "had been", explain: "Kéo dài trước mốc quá khứ → 'had been waiting'." },
        { q: "They were wet because they ___ in the rain.", options: ["had been walking", "have been walking", "were walking", "had walked"], answer: "had been walking", explain: "Nguyên nhân kéo dài trước đó → 'had been walking'." },
        { q: "Had you ___ studying long before the test?", options: ["been", "being", "be", "was"], answer: "been", explain: "Cấu trúc 'Had + S + been + V-ing'." },
        { q: "He ___ been working there for years before he quit.", options: ["has", "had", "have", "was"], answer: "had", explain: "'had been working' trước khi 'quit'." },
        { q: "We ___ been driving all night.", options: ["have", "had", "has", "were"], answer: "had", explain: "'had been + V-ing'." },
        { q: "I was tired because I ___ running.", options: ["had been", "have been", "was", "had"], answer: "had been", explain: "Quá trình kéo dài trước đó → 'had been running'." }
      ]
    },
    {
      id: 67,
      slug: "modal-perfect",
      title_en: "Modal Perfect (must have / should have)",
      title_vi: "Modal hoàn thành",
      emoji: "🧠",
      level: "B2",
      intro: "Modal + have + V3 dùng để suy đoán hoặc nhận xét về QUÁ KHỨ: must have (chắc hẳn đã), can't have (không thể đã), should have (lẽ ra đã nên), could have (đã có thể), may/might have (có lẽ đã).",
      usage: [
        "Suy đoán chắc chắn: He must have forgotten. (chắc hẳn đã quên).",
        "Suy đoán không thể: She can't have said that.",
        "Tiếc nuối/trách móc: You should have told me. (lẽ ra bạn nên nói)."
      ],
      formulas: [
        { label: "Suy đoán", form: "must/can't/may/might have + V3", example_en: "They must have left early.", example_vi: "Chắc hẳn họ đã đi sớm." },
        { label: "Lẽ ra (tiếc nuối)", form: "should have + V3", example_en: "I should have studied more.", example_vi: "Lẽ ra tôi nên học nhiều hơn." },
        { label: "Đã có thể", form: "could have + V3", example_en: "You could have called me.", example_vi: "Đáng lẽ bạn đã có thể gọi tôi." }
      ],
      notes: [
        "Luôn là 'modal + have + V3', dù chủ ngữ là gì.",
        "must have (chắc chắn đúng) ↔ can't have (chắc chắn không đúng) khi suy đoán quá khứ.",
        "should have + V3 = lẽ ra đã nên (nhưng đã không làm); shouldn't have + V3 = lẽ ra đã không nên."
      ],
      quiz: [
        { q: "The ground is wet. It ___ rained.", options: ["must have", "should have", "can't have", "must"], answer: "must have", explain: "Suy đoán chắc chắn về quá khứ → 'must have'." },
        { q: "You look tired. You ___ gone to bed earlier.", options: ["must have", "should have", "can't have", "would have"], answer: "should have", explain: "Lời khuyên/tiếc nuối về quá khứ → 'should have'." },
        { q: "She ___ have finished; she only started five minutes ago.", options: ["must", "can't", "should", "might"], answer: "can't", explain: "Suy đoán 'không thể đã' → 'can't have'." },
        { q: "I ___ have helped you, but I was busy.", options: ["should", "could", "must", "can't"], answer: "could", explain: "'đã có thể (nhưng không)' → 'could have'." },
        { q: "He isn't here. He ___ have left.", options: ["should", "must", "can't", "shouldn't"], answer: "must", explain: "Suy đoán chắc chắn → 'must have left'." },
        { q: "We ___ have booked earlier; now it's full.", options: ["can't", "should", "must", "might"], answer: "should", explain: "Tiếc nuối 'lẽ ra nên' → 'should have'." }
      ]
    }
  ]
};
