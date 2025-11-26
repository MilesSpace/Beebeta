# GitHub Pages 部署指南

本项目已配置好 GitHub Pages 部署，按照以下步骤操作即可：

## 前置条件

1. 确保你的项目已经推送到 GitHub 仓库
2. 仓库名称应该是 `Beebeta`（如果不同，需要修改 `vite.config.ts` 中的 `base` 路径）

## 部署步骤

### 方法一：使用 GitHub Actions（推荐，自动部署）

1. **启用 GitHub Pages**
   - 进入你的 GitHub 仓库
   - 点击 `Settings` → `Pages`
   - 在 `Source` 部分，选择 `GitHub Actions`
   - 保存设置

2. **推送代码**
   ```bash
   git add .
   git commit -m "配置 GitHub Pages 部署"
   git push origin main
   ```

3. **等待自动部署**
   - 推送代码后，GitHub Actions 会自动构建和部署
   - 在仓库的 `Actions` 标签页可以查看部署进度
   - 部署完成后，你的网站将在 `https://你的GitHub用户名.github.io/Beebeta/` 可用

### 方法二：手动部署（使用 gh-pages）

1. **安装依赖**
   ```bash
   npm install
   ```

2. **更新 package.json 中的 homepage**
   - 打开 `package.json`
   - 将 `homepage` 字段中的 `你的GitHub用户名` 替换为你的实际 GitHub 用户名

3. **构建并部署**
   ```bash
   npm run deploy
   ```

4. **在 GitHub 上启用 Pages**
   - 进入仓库的 `Settings` → `Pages`
   - 在 `Source` 部分，选择 `gh-pages` 分支
   - 保存设置

## 重要提示

1. **base 路径配置**：如果仓库名称不是 `Beebeta`，需要修改 `vite.config.ts` 中的 `base` 字段：
   ```typescript
   base: '/你的仓库名/',
   ```

2. **路由配置**：项目已使用 `HashRouter`，这在 GitHub Pages 上可以正常工作，无需额外配置。

3. **首次部署**：首次部署可能需要几分钟时间，请耐心等待。

4. **更新网站**：使用 GitHub Actions 时，每次推送到 `main` 分支都会自动重新部署。

## 故障排除

- 如果网站显示 404，检查 `base` 路径是否正确
- 如果样式丢失，确保 `base` 路径以 `/` 开头和结尾
- 查看 GitHub Actions 日志以了解构建错误

