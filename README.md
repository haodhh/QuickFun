# Quick & Fun · Học từ vựng tiếng Anh 🧩

Web app học từ vựng tiếng Anh theo **20 chủ đề**, chạy tĩnh (không cần server) — mở trên điện thoại hay máy tính để học mọi lúc, mọi nơi.

- 📖 **Học**: danh sách từ có phiên âm IPA, nghĩa tiếng Việt, câu ví dụ Anh–Việt, nút nghe phát âm, đánh dấu "đã thuộc" — kèm mục **🔗 Cụm từ & collocation** (240 cụm) cho mỗi chủ đề.
- 🃏 **Flashcard**: lật thẻ, xáo trộn, đánh dấu thuộc/chưa thuộc.
- 🎓 **Luyện tập** (3 dạng): **Trắc nghiệm** (Anh↔Việt), **Điền từ** (điền từ còn thiếu vào câu), **Nghe & viết** (nghe phát âm rồi gõ lại).
- 🔁 **Ôn tập ngắt quãng (SRS)**: gom từ cần ôn của **tất cả** chủ đề theo thuật toán lặp lại ngắt quãng (SM-2 rút gọn), giới hạn 20 từ mới/ngày, tự lên lịch ôn.
- 🎯 **Kiểm tra tổng hợp**: bài đánh giá rút ngẫu nhiên từ cả 20 chủ đề (20/30/40 câu), chấm điểm và **phân tích điểm mạnh–yếu theo từng chủ đề** để biết cần ôn gì.
- 🔎 **Tìm kiếm**: tra nhanh trong toàn bộ 744 từ (theo từ tiếng Anh, nghĩa, hoặc câu ví dụ).
- 🔊 **Phát âm**: vào ⚙️ **Cài đặt** để chọn nguồn phát âm — *Giọng thiết bị* (Web Speech, offline) hoặc *Giọng Google Dịch* (tự nhiên hơn, cần mạng) — và chất giọng Anh-Anh / Anh-Mỹ. Nếu Google không tải được, app tự chuyển về giọng thiết bị.
- ▶️ **Học tiếp**: tự nhớ bài/tab đang học dở (nút “Tiếp tục học” + danh sách “Gần đây” ở trang chủ).
- 💾 **Lưu & mang theo tiến độ**: mọi tiến độ lưu trong trình duyệt (localStorage) — từ đã thuộc, lịch ôn tập, điểm số, vị trí đang học — tự khôi phục khi quay lại. Trong ⚙️ Cài đặt có **Sao lưu → file** và **Khôi phục từ file** để chuyển tiến độ sang máy/trình duyệt khác (vì localStorage chỉ nằm trong 1 trình duyệt và sẽ mất nếu xóa dữ liệu duyệt web).
- 🌙 Giao diện sáng/tối, tối ưu cho điện thoại.

> Về “Giọng Google Dịch”: dùng endpoint phát âm công khai `translate_tts` của Google Translate (không phải API chính thức, không cần key). Nó cần Internet và về lý thuyết có thể bị Google giới hạn; khi đó app tự dùng lại giọng thiết bị. Nếu cần giọng chuẩn & ổn định 100% kể cả offline, có thể chuyển sang phương án tải sẵn file MP3 (xem phần cuối).

> **Về nội dung / bản quyền:** App này lấy cảm hứng từ *cấu trúc 20 chủ đề* của cuốn
> *"Quick & Fun – Học nhanh 1000+ từ vựng tiếng Anh"* (Dương Hương, Mega Book), nhưng **toàn bộ
> từ vựng, câu ví dụ và bài tập ở đây là nội dung nguyên gốc do tự soạn** — không sao chép sách.
> Nếu bạn muốn dùng nội dung gốc của sách, hãy mua sách để ủng hộ tác giả (có bán trên Tiki, Fahasa…).
> Ảnh chụp sách cá nhân nằm trong thư mục `ref/` và **đã được `.gitignore` loại khỏi repo công khai**.

---

## Xem thử tại máy

Không cần cài gì ngoài Node (đã có sẵn để chạy server preview):

```bash
node server.js
```

Rồi mở http://localhost:5177 trong trình duyệt.

> Lưu ý: mở trực tiếp file `index.html` bằng `file://` có thể không chạy được JavaScript ở
> một số trình duyệt. Hãy dùng lệnh trên, hoặc đưa lên GitHub Pages (bên dưới).

---

## Đưa lên GitHub Pages (miễn phí, có link học trên điện thoại)

1. Tạo một repository mới trên GitHub, ví dụ tên `quickfun`.
2. Đẩy toàn bộ thư mục này lên (trừ `ref/` đã bị bỏ qua):

   ```bash
   git init
   git add .
   git commit -m "Quick & Fun vocab app"
   git branch -M main
   git remote add origin https://github.com/<tên-của-bạn>/quickfun.git
   git push -u origin main
   ```

3. Trên GitHub: vào **Settings → Pages → Build and deployment**,
   chọn **Source: Deploy from a branch**, **Branch: `main` / `(root)`**, bấm **Save**.
4. Đợi ~1 phút, trang sẽ chạy tại:
   `https://<tên-của-bạn>.github.io/quickfun/`

Chỉ là các file tĩnh (HTML/CSS/JS) nên không cần cấu hình build gì thêm. File `.nojekyll`
đã có sẵn để GitHub phục vụ file y nguyên.

---

## Đưa lên GitLab Pages

Repo đã có sẵn file `.gitlab-ci.yml`. Chỉ cần đẩy code lên GitLab (nhánh mặc định),
pipeline sẽ tự copy site vào thư mục `public/` và xuất bản. Sau khi pipeline chạy xong,
xem đường dẫn tại **Deploy → Pages** (thường là `https://<tên>.gitlab.io/<repo>/`).

---

## Thêm / sửa từ vựng

Nội dung nằm ở các file JSON trong `data/units/unit-01.json` … `unit-20.json`.
Mỗi từ có dạng:

```json
{
  "word": "Eye",
  "ipa": "/aɪ/",
  "pos": "n",
  "vi": "mắt",
  "example_en": "She has beautiful brown eyes.",
  "example_vi": "Cô ấy có đôi mắt nâu đẹp.",
  "emoji": "👁️"
}
```

Sau khi sửa, chạy lệnh build để cập nhật lại dữ liệu cho web:

```bash
node build.js
```

Lệnh này kiểm tra tính hợp lệ của từng file rồi gom lại thành `js/data.js`
(web app đọc dữ liệu từ đây, nhờ vậy chạy được cả khi mở offline).

---

## Cấu trúc thư mục

```
index.html                  # Trang chính
css/style.css               # Giao diện (sáng/tối, mobile-first)
js/app.js                   # Toàn bộ logic (router, học, flashcard, luyện tập, SRS, kiểm tra, tìm kiếm)
js/data.js                  # Dữ liệu đã gộp (tự sinh — đừng sửa tay)
data/units/unit-XX.json     # Nguồn từ vựng của mỗi chủ đề (sửa ở đây)
data/units/unit-XX.phrases.json  # Cụm từ / collocation của mỗi chủ đề
build.js                    # Gộp JSON (+ phrases) -> js/data.js
server.js                   # Server tĩnh để xem thử ở máy
ref/                        # Ảnh chụp sách cá nhân (không đưa lên repo công khai)
```

Chúc bạn học vui! 🎉
