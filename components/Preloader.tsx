'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('preloadShown');
    if (hasShown) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoaded(true);
      sessionStorage.setItem('preloadShown', 'true');

      setTimeout(() => {
        setVisible(false);
      }, 600);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const cols = [0, 1, 2, 3, 4];
  const pixels = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className={`preload-container ${loaded ? 'loaded' : ''}`}>
      <div className="preload-grid">
        {cols.map((colIdx) => (
          <div
            key={colIdx}
            className={`preload-col ${loaded ? 'loaded' : ''}`}
            style={{ animationDelay: `${colIdx * 0.1}s` }}
          >
            {pixels.map((pixelIdx) => (
              <div
                key={pixelIdx}
                className="preload-pixel"
                style={{
                  opacity: loaded ? 0 : 1,
                  transitionDelay: loaded ? `${Math.random() * 0.3}s` : '0s',
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}