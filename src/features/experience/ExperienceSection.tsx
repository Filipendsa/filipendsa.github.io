import React from 'react';
import { useTranslation } from '../../shared/i18n/useTranslation';
import { useExperienceDuration } from '../../domain/experience/useExperienceDuration';
import { WorkTimelineTable } from './components/WorkTimelineTable';
import { EducationCard } from './components/EducationCard';

export const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  const { yearsFormatted } = useExperienceDuration();

  return (
    <section className="work-section" id="experience">
      <div className="container">
        <div className="work-header-row">
          <h2 className="work-big-title mono">{t('sec_work')}</h2>
          <div className="work-summary-badge">
            <span>{t('work_total_label')}</span>
            <span className="work-summary-years">
              {yearsFormatted} {t('work_years_suffix')}
            </span>
          </div>
        </div>

        {/* Work Timeline Table */}
        <WorkTimelineTable />

        {/* Academic & Certifications Cards */}
        <EducationCard />
      </div>
    </section>
  );
};
