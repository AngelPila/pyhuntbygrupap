// OPERACIÓN EQUIPO DINAMITA - BOMB DEFUSAL GAME
// Retos basados en Análisis de Datos con Pandas

// ============ BOMB DATA - BASED ON PANDAS ANALYSIS ============
const bombData = {
  "B-01": {
    m1: [0, 1, 0, 1],
    m2: "2023",
    m3: [
      {
        question: "¿Qué tipo de dato es \"hola\" en Python?",
        options: ["str", "int", "float", "bool"],
        answer: "str"
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
    m5: "1",
    m6: "101",
    m7: "00:59",
    m8: ["Cotopaxi", "Imbabura", "Manabí", "Pichincha"],
    m9: "9",
    m10: "7"
  },
  "B-02": {
    m1: [1, 0, 1, 1],
    m2: "1026",
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
    m7: "00:07",
    m8: ["Imbabura", "Sucumbíos", "Orellana", "Santa Elena"],
    m9: "35",
    m10: {
      code1: "46",
      code2: "37",
      code3: "R45",
      code4: "236",
      code5: "32"
    }
  },
  "B-03": {
    m1: [0, 1, 1, 1],
    m2: "1926",
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
    m7: "00:06",
    m8: ["Imbabura", "Cañar", "Loja", "Carchi"],
    m9: "43",
    m10: {
      code1: "47",
      code2: "38",
      code3: "R25",
      code4: "408",
      code5: "32"
    }
  },
  "B-04": {
    m1: [0, 0, 0, 1],
    m2: "8826",
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
    m7: "00:07",
    m8: ["Pichincha", "Chimborazo", "Esmeraldas", "El Oro"],
    m9: "45",
    m10: {
      code1: "39",
      code2: "37",
      code3: "G38",
      code4: "277",
      code5: "22"
    }
  },
  "B-05": {
    m1: [1, 0, 1, 0],
    m2: "4926",
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
    m7: "00:06",
    m8: ["Azuay", "Pichincha", "Guayas", "Tungurahua"],
    m9: "44",
    m10: {
      code1: "40",
      code2: "49",
      code3: "G38",
      code4: "969",
      code5: "39"
    }
  },
  "B-06": {
    m1: [1, 1, 1, 0],
    m2: "6626",
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
    m7: "00:06",
    m8: ["Pichincha", "Cotopaxi", "Bolívar", "Morona Santiago"],
    m9: "38",
    m10: {
      code1: "25",
      code2: "37",
      code3: "R48",
      code4: "831",
      code5: "30"
    }
  },
  "B-07": {
    m1: [1, 1, 1, 0],
    m2: "4426",
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
    m7: "00:08",
    m8: ["Santa Elena", "Los Ríos", "Zamora Chinchipe", "Orellana"],
    m9: "36",
    m10: {
      code1: "31",
      code2: "41",
      code3: "G27",
      code4: "533",
      code5: "32"
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
const introScreen = document.getElementById('introScreen');
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

// ============ INTRO SCREEN ============
const storyBlocks = [
  {
    title: "⚠️ ALERTA CRÍTICA ⚠️",
    content: `Una organización criminal ha plantado una BOMBA DIGITAL en la infraestructura crítica de la ciudad.

El dispositivo contiene 10 MÓDULOS DE SEGURIDAD avanzados que deben ser desactivados en tiempo real.`
  },
  {
    title: "🎯 TU MISIÓN",
    content: `5 EQUIPOS de élite han sido desplegados simultáneamente.

Tu equipo debe desactivar los 10 módulos de la bomba utilizando análisis de datos y razonamiento lógico.

Solo el equipo más rápido y preciso salvará la ciudad.`
  },
  {
    title: "⏱️ TIEMPO LÍMITE",
    content: `Tienes exactamente 40:00 MINUTOS para completar la misión.

Cada segundo cuenta. La bomba se detonará si el tiempo expira.`
  },
  {
    title: "⚡ ADVERTENCIA ⚡",
    content: `• Cada módulo requiere una respuesta EXACTA
• Los errores consumen tiempo valioso
• La bomba se detonará si el tiempo expira
• La precisión es más importante que la velocidad

═══════════════════════════════════════════════════════

¿ESTÁS LISTO PARA SALVAR LA CIUDAD?`
  }
];

let currentBlockIndex = 0;
let isTyping = false;

function initIntroScreen() {
  const narrativeBlock = document.getElementById('narrativeBlock');
  const nextBlockBtn = document.getElementById('nextBlockBtn');
  const startMissionBtn = document.getElementById('startMissionBtn');

  // Reset
  currentBlockIndex = 0;
  narrativeBlock.innerHTML = '';
  nextBlockBtn.style.display = 'none';
  startMissionBtn.style.display = 'none';

  // Show first block
  showBlock(0);

  // Handle NEXT button (using onclick to avoid duplicates)
  nextBlockBtn.onclick = () => {
    if (!isTyping && currentBlockIndex < storyBlocks.length - 1) {
      currentBlockIndex++;
      showBlock(currentBlockIndex);
    }
  };

  // Handle start mission button (using onclick to avoid duplicates)
  startMissionBtn.onclick = () => {
    introScreen.classList.remove('active');
    passwordScreen.classList.add('active');
  };
}

function showBlock(index) {
  const narrativeBlock = document.getElementById('narrativeBlock');
  const nextBlockBtn = document.getElementById('nextBlockBtn');
  const startMissionBtn = document.getElementById('startMissionBtn');

  const block = storyBlocks[index];

  // Clear previous content
  narrativeBlock.innerHTML = '';
  nextBlockBtn.style.display = 'none';
  startMissionBtn.style.display = 'none';

  // Create block structure
  const titleEl = document.createElement('div');
  titleEl.className = 'block-title';
  titleEl.textContent = block.title;

  const contentEl = document.createElement('div');
  contentEl.className = 'block-content';

  narrativeBlock.appendChild(titleEl);
  narrativeBlock.appendChild(contentEl);

  // Type the content
  typeBlockContent(contentEl, block.content, () => {
    // After typing is complete
    if (index < storyBlocks.length - 1) {
      nextBlockBtn.style.display = 'inline-block';
    } else {
      startMissionBtn.style.display = 'inline-block';
    }
  });
}

function typeBlockContent(element, text, callback) {
  isTyping = true;
  let charIndex = 0;
  const typingSpeed = 15; // milliseconds per character

  function typeChar() {
    if (charIndex < text.length) {
      element.textContent = text.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeChar, typingSpeed);
    } else {
      isTyping = false;
      if (callback) callback();
    }
  }

  typeChar();
}

// ============ INITIALIZATION ============
function init() {
  // Initialize intro screen
  initIntroScreen();

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
  gameState.timeRemaining = 2400; // 40 minutes in seconds (changed from 1200)
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
  // Ahora son 11 módulos
  for (let i = 1; i <= 11; i++) {
    const btn = document.createElement('button');
    btn.className = 'module-btn active';
    btn.textContent = `M${i}`;
    btn.dataset.module = i - 1;
    btn.addEventListener('click', () => switchModule(i - 1));
    modulesList.appendChild(btn);
  }

  // Initialize module states
  gameState.moduleStates = {};
  for (let i = 0; i < 11; i++) {
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
    case 11: initM11(moduleEl); break;
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
  const provinces = el.querySelectorAll('.province');
  const prioritySequenceDisplay = el.querySelector('#prioritySequence');
  const priorityCountDisplay = el.querySelector('#priorityCount');
  const validateBtn = el.querySelector('.btn-validate');
  const resetBtn = el.querySelector('.btn-reset');
  let priorityOrder = [];
  let clickCounter = 1;

  provinces.forEach(province => {
    province.addEventListener('click', () => {
      const provinceName = province.dataset.province;

      // Si ya está seleccionada, quitarla
      if (province.classList.contains('priority-selected')) {
        const priorityNumber = parseInt(province.dataset.priorityNumber);
        province.classList.remove('priority-selected');
        province.removeAttribute('data-priority-number');

        // Remover del array
        priorityOrder = priorityOrder.filter(p => p.name !== provinceName);

        // Actualizar números de prioridad
        priorityOrder.forEach((p, index) => {
          const elem = Array.from(provinces).find(pr => pr.dataset.province === p.name);
          if (elem) {
            elem.dataset.priorityNumber = index + 1;
            p.priority = index + 1;
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
    timeRemaining: 2400, // 40 minutes
    gameStarted: false,
    gameLost: false,
    moduleStates: {}
  };

  passwordInput.value = '';
  passwordError.textContent = '';

  // Return to intro screen
  introScreen.classList.add('active');
  passwordScreen.classList.remove('active');
  gameScreen.classList.remove('active');
  victoryScreen.classList.remove('active');
  failureScreen.classList.remove('active');

  timer.classList.remove('danger');
  statusIndicator.classList.remove('danger');

  // Reinitialize intro screen
  initIntroScreen();
}

// ============ START ============
// ============ MEMORY GAME (M11) ============
const memoryPairs = [
  { id: 1, text: 'print()', type: 'concept' },
  { id: 1, text: 'Muestra datos.', type: 'def' },
  { id: 2, text: 'input()', type: 'concept' },
  { id: 2, text: 'Captura datos.', type: 'def' },
  { id: 3, text: 'int()', type: 'concept' },
  { id: 3, text: 'Convierte a entero.', type: 'def' },
  { id: 5, text: 'len()', type: 'concept' },
  { id: 5, text: 'Cuenta elementos.', type: 'def' },
  { id: 6, text: 'if / else', type: 'concept' },
  { id: 6, text: 'Condicionales.', type: 'def' },
  { id: 7, text: 'while', type: 'concept' },
  { id: 7, text: 'Bucle condicional.', type: 'def' },
  { id: 8, text: 'for', type: 'concept' },
  { id: 8, text: 'Bucle de secuencia.', type: 'def' },
  { id: 9, text: 'list.append()', type: 'concept' },
  { id: 9, text: 'Agrega al final.', type: 'def' },
  { id: 11, text: 'def', type: 'concept' },
  { id: 11, text: 'Define función.', type: 'def' },
  { id: 13, text: 'import pandas', type: 'concept' },
  { id: 13, text: 'Importa librería.', type: 'def' },
  { id: 14, text: 'pd.read_csv()', type: 'concept' },
  { id: 14, text: 'Lee archivo CSV.', type: 'def' },
  { id: 15, text: 'df.head()', type: 'concept' },
  { id: 15, text: 'Primeras 5 filas.', type: 'def' },
  { id: 16, text: 'df.describe()', type: 'concept' },
  { id: 16, text: 'Estadísticas.', type: 'def' },
  { id: 18, text: 'DataFrame', type: 'concept' },
  { id: 18, text: 'Tabla de datos.', type: 'def' },
  { id: 19, text: 'df.iloc[]', type: 'concept' },
  { id: 19, text: 'Selección por índice.', type: 'def' },
  { id: 23, text: 'df.groupby()', type: 'concept' },
  { id: 23, text: 'Agrupa datos.', type: 'def' },
  { id: 24, text: 'df.sort_values()', type: 'concept' },
  { id: 24, text: 'Ordena datos.', type: 'def' },
  { id: 25, text: 'str()', type: 'concept' },
  { id: 25, text: 'Convierte a texto.', type: 'def' }
];

let memoryGameState = {
  cards: [],
  flippedCards: [],
  matchedPairs: 0,
  attempts: 0,
  gameActive: false,
  lockBoard: false
};

function initM11(el) {
  const grid = el.querySelector('.memory-grid');
  const pairsFoundEl = el.querySelector('#pairsFound');
  const attemptsEl = el.querySelector('#attempts');
  const resetBtn = el.querySelector('#resetMemoryBtn');

  if (!grid) return;

  function startGame() {
    // Shuffle and create cards
    const shuffled = [...memoryPairs].sort(() => Math.random() - 0.5);
    memoryGameState.cards = shuffled;
    memoryGameState.flippedCards = [];
    memoryGameState.matchedPairs = 0;
    memoryGameState.attempts = 0;
    memoryGameState.gameActive = true;
    memoryGameState.lockBoard = false;

    // Update stats
    pairsFoundEl.textContent = '0';
    attemptsEl.textContent = '0';

    // Clear grid
    grid.innerHTML = '';

    // Create cards
    shuffled.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = `memory-card ${card.type}`; // Add type class
      cardEl.dataset.index = index;
      cardEl.dataset.id = card.id;

      const backEl = document.createElement('div');
      backEl.className = 'card-back';
      backEl.textContent = '?';

      const frontEl = document.createElement('div');
      frontEl.className = 'card-front';
      frontEl.textContent = card.text;

      cardEl.appendChild(backEl);
      cardEl.appendChild(frontEl);

      cardEl.onclick = () => flipCard(index, el);

      grid.appendChild(cardEl);
    });
  }

  // Reset button
  resetBtn.onclick = startGame;

  // Start immediately
  startGame();
}

function flipCard(index, moduleEl) {
  if (!memoryGameState.gameActive) return;
  if (memoryGameState.lockBoard) return;

  const card = memoryGameState.cards[index];
  const cardEl = moduleEl.querySelector(`.memory-card[data-index="${index}"]`);

  // Can't flip if already flipped or matched
  if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;



  // Flip the card
  cardEl.classList.add('flipped');
  memoryGameState.flippedCards.push({ index, id: card.id, element: cardEl });

  // Check for match when 2 cards are flipped
  if (memoryGameState.flippedCards.length === 2) {
    memoryGameState.lockBoard = true; // Lock board
    memoryGameState.attempts++;
    moduleEl.querySelector('#attempts').textContent = memoryGameState.attempts;

    const [card1, card2] = memoryGameState.flippedCards;

    if (card1.id === card2.id) {
      // Match!
      setTimeout(() => {
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');
        memoryGameState.matchedPairs++;
        moduleEl.querySelector('#pairsFound').textContent = memoryGameState.matchedPairs;
        memoryGameState.flippedCards = [];
        memoryGameState.lockBoard = false; // Unlock

        // Check if all pairs are matched
        if (memoryGameState.matchedPairs === 18) {
          setTimeout(() => {
            completeModule();
          }, 500);
        }
      }, 500);
    } else {
      // No match - flip back
      setTimeout(() => {
        card1.element.classList.remove('flipped');
        card2.element.classList.remove('flipped');
        memoryGameState.flippedCards = [];
        memoryGameState.lockBoard = false; // Unlock
      }, 1000);
    }
  }
}

// ============ START ============
function init() {
  // Initialize intro screen
  initIntroScreen();

  // Initialize other screens but don't show them yet

  passwordBtn.addEventListener('click', loadBomb);
  passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loadBomb();
  });

  document.getElementById('restartBtn').addEventListener('click', restartGame);
  document.getElementById('restartBtn2').addEventListener('click', restartGame);


}

document.addEventListener('DOMContentLoaded', init);
