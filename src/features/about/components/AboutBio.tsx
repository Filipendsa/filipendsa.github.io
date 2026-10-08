import React from 'react';
import { useTranslation } from '../../../shared/i18n/useTranslation';
import { useExperienceDuration } from '../../../domain/experience/useExperienceDuration';

export const AboutBio: React.FC = () => {
  const { t } = useTranslation();
  const { yearsFormatted } = useExperienceDuration();

  return (
    <div className="about-info">
      <p className="about-intro-text">
        {t('about_greeting')}
        <strong>{t('about_role')}</strong>
        {t('about_and')}
        <strong>{t('about_dev')}</strong>
        {t('about_with')}
        <strong>{yearsFormatted} {t('work_years_suffix')}</strong>
        {t('about_exp_suffix')}
      </p>
      <p className="about-intro-text">
        {t('about_p2_working')}
        <strong>{t('about_p2_iatec')}</strong>
        {t('about_p2_desc')}
        <strong>{t('about_p2_yesode')}</strong>
        {t('about_p2_end')}
      </p>
      <div style={{ marginTop: '1.25rem' }}>
        <a
          href="/curriculo/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="pill-link"
          style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)', fontWeight: 600 }}
        >
          <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          <span>{t('pill_cv')}</span> ↗
        </a>
      </div>
    </div>
  );
};
