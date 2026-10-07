import React from 'react';

interface ActionPillGroupProps {
  href?: string;
  label: string;
  isExternal?: boolean;
  onClick?: () => void;
  pillStyle?: React.CSSProperties;
  circleStyle?: React.CSSProperties;
}

export const ActionPillGroup: React.FC<ActionPillGroupProps> = ({
  href,
  label,
  isExternal = false,
  onClick,
  pillStyle,
  circleStyle
}) => {
  const content = (
    <>
      <span className="btn-pill" style={pillStyle}>{label}</span>
      <span className="btn-circle" style={circleStyle} aria-hidden="true">↗</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="btn-action-group"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className="btn-action-group" onClick={onClick}>
      {content}
    </button>
  );
};
