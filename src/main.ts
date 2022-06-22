import "./style.css";

const themeSwitcherButton =
  document.querySelector<HTMLButtonElement>("#theme-switcher")!;

const key = "rocketseat-desafio-theme-switcher-theme";

type Theme = "light" | "dark";
let theme = (localStorage.getItem(key) as Theme | null) || getDefaultTheme();

themeSwitcherButton.addEventListener("click", () => {
  switchTheme();
  applyTheme();
});

function switchTheme() {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem(key, theme);
}

function applyTheme() {
  const isDarkMode = theme === "dark";
  document.body.classList.toggle("dark", isDarkMode);
}

applyTheme();

function getDefaultTheme(): Theme {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}
