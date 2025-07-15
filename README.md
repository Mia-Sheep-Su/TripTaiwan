# 🗺️ Tour Guide Taiwan

一個基於 **Firebase Studio** 專案，經過二次開發與優化的旅遊行程展示應用。此專案不僅展現了完整的行程瀏覽功能，更透過互動地圖與視覺強化的 UI 設計，提供良好的使用者體驗，並整合 **AI 工具** 的開發潛力。

> 🔗 中文版 Demo: [https://triptaiwan.mia-and-max.com/?lang=zh](https://triptaiwan.mia-and-max.com/?lang=zh)
> 🔗 English Demo: [https://triptaiwan.mia-and-max.com/](https://triptaiwan.mia-and-max.com/)

---

## 🔍 專案簡介

此專案使用 Firebase Studio 的進行基礎開發，接著我透過自訂樣式與功能擴充，將其轉化為一個雙語、互動性高的旅遊展示作品：

### ✅ 核心改進與特色功能：

* **雙語系統（中 / 英）切換**：支援網址參數 `?lang=zh` 進行語系切換，資料與標題皆根據語系切換同步載入。
* **頁籤切換與斜角設計**：客製化頁籤元件，支援多個地區（台北 / 蘭嶼）行程切換，搭配 CSS `clip-path` 實現斜角造型，強化視覺設計。
* **地圖互動與行程定位**：自製手繪地圖，圖釘可點擊，會自動滑動至對應行程卡片並同步切換輪播圖片。
* **圖文同步輪播設計**：每個行程卡片配有圖片 Carousel，支援圖文切換、斷點顯示與活動 highlight。
* **快速開發流程**：以 Firebase Studio 作為原型基礎，並搭配 ChatGPT 與 AI 工具加速架構設計與問題排除，**在兩天（約 8 小時）內完成完整開發與部署流程。**

---

 ## 🛠 技術棧

* 🔷 **React** + **Next.js 15**
* 🧠 TypeScript
* 🎨 Tailwind CSS
* 🌎 Firebase Hosting（靜態輸出模式）
* 🧩 embla-carousel（圖片輪播）
* 🧩 Radix UI（Tooltip 組件）
* 🧩 shadcn/ui（卡片、徽章、按鈕樣式）
* 🛟 自訂 i18n（自建 `i18n.ts` 控管多語系內容）
* 🔧 開發輔助工具：Firebase Studio + ChatGPT

---

## 🚀 安裝與本地運行

```bash
git clone https://github.com/Mia-Sheep-Su/TripTaiwan.git
cd TripTaiwan
npm install
npm run dev
```

---

## ✨ 我的貢獻亮點

### 🎨 1. 自訂頁籤樣式設計

使用 `clip-path` 製作斜角標籤，Hover/Active 狀態保持形狀一致，結合 Tailwind 動態類別切換，使樣式在不同斷點下仍能穩定顯示。

### 🗺 2. 地圖互動 + 圖片同步機制

實作 React 父子元件資料流，地圖點擊後會：

* 滾動至對應行程區塊（透過 `scrollIntoView`）
* 透過 `CarouselApi` 切換到對應景點的圖片

此機制加強了 **多模態資訊同步（地圖 → 內容）** 的互動設計。

### 🔄 3. 多語系實作與資料切換

採用雙份 JSON（中 / 英）資料，並在首頁根據網址參數 (`?lang=zh`) 進行語系切換。文字部分則集中管理於 `i18n.ts` 檔案，利於後續擴充與維護。

### ⚡ 4. AI 工具應用加速開發

本專案僅花 **兩天（約 8 小時）** 由零開始開發完成，包含：

* 元件結構設計
* 互動與動畫處理
* 行動裝置排版調整
* 靜態部署設定

使用 **Firebase Studio** 快速建立專案初始架構，並結合 **ChatGPT 工具** 降低除錯與重構成本，加速開發流程。

---

## 🔮 未來可能擴充功能

* AI 旅遊推薦引擎（例如輸入偏好自動生成行程）
* 圖像比對景點預覽（AI 圖片標籤推薦）
* 自訂收藏與分享功能（儲存喜愛路線）
* 增加更多地區資料

---

## 📫 聯絡方式

* GitHub: [@Mia-Sheep-Su](https://github.com/Mia-Sheep-Su)
* Email: miasu713@gmail.com
* 履歷: https://www.cake.me/yi-jen-su
