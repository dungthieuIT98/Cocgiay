'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface BannerImage {
  url: string;
  alt: string;
}

interface BannerProps {
  images: BannerImage[];
  autoplayDelay?: number;
  height?: string;
}

export function Banner({ images, autoplayDelay = 3000, height = 'h-[400px]' }: BannerProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const autoplay = useRef(
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false, // 👈 quan trọng
    })
  );

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      plugins={[autoplay.current]}
    >
     <CarouselContent>
        {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
            <div className={`relative ${height} w-full overflow-hidden`}>
                <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
                />
            </div>
            </CarouselItem>
        ))}
    </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
