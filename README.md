# 建筑师个人网站

一个专业的建筑师作品集网站，使用 Next.js、Tailwind CSS 和 Framer Motion 构建。

## 一键部署到 Vercel

### 方式一：通过 Vercel CLI（推荐）

1. **安装 Vercel CLI**
```bash
npm i -g vercel
```

2. **在项目根目录运行**
```bash
vercel
```

3. **按照提示操作**
- 选择账户
- 确认项目设置
- 部署

### 方式二：通过 Vercel 网站

1. **访问 [Vercel.com](https://vercel.com)**
2. **登录或注册账户**
3. **点击 "New Project"**
4. **导入你的 GitHub 仓库**
5. **部署设置（会自动检测）：**
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

## 项目特性

- ✅ 响应式设计，支持所有设备
- ✅ 现代化 UI/UX 设计
- ✅ 优化的图片加载
- ✅ SEO 友好
- ✅ 快速加载速度
- ✅ PWA 支持

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 构建生产版本

```bash
npm run build
npm start
```

## 技术栈

- **前端框架**: Next.js 14
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **类型检查**: TypeScript
- **部署**: Vercel

## 目录结构

```
├── src/
│   ├── components/     # React 组件
│   ├── data/          # 数据文件
│   ├── hooks/         # 自定义 hooks
│   ├── pages/         # 页面文件
│   ├── styles/        # 样式文件
│   └── types/         # TypeScript 类型
├── public/            # 静态资源
└── vercel.json        # Vercel 配置文件
```

## 支持

如有问题，请参考 [Vercel 文档](https://vercel.com/docs) 或联系开发者。

---

部署成功后，Vercel 会提供一个免费的 `.vercel.app` 子域名，你也可以绑定自己的域名。