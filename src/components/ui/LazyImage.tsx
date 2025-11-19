import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useIntersection } from '@/hooks/useIntersection';
import { cn } from '@/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  quality = 80,
  sizes,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const { ref, isIntersecting, hasTriggered } = useIntersection({
    threshold: 0.1,
    rootMargin: '50px 0px',
    triggerOnce: true
  });

  // 图片加载处理
  useEffect(() => {
    if (priority || isIntersecting || hasTriggered) {
      setImageSrc(src);
    }
  }, [src, priority, isIntersecting, hasTriggered]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // 如果优先级高或者已经触发IntersectionObserver
  if (priority || isIntersecting || hasTriggered) {
    return (
      <div className={cn('relative overflow-hidden', className)} ref={ref}>
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'transition-all duration-500',
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          )}
        />
        
        {/* 加载指示器 */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-neutral-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* 错误状态 */}
        {hasError && (
          <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
            <div className="text-center text-neutral-400">
              <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">图片加载失败</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 占位符状态
  return (
    <div 
      className={cn('relative bg-neutral-200 animate-pulse', className)} 
      ref={ref}
      style={{ 
        aspectRatio: width && height ? `${width}/${height}` : undefined 
      }}
    >
      {/* 占位符背景 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          className="w-16 h-16 text-neutral-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
      </div>
      
      {/* 渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200"></div>
    </div>
  );
};