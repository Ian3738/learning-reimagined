# 寓教於遊 · 科技融入教學創新 期末成果展

國立清華大學 教育與學習科技學系｜學生專題成果展示網站（美術館／畫廊風格）。

- **專題作品**：五組以「遊戲化 × 生成式 AI」打造的教學專題海報
- **展場紀實**：展出當日現場照片，以 GSAP 製作沉浸式橫向長廊
- **可點擊放大**：海報與照片皆可開啟燈箱檢視

## 技術

純靜態網站，無需建置：

- `index.html` — 單一檔案（HTML / CSS / JS）
- `assets/` — 最佳化後的海報與照片
- 動畫：[GSAP](https://gsap.com/) ScrollTrigger（CDN）
- 字型：Google Fonts（Noto Serif TC、Cormorant Garamond、Jost）

以 GitHub Pages 部署。設有 `noindex`，不會被搜尋引擎索引。
