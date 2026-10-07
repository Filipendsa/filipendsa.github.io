import React from 'react';
import { useTranslation } from '../../shared/i18n/useTranslation';
import { SectionMarker } from '../../shared/components/UI/SectionMarker';
import { SkillBentoCard } from './components/SkillBentoCard';

export const SkillsSection: React.FC = () => {
  const { t } = useTranslation();

  const backendTags = [
    'C#', '.NET 8', 'ASP.NET Core', 'Clean Architecture',
    'Domain-Driven Design (DDD)', 'CQRS (MediatR)', 'TDD',
    'REST APIs', 'xUnit & FluentAssertions', 'Moq',
    'Sentry APM', 'Python', 'Node.js'
  ];

  const frontendTags = [
    'Angular', 'TypeScript', 'RxJS & NgRx', 'React',
    'Flutter & Dart', 'JavaScript (ES6+)', 'Tailwind CSS',
    'CSS3 / SCSS', 'HTML5 Semantic', 'Figma UI/UX'
  ];

  const databaseTags = [
    'PostgreSQL', 'SQL Server', 'MySQL', 'Entity Framework Core',
    'Supabase', 'Relational Modeling', 'Query Optimization'
  ];

  const devopsTags = [
    'Docker', 'Linux', 'GitHub Actions CI/CD', 'Oracle Cloud (OCI)',
    'Vercel', 'JetBrains Rider', 'Git Version Control'
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <SectionMarker label={t('sec_skills')} />

        <div className="skills-bento-grid">
          {/* Card 1: Back-end & Architecture (Highlight Inverted Card) */}
          <SkillBentoCard
            title={t('skill_backend')}
            tags={backendTags}
            badge="CORE STACK"
            isInverted={true}
            isWide={true}
          />

          {/* Card 2: Front-end & Mobile */}
          <SkillBentoCard
            title={t('skill_frontend')}
            tags={frontendTags}
          />

          {/* Card 3: Databases & Storage */}
          <SkillBentoCard
            title={t('skill_database')}
            tags={databaseTags}
          />

          {/* Card 4: DevOps, Cloud & Tooling */}
          <SkillBentoCard
            title={t('skill_devops')}
            tags={devopsTags}
            isWide={true}
          />
        </div>
      </div>
    </section>
  );
};
