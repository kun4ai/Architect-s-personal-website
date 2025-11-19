import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

type ErrorProps = {
  statusCode?: number;
  hasGetInitialProps?: boolean;
  err?: Error;
};

const Error: NextPage<ErrorProps> = ({ statusCode, err }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white text-center">
      <Head>
        <title>
          {statusCode
            ? `${statusCode}错误 - ${statusCode === 404 ? '页面未找到' : '服务器错误'}`
            : '应用程序错误'}
        </title>
        <meta name="description" content="建筑师网站出现错误" />
      </Head>
      
      <div className="max-w-md">
        <div className="mb-6">
          {statusCode === 404 ? (
            <h1 className="text-6xl font-bold text-gray-900">404</h1>
          ) : (
            <h1 className="text-6xl font-bold text-red-500">{statusCode || 500}</h1>
          )}
        </div>
        
        <div className="mb-8">
          {statusCode === 404 ? (
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">页面未找到</h2>
          ) : (
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">服务器错误</h2>
          )}
          
          <p className="text-gray-600 mb-6">
            {statusCode === 404
              ? '抱歉，您访问的页面不存在。'
              : '抱歉，服务器遇到错误。请稍后再试。'}
          </p>
          
          {err && process.env.NODE_ENV === 'development' && (
            <div className="bg-gray-100 p-4 rounded-md text-left overflow-auto text-sm mb-6">
              <p className="text-red-600 font-semibold mb-2">错误详情：</p>
              <pre className="text-red-500">{err.message}</pre>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" passHref>
            <Button variant="primary" className="w-full sm:w-auto">
              返回首页
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()} 
            className="w-full sm:w-auto"
          >
            返回上一页
          </Button>
        </div>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, err };
};

export default Error;