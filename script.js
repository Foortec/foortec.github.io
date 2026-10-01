(() => {
    'use strict';

    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const navigation = document.getElementById('mainNavigation');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const year = document.getElementById('currentYear');

    const updateThemeControl = (theme) => {
        const isDark = theme === 'dark';

        icon.textContent = isDark ? '☀' : '☾';
        toggle.setAttribute(
            'aria-label',
            isDark ? 'Jasny motyw' : 'Ciemny motyw'
        );
        toggle.setAttribute(
            'title',
            isDark ? 'Jasny motyw' : 'Ciemny motyw'
        );
    };

    const setTheme = (theme) => {
        root.setAttribute('data-bs-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        updateThemeControl(theme);
    };

    updateThemeControl(root.getAttribute('data-bs-theme') === 'light' ? 'light' : 'dark');

    toggle.addEventListener('click', () => {
        const nextTheme = root.getAttribute('data-bs-theme') === 'dark'
            ? 'light'
            : 'dark';

        setTheme(nextTheme);
    });

    year.textContent = new Date().getFullYear();

    // Collapse the mobile navigation after an in-page link is selected.
    document.querySelectorAll('#mainNavigation .nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            if (
                navigation.classList.contains('show') &&
                window.getComputedStyle(navbarToggler).display !== 'none'
            ) {
                bootstrap.Collapse.getOrCreateInstance(navigation).hide();
            }
        });
    });
})();
