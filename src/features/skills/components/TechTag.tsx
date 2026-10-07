import React from 'react';

interface TechTagProps {
  label: string;
}

export const TechTag: React.FC<TechTagProps> = ({ label }) => {
  return <span className="tech-tag">{label}</span>;
};
