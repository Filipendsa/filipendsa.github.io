import React from 'react';
import { useTranslation } from '../../i18n/useTranslation';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-huge-name">
          Filipe
          <span className="footer-name-indent">Nogueira</span>
        </div>
        <p className="footer-role">{t('footer_role')}</p>

        <div className="footer-social-grid">
          <a href="https://github.com/Filipendsa" target="_blank" rel="noopener noreferrer" className="pill-link">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/filipe-nogueira07/" target="_blank" rel="noopener noreferrer" className="pill-link">
            LinkedIn ↗
          </a>
          <a href="https://wa.me/5519984160295" target="_blank" rel="noopener noreferrer" className="pill-link">
            WhatsApp ↗
          </a>
          <a href="mailto:filipe.nogueira@yesode.com" className="pill-link">
            Email
          </a>
          <a href="https://yesode.com" target="_blank" rel="noopener noreferrer" className="pill-link">
            yesode.com ↗
          </a>
        </div>

        <div className="footer-bottom-row">
          <span>{t('footer_copy')}</span>
          <span>{t('footer_rights')} {currentYear}</span>
        </div>
      </div>
    </footer>
  );
};
