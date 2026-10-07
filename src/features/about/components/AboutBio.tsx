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
    </div>
  );
};
