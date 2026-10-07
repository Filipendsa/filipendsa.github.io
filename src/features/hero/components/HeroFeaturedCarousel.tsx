import React, { useState } from 'react';
import { useTranslation } from '../../../shared/i18n/useTranslation';
import { featuredSlides } from '../../../domain/hero/featuredData';
import { ActionPillGroup } from '../../../shared/components/Buttons/ActionPillGroup';

export const HeroFeaturedCarousel: React.FC = () => {
  const { language, t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = featuredSlides[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredSlides.length);
  };

  return (
    <div className="hero-featured-card">
      <div className="hero-featured-img-wrap">
        <img
          src="assets/img/featured-hero.svg"
          alt="Clean Architecture &amp; .NET Featured Visualization"
          width="600"
          height="340"
          loading="eager"
        />
      </div>
      <div className="hero-featured-body">
        <h3 className="hero-featured-title">
          {currentSlide.titles[language] || currentSlide.titles.en}
        </h3>
        <p className="hero-featured-desc">
          {currentSlide.descriptions[language] || currentSlide.descriptions.en}
        </p>

        <div className="hero-featured-footer">
          <ActionPillGroup
            href={currentSlide.link}
            label={t(currentSlide.linkTextKey)}
            isExternal={currentSlide.link.startsWith('http')}
            pillStyle={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
            circleStyle={{ width: '36px', height: '36px', fontSize: '0.95rem' }}
          />
        </div>

        {/* Carousel Controls */}
        <div className="hero-carousel-nav">
          <button
            type="button"
            className="carousel-btn"
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            ←
          </button>
          <div className="carousel-dots">
            {featuredSlides.map((slide, idx) => (
              <span
                key={slide.id}
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                style={{ cursor: 'pointer' }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="carousel-btn"
            onClick={handleNext}
            aria-label="Next Slide"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};
