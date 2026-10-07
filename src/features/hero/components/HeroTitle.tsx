import React from 'react';
import { useTranslation } from '../../../shared/i18n/useTranslation';

export const HeroTitle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-title-wrap">
      <h1 className="hero-title">
        <span>{t('hero_role_1')}</span>
        <span className="title-line-indent">{t('hero_role_2')}</span>
      </h1>
      <p className="hero-subtitle">
        {t('hero_subtitle_start')}
        <em>{t('hero_subtitle_em')}</em>
        {t('hero_subtitle_mid')}
        <strong>{t('hero_subtitle_clean')}</strong>
        {t('hero_subtitle_and')}
        <strong>{t('hero_subtitle_perf')}</strong>
        {t('hero_subtitle_end')}
      </p>
    </div>
  );
};
