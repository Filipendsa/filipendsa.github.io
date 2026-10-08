import React, { useEffect } from 'react';
import { useTranslation } from '../../i18n/useTranslation';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  const navItems = [
    { href: '#home', labelKey: 'nav_home', number: '01' },
    { href: '#about', labelKey: 'nav_about', number: '02' },
    { href: '#skills', labelKey: 'nav_skills', number: '03' },
    { href: '#experience', labelKey: 'nav_experience', number: '04' },
    { href: '#projects', labelKey: 'nav_projects', number: '05' },
    { href: '#research', labelKey: 'nav_research', number: '06' },
    { href: '#contact', labelKey: 'nav_contact', number: '07' },
  ] as const;

  return (
    <div
      className={`mobile-drawer ${isOpen ? 'open' : ''}`}
      id="mobile-drawer"
      aria-label="Mobile Navigation"
      role="dialog"
      aria-modal="true"
    >
      <ul className="mobile-nav-list">
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="mobile-nav-link" onClick={onClose}>
              <span>{t(item.labelKey)}</span>
              <span className="mono text-cyan">{item.number}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mobile-drawer-footer">
        <div className="hero-social-pills" style={{ marginBottom: 0 }}>
          <a
            href="https://github.com/Filipendsa"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/filipe-nogueira07/"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
          >
            LinkedIn ↗
          </a>
          <a
            href="/curriculo/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
          >
            {t('pill_cv')} ↗
          </a>
        </div>
      </div>
    </div>
  );
};
