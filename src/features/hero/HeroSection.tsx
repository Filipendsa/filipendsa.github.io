import React from 'react';
import { useTranslation } from '../../shared/i18n/useTranslation';
import { HeroTitle } from './components/HeroTitle';
import { HeroSocialPills } from './components/HeroSocialPills';
import { HeroFeaturedCarousel } from './components/HeroFeaturedCarousel';
import { ActionPillGroup } from '../../shared/components/Buttons/ActionPillGroup';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <HeroTitle />

          {/* Action Button: Projects ↗ */}
          <div className="hero-actions">
            <ActionPillGroup href="#projects" label={t('btn_projects')} />
          </div>

          {/* Social Links */}
          <HeroSocialPills />
        </div>

        {/* Featured Card */}
        <HeroFeaturedCarousel />
      </div>
    </section>
  );
};
