# 開發指南 (Development Guide)

## 1. 環境設置 (Environment Setup)
* **先決條件：** 現代瀏覽器、程式碼編輯器 (例如 VS Code)。
* **克隆專案：** `git clone [repository_url]`
* **安裝依賴 (若有使用 Vite)：** `npm install` 或 `yarn install`
* **啟動開發伺服器 (若有使用 Vite)：** `npm run dev` 或 `yarn dev`
* **直接開啟：** 若無打包工具，直接在瀏覽器開啟 `index.html`。

## 2. 程式碼風格與規範 (Code Style & Conventions)
* **ES Modules：** 所有 JavaScript 檔案使用 ES Modules。
* **命名規範：**
    * 檔名：`kebab-case` (例如 `my-component.js`)。
    * 變數/函式：`camelCase` (例如 `myFunction`, `someVariable`)。
    * 類別：`PascalCase` (例如 `MyClass`)。
* **程式碼原則：**
    * 優先考量可讀性，避免過度抽象。
    * 所有邏輯必須可在瀏覽器直接執行。
    * 嚴禁使用 `eval()` 或動態導入 CDN 腳本。

## 3. 專案結構與架構 (Project Structure & Architecture)
* **`public/` (或根目錄)：**
    * `index.html`：專案入口點。
    * `/data`：所有塔羅牌相關的靜態 JSON 資料。
    * `/assets`：牌圖、UI 圖片等靜態資源。
* **`src/`：** 前端邏輯原始碼。
    * `deck/`：洗牌、抽牌邏輯。
    * `spreads/`：牌陣處理邏輯。
    * `reading/`：解牌組合邏輯。
    * `ui/`：DOM 操作與畫面渲染邏輯。
* **資料與邏輯分離：** 強調 UI 不直接存取 JSON，需透過 service 層取得資料。

<h2> 4. 測試與調適 (Testing & Debugging)</h2>
* **測試方法：** 主要使用 `console.assert()` 進行斷言。
* **調適模式：** 說明如何啟用專案內建的 debug mode (若有)。
* **可重現性：** 強調 seed 抽牌功能用於測試的可重現性。

<h2> 5. 貢獻流程 (Contribution Workflow)</h2>
* **Git 工作流：**
    * 從 `main` 分支拉取最新程式碼。
    * 建立新分支進行功能開發或錯誤修復。
    * Commit message 遵循建議格式 (e.g., `feat: add new feature`, `fix: resolve bug in X`)。
    * 提交 Pull Request。
