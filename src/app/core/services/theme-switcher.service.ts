// src/app/core/services/theme-switcher.service.ts
import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  theme = signal<string>('lara-light-blue');

  constructor() {
    // Get saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'lara-light-blue';
    this.theme.set(savedTheme);

    // Apply theme when it changes
    effect(() => {
      this.loadTheme(this.theme());
    });
  }

  toggleTheme() {
    const currentTheme = this.theme();
    const root = document.documentElement;
    if (currentTheme.includes('light')) {
      this.theme.set(currentTheme.replace('light', 'dark'));
      root.classList.add('app-dark');
    } else {
      this.theme.set(currentTheme.replace('dark', 'light'));
      root.classList.remove('app-dark');
    }
  }

  loadTheme(themeName: string) {
    const themeLink = this.getLinkElementForTheme();
    themeLink.href = `${themeName}.css`;
    localStorage.setItem('theme', themeName);
  }

  private getLinkElementForTheme() {
    const themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      return themeLink;
    }

    const linkElement = document.createElement('link');
    linkElement.id = 'app-theme';
    linkElement.rel = 'stylesheet';
    document.head.appendChild(linkElement);

    return linkElement;
  }

  isDarkMode() {
    return this.theme().includes('dark');
  }
}
