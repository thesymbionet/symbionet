// LANGUAGE TOGGLE (🇬🇧 / 🇮🇹)
function setLanguage(lang) {
    localStorage.setItem('symbionetLang', lang);
    document.querySelectorAll('.en').forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');
    document.querySelectorAll('.it').forEach(el => el.style.display = lang === 'it' ? 'block' : 'none');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('symbionetLang') || 'en';
    setLanguage(lang);
  });
  