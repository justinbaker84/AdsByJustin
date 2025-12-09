'use client';

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.floor(end * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-5xl font-bold text-blue-600">
      {count}
      {suffix}
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Typical Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ROI Increase */}
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <AnimatedCounter end={120} suffix="%" />
              <p className="text-lg text-gray-700 mt-4">ROI Increase</p>
          </div>

          {/* Conversion Rate Increase */}
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <AnimatedCounter end={30} suffix="%" />
              <p className="text-lg text-gray-700 mt-4">Conversion Rate Increase</p>
          </div>

          {/* Eliminated Waste */}
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <AnimatedCounter end={30} suffix="%" />
              <p className="text-lg text-gray-700 mt-4">Eliminated Waste</p>
          </div>

          {/* Is All It Takes */}
          <div className="bg-white rounded-lg p-8 text-center shadow-md">
            <AnimatedCounter end={90} suffix=" Days" duration={2000} />
              <p className="text-lg text-gray-700 mt-4">Is All It Takes</p>
          </div>
        </div>
      </div>
    </section>
  );
}

