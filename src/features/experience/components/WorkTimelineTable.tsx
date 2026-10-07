import React from 'react';
import { useTranslation } from '../../../shared/i18n/useTranslation';
import { useExperienceDuration } from '../../../domain/experience/useExperienceDuration';

export const WorkTimelineTable: React.FC = () => {
  const { t } = useTranslation();
  const { yearsFormatted } = useExperienceDuration();

  return (
    <div className="work-table">
      {/* Row 1: IATec */}
      <div className="work-row">
        <div className="work-period">
          <span>2021 – Present</span>
          <span className="work-duration">{yearsFormatted} yrs</span>
        </div>
        <div className="work-details">
          <div className="work-company">IATec · Instituto Adventista de Tecnologia</div>
          <div className="work-role">{t('work_iatec_role')}</div>
          <div className="work-tech-inline">.NET / C# · Angular · PostgreSQL · SQL Server · Microservices</div>
        </div>
      </div>

      {/* Row 2: Yesode */}
      <div className="work-row">
        <div className="work-period">
          <span>2026 – Present</span>
          <span className="work-duration">Current</span>
        </div>
        <div className="work-details">
          <div className="work-company">Yesode · yesode.com</div>
          <div className="work-role">{t('work_yesode_role')}</div>
          <div className="work-tech-inline">TypeScript · Go · Rust · Kubernetes · AWS · React</div>
        </div>
      </div>

      {/* Row 3: Forum Hortolândia */}
      <div className="work-row">
        <div className="work-period">
          <span>2018 – 2019</span>
          <span className="work-duration">1 yr</span>
        </div>
        <div className="work-details">
          <div className="work-company">Fórum da Comarca de Hortolândia</div>
          <div className="work-role">{t('work_forum_role')}</div>
          <div className="work-tech-inline">Network administration, hardware support, digital systems</div>
        </div>
      </div>
    </div>
  );
};
