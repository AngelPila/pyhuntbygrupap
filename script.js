const timerEl = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const systemStatus = document.getElementById("systemStatus");
const footerStatus = document.getElementById("footerStatus");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const toggleTheme = document.getElementById("toggleTheme");
const strikeText = document.getElementById("strikeText");

const wiresStatus = document.getElementById("wiresStatus");
const buttonStatus = document.getElementById("buttonStatus");
const keypadStatus = document.getElementById("keypadStatus");
const passwordStatus = document.getElementById("passwordStatus");

const bigButton = document.getElementById("bigButton");
const stripLight = document.getElementById("stripLight");
const keypadProgress = document.getElementById("keypadProgress");
const passwordInput = document.getElementById("passwordInput");
const passwordCheck = document.getElementById("passwordCheck");

const totalModules = 4;
const moduleState = {
  wires: false,
  button: false,
  keypad: false,
  password: false,
};

const wireSolution = "blue";
const buttonConfig = {
  label: "ABORTAR",
  color: "blue",
  strip: "yellow",
};
const keypadOrder = ["lambda", "star", "psi", "omega"];
const passwordAnswer = "PYTHON";

let running = false;
let remaining = 300;
let timerId = null;
let strikes = 0;
let keypadIndex = 0;

const updateTimer = () => {
  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");
  timerEl.textContent = `${minutes}:${seconds}`;
};

const updateProgress = () => {
  const solvedCount = Object.values(moduleState).filter(Boolean).length;
  progressText.textContent = `${solvedCount}/${totalModules}`;
  progressBar.style.width = `${(solvedCount / totalModules) * 100}%`;
  if (solvedCount === totalModules) {
    systemStatus.textContent = "Desactivada";
    systemStatus.style.color = "var(--success)";
    footerStatus.textContent = "Bomba neutralizada";
    stopTimer();
  }
};

const updateStrikes = () => {
  strikeText.textContent = `${strikes}/3`;
  document.querySelectorAll(".strike").forEach((dot, index) => {
    dot.classList.toggle("active", index < strikes);
  });
};

const addStrike = () => {
  strikes += 1;
  updateStrikes();
  systemStatus.textContent = "Strike";
  systemStatus.style.color = "var(--danger)";
  footerStatus.textContent = "Error detectado";
  if (strikes >= 3) {
    explode();
  }
};

const tick = () => {
  if (!running) return;
  remaining = Math.max(0, remaining - 1);
  updateTimer();
  if (remaining === 0) {
    explode();
  }
};

const startTimer = () => {
  if (running) return;
  running = true;
  systemStatus.textContent = "En progreso";
  systemStatus.style.color = "var(--accent)";
  footerStatus.textContent = "Desactivando módulos";
  timerId = setInterval(tick, 1000);
};

const stopTimer = () => {
  running = false;
  clearInterval(timerId);
};

const explode = () => {
  stopTimer();
  systemStatus.textContent = "Explosión";
  systemStatus.style.color = "var(--danger)";
  footerStatus.textContent = "Reinicia para otro intento";
};

const setBadge = (badge, status, color) => {
  badge.textContent = status;
  badge.style.color = color;
};

const reset = () => {
  stopTimer();
  remaining = 300;
  strikes = 0;
  keypadIndex = 0;
  Object.keys(moduleState).forEach((key) => (moduleState[key] = false));

  document.querySelectorAll(".wire").forEach((wire) => wire.classList.remove("cut"));
  document.querySelectorAll(".symbol").forEach((symbol) => symbol.classList.remove("active"));
  passwordInput.value = "";

  setBadge(wiresStatus, "Pendiente", "var(--muted)");
  setBadge(buttonStatus, "Pendiente", "var(--muted)");
  setBadge(keypadStatus, "Pendiente", "var(--muted)");
  setBadge(passwordStatus, "Pendiente", "var(--muted)");

  keypadProgress.textContent = "Orden: 0/4";
  systemStatus.textContent = "Listo";
  systemStatus.style.color = "var(--muted)";
  footerStatus.textContent = "En espera";

  updateTimer();
  updateProgress();
  updateStrikes();
};

const solveModule = (name, badge) => {
  if (moduleState[name]) return;
  moduleState[name] = true;
  setBadge(badge, "Completado", "var(--success)");
  updateProgress();
};

const handleWireCut = (wire) => {
  if (moduleState.wires || !running) return;
  wire.classList.add("cut");
  if (wire.dataset.wire === wireSolution) {
    solveModule("wires", wiresStatus);
  } else {
    addStrike();
  }
};

const getButtonAction = () => {
  if (buttonConfig.color === "blue" && buttonConfig.label === "ABORTAR") return "hold";
  return "press";
};

const handleButtonAction = (action) => {
  if (moduleState.button || !running) return;
  const expected = getButtonAction();
  if (action === expected) {
    solveModule("button", buttonStatus);
  } else {
    addStrike();
  }
};

const handleSymbolPress = (symbol) => {
  if (moduleState.keypad || !running) return;
  const expected = keypadOrder[keypadIndex];
  if (symbol.dataset.symbol === expected) {
    symbol.classList.add("active");
    keypadIndex += 1;
    keypadProgress.textContent = `Orden: ${keypadIndex}/4`;
    if (keypadIndex === keypadOrder.length) {
      solveModule("keypad", keypadStatus);
    }
  } else {
    addStrike();
    keypadIndex = 0;
    keypadProgress.textContent = "Orden: 0/4";
    document.querySelectorAll(".symbol").forEach((sym) => sym.classList.remove("active"));
  }
};

const handlePassword = () => {
  if (moduleState.password || !running) return;
  const value = passwordInput.value.trim().toUpperCase();
  if (value === passwordAnswer) {
    solveModule("password", passwordStatus);
  } else {
    addStrike();
  }
};

document.querySelectorAll(".wire").forEach((wire) => {
  wire.addEventListener("click", () => handleWireCut(wire));
});

document
  .querySelectorAll("[data-button-action]")
  .forEach((btn) => btn.addEventListener("click", () => handleButtonAction(btn.dataset.buttonAction)));

document.querySelectorAll(".symbol").forEach((symbol) => {
  symbol.addEventListener("click", () => handleSymbolPress(symbol));
});

passwordCheck.addEventListener("click", handlePassword);
passwordInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") handlePassword();
});

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", reset);

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const initButtonModule = () => {
  bigButton.textContent = buttonConfig.label;
  bigButton.classList.add(buttonConfig.color);
  stripLight.classList.add(buttonConfig.strip);
};

initButtonModule();
reset();
