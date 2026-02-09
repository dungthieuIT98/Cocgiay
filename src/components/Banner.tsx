import { useEffect, useState } from 'react';
import { loadCSV, resolvePublicPath } from '../utils/csvLoader';

interface Banner {
  id: number;
  image: string;
}

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [banners, setBanners] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBanners = async () => {
      try {
        const data = await loadCSV<Banner>('/data/banners.csv');
        setBanners(data.map((b) => b.image));
      } catch (error) {
        console.error('Error loading banners:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBanners();
  }, []);

  useEffect(() => {
    if (banners.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  if (loading || banners.length === 0) {
    return (
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400">Đang tải...</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl group bg-gray-100"
      style={{ minHeight: '500px' }}
    >
      {banners.map((banner, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            i === index 
              ? 'translate-x-0 opacity-100' 
              : i < index 
                ? '-translate-x-full opacity-0' 
                : 'translate-x-full opacity-0'
          }`}
          style={{ zIndex: i === index ? 10 : 0 }}
        >
          <img
            src={resolvePublicPath(banner)}
            alt={`Banner ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 md:p-4 shadow-xl transition-all opacity-0 group-hover:opacity-100 hover:scale-110 hover:-translate-x-1 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 md:p-4 shadow-xl transition-all opacity-0 group-hover:opacity-100 hover:scale-110 hover:translate-x-1 z-20"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? 'bg-white w-8 h-2'
                : 'bg-white/50 hover:bg-white/75 w-2 h-2'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
