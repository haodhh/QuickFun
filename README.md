# Quick & Fun · Học từ vựng tiếng Anh 🧩

Web app học từ vựng tiếng Anh theo **20 chủ đề**, chạy tĩnh (không cần server) — mở trên điện thoại hay máy tính để học mọi lúc, mọi nơi.

- 📖 **Học**: danh sách từ có phiên âm IPA, nghĩa tiếng Việt, câu ví dụ Anh–Việt, nút nghe phát âm, đánh dấu "đã thuộc".
- 🃏 **Flashcard**: lật thẻ, xáo trộn, đánh dấu thuộc/chưa thuộc.
- ✍️ **Kiểm tra**: quiz trắc nghiệm tự sinh (Anh→Việt và Việt→Anh), chấm điểm, lưu kỷ lục.
- 🔎 **Tìm kiếm**: tra nhanh trong toàn bộ ~744 từ (theo từ tiếng Anh, nghĩa, hoặc câu ví dụ).
- 🌙 Giao diện sáng/tối, tối ưu cho điện thoại, lưu tiến độ ngay trong trình duyệt (localStorage).

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
index.html          # Trang chính
css/style.css       # Giao diện (sáng/tối, mobile-first)
js/app.js           # Toàn bộ logic (router, học, flashcard, quiz, tìm kiếm)
js/data.js          # Dữ liệu đã gộp (tự sinh — đừng sửa tay)
data/units/*.json   # Nguồn dữ liệu từ vựng (sửa ở đây)
build.js            # Gộp JSON -> js/data.js
server.js           # Server tĩnh để xem thử ở máy
ref/                # Ảnh chụp sách cá nhân (không đưa lên repo công khai)
```

Chúc bạn học vui! 🎉
