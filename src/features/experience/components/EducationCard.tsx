import React from 'react';
import { useTranslation } from '../../../shared/i18n/useTranslation';

export const EducationCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="education-wrap">
      <div className="education-card">
        <h3 className="education-title">{t('edu_degree_title')}</h3>
        <p className="education-sub">{t('edu_degree_sub')}</p>
        <span className="education-badge">{t('edu_degree_badge')}</span>
      </div>
      <div className="education-card">
        <h3 className="education-title">{t('edu_certs_title')}</h3>
        <p className="education-sub">{t('edu_certs_sub')}</p>
      </div>
    </div>
  );
};
