# 築知 · Knowledge Building

國立清華大學 教育與學習科技學系｜科技融入教學創新 期末成果展（美術館／畫廊風格・多頁式網站）。

## 頁面

- `index.html` — 首頁（主視覺＋站內導覽）
- `about.html` — 關於／策展前言（知識翻新理念）
- `works.html` — 專題作品總覽（六件）
- `work.html?id=g1…g8,g6` — 各作品專頁（含上一件／下一件導覽）
- `gallery.html` — 展場紀實（GSAP 膠卷放映廳・65 幀）

## 共用檔

- `styles.css` — 共用樣式（設計系統）
- `app.js` — 共用資料（作品／照片）、導覽列、燈箱、頁面轉場、各頁渲染
- 動畫：[GSAP](https://gsap.com/) ScrollTrigger ＋ [Lenis](https://lenis.darkroom.engineering/) 平滑捲動（CDN）
- 字型：Google Fonts（霞鶩文楷 TC、Cormorant Garamond、Jost）
- 圖片：`assets/`（海報與照片，已最佳化）

純靜態，無需建置。以 GitHub Pages 部署，設有 `noindex`（不被搜尋引擎索引）。
