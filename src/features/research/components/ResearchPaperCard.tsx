import React from 'react';
import { useTranslation } from '../../../shared/i18n/useTranslation';

export const ResearchPaperCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="research-card">
      <span className="research-badge">{t('research_badge')}</span>
      <h3 className="research-title">{t('research_title')}</h3>
      <p className="research-abstract">{t('research_abstract')}</p>
      <div className="project-tags-row">
        <span className="tech-tag">Robotics</span>
        <span className="tech-tag">Autonomous Navigation</span>
        <span className="tech-tag">C++</span>
        <span className="tech-tag">Logistics Optimization</span>
        <span className="tech-tag">UNASP ENAIC</span>
      </div>
    </div>
  );
};
