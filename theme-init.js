// =========================
// THEME BOOTSTRAP
// =========================
// Loaded as a render-blocking script in <head> so the stored theme is applied
// before first paint. Keep it out of script.js (which runs at the end of body)
// or dark-mode visitors get a flash of the light palette.

(function () {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = storedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
})();
