// OPERACIÓN EQUIPO DINAMITA - BOMB DEFUSAL GAME
// Retos basados en Análisis de Datos con Pandas

// ============ BOMB DATA - BASED ON PANDAS ANALYSIS ============
const bombData = {
  "B-01": {
    m1: [1, 1, 1, 1],
    m2: "2046",
    m3: "STABLE",
    m4: ["G"],
    m5: "4",
    m6: "101",
    m7: "00:52",
    m8: [7],
    m9: "9",
    m10: "6"
  },
  "B-02": {
    m1: [1, 1, 1, 1],
    m2: "2123",
    m3: "STABLE",
    m4: ["R"],
    m5: "4",
    m6: "501",
    m7: "01:05",
    m8: [6],
    m9: "1",
    m10: "5"
  },
  "B-03": {
    m1: [1, 1, 1, 1],
    m2: "2080",
    m3: "STABLE",
    m4: ["R"],
    m5: "3",
    m6: "201",
    m7: "00:59",
    m8: [6],
    m9: "9",
    m10: "4"
  },
  "B-04": {
    m1: [1, 1, 1, 1],
    m2: "2094",
    m3: "UNSTABLE",
    m4: ["G"],
    m5: "4",
    m6: "201",
    m7: "01:17",
    m8: [7],
    m9: "1",
    m10: "6"
  },
  "B-05": {
    m1: [1, 1, 1, 1],
    m2: "2114",
    m3: "STABLE",
    m4: ["G"],
    m5: "3",
    m6: "501",
    m7: "01:05",
    m8: [5],
    m9: "9",
    m10: "3"
  },
  "B-06": {
    m1: [1, 1, 1, 1],
    m2: "2107",
    m3: "UNSTABLE",
    m4: ["R"],
    m5: "3",
    m6: "201",
    m7: "01:17",
    m8: [5],
    m9: "1",
    m10: "3"
  },
  "B-07": {
    m1: [1, 1, 1, 1],
    m2: "2118",
    m3: "STABLE",
    m4: ["G"],
    m5: "3",
    m6: "401",
    m7: "01:11",
    m8: [9],
    m9: "1",
    m10: "7"
  }
};

// ============ GAME STATE ============
let gameState = {
  currentBomb: null,
  currentModule: 0,
  modulesCompleted: [],
  timeRemaining: 1200, // 20 minutes in seconds
  gameStarted: false,
  gameLost: false,
  moduleStates: {}
};

// ============ DOM ELEMENTS ============
const passwordScreen = document.getElementById('passwordScreen');
const gameScreen = document.getElementById('gameScreen');
const victoryScreen = document.getElementById('victoryScreen');
const failureScreen = document.getElementById('failureScreen');

const passwordInput = document.getElementById('passwordInput');
const passwordBtn = document.getElementById('passwordBtn');
const passwordError = document.getElementById('passwordError');

const timer = document.getElementById('timer');
const modulesList = document.getElementById('modulesList');
const moduleContent = document.getElementById('moduleContent');
const bombStatus = document.getElementById('bombStatus');
const progressBar = document.getElementById('progressBar');
const statusIndicator = document.querySelector('.status-indicator');

const moduleTemplates = document.getElementById('moduleTemplates');

// ============ INITIALIZATION ============
function init() {
  passwordBtn.addEventListener('click', loadBomb);
  passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loadBomb();
  });

  document.getElementById('restartBtn').addEventListener('click', restartGame);
  document.getElementById('restartBtn2').addEventListener('click', restartGame);
}

function loadBomb() {
  const pwd = passwordInput.value.toUpperCase();
  
  if (!bombData[pwd]) {
    passwordError.textContent = '❌ CONTRASEÑA INVÁLIDA';
    passwordError.style.animation = 'none';
    setTimeout(() => passwordError.style.animation = 'blink 0.5s infinite', 10);
    return;
  }

  gameState.currentBomb = pwd;
  gameState.currentModule = 0;
  gameState.modulesCompleted = [];
  gameState.timeRemaining = 1200;
  gameState.gameStarted = true;
  gameState.gameLost = false;

  passwordScreen.classList.remove('active');
  gameScreen.classList.add('active');

  initializeGame();
  startTimer();
}

function initializeGame() {
  // Create module buttons
  modulesList.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const btn = document.createElement('button');
    btn.className = 'module-btn active';
    btn.textContent = `M${i}`;
    btn.dataset.module = i - 1;
    btn.addEventListener('click', () => switchModule(i - 1));
    modulesList.appendChild(btn);
  }

  // Initialize module states
  gameState.moduleStates = {};
  for (let i = 0; i < 10; i++) {
    gameState.moduleStates[i] = { solved: false, attempts: 0 };
  }

  switchModule(0);
}

function switchModule(index) {
  if (gameState.modulesCompleted.includes(index)) return;

  gameState.currentModule = index;
  
  // Update buttons
  document.querySelectorAll('.module-btn').forEach((btn, i) => {
    btn.classList.remove('active');
    if (gameState.modulesCompleted.includes(i)) {
      btn.classList.add('completed');
    }
  });
  document.querySelector(`[data-module="${index}"]`).classList.add('active');

  // Load module
  loadModule(index);
}

function loadModule(index) {
  const templateId = `template-m${index + 1}`;
  const template = document.getElementById(templateId);
  
  if (!template) return;

  const moduleClone = template.cloneNode(true);
  moduleClone.id = '';
  
  moduleContent.innerHTML = '';
  moduleContent.appendChild(moduleClone);

  // Attach listeners based on module type
  initializeModule(index + 1, moduleClone);
}

// ============ MODULE INITIALIZATION ============
function initializeModule(moduleNum, moduleEl) {
  const answers = bombData[gameState.currentBomb];

  switch (moduleNum) {
    case 1: initM1(moduleEl, answers.m1); break;
    case 2: initM2(moduleEl, answers.m2); break;
    case 3: initM3(moduleEl, answers.m3); break;
    case 4: initM4(moduleEl, answers.m4); break;
    case 5: initM5(moduleEl, answers.m5); break;
    case 6: initM6(moduleEl, answers.m6); break;
    case 7: initM7(moduleEl, answers.m7); break;
    case 8: initM8(moduleEl, answers.m8); break;
    case 9: initM9(moduleEl, answers.m9); break;
    case 10: initM10(moduleEl, answers.m10); break;
  }
}

function initM1(el, correctOrder) {
  const inputs = el.querySelectorAll('.switch-input');
  const validateBtn = el.querySelector('.btn-validate');

  validateBtn.addEventListener('click', () => {
    const current = Array.from(inputs).map(inp => inp.checked ? 1 : 0);

    if (JSON.stringify(current) === JSON.stringify(correctOrder)) {
      completeModule();
    } else {
      showError();
    }
  });
}

function initM2(el, correctYear) {
  const slider = el.querySelector('.year-slider');
  const display = el.querySelector('#yearDisplay');
  const validateBtn = el.querySelector('.btn-validate');

  slider.addEventListener('input', (e) => {
    display.textContent = e.target.value;
  });

  validateBtn.addEventListener('click', () => {
    if (slider.value === correctYear) {
      completeModule();
    } else {
      showError();
    }
  });
}

function initM3(el, correctStability) {
  const circleBtn = el.querySelector('.circle-btn');
  const triangleBtn = el.querySelector('.triangle-btn');
  const validateBtn = el.querySelector('.btn-validate');
  let selected = null;

  circleBtn.addEventListener('click', () => {
    selected = "STABLE";
    circleBtn.classList.add('active');
    triangleBtn.classList.remove('active');
  });

  triangleBtn.addEventListener('click', () => {
    selected = "UNSTABLE";
    triangleBtn.classList.add('active');
    circleBtn.classList.remove('active');
  });

  validateBtn.addEventListener('click', () => {
    if (selected === correctStability) {
      completeModule();
    } else {
      showError();
    }
  });
}

function initM4(el, correctCables) {
  const cables = el.querySelectorAll('.cable');
  const validateBtn = el.querySelector('.btn-validate');
  let cableOrder = [];

  cables.forEach(cable => {
    cable.addEventListener('click', () => {
      if (!cable.classList.contains('cut')) {
        cable.classList.add('cut');
        cableOrder.push(cable.dataset.color);
      }
    });
  });

  validateBtn.addEventListener('click', () => {
    // For this version, we only need to identify the dominant cable
    if (cableOrder.length > 0 && cableOrder[0] === correctCables[0]) {
      completeModule();
    } else {
      showError();
      cables.forEach(c => c.classList.remove('cut'));
      cableOrder = [];
    }
  });
}

function initM5(el, correctNumber) {
  const input = el.querySelector('.special-input');
  const numpadBtns = el.querySelectorAll('.symbol-btn');
  const validateBtn = el.querySelector('.btn-validate');

  numpadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (input.value.length < 1) {
        input.value = btn.dataset.symbol;
      }
    });
  });

  validateBtn.addEventListener('click', () => {
    if (input.value === correctNumber) {
      completeModule();
    } else {
      showError();
      input.value = '';
    }
  });
}

function initM6(el, correctSequence) {
  const input = el.querySelector('.numpad-input');
  const numpadBtns = el.querySelectorAll('.numpad-btn');
  let numpadValue = '';

  numpadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const num = btn.dataset.num;
      
      if (num === 'DEL') {
        numpadValue = numpadValue.slice(0, -1);
      } else if (num === 'OK') {
        if (numpadValue === correctSequence) {
          completeModule();
        } else {
          showError();
          numpadValue = '';
        }
      } else {
        if (numpadValue.length < 3) {
          numpadValue += num;
        }
      }
      
      input.value = numpadValue;
    });
  });
}

function initM7(el, correctTime) {
  const display = el.querySelector('#chronometerDisplay');
  const stopBtn = el.querySelector('.stop-btn');
  let chronometerValue = 0;
  let chronometerInterval = null;
  let hasStarted = false;

  function updateDisplay() {
    const mins = Math.floor(chronometerValue / 60);
    const secs = chronometerValue % 60;
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  stopBtn.addEventListener('click', () => {
    if (!hasStarted) {
      hasStarted = true;
      chronometerInterval = setInterval(() => {
        chronometerValue++;
        updateDisplay();
        
        if (chronometerValue > 3599) {
          clearInterval(chronometerInterval);
        }
      }, 100);
    } else {
      clearInterval(chronometerInterval);
      const [targetMins, targetSecs] = correctTime.split(':').map(Number);
      const targetVal = targetMins * 60 + targetSecs;
      
      if (chronometerValue >= targetVal - 2 && chronometerValue <= targetVal + 2) {
        completeModule();
      } else {
        showError();
        chronometerValue = 0;
        hasStarted = false;
        updateDisplay();
      }
    }
  });
}

function initM8(el, correctSequence) {
  const nodes = el.querySelectorAll('.map-node');
  const sequenceDisplay = el.querySelector('#mapSequence');
  const validateBtn = el.querySelector('.btn-validate');
  let nodeSequence = [];

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const nodeNum = parseInt(node.dataset.node);
      
      if (!node.classList.contains('completed')) {
        node.classList.add('selected');
        nodeSequence.push(nodeNum);
        sequenceDisplay.textContent = nodeSequence.map(n => `${n}`).join('-');
        
        setTimeout(() => node.classList.remove('selected'), 300);
      }
    });
  });

  validateBtn.addEventListener('click', () => {
    // For this version, check if first clicked node matches the number
    if (nodeSequence.length > 0 && nodeSequence[0] === correctSequence[0]) {
      nodes.forEach(n => n.classList.add('completed'));
      completeModule();
    } else {
      showError();
      nodeSequence = [];
      sequenceDisplay.textContent = '--';
    }
  });
}

function initM9(el, correctNumber) {
  const slider = el.querySelector('.dial-slider');
  const display = el.querySelector('#dialDisplay');
  const validateBtn = el.querySelector('.btn-validate');

  slider.addEventListener('input', (e) => {
    display.textContent = e.target.value;
  });

  validateBtn.addEventListener('click', () => {
    if (slider.value === correctNumber) {
      completeModule();
    } else {
      showError();
    }
  });
}

function initM10(el, correctDigit) {
  const input = el.querySelector('.final-input');
  const confirmBtn = el.querySelector('.final-confirm-btn');

  confirmBtn.addEventListener('click', () => {
    if (input.value === correctDigit) {
      completeModule();
    } else {
      showError();
      input.value = '';
    }
  });
}

// ============ MODULE COMPLETION ============
function completeModule() {
  const moduleIndex = gameState.currentModule;
  
  if (!gameState.modulesCompleted.includes(moduleIndex)) {
    gameState.modulesCompleted.push(moduleIndex);
    
    // Update button
    document.querySelector(`[data-module="${moduleIndex}"]`).classList.add('completed');
    
    // Update progress
    updateProgress();
    
    // Check victory
    if (gameState.modulesCompleted.length === 10) {
      victory();
    } else {
      // Auto-advance to next module
      setTimeout(() => {
        let nextModule = moduleIndex + 1;
        while (nextModule < 10 && gameState.modulesCompleted.includes(nextModule)) {
          nextModule++;
        }
        if (nextModule < 10) {
          switchModule(nextModule);
        }
      }, 500);
    }
  }
}

function showError() {
  // Flash red screen briefly
  gameScreen.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
  setTimeout(() => {
    gameScreen.style.backgroundColor = '';
  }, 300);
}

function updateProgress() {
  const completed = gameState.modulesCompleted.length;
  const totalFilled = Math.floor((completed / 10) * 10);
  let bar = '';
  for (let i = 0; i < totalFilled; i++) bar += '█';
  for (let i = totalFilled; i < 10; i++) bar += '░';
  progressBar.textContent = `${bar}`;
  bombStatus.textContent = `BOMBA: ${completed === 10 ? 'DESACTIVADA' : 'ARMADA'} (${completed}/10)`;
}

// ============ TIMER ============
function startTimer() {
  const timerInterval = setInterval(() => {
    if (!gameState.gameStarted || gameState.gameLost) {
      clearInterval(timerInterval);
      return;
    }

    gameState.timeRemaining--;
    updateTimerDisplay();

    if (gameState.timeRemaining <= 0) {
      clearInterval(timerInterval);
      detonation();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(gameState.timeRemaining / 60);
  const secs = gameState.timeRemaining % 60;
  timer.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (gameState.timeRemaining <= 60) {
    timer.classList.add('danger');
    statusIndicator.classList.add('danger');
  }
}

// ============ GAME ENDING ============
function victory() {
  gameState.gameStarted = false;
  gameScreen.classList.remove('active');
  victoryScreen.classList.add('active');

  const mins = Math.floor(gameState.timeRemaining / 60);
  const secs = gameState.timeRemaining % 60;
  document.getElementById('victoryTime').textContent = 
    `Tiempo Restante: ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  const code = generateVictoryCode();
  document.getElementById('victoryCode').textContent = `CÓDIGO: ${code}`;
}

function detonation() {
  gameState.gameLost = true;
  gameState.gameStarted = false;
  gameScreen.classList.remove('active');
  failureScreen.classList.add('active');
}

function generateVictoryCode() {
  const bomb = gameState.currentBomb;
  const completed = gameState.modulesCompleted.length;
  const time = gameState.timeRemaining;
  
  const code1 = bomb.toUpperCase();
  const code2 = String(completed).padStart(2, '0');
  const code3 = String(time % 10000).padStart(4, '0');
  
  return `${code1}-${code2}${code3}`;
}

function restartGame() {
  gameState = {
    currentBomb: null,
    currentModule: 0,
    modulesCompleted: [],
    timeRemaining: 1200,
    gameStarted: false,
    gameLost: false,
    moduleStates: {}
  };

  passwordInput.value = '';
  passwordError.textContent = '';
  
  passwordScreen.classList.add('active');
  gameScreen.classList.remove('active');
  victoryScreen.classList.remove('active');
  failureScreen.classList.remove('active');

  timer.classList.remove('danger');
  statusIndicator.classList.remove('danger');
}

// ============ START ============
document.addEventListener('DOMContentLoaded', init);
