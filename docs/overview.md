# 專案概覽 (Project Overview)

## 1. 專案目的與目標 (Purpose & Goals)
* 簡述專案目標：純前端、無後端、可部署於 GitHub Pages 的塔羅牌抽牌與解牌網站。
* 核心體驗：提供「抽塔羅牌 → 查看解牌」的完整流程。
* 應用情境：個人使用、分享、占卜娛樂與指引。

## 2. 技術棧 (Tech Stack)
* **前端語言：** HTML5, CSS3 (可選 Tailwind CSS / 原生 CSS), Vanilla JavaScript (ES2020+), ES Modules。
* **建構工具：** 可選 Vite (僅作為靜態檔打包工具)。
* **部署：** GitHub Pages。
* **限制：** 不使用任何後端服務、API Key、付費服務。

## 3. 架構模式 (Architecture Patterns)
* **靜態資料 + 前端邏輯 (Static Data + Frontend Logic)：**
    * 資料 (JSON) 與邏輯 (JS) 完全分離。
    * `/data`：塔羅牌相關資料 (JSON)。
    * `/assets`：牌圖、UI 圖片。
    * `/src`：前端邏輯 (deck, spreads, reading, ui)。
* **設計原則：**
    * 抽牌只負責選牌。
    * 解牌邏輯只組合資料，不含隨機性。
    * UI 透過 service 層取得資料，不直接存取 JSON。

## 4. 測試策略 (Testing Strategy)
* 不使用自動化測試框架。
* 採用 `console.assert` 和手動 debug mode。
* 抽牌結果需可重現 (支援 seed 抽牌)。
* 所有 JSON 檔需可被 `fetch()` 正確載入。

## 5. Git 工作流程 (Git Workflow)
* 單一 `main` 分支。
* 每次 commit 聚焦單一功能。
* Commit message 建議格式說明。

## 6. 領域規則 (Domain Context)
* 支援 78 張塔羅牌 (大阿爾克那, 小阿爾克那)。
* 包含 id, 名稱 (多語系), 圖片, 正位解釋, 逆位解釋。
* 抽牌結果需標示正位/逆位、牌陣位置。
* 解牌為指引性文字。

## 7. 重要限制 (Important Constraints)
* 不可使用任何後端 API、資料庫、使用者登入。
* 必須可直接部署在 GitHub Pages。
* 所有功能必須在離線環境下可運作 (首次載入後)。
* 所有資料需為可讀 JSON。

## 8. 外部依賴 (External Dependencies)
* 無強制外部依賴。
* 第三方套件要求：可離線使用、無 runtime API call、不需要 API Key。
