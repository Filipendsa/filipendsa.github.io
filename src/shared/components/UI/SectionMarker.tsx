import React from 'react';

interface SectionMarkerProps {
  label: string;
}

export const SectionMarker: React.FC<SectionMarkerProps> = ({ label }) => {
  return <div className="section-marker">{label}</div>;
};
