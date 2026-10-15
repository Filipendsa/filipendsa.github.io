// Script para controle interativo do Currículo do Filipe Nogueira da Silva
document.addEventListener('DOMContentLoaded', () => {
  const btnPrint = document.getElementById('btn-print');
  const themeDots = document.querySelectorAll('.color-dot');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const langBtns = document.querySelectorAll('.lang-btn');

  const STORAGE_KEY_THEME = 'curriculo_filipe_theme_v2';
  const STORAGE_KEY_LANG = 'curriculo_filipe_lang_v2';

  let toastTimer = null;

  // Safe localStorage helper
  function safeStorageGet(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch {
      return fallback;
    }
  }

  function safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // Ignora erro em ambientes restritos (como file:// ou cookies bloqueados)
    }
  }

  // Exibir notificação flutuante (Toast)
  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Alternar idioma (PT / EN)
  function setLanguage(lang, notify = false) {
    const selectedLang = lang === 'en' ? 'en' : 'pt';
    document.body.setAttribute('data-lang', selectedLang);

    langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang-target') === selectedLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Atualiza o título do documento para o nome correto ao salvar PDF
    if (selectedLang === 'en') {
      document.title = 'Resume | Filipe Nogueira da Silva';
    } else {
      document.title = 'Currículo Profissional | Filipe Nogueira da Silva';
    }

    safeStorageSet(STORAGE_KEY_LANG, selectedLang);

    if (notify) {
      const langLabel = selectedLang === 'pt' ? 'Português (Brasil)' : 'English (Global & ATS)';
      showToast(`🌐 Idioma: ${langLabel}`);
    }
  }

  // Aplicar tema de cores
  function applyTheme(themeClass, notify = false) {
    const validThemes = ['theme-navy', 'theme-emerald', 'theme-indigo', 'theme-slate', 'theme-rose'];
    validThemes.forEach(t => document.body.classList.remove(t));

    const appliedTheme = validThemes.includes(themeClass) ? themeClass : 'theme-navy';
    document.body.classList.add(appliedTheme);

    themeDots.forEach(dot => {
      if (dot.getAttribute('data-theme') === appliedTheme) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    safeStorageSet(STORAGE_KEY_THEME, appliedTheme);

    if (notify) {
      showToast('🎨 Tema alterado com sucesso!');
    }
  }

  // Ação de Impressão / Salvar PDF
  function triggerPrint() {
    setTimeout(() => {
      window.print();
    }, 150);
  }

  // Carregar tema salvo inicial (sem toast)
  const savedTheme = safeStorageGet(STORAGE_KEY_THEME, 'theme-navy');
  applyTheme(savedTheme, false);

  // Carregar idioma salvo inicial (sem toast)
  const savedLang = safeStorageGet(STORAGE_KEY_LANG, 'pt');
  setLanguage(savedLang, false);

  // Event Listeners
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      const currentLang = document.body.getAttribute('data-lang');
      const msg = currentLang === 'en'
        ? '📄 Opening print & PDF dialog...'
        : '📄 Abrindo impressão / Salvar como PDF...';
      showToast(msg);
      triggerPrint();
    });
  }

  // Troca de idioma pelos botões
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-target');
      setLanguage(targetLang, true);
    });
  });

  // Troca de tema pelos botões
  themeDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const theme = dot.getAttribute('data-theme');
      applyTheme(theme, true);
    });
  });

  // Atalho para impressão (Ctrl+P / Cmd+P)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      triggerPrint();
    }
  });
});
