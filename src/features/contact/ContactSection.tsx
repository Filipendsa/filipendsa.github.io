import React from 'react';
import { useTranslation } from '../../shared/i18n/useTranslation';
import { SectionMarker } from '../../shared/components/UI/SectionMarker';
import { ContactInfoBox } from './components/ContactInfoBox';
import { ContactForm } from './components/ContactForm';

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <SectionMarker label={t('sec_contact')} />

        <div className="contact-layout">
          <ContactInfoBox />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
