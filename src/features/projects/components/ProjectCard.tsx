import React from 'react';
import { useTranslation } from '../../../shared/i18n/useTranslation';
import type { ProjectItem } from '../../../domain/projects/projectsData';
import { ActionPillGroup } from '../../../shared/components/Buttons/ActionPillGroup';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <article className="project-card">
      <div className="project-mockup-wrap">
        <img
          src={project.mockupSrc}
          alt={project.mockupAlt}
          width={600}
          height={360}
          loading="lazy"
        />
      </div>
      <div className="project-content">
        <div className="project-tags-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        <h3 className="project-title">{t(project.titleKey)}</h3>
        <span className="project-role-badge">{t(project.roleKey)}</span>
        <p className="project-description">{t(project.descKey)}</p>

        <div className="project-actions">
          {project.actionType === 'badge' ? (
            <span className="pill-link" style={{ borderColor: 'rgba(0,229,255,0.4)', color: 'var(--accent-cyan)' }}>
              Enterprise Scale
            </span>
          ) : (
            project.actionHref && project.actionTextKey && (
              <ActionPillGroup
                href={project.actionHref}
                label={t(project.actionTextKey)}
                isExternal={project.actionHref.startsWith('http')}
                pillStyle={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                circleStyle={{ width: '36px', height: '36px', fontSize: '0.95rem' }}
              />
            )
          )}
        </div>
      </div>
    </article>
  );
};
