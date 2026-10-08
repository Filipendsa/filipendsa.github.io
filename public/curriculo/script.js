// Script para controle interativo do Currículo do Filipe Nogueira da Silva
document.addEventListener('DOMContentLoaded', () => {
  const btnPrint = document.getElementById('btn-print');
  const themeDots = document.querySelectorAll('.color-dot');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const langBtns = document.querySelectorAll('.lang-btn');

  const STORAGE_KEY_THEME = 'curriculo_filipe_theme_v2';
  const STORAGE_KEY_LANG = 'curriculo_filipe_lang_v2';

  // Carregar tema salvo
  const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || 'theme-navy';
  applyTheme(savedTheme);

  // Carregar idioma salvo
  const savedLang = localStorage.getItem(STORAGE_KEY_LANG) || 'pt';
  setLanguage(savedLang);

  // Exibir notificação flutuante (Toast)
  let toastTimer = null;
  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Alternar idioma (PT / EN)
  function setLanguage(lang) {
    document.body.setAttribute('data-lang', lang);
    langBtns.forEach(btn => {
      if (btn.getAttribute('data-lang-target') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    localStorage.setItem(STORAGE_KEY_LANG, lang);
    const langLabel = lang === 'pt' ? 'Português (Brasil)' : 'English (Global & ATS)';
    showToast(`🌐 Idioma: ${langLabel}`);
  }

  // Aplicar tema de cores
  function applyTheme(themeClass) {
    const validThemes = ['theme-navy', 'theme-emerald', 'theme-indigo', 'theme-slate', 'theme-rose'];
    validThemes.forEach(t => document.body.classList.remove(t));
    document.body.classList.add(themeClass);

    themeDots.forEach(dot => {
      if (dot.getAttribute('data-theme') === themeClass) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    localStorage.setItem(STORAGE_KEY_THEME, themeClass);
  }

  // Ação de Impressão / Salvar PDF
  function triggerPrint() {
    setTimeout(() => {
      window.print();
    }, 150);
  }

  // Event Listeners
  if (btnPrint) {
    btnPrint.addEventListener('click', triggerPrint);
  }

  // Troca de idioma pelos botões
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-target');
      setLanguage(targetLang);
    });
  });

  // Troca de tema
  themeDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const theme = dot.getAttribute('data-theme');
      applyTheme(theme);
      showToast(`🎨 Tema alterado com sucesso!`);
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
