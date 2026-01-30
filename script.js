// OPERACIÓN EQUIPO DINAMITA - BOMB DEFUSAL GAME
// Retos basados en Análisis de Datos con Pandas

// ============ BOMB DATA - BASED ON PANDAS ANALYSIS ============
const bombData = {
  "B-01": {
    m1: [1, 1, 1, 1],
    m2: "2046",
    m3: [
      {
        question: "¿Qué tipo de dato es '42' en Python?",
        options: ["str", "int", "float", "bool"],
        answer: "int"
      },
      {
        question: "¿Qué devuelve len([1, 2, 3])?",
        options: ["1", "2", "3", "[1,2,3]"],
        answer: "3"
      },
      {
        question: "¿Cómo se escribe un comentario en Python?",
        options: ["// comentario", "/* comentario */", "# comentario", "-- comentario"],
        answer: "# comentario"
      }
    ],
    m4: ["G"],
    m5: "4",
    m6: "101",
    m7: "00:15",
    m8: ["Pichincha", "Guayas", "Azuay", "Manabí", "Loja", "El Oro", "Esmeraldas"],
    m9: "9",
    m10: {
      code1: "14",
      code2: "24",
      code3: "G1",
      code4: "579",
      code5: "9"
    }
  },
  "B-02": {
    m1: [1, 1, 1, 1],
    m2: "2123",
    m3: [
      {
        question: "¿Qué estructura de datos es mutable?",
        options: ["tuple", "list", "str", "int"],
        answer: "list"
      },
      {
        question: "¿Qué palabra reservada crea un bucle?",
        options: ["loop", "repeat", "for", "iterate"],
        answer: "for"
      },
      {
        question: "¿Cómo se accede al último elemento de una lista?",
        options: ["lista[0]", "lista[-1]", "lista.last()", "lista[end]"],
        answer: "lista[-1]"
      }
    ],
    m4: ["R"],
    m5: "4",
    m6: "501",
    m7: "00:30",
    m8: ["Guayas", "Manabí", "Los Ríos", "Cotopaxi", "Tungurahua", "Chimborazo"],
    m9: "1",
    m10: {
      code1: "11",
      code2: "44",
      code3: "R5",
      code4: "652",
      code5: "1"
    }
  },
  "B-03": {
    m1: [1, 1, 1, 1],
    m2: "2080",
    m3: [
      {
        question: "¿Cuál es el resultado de: 10 // 3?",
        options: ["3.33", "3", "4", "10"],
        answer: "3"
      },
      {
        question: "¿Qué devuelve type('hola')?",
        options: ["<class 'int'>", "<class 'str'>", "<class 'char'>", "string"],
        answer: "<class 'str'>"
      },
      {
        question: "¿Qué operador compara igualdad en Python?",
        options: ["=", "==", "===", "eq"],
        answer: "=="
      }
    ],
    m4: ["R"],
    m5: "3",
    m6: "201",
    m7: "00:45",
    m8: ["Esmeraldas", "Manabí", "Santo Domingo", "Pichincha", "Imbabura", "Carchi"],
    m9: "9",
    m10: {
      code1: "13",
      code2: "03",
      code3: "R2",
      code4: "624",
      code5: "9"
    }
  },
  "B-04": {
    m1: [1, 1, 1, 1],
    m2: "2094",
    m3: [
      {
        question: "¿Qué palabra clave define una función?",
        options: ["function", "def", "func", "define"],
        answer: "def"
      },
      {
        question: "¿Cómo se importa un módulo llamado 'math'?",
        options: ["include math", "import math", "using math", "require math"],
        answer: "import math"
      },
      {
        question: "¿Qué es None en Python?",
        options: ["Un error", "Un número", "Ausencia de valor", "Una cadena"],
        answer: "Ausencia de valor"
      }
    ],
    m4: ["G"],
    m5: "4",
    m6: "201",
    m7: "00:20",
    m8: ["Sucumbíos", "Napo", "Orellana", "Pastaza", "Morona Santiago", "Zamora Chinchipe", "Loja"],
    m9: "1",
    m10: {
      code1: "14",
      code2: "44",
      code3: "G2",
      code4: "716",
      code5: "1"
    }
  },
  "B-05": {
    m1: [1, 1, 1, 1],
    m2: "2114",
    m3: [
      {
        question: "¿Qué método agrega al final de una lista?",
        options: ["add()", "append()", "insert()", "push()"],
        answer: "append()"
      },
      {
        question: "¿Qué método elimina espacios de una cadena?",
        options: ["trim()", "strip()", "remove()", "clean()"],
        answer: "strip()"
      },
      {
        question: "¿Qué devuelve 'Hola'.lower()?",
        options: ["HOLA", "hola", "HoLa", "Hola"],
        answer: "hola"
      }
    ],
    m4: ["G"],
    m5: "3",
    m6: "501",
    m7: "00:35",
    m8: ["Santa Elena", "Guayas", "Los Ríos", "Manabí", "Esmeraldas"],
    m9: "9",
    m10: {
      code1: "13",
      code2: "43",
      code3: "G5",
      code4: "559",
      code5: "9"
    }
  },
  "B-06": {
    m1: [1, 1, 1, 1],
    m2: "2107",
    m3: [
      {
        question: "¿Cuál es el índice del primer elemento?",
        options: ["1", "0", "-1", "null"],
        answer: "0"
      },
      {
        question: "¿Qué crea un diccionario vacío?",
        options: ["[]", "()", "{}", "dict"],
        answer: "{}"
      },
      {
        question: "¿Cuál es el resultado de: 5 % 2?",
        options: ["2", "2.5", "1", "0"],
        answer: "1"
      }
    ],
    m4: ["R"],
    m5: "3",
    m6: "201",
    m7: "00:50",
    m8: ["Azuay", "Cañar", "Chimborazo", "Bolívar", "Tungurahua"],
    m9: "1",
    m10: {
      code1: "10",
      code2: "03",
      code3: "R2",
      code4: "711",
      code5: "1"
    }
  },
  "B-07": {
    m1: [1, 1, 1, 1],
    m2: "2118",
    m3: [
      {
        question: "¿Qué operador es exponenciación?",
        options: ["^", "**", "exp", "pow"],
        answer: "**"
      },
      {
        question: "¿Qué palabra rompe un bucle?",
        options: ["stop", "exit", "break", "end"],
        answer: "break"
      },
      {
        question: "¿Qué devuelve bool(0)?",
        options: ["True", "False", "0", "None"],
        answer: "False"
      }
    ],
    m4: ["G"],
    m5: "3",
    m6: "401",
    m7: "00:25",
    m8: ["Carchi", "Imbabura", "Pichincha", "Cotopaxi", "Tungurahua", "Chimborazo", "Bolívar", "Cañar", "Azuay"],
    m9: "1",
    m10: {
      code1: "13",
      code2: "33",
      code3: "G4",
      code4: "619",
      code5: "1"
    }
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

function initM3(el, questionsData) {
  const questionText = el.querySelector('#questionText');
  const optionBtns = el.querySelectorAll('.option-btn');
  const validateBtn = el.querySelector('.btn-validate');
  const progressIndicator = el.querySelector('#questionProgress');
  
  let currentQuestionIndex = 0;
  let selectedAnswer = null;
  let correctAnswers = 0;

  function loadQuestion() {
    const currentQuestion = questionsData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    progressIndicator.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questionsData.length}`;

    // Limpiar selección anterior
    optionBtns.forEach(btn => {
      btn.classList.remove('selected', 'correct', 'disabled');
    });
    selectedAnswer = null;

    // Cargar opciones
    optionBtns.forEach((btn, index) => {
      btn.textContent = currentQuestion.options[index];
      btn.onclick = () => {
        if (!btn.classList.contains('disabled')) {
          selectedAnswer = currentQuestion.options[index];
          optionBtns.forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        }
      };
    });
  }

  validateBtn.addEventListener('click', () => {
    if (!selectedAnswer) {
      showError();
      return;
    }

    const currentQuestion = questionsData[currentQuestionIndex];
    
    if (selectedAnswer === currentQuestion.answer) {
      correctAnswers++;
      optionBtns.forEach(btn => {
        if (btn.textContent === currentQuestion.answer) {
          btn.classList.add('correct');
        }
        btn.classList.add('disabled');
      });

      // Avanzar a la siguiente pregunta o completar el módulo
      setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questionsData.length) {
          loadQuestion();
        } else {
          // Todas las preguntas respondidas correctamente
          completeModule();
        }
      }, 800);
    } else {
      showError();
      optionBtns.forEach(btn => btn.classList.remove('selected'));
      selectedAnswer = null;
    }
  });

  // Cargar la primera pregunta
  loadQuestion();
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
  const provinces = el.querySelectorAll('.province-btn');
  const prioritySequenceDisplay = el.querySelector('#prioritySequence');
  const priorityCountDisplay = el.querySelector('#priorityCount');
  const validateBtn = el.querySelector('.btn-validate');
  const resetBtn = el.querySelector('.reset-priority-btn');
  let priorityOrder = [];
  let clickCounter = 1;

  provinces.forEach(province => {
    province.addEventListener('click', () => {
      const provinceName = province.dataset.province;
      
      // Verificar si ya está en la secuencia
      const existingIndex = priorityOrder.findIndex(p => p.name === provinceName);
      
      if (existingIndex !== -1) {
        // Remover de la secuencia
        province.classList.remove('priority-selected');
        province.removeAttribute('data-priority-number');
        priorityOrder.splice(existingIndex, 1);
        
        // Reajustar prioridades
        priorityOrder.forEach((p, idx) => {
          p.priority = idx + 1;
          const provinceEl = Array.from(provinces).find(prov => prov.dataset.province === p.name);
          if (provinceEl) {
            provinceEl.dataset.priorityNumber = p.priority;
          }
        });
        clickCounter = priorityOrder.length + 1;
      } else {
        // Agregar nueva prioridad
        province.classList.add('priority-selected');
        province.dataset.priorityNumber = clickCounter;
        priorityOrder.push({ name: provinceName, priority: clickCounter });
        clickCounter++;
      }
      
      updatePriorityDisplay();
    });
  });

  function updatePriorityDisplay() {
    if (priorityOrder.length === 0) {
      prioritySequenceDisplay.textContent = 'Ninguno';
      priorityCountDisplay.textContent = '0';
    } else {
      const sequence = priorityOrder
        .sort((a, b) => a.priority - b.priority)
        .map(p => `${p.priority}:${p.name}`)
        .join(' → ');
      prioritySequenceDisplay.textContent = sequence;
      priorityCountDisplay.textContent = priorityOrder.length.toString();
    }
  }

  resetBtn.addEventListener('click', () => {
    provinces.forEach(p => {
      p.classList.remove('priority-selected');
      p.removeAttribute('data-priority-number');
    });
    priorityOrder = [];
    clickCounter = 1;
    updatePriorityDisplay();
  });

  validateBtn.addEventListener('click', () => {
    // Validar que la secuencia sea correcta
    if (priorityOrder.length === 0) {
      showError();
      return;
    }

    // Verificar que el número de provincias coincida
    if (priorityOrder.length !== correctSequence.length) {
      showError();
      return;
    }

    // Obtener la secuencia ingresada ordenada por prioridad
    const userSequence = priorityOrder
      .sort((a, b) => a.priority - b.priority)
      .map(p => p.name);

    // Verificar que cada provincia coincida en orden
    let isCorrect = true;
    for (let i = 0; i < correctSequence.length; i++) {
      if (userSequence[i] !== correctSequence[i]) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      provinces.forEach(p => p.classList.add('completed'));
      completeModule();
    } else {
      showError();
      // Opcional: resetear después de error
      setTimeout(() => {
        provinces.forEach(p => {
          p.classList.remove('priority-selected');
          p.removeAttribute('data-priority-number');
        });
        priorityOrder = [];
        clickCounter = 1;
        updatePriorityDisplay();
      }, 500);
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

function initM10(el, correctCode) {
  const codeInputs = el.querySelectorAll('.code-input');
  const validateBtn = el.querySelector('.btn-validate');
  let userCode = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: ''
  };

  codeInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const block = e.target.dataset.block;
      userCode[block] = e.target.value.toUpperCase();
    });
  });

  validateBtn.addEventListener('click', () => {
    // Validar que todos los campos estén llenos
    let allFilled = true;
    for (let i = 1; i <= 5; i++) {
      if (userCode[i] === '') {
        allFilled = false;
        break;
      }
    }

    if (!allFilled) {
      showError();
      return;
    }

    // Verificar que el código sea correcto
    let isCorrect = true;
    for (let i = 1; i <= 5; i++) {
      if (userCode[i] !== correctCode[`code${i}`]) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      codeInputs.forEach(input => {
        input.classList.add('correct');
      });
      completeModule();
    } else {
      showError();
      codeInputs.forEach(input => {
        input.value = '';
        userCode[input.dataset.block] = '';
      });
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
  
  // Penalización: restar 10 segundos por error
  gameState.timeRemaining = Math.max(0, gameState.timeRemaining - 10);
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
