import { Html, Head, Main, NextScript } from 'next/document';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

export default function Document() {
  // 读取manifest.json文件
  let manifest;
  try {
    const manifestPath = join(process.cwd(), 'public', 'manifest.json');
    if (existsSync(manifestPath)) {
      manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    }
  } catch (error) {
    console.warn('Could not read manifest.json:', error);
  }

  return (
    <Html lang="zh-CN">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* PWA Meta Tags */}
        {manifest && (
          <>
            <meta name="theme-color" content={manifest.theme_color} />
            <meta name="msapplication-TileColor" content={manifest.theme_color} />
            <meta name="application-name" content={manifest.name} />
          </>
        )}
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "L.ARCH",
              "jobTitle": "建筑师",
              "description": "专注于建筑设计与空间规划",
              "url": "https://your-domain.com",
              "sameAs": [
                "https://github.com/yourusername",
                "https://linkedin.com/in/yourusername",
                "https://dribbble.com/yourusername"
              ],
              "knowsAbout": [
                "建筑设计",
                "室内设计", 
                "空间规划",
                "项目管理",
                "BIM",
                "LEED认证"
              ]
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}