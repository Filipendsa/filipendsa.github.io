import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../i18n/useTranslation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileDrawer } from './MobileDrawer';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container nav-container">
        <a href="#home" className="nav-brand" aria-label="Filipe Nogueira Home">
          filipe<span className="nav-brand-dot"></span>nds
        </a>

        {/* Desktop Nav */}
        <nav className="nav-menu" id="nav-menu" aria-label="Main Navigation">
          <ul className="nav-list">
            <li><a href="#about" className="nav-link">{t('nav_about')}</a></li>
            <li><a href="#skills" className="nav-link">{t('nav_skills')}</a></li>
            <li><a href="#experience" className="nav-link">{t('nav_experience')}</a></li>
            <li><a href="#projects" className="nav-link">{t('nav_projects')}</a></li>
            <li><a href="#research" className="nav-link">{t('nav_research')}</a></li>
            <li><a href="#contact" className="nav-link">{t('nav_contact')}</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href="/curriculo/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cv-btn"
            title={t('nav_cv')}
            aria-label={t('nav_cv')}
          >
            <span className="nav-cv-label-full">{t('nav_cv')}</span>
            <span className="nav-cv-label-short">CV</span>
            <span className="nav-cv-arrow" aria-hidden="true">↗</span>
          </a>

          <div className="nav-actions-separator" aria-hidden="true"></div>

          <LanguageSwitcher />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`nav-toggle-btn ${isDrawerOpen ? 'open' : ''}`}
            onClick={toggleDrawer}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-drawer"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </header>
  );
};
