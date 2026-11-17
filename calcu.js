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
