# 🎮 OPERACIÓN EQUIPO DINAMITA - ÍNDICE DE NAVEGACIÓN

¡Bienvenido, Agente! Este índice te guiará a través del sistema de desactivación de bombas.

---

## 📋 INICIO RÁPIDO

### 1. Lee la Documentación Principal
👉 **[README.md](README.md)** - Información general del proyecto, estructura y cómo empezar

### 2. Prepara tu Entorno
```bash
# Instalar dependencias (solo Pandas y NumPy)
pip install pandas numpy
```

### 3. Genera el Dataset (si no existe)
```bash
python generar_dataset_unificado.py
```
Esto creará `dataset_bombas_completo.csv` con 1050 registros.

---

## 🎯 SELECCIONA TU BOMBA

**IMPORTANTE:** El desafío NO está en código complejo, sino en **PENSAR** qué hacer.

### 🟢 NIVEL 1: APRENDIZAJE (⭐⭐☆☆☆)

#### 📄 [BOMBA B-01: PROTOCOLO SIGMA](BOMBA_B-01_INSTRUCCIONES.md)
- **Dificultad:** ⭐⭐☆☆☆ (Introductorio)
- **Tiempo estimado:** 30-45 minutos
- **Estilo:** Instrucciones claras y detalladas
- **Técnicas:** Pandas básico (filtrado, groupby, sum, mean, median)
- **Ideal para:** Principiantes que están aprendiendo Pandas
- **Prerequisitos:** Conocimientos básicos de Python

---

### 🟡 NIVEL 2: DESARROLLO (⭐⭐⭐☆☆)

#### 📄 [BOMBA B-02: OPERACIÓN FÉNIX](BOMBA_B-02_INSTRUCCIONES.md)
- **Dificultad:** ⭐⭐⭐☆☆ (Intermedio)
- **Tiempo estimado:** 45-60 minutos
- **Estilo:** Instrucciones moderadamente detalladas
- **Técnicas:** Filtros múltiples, percentiles, IQR
- **Ideal para:** Usuarios con conocimientos de Pandas
- **Prerequisitos:** Completar B-01

#### 📄 [BOMBA B-03: CÓDIGO ÍCARO](BOMBA_B-03_INSTRUCCIONES.md)
- **Dificultad:** ⭐⭐⭐⭐☆ (Intermedio-Avanzado)
- **Tiempo estimado:** 60-90 minutos
- **Estilo:** Instrucciones con ejemplos, pero menos directivas
- **Técnicas:** Estadística (mediana, MAD, correlación)
- **Ideal para:** Usuarios que quieren aplicar estadística básica
- **Prerequisitos:** B-01, B-02

---

### 🟠 NIVEL 3: DESAFÍO (⭐⭐⭐☆☆ a ⭐⭐⭐⭐☆)

#### 📄 [BOMBA B-04: PROYECTO MEDUSA](BOMBA_B-04_INSTRUCCIONES.md)
- **Dificultad:** ⭐⭐⭐☆☆ (Intermedio-Avanzado)
- **Tiempo estimado:** 60-75 minutos
- **Estilo:** Pistas y preguntas - tú decides qué hacer
- **Técnicas:** Pandas básico + pensamiento crítico
- **Cambio clave:** No te dice CÓMO hacerlo, solo QUÉ lograr
- **Prerequisitos:** B-01, B-02, B-03

#### 📄 [BOMBA B-05: OPERACIÓN ATLAS](BOMBA_B-05_INSTRUCCIONES.md)
- **Dificultad:** ⭐⭐⭐☆☆ (Intermedio)
- **Tiempo estimado:** 60-75 minutos
- **Estilo:** Situaciones problemáticas - define tus criterios
- **Técnicas:** Pandas + criterio propio
- **Desafío:** Decisiones de análisis son tuyas
- **Prerequisitos:** B-01, B-02, B-03

#### 📄 [BOMBA B-06: PROYECTO TITAN](BOMBA_B-06_INSTRUCCIONES.md)
- **Dificultad:** ⭐⭐⭐⭐☆ (Avanzado)
- **Tiempo estimado:** 75-90 minutos
- **Estilo:** Instrucciones vagas - alta interpretación requerida
- **Técnicas:** Pandas básico aplicado creativamente
- **Desafío:** Definir métricas, umbrales y criterios
- **Prerequisitos:** B-01 a B-05

---

### 🔴 NIVEL 4: MAESTRÍA (⭐⭐⭐⭐☆)

#### 📄 [BOMBA B-07: DESAFÍO FINAL](BOMBA_B-07_INSTRUCCIONES.md)
- **Dificultad:** ⭐⭐⭐⭐☆ (Razonamiento Puro)
- **Tiempo estimado:** 90-120 minutos
- **Estilo:** SIN instrucciones - solo problemas abiertos
- **Técnicas:** Pandas básico + razonamiento independiente
- **Filosofía:** Simula problemas reales sin solución predefinida
- **Desafío:** Tú decides TODO - qué medir, cómo medir, por qué
- **Prerequisitos:** TODAS las bombas anteriores
- **Advertencia:** No hay respuesta "correcta" única

---

## 📊 RECURSOS DE DATOS

### Dataset Principal
- **Archivo:** `dataset_bombas_completo.csv`
- **Registros:** 1050 (150 por bomba)
- **Columnas:** 12 (ID_Bomba, Nivel_Amenaza, Energia, Frecuencia, Hex_Cable, Agente, Sensor_ID, Timestamp, Ciudad, Sector, Prioridad, Estado)
- **Características:** Datos mezclados de todas las bombas, requiere filtrado

### Generador de Datos
- **Archivo:** `generar_dataset_unificado.py`
- **Uso:** `python generar_dataset_unificado.py`
- **Función:** Crea dataset fresco con distribuciones controladas

---

## 🎮 INTERFAZ DEL JUEGO

### Archivos del Juego
- **index.html** - Interfaz web del juego
- **styles.css** - Diseño cyberpunk
- **script.js** - Lógica y validación de respuestas

### Cómo Jugar
1. Abre `index.html` en tu navegador
2. Ingresa contraseña de bomba (B-01 a B-07)
3. Resuelve 10 módulos con tus respuestas calculadas
4. Desactiva antes de 20:00 minutos

---

## 📚 GUÍA DE PROGRESIÓN SUGERIDA

### Para Principiantes
```
B-01 (Fundamentos) → B-02 (Filtros) → B-05 (Estadística)
```

### Para Intermedios
```
B-01 → B-02 → B-03 (Técnicas avanzadas) → B-05
```

### Para Avanzados
```
B-01 → B-02 → B-03 → B-05 → B-06 → B-04 → B-07
```

### Para Expertos (Speedrun)
```
B-01 → B-04 → B-07 (Desafío máximo)
```

---

## 🛠️ INSTALACIÓN DE LIBRERÍAS

### Nivel Básico (B-01, B-02)
```bash
pip install pandas numpy
```

### Nivel Intermedio (B-03, B-05)
```bash
pip install pandas numpy scipy
```

### Nivel Avanzado (B-06)
```bash
pip install pandas numpy scipy scikit-learn statsmodels networkx
```

### Nivel Experto (B-04, B-07)
```bash
pip install pandas numpy scipy scikit-learn statsmodels networkx deap
```

---

## 🎯 OBJETIVOS DE APRENDIZAJE POR BOMBA

| Bomba | Aprenderás |
|-------|------------|
| **B-01** | Fundamentos de Pandas: filtrado, agregación, groupby |
| **B-02** | Filtros complejos, análisis de outliers, correlaciones robustas |
| **B-03** | Estadística avanzada: percentiles, MAD, índices de concentración |
| **B-04** | Machine Learning: clustering, detección de anomalías, PCA |
| **B-05** | Técnicas bootstrap, análisis de diversidad, ventanas móviles |
| **B-06** | PCA, DBSCAN, análisis de redes, series temporales avanzadas |
| **B-07** | Optimización, algoritmos genéticos, causalidad, teoría de grafos |

---

## 💡 CONSEJOS GENERALES

1. **Empieza con B-01** - No saltes a bombas avanzadas sin fundamentos
2. **Lee las instrucciones completas** - Cada bomba tiene pistas valiosas
3. **Experimenta con el dataset** - Explora antes de resolver
4. **Documenta tu código** - Te ayudará cuando estés perdido
5. **Usa Google y documentación** - No todo está en las instrucciones
6. **No te rindas** - Las bombas expertas son difíciles por diseño
7. **Aprende de los errores** - Cada fallo es una oportunidad

---

## 🏆 SISTEMA DE LOGROS

Completa bombas para desbloquear títulos:

- ✅ **B-01:** Novato de Datos
- ✅ **B-02:** Analista Emergente
- ✅ **B-03:** Estadístico Certificado
- ✅ **B-04:** Maestro de Machine Learning
- ✅ **B-05:** Experto Multivariado
- ✅ **B-06:** Científico de Datos Avanzado
- ✅ **B-07:** 🏆 **LEYENDA ABSOLUTA** 🏆

---

## 📞 AYUDA Y RECURSOS

### Documentación
- [Pandas Docs](https://pandas.pydata.org/docs/)
- [NumPy Docs](https://numpy.org/doc/)
- [Scikit-learn Docs](https://scikit-learn.org/)
- [Statsmodels Docs](https://www.statsmodels.org/)

### Conceptos Clave
- **Filtrado:** `df[condición]`
- **GroupBy:** `df.groupby('columna').agg()`
- **Correlación:** `df['col1'].corr(df['col2'])`
- **Percentiles:** `df['columna'].quantile(0.75)`
- **Outliers:** Método IQR, Z-scores

---

## 🚀 ¡COMIENZA AHORA!

1. Lee el [README.md](README.md) principal
2. Genera el dataset: `python generar_dataset_unificado.py`
3. Abre [BOMBA_B-01_INSTRUCCIONES.md](BOMBA_B-01_INSTRUCCIONES.md)
4. ¡Empieza a analizar!

---

**¡El tiempo corre, Agente! ⏰💣**

*Clasificación: ACCESO PÚBLICO | Sistema de Entrenamiento | v2.0*
