# 🗺️ Tour Guide Taiwan

> 一個基於 Firebase Studio 的旅遊行程展示網站，融合客製化設計與互動體驗，展現 AI 工具輔助下的高效率前端開發成果。

## 🔍 專案簡介

本專案由 Firebase Studio 原始範本二次開發而成，結合台北與蘭嶼兩種截然不同的旅遊風格。除了提供每日行程瀏覽，還針對 UI / UX 做了大幅優化，僅花費兩天（每日約 4 小時）完成主要開發，體現我善用 AI 工具（如 ChatGPT、Firebase Studio）加速開發的能力。

### ✨ 主要特色

* **客製化頁籤設計**
  使用 `clip-path` 技術打造斜角頁籤，並處理 hover 與 active 狀態下的一致性，提升整體視覺辨識度。

* **地圖互動 + 精準導引**
  點選地圖上的景點圖釘，畫面將平滑捲動至對應的每日行程區塊，並自動切換該區塊中的圖片輪播，增強操作直覺與沉浸感。

* **多裝置友善設計**
  運用 Tailwind CSS 架構響應式排版，確保桌機與手機端都有良好體驗，並根據主題切換專屬配色。

* **AI 技術整合潛力**
  雖尚未實作，但已預留 `/src/ai` 模組結構，未來可拓展 AI 行程推薦、景點比價等功能。

---

## 🧱 技術棧

* React 18
* Next.js 14 (App Router)
* Tailwind CSS
* TypeScript
* Firebase Studio（作為 scaffold 與資料來源規劃）
* embla-carousel（圖像輪播）
* Radix UI（Tooltip 組件）
* shadcn/ui（卡片、徽章、按鈕樣式）
* 自訂 clip-path + SVG Icon

---

## 🚀 安裝與本地運行

```bash
git clone https://github.com/Mia-Sheep-Su/TripTaiwan.git
cd TripTaiwan
npm install
npm run dev
```

---

## 💡 延伸規劃（未來可能整合）

* AI 自動生成個人化行程建議
* 旅遊行程比較／比價功能
* 整合地圖服務的即時天氣與交通資訊

---

## 🙋‍♀️ 我的貢獻與學習

* 🔧 二次開發與介面客製：理解 Firebase Studio 架構，獨立完成自定義互動與樣式。
* 🧠 高效開發流程：善用 AI 工具（如 ChatGPT）作為技術諮詢與錯誤排查助理，節省查找文件與排錯時間。
* 🎨 設計 + 技術並進：兼顧前端開發與視覺風格，使介面風格貼合「台北 vs 蘭嶼」雙主題概念。

---

## 📫 聯絡方式

* GitHub: [@Mia-Sheep-Su](https://github.com/Mia-Sheep-Su)
* Email: miasu713@gmail.com
* 履歷: https://www.cake.me/yi-jen-su
