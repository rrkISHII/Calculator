const THEMES = ["default", "dark", "retro", "futuristic", "minimalist"];
const THEME_KEY = "calculator-theme";

function insert(num) {
  const screen = document.form1.textview;
  if (screen.value === "Error") {
    screen.value = "";
  }
  screen.value += num;
  checkEasterEgg();
}

function clearScreen() {
  document.form1.textview.value = "";
  checkEasterEgg();
}

function backspace() {
  const screen = document.form1.textview;
  screen.value = screen.value.slice(0, -1);
  checkEasterEgg();
}

function equal() {
  const screen = document.form1.textview;
  if (!screen.value) return;

  try {
    const result = eval(screen.value);
    screen.value = Number.isFinite(result) ? result : "Error";
  } catch (error) {
    screen.value = "Error";
  }
  checkEasterEgg();
}

function checkEasterEgg() {
  const calculator = document.querySelector(".calculator");
  const screen = document.form1.textview;

  if (screen.value === "5318008") {
    calculator.classList.add("upside-down");
  } else {
    calculator.classList.remove("upside-down");
  }
}

function setTheme(name) {
  if (!THEMES.includes(name)) name = "default";
  document.documentElement.dataset.theme = name;

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.theme === name);
  });

  try {
    localStorage.setItem(THEME_KEY, name);
  } catch (error) {
    /* storage unavailable; theme just won't persist */
  }
}

function loadTheme() {
  let saved = "default";
  try {
    saved = localStorage.getItem(THEME_KEY) || "default";
  } catch (error) {
    /* ignore */
  }
  setTheme(saved);
}

// project is sent via link so theres no way para ma discover ang easter egg, so its set by defaut -Dw
document.addEventListener("DOMContentLoaded", () => {
  document.form1.textview.value = "5318008";
  checkEasterEgg();
  loadTheme();
});
