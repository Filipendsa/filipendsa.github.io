import React from 'react';
import { TechTag } from './TechTag';

interface SkillBentoCardProps {
  title: string;
  tags: string[];
  badge?: string;
  isInverted?: boolean;
  isWide?: boolean;
}

export const SkillBentoCard: React.FC<SkillBentoCardProps> = ({
  title,
  tags,
  badge,
  isInverted = false,
  isWide = false
}) => {
  const cardClassName = `card ${isInverted ? 'card-inverted' : ''} ${isWide ? 'skill-card-wide' : ''}`;

  return (
    <div className={cardClassName}>
      <div className="skill-card-header">
        <h3 className="skill-card-title mono">{title}</h3>
        {badge && (
          <span
            className="tech-tag"
            style={isInverted ? { background: 'rgba(0,0,0,0.08)', fontWeight: 700 } : undefined}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="skill-tags-wrap">
        {tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
};
