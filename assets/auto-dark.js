document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const root = document.querySelector(':root');
  const schemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
  const themeBtn = document.querySelector('button.scheme');
  const themeIcon = themeBtn.querySelector('i');

  themeBtn.classList.remove('hidden');

  function setThemeUIState() {
    const themeState = localStorage.getItem('theme') || 'auto';
    const icon = {
      light: 'sun',
      dark: 'moon',
    }[themeState] || 'adjust';

    themeIcon.className = `toggle d-${icon}`;

    if (themeState === 'auto') {
      delete root.dataset.scheme;
    } else {
      root.dataset.scheme = themeState;
    }
  }

  function setThemeExplicitly() {
    const themeOrder = schemeMedia.matches
      ? ['auto', 'light', 'dark']
      : ['auto', 'dark', 'light'];

    const storedTheme = localStorage.getItem('theme');
    const themeState = themeOrder.includes(storedTheme) ? storedTheme : 'auto';
    const nextState = (() => {
      let current;
      do {
        current = themeOrder.shift();
        themeOrder.push(current);
      } while (current !== themeState);
      return themeOrder.shift();
    })();

    localStorage.setItem('theme', nextState);
    setThemeUIState();
  }

  schemeMedia.addEventListener('change', () => {
    document.body.className = 'transitions';
    setThemeUIState();
  });
  setThemeUIState();

  themeBtn.addEventListener('click', () => {
    document.body.className = 'transitions';
    setThemeExplicitly();
  });
});

