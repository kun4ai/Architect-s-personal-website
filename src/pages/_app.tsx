import React from 'react';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import '@/styles/globals.css';

// 错误边界组件
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white text-center">
          <Head>
            <title>应用程序错误</title>
            <meta name="description" content="建筑师网站出现错误" />
          </Head>
          
          <div className="max-w-md">
            <h1 className="text-6xl font-bold text-red-500 mb-6">500</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">应用程序错误</h2>
            <p className="text-gray-600 mb-6">抱歉，应用程序遇到了意外错误。请尝试刷新页面。</p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-gray-100 p-4 rounded-md text-left overflow-auto text-sm mb-6">
                <p className="text-red-600 font-semibold mb-2">错误详情：</p>
                <pre className="text-red-500">{this.state.error.message}</pre>
              </div>
            )}
            
            <button 
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => window.location.reload()}
            >
              刷新页面
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        <Component 
          {...pageProps} 
          key={router.route}
        />
      </AnimatePresence>
    </ErrorBoundary>
  );
}