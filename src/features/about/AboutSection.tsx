import React from 'react';
import { useTranslation } from '../../shared/i18n/useTranslation';
import { SectionMarker } from '../../shared/components/UI/SectionMarker';
import { ProfilePhotoCard } from './components/ProfilePhotoCard';
import { AboutBio } from './components/AboutBio';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <SectionMarker label={t('sec_about')} />

        <div className="about-layout">
          <ProfilePhotoCard />
          <AboutBio />
        </div>
      </div>
    </section>
  );
};
