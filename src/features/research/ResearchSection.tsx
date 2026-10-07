import React from 'react';
import { useTranslation } from '../../shared/i18n/useTranslation';
import { SectionMarker } from '../../shared/components/UI/SectionMarker';
import { ResearchPaperCard } from './components/ResearchPaperCard';

export const ResearchSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="research-section" id="research">
      <div className="container">
        <SectionMarker label={t('sec_research')} />
        <ResearchPaperCard />
      </div>
    </section>
  );
};
