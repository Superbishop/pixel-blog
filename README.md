# 🎮 像素风个人博客

一个极简的像素风格个人博客，使用纯HTML/CSS/JavaScript构建，无依赖框架。

![像素博客风格](https://img.shields.io/badge/风格-像素-black)
![配色方案](https://img.shields.io/badge/配色-黑白-lightgrey)
![部署](https://img.shields.io/badge/部署-GitHub%20Pages-blue)

## ✨ 特性

- 🎨 纯黑白像素风格
- 📱 完全响应式设计
- ⚡ 极速加载（无JavaScript框架）
- 🔧 易于自定义和修改
- 📦 开源免费
- 🚀 支持GitHub Pages自动部署

## 📁 项目结构

```
pixel-blog/
├── index.html          # 首页
├── about.html         # 关于我页面
├── contact.html       # 联系页面
├── post-1.html       # 示例文章
├── styles.css        # 样式文件
├── script.js         # 交互脚本
├── avatar.png        # 你的头像图片（需要添加）
└── README.md         # 说明文件
```

## 🚀 快速开始

### 本地预览

1. 克隆或下载此项目：
```bash
git clone https://github.com/yourusername/pixel-blog.git
cd pixel-blog
```

2. 直接用浏览器打开 `index.html`，或者使用本地服务器：
```bash
# Python 3
python -m http.server 8000

# Node.js (如果安装了http-server)
npx http-server

# PHP
php -S localhost:8000
```

3. 访问 `http://localhost:8000`

### 部署到 GitHub Pages

#### 方法一：手动部署

1. Fork 这个仓库到你的GitHub账号
2. 进入仓库的 **Settings** → **Pages**
3. 在 **Source** 下选择 **Deploy from a branch**
4. 选择 `main` 分支，点击 **Save**
5. 等待几分钟，博客将在 `https://yourusername.github.io/pixel-blog/` 可访问

#### 方法二：使用 GitHub Actions（推荐）

项目已配置自动部署工作流，只需推送到GitHub即可自动部署。

1. Fork 此仓库
2. 修改 `github/workflows/deploy.yml` 中的仓库名称：
```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./  # 修改为你的仓库名称
```

3. 提交并推送你的更改：
```bash
git add .
git commit -m "更新博客内容"
git push origin main
```

4. 访问 `https://yourusername.github.io/pixel-blog/` 查看你的博客

## 🎨 自定义

### 修改配色方案

编辑 `styles.css` 中的 CSS 变量：

```css
:root {
    --bg-primary: #ffffff;      /* 主背景色 */
    --bg-secondary: #f5f5f5;    /* 次背景色 */
    --text-primary: #000000;      /* 主文字色 */
    --text-secondary: #333333;    /* 次文字色 */
    --border: #000000;            /* 边框颜色 */
    --accent: #000000;           /* 强调色 */
}
```

### 添加新文章

1. 复制 `post-1.html` 作为模板
2. 修改文章标题、内容和日期
3. 更新 `index.html` 中的文章列表
4. 保存文件

### 修改头像

将你的头像图片命名为 `avatar.png` 并放置在项目根目录。建议：
- 尺寸：80x80 像素
- 格式：PNG（支持透明度）
- 风格：像素艺术

## 📝 创建新页面

1. 复制 `index.html` 作为模板
2. 修改 `<title>` 标签
3. 修改 `.site-title` 文本
4. 替换 `<main>` 标签内的内容
5. 更新导航菜单中的链接状态

## 🔧 技术栈

- **HTML5** - 语义化标签
- **CSS3** - 现代布局和动画
- **JavaScript (ES6+)** - 交互功能
- **GitHub Pages** - 托管和部署

## 📱 响应式断点

- **桌面**: > 600px
- **移动**: ≤ 600px

## 🌐 浏览器支持

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📄 许可证

MIT License - 自由使用、修改和分发

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 故障排除

### GitHub Pages 不更新

- 检查 Actions 标签页，确认部署成功
- 等待最多 10 分钟，GitHub Pages 有时会延迟
- 确保在仓库设置中启用了 GitHub Pages

### 样式不显示

- 检查 `styles.css` 文件路径是否正确
- 清除浏览器缓存（Ctrl+Shift+R 或 Cmd+Shift+R）

---

🎮 **享受你的像素博客！**
