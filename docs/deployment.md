# 部署指南 (Deployment Guide)

## 1. 部署平台 (Deployment Platform)
* **GitHub Pages：** 本專案設計為可直接部署至 GitHub Pages，無需額外伺服器配置。

## 2. 部署流程 (Deployment Process)

### 2.1. 若未使用 Vite (或類似打包工具)
1. **靜態檔案準備：** 確保所有 HTML, CSS, JavaScript, `/data` 和 `/assets` 檔案位於專案根目錄或其子目錄中。
2. **上傳至 GitHub 儲存庫：** 將專案檔案推送到 GitHub 儲存庫的 `main` 分支。
3. **GitHub Pages 設定：**
    * 進入 GitHub 儲存庫的 `Settings` -> `Pages`。
    * 在 `Source` 下拉選單中選擇 `Deploy from a branch`。
    * 在 `Branch` 下拉選單中選擇 `main` (或您希望部署的分支)，並選擇 `/ (root)` 或 `/(docs)` 資料夾 (如果您的靜態網站內容在 `docs` 資料夾內)。
    * 點擊 `Save`。
4. **等待部署：** GitHub Pages 會自動構建並部署您的網站，部署完成後會提供一個 URL。

### 2.2. 若使用 Vite (或其他打包工具)
1. **建構專案：** 執行建構命令以生成靜態檔案 (通常是 `npm run build` 或 `yarn build`)。
    * 這會在專案根目錄下生成一個 `dist/` (或類似名稱) 的資料夾，包含所有可部署的靜態檔案。
2. **配置 Vite (針對 GitHub Pages)：**
    * 在 `vite.config.js` 中設定 `base` 選項，以匹配您的 GitHub Pages 專案路徑 (例如：`base: '/your-repo-name/'`)。
3. **上傳至 GitHub 儲存庫：** 將整個專案 (包含 `dist/` 資料夾) 推送到 GitHub 儲存庫的 `main` 分支。
4. **GitHub Pages 設定：**
    * 進入 GitHub 儲存庫的 `Settings` -> `Pages`。
    * 在 `Source` 下拉選單中選擇 `Deploy from a branch`。
    * 在 `Branch` 下拉選單中選擇 `main` (或您希望部署的分支)，並選擇 `/dist` 資料夾。
    * 點擊 `Save`。
5. **等待部署：** GitHub Pages 會自動構建並部署您的網站，部署完成後會提供一個 URL。

## 3. 注意事項 (Considerations)
* **根目錄部署：** 若將專案部署到使用者或組織頁面 (例如 `username.github.io` 或 `orgname.github.io`)，通常可以省略 `base` 路徑設定。
* **路徑問題：** 確保所有內部連結和資源路徑 (CSS, JS, 圖片) 都是相對路徑或正確配置了 `base` 路徑。
* **離線支援：** 部署後，首次載入頁面後應支援離線操作。
