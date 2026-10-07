import React, { useState } from 'react';
import { useTranslation } from '../../../shared/i18n/useTranslation';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        setToast({ type: 'success', message: t('toast_success') });
        form.reset();
      } else {
        throw new Error('Submission error');
      }
    } catch {
      setToast({ type: 'error', message: t('toast_error') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form
        action="https://formsubmit.co/finogs2001@gmail.com"
        method="POST"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_subject" value="Novo contato via Portfólio (React)" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className="form-group">
          <label htmlFor="form-name" className="form-label">{t('contact_form_name')}</label>
          <input
            type="text"
            id="form-name"
            name="name"
            className="form-input"
            required
            placeholder="Alex"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-email" className="form-label">{t('contact_form_email')}</label>
          <input
            type="email"
            id="form-email"
            name="email"
            className="form-input"
            required
            placeholder="alex@company.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-subject" className="form-label">{t('contact_form_subject')}</label>
          <input
            type="text"
            id="form-subject"
            name="subject"
            className="form-input"
            placeholder="Enterprise Architecture"
          />
        </div>

        <div className="form-group">
          <label htmlFor="form-message" className="form-label">{t('contact_form_msg')}</label>
          <textarea
            id="form-message"
            name="message"
            className="form-textarea"
            required
            placeholder="Tell me about your project..."
          />
        </div>

        <div>
          <button
            type="submit"
            className="btn-action-group"
            disabled={isSubmitting}
            style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
          >
            <span className="btn-pill">{isSubmitting ? '...' : t('btn_send_msg')}</span>
            <span className="btn-circle">↗</span>
          </button>
        </div>

        {toast && (
          <div className={`form-toast ${toast.type}`} role="alert" style={{ display: 'block' }}>
            {toast.message}
          </div>
        )}
      </form>
    </div>
  );
};
