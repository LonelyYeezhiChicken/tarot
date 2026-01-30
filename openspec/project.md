# Project Context

## Purpose

本專案是一個 **純前端、無後端、可部署於 GitHub Pages 的塔羅牌抽牌與解牌網站**。

核心目標：

* 提供使用者「抽塔羅牌 → 查看解牌」的完整體驗
* 不使用任何後端 API、資料庫或 Serverless Function
* 所有資料皆為靜態檔案（JSON / 圖片）
* 抽牌邏輯完全在前端執行（隨機或 seed-based）
* 適合個人使用、分享、占卜娛樂與指引用途（非醫療/法律建議）

---

## Tech Stack

* HTML5
* CSS3（可使用 Tailwind CSS 或原生 CSS）
* Vanilla JavaScript（ES2020+）
* 可選：Vite（僅作為 build tool，輸出靜態檔）
* 部署：GitHub Pages
* 不使用任何後端服務、不需要 API Key

---

## Project Conventions

### Code Style

* 使用 **ES Modules**
* 檔名使用 `kebab-case`
* 變數 / function 使用 `camelCase`
* class 使用 `PascalCase`
* 避免過度抽象，優先可讀性
* 所有邏輯必須可在瀏覽器直接執行
* 不允許使用 `eval`、動態 import CDN 腳本

---

### Architecture Patterns

採用 **Static Data + Frontend Logic** 架構：

* `/data`：所有塔羅相關資料（JSON）
* `/assets`：牌圖、UI 圖片
* `/src`：前端邏輯

  * `deck`：洗牌、抽牌邏輯
  * `spreads`：牌陣處理
  * `reading`：解牌組合邏輯
  * `ui`：DOM 操作與畫面渲染

設計原則：

* **資料（JSON）與邏輯（JS）完全分離**
* 抽牌只負責「選牌」，不負責解釋
* 解牌邏輯只組合資料，不包含隨機性
* UI 不直接存取 JSON，透過 service 層取得資料

---

### Testing Strategy

* 不使用自動化測試框架
* 使用簡單的：

  * `console.assert`
  * 可手動觸發的 debug mode
* 抽牌結果需可重現（支援 seed 抽牌）
* 所有 JSON 檔需可被 `fetch()` 正確載入

---

### Git Workflow

* 單一 `main` branch
* 每次 commit 聚焦一個功能
* Commit message 建議格式：

  * `feat: add tarot deck data`
  * `feat: implement card draw logic`
  * `ui: improve card display`
  * `docs: update project spec`

---

## Domain Context

### Tarot Domain Rules

* 支援 78 張塔羅牌

  * 大阿爾克那（22）
  * 小阿爾克那（56）
* 每張牌需包含：

  * id
  * 名稱（多語系）
  * 圖片
  * 正位解釋
  * 逆位解釋
* 抽牌結果需標示：

  * 正位 / 逆位
  * 所屬牌陣位置
* 解牌屬於「指引性文字」，不可宣稱預言或確定結果

---

## Important Constraints

* ❌ 不可使用任何後端 API
* ❌ 不可使用資料庫
* ❌ 不可要求使用者登入
* ❌ 不可使用付費服務
* ✅ 必須可直接部署在 GitHub Pages
* ✅ 所有功能必須在離線環境下可運作（首次載入後）
* ✅ 所有資料需為可讀 JSON

---

## External Dependencies

* 無強制外部依賴
* 若使用第三方套件，必須：

  * 可離線使用
  * 無 runtime API call
  * 不需要 API Key

---

## AI Implementation Notes（給 AI CLI 用）

* 請先產生完整專案目錄結構
* 先實作 **單張指引牌（One Card Draw）**
* JSON 資料可先只包含：

  * `The Fool`（愚者）
  * `The Magician`（魔術師）
  * `The High Priestess`（女祭司）
* UI 需包含：

  * 抽牌按鈕
  * 翻牌動畫（可簡單）
  * 顯示牌圖、正逆位、解牌文字
* 所有內容使用繁體中文（zh-TW）
