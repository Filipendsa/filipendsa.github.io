import React from 'react';
import { useTranslation } from '../../shared/i18n/useTranslation';
import { SectionMarker } from '../../shared/components/UI/SectionMarker';
import { projectsData } from '../../domain/projects/projectsData';
import { ProjectCard } from './components/ProjectCard';

export const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <SectionMarker label={t('sec_projects')} />

        <div className="projects-list">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
