# 🎮 OPERACIÓN EQUIPO DINAMITA
## Escape Room Técnico - Desactivador de Bombas Digital
### Retos Avanzados de Análisis de Datos y Machine Learning

Un juego interactivo en tiempo real de desactivación de bombas digitales basado en análisis de datos reales. **7 bombas** con **10 módulos cada una** que requieren conocimientos avanzados de ciencia de datos, estadística y machine learning.

---

## ✨ Características Principales

### 🎯 Mecánicas de Juego
- **7 Bombas Diferentes** (B-01 a B-07) con complejidad creciente
- **10 Módulos por Bomba** con desafíos únicos
- **Dataset Unificado** de 1050+ registros que requiere filtrado inteligente
- **Cronómetro Global** de 20 minutos
- **Sistema de Progreso Visual** en tiempo real
- **Pantallas de Victoria y Detonación** animadas

### 🎓 Niveles de Dificultad

| Bomba | Nivel | Enfoque | Tiempo Estimado |
|-------|-------|---------|----------------|
| **B-01** | ⭐⭐☆☆☆ | Pandas básico + instrucciones claras | 30-45 min |
| **B-02** | ⭐⭐⭐☆☆ | Pandas + filtros múltiples | 45-60 min |
| **B-03** | ⭐⭐⭐⭐☆ | Estadística + razonamiento | 60-90 min |
| **B-04** | ⭐⭐⭐☆☆ | Pandas básico + pensamiento crítico | 60-75 min |
| **B-05** | ⭐⭐⭐☆☆ | Criterio propio + decisiones | 60-75 min |
| **B-06** | ⭐⭐⭐⭐☆ | Instrucciones vagas + análisis | 75-90 min |
| **B-07** | ⭐⭐⭐⭐☆ | Razonamiento puro + creatividad | 90-120 min |

### 🔐 Conceptos de Análisis de Datos

**Filosofía:** El desafío no está en código complejo, sino en **PENSAR** qué hacer.

- **B-01 a B-03:** Pandas básico con instrucciones progresivamente menos detalladas
- **B-04 a B-06:** Mismas técnicas, pero sin decirte exactamente qué hacer
- **B-07:** Problemas abiertos - tú decides TODO

**Técnicas cubiertas (todas con Pandas básico):**
- Filtrado, groupby, agregaciones (sum, mean, median, std)
- Percentiles, IQR, detección de outliers
- Correlaciones, análisis temporal
- Normalización, scores compuestos
- Criterios de riesgo, estabilidad, anomalías

---

## 📊 ESTRUCTURA DEL PROYECTO

### 📁 Archivos Principales

```
📂 pyhuntbygrupap/
├── 🎮 index.html                          # Interfaz del juego
├── 🎨 styles.css                          # Diseño cyberpunk
├── ⚙️ script.js                            # Lógica del juego
│
├── 📊 DATOS Y ANÁLISIS
│   ├── dataset_bombas_completo.csv        # Dataset unificado (1050 registros)
│   └── generar_dataset_unificado.py       # Script generador
│
├── 📖 INSTRUCCIONES POR BOMBA
│   ├── BOMBA_B-01_INSTRUCCIONES.md        # Nivel: Introductorio ⭐⭐
│   ├── BOMBA_B-02_INSTRUCCIONES.md        # Nivel: Intermedio ⭐⭐⭐
│   ├── BOMBA_B-03_INSTRUCCIONES.md        # Nivel: Avanzado ⭐⭐⭐⭐
│   ├── BOMBA_B-04_INSTRUCCIONES.md        # Nivel: Experto ⭐⭐⭐⭐⭐
│   ├── BOMBA_B-05_INSTRUCCIONES.md        # Nivel: Intermedio-Avanzado ⭐⭐⭐
│   ├── BOMBA_B-06_INSTRUCCIONES.md        # Nivel: Avanzado-Experto ⭐⭐⭐⭐
│   └── BOMBA_B-07_INSTRUCCIONES.md        # Nivel: Leyenda ⭐⭐⭐⭐⭐
│
└── 📚 README.md                            # Este archivo
```

---

## 🚀 CÓMO EMPEZAR

### 1️⃣ Preparación del Entorno

```bash
# Instalar dependencias (solo Pandas y NumPy)
pip install pandas numpy
```

### 2️⃣ Explorar el Dataset

```python
import pandas as pd

# Cargar dataset completo
df = pd.read_csv('dataset_bombas_completo.csv')

print(f"Total registros: {len(df)}")
print(f"Bombas disponibles: {df['ID_Bomba'].unique()}")
print(f"\nDistribución:")
print(df['ID_Bomba'].value_counts().sort_index())
```

**Salida esperada:**
```
Total registros: 1050
Bombas disponibles: ['B-01' 'B-02' 'B-03' 'B-04' 'B-05' 'B-06' 'B-07']

Distribución:
B-01    150
B-02    150
B-03    150
B-04    150
B-05    150
B-06    150
B-07    150
```

### 3️⃣ Seleccionar una Bomba

**IMPORTANTE:** El dataset contiene datos de **todas las bombas mezclados**. Debes filtrar:

```python
# Ejemplo: Analizar bomba B-01
df_bomba = df[df['ID_Bomba'] == 'B-01'].copy()

print(f"Registros de B-01: {len(df_bomba)}")
print("\nColumnas disponibles:")
print(df_bomba.columns.tolist())
```

### 4️⃣ Leer las Instrucciones

Cada bomba tiene su propio archivo de instrucciones con:
- ✅ Descripción detallada de cada módulo
- 💡 Pistas y código de ejemplo
- 🎯 Desafíos adicionales
- 📊 Contexto técnico y teórico

**Empieza con:** `BOMBA_B-01_INSTRUCCIONES.md`

### 5️⃣ Resolver los Módulos

Analiza los datos con Pandas/Python para obtener las respuestas de los 10 módulos.

### 6️⃣ Jugar

1. Abre `index.html` en tu navegador
2. Ingresa la contraseña de la bomba (ej: `B-01`)
3. Ingresa tus respuestas calculadas
4. ¡Desactiva la bomba antes de 20:00!

---

## 📊 DATASET: `dataset_bombas_completo.csv`

### Estructura de Datos

| Columna | Tipo | Descripción |
|---------|------|-------------|
| `ID_Bomba` | String | Identificador de bomba (B-01 a B-07) |
| `Nivel_Amenaza` | Integer | Nivel de peligro (5-20) |
| `Energia` | Integer | Energía del componente (30-70) |
| `Frecuencia` | Integer | Frecuencia de señal (60-300 Hz) |
| `Hex_Cable` | String | Color de cable (R=Rojo, G=Verde, B=Azul) |
| `Agente` | String | ID del agente asignado |
| `Sensor_ID` | Integer | Identificador del sensor |
| `Timestamp` | Datetime | Marca temporal del registro |
| `Ciudad` | String | Ciudad de origen de la señal |
| `Sector` | String | Sector geográfico (Norte/Sur/Este/Oeste/Centro) |
| `Prioridad` | String | Nivel de prioridad (Baja/Media/Alta/Crítica) |
| `Estado` | String | Estado del sensor (Activo/Inactivo/Pendiente/Verificado) |

### Características del Dataset

- **Total:** 1050 registros
- **Por bomba:** ~150 registros cada una
- **Ruido:** Datos mezclados de todas las bombas
- **Complejidad:** Requiere filtrado, limpieza y análisis cuidadoso
- **Columnas adicionales:** Algunas son distractores, otras son clave para análisis avanzado

---

## 🎓 PROGRESIÓN DE APRENDIZAJE

### 🟢 Nivel Principiante (B-01)

**Aprenderás:**
- Filtrado básico de DataFrames
- Agregaciones (`.sum()`, `.mean()`, `.max()`, `.min()`)
- Operaciones con `.groupby()`
- Conteo de valores únicos (`.nunique()`)
- Correlación de Pearson básica

**Tiempo estimado:** 30-45 minutos

---

### 🟡 Nivel Intermedio (B-02, B-05)

**Aprenderás:**
- Filtros múltiples y condicionales complejos
- Análisis de outliers (IQR)
- Percentiles y cuantiles
- Correlaciones robustas (Spearman, Kendall)
- Análisis de frecuencias relativas
- Tests estadísticos (Levene, Shannon Index)

**Tiempo estimado:** 1-2 horas por bomba

---

### 🟠 Nivel Avanzado (B-03, B-06)

**Aprenderás:**
- Media armónica y geométrica
- MAD (Median Absolute Deviation)
- Índice de Herfindahl
- PCA (Principal Component Analysis)
- DBSCAN clustering
- Análisis de redes con NetworkX
- Series temporales (autocorrelación, descomposición STL)
- Análisis de Fourier (FFT)

**Tiempo estimado:** 2-3 horas por bomba

---

### 🔴 Nivel Experto (B-04, B-07)

**Aprenderás:**
- K-Means clustering
- Z-Scores y detección de anomalías
- Isolation Forest
- Algoritmos genéticos (DEAP)
- Optimización (gradiente descendente)
- LDA (Linear Discriminant Analysis)
- Test de Dickey-Fuller (estacionariedad)
- Causalidad de Granger
- PageRank
- Complejidad de Kolmogorov
- Información mutua

**Tiempo estimado:** 3-5 horas por bomba

---

## 💡 CONSEJOS ESTRATÉGICOS

### Para Todas las Bombas

1. **Filtra primero:** Siempre separa los datos de tu bomba del dataset completo
2. **Explora antes de analizar:** Usa `.head()`, `.describe()`, `.info()`
3. **Documenta tu código:** Añade comentarios para no perderte
4. **Verifica tipos:** Convierte `Timestamp` a datetime inmediatamente
5. **Usa `.copy()`:** Evita warnings de Pandas con slices

### Para Bombas Avanzadas

6. **Lee la teoría:** Entiende QUÉ hace cada técnica, no solo CÓMO codificarla
7. **Instala librerías:** Algunas técnicas requieren scipy, scikit-learn, etc.
8. **Valida resultados:** Imprime valores intermedios para debug
9. **Piensa críticamente:** ¿Tiene sentido tu respuesta en el contexto?
10. **No te rindas:** Las bombas expertas son difíciles por diseño

---

## 🛠️ EJEMPLOS DE ANÁLISIS

### Ejemplo 1: Filtrado Básico (B-01)

```python
import pandas as pd

# Cargar y filtrar
df = pd.read_csv('dataset_bombas_completo.csv')
df_b01 = df[df['ID_Bomba'] == 'B-01'].copy()

# M1: Suma de amenazas
suma = df_b01['Nivel_Amenaza'].sum()
codigo = "1111" if suma > 50 else format(suma, '04b')

print(f"M1 - Suma: {suma}")
print(f"M1 - Código: {codigo}")
```

### Ejemplo 2: Análisis Temporal (B-02+)

```python
# Convertir timestamp
df_b02 = df[df['ID_Bomba'] == 'B-02'].copy()
df_b02['Timestamp'] = pd.to_datetime(df_b02['Timestamp'])

# M7: Desviación estándar temporal
ts_segundos = df_b02['Timestamp'].apply(lambda x: x.timestamp())
std_ts = ts_segundos.std()

minutos = int(std_ts // 60)
segundos = int(std_ts % 60)
codigo_m7 = f"{minutos:02d}:{segundos:02d}"

print(f"M7 - Código: {codigo_m7}")
```

### Ejemplo 3: Machine Learning (B-04+)

```python
from sklearn.cluster import KMeans

df_b04 = df[df['ID_Bomba'] == 'B-04'].copy()

# M4: Clustering de energía
kmeans = KMeans(n_clusters=3, random_state=42)
df_b04['Cluster'] = kmeans.fit_predict(df_b04[['Energia']])

# Cluster de alta energía
cluster_alto = df_b04.groupby('Cluster')['Energia'].mean().idxmax()
df_cluster = df_b04[df_b04['Cluster'] == cluster_alto]

# Cable dominante en ese cluster
cable = df_cluster.groupby('Hex_Cable')['Energia'].sum().idxmax()
print(f"M4 - Cable dominante: {cable}")
```

---

## 🎨 Diseño Cyberpunk

- Fondo oscuro con grid animado
- Colores neón: verde, rojo, azul, amarillo
- Efecto glitch en títulos
- Animaciones de pulso y parpadeo
- Fuente monoespaciada 'Courier New'
- Sombras luminosas y efectos de brillo

---

## 🔧 Personalización

### Regenerar Dataset

```bash
python generar_dataset_unificado.py
```

Esto creará un nuevo `dataset_bombas_completo.csv` con:
- 1050 registros (150 por bomba)
- Datos mezclados aleatoriamente
- Propiedades estadísticas controladas

### Modificar Tiempo Límite

En `script.js`:
```javascript
gameState.timeRemaining = 1200; // segundos (20 min)
```

---

## 🌐 Compatibilidad

✅ **Navegadores soportados:**
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

❌ **No soportado:**
- Internet Explorer

✅ **Python:**
- Python 3.7+
- Pandas 1.0+
- NumPy 1.18+

---

## 📚 Recursos de Aprendizaje

### Documentación Oficial
- [Pandas Documentation](https://pandas.pydata.org/docs/)
- [NumPy Documentation](https://numpy.org/doc/)
- [Scikit-learn Documentation](https://scikit-learn.org/stable/)
- [SciPy Documentation](https://docs.scipy.org/doc/)
- [Statsmodels Documentation](https://www.statsmodels.org/)

### Tutoriales Recomendados
- [Pandas Cheat Sheet](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)
- [Scikit-learn Tutorials](https://scikit-learn.org/stable/tutorial/index.html)
- [Time Series with Python](https://www.statsmodels.org/stable/examples/index.html)

---

## 🎯 OBJETIVOS PEDAGÓGICOS

Este juego está diseñado para enseñar:

1. **Pensamiento Analítico:** Descomponer problemas complejos
2. **Filtrado de Datos:** Trabajar con datasets "sucios" y mezclados
3. **Estadística Aplicada:** Usar técnicas estadísticas en contextos reales
4. **Machine Learning:** Aplicar algoritmos de ML a problemas prácticos
5. **Optimización:** Encontrar soluciones óptimas bajo restricciones
6. **Series Temporales:** Analizar datos dependientes del tiempo
7. **Teoría de Grafos:** Modelar relaciones entre entidades
8. **Resolución de Problemas:** Enfrentar desafíos con múltiples soluciones

---

## 🏆 DESAFÍO FINAL

**¿Puedes desactivar las 7 bombas?**

- ✅ B-01: Fundamentos
- ✅ B-02: Filtros avanzados
- ✅ B-03: Estadística robusta
- ✅ B-04: Machine Learning
- ✅ B-05: Análisis multivariado
- ✅ B-06: Técnicas híbridas
- ✅ B-07: Maestría absoluta

**Tiempo total estimado:** 15-20 horas de análisis intenso

---

## 👥 Sobre el Proyecto

**Creado para:** Estudiantes de Ciencia de Datos, Estadística, Ingeniería
**Dificultad:** Desde principiante hasta experto
**Tipo:** Proyecto educativo gamificado
**Tecnologías:** HTML5, CSS3, JavaScript, Python, Pandas, Machine Learning

---

**¡Acepta el desafío, Agente! La ciudad cuenta contigo. 💣🔧📊**
# Luego accede a: http://localhost:8000/index.html
```

### 2. **Ingresa una Contraseña**
Usa una de estas 7 contraseñas de bomba válidas:
- **B-01** a **B-07** - Bombas con datos únicos de Pandas

### 3. **Resuelve los Módulos**
- Selecciona un módulo en la barra lateral izquierda
- Analiza el reto de ciencia de datos
- Ingresa la respuesta correcta
- Presiona **VALIDAR** para confirmar
- Los módulos resueltos aparecen en amarillo (★)

### 4. **Contra Reloj**
- El cronómetro corre desde 20:00 minutos
- Si llega a 00:00, la bomba se detona 💣
- El cronómetro se vuelve rojo cuando quedan menos de 60 segundos

### 5. **Victoria**
Si completas los 10 módulos antes de que se acabe el tiempo:
- Verás la pantalla de "¡MISIÓN CUMPLIDA!"
- Se mostrará el tiempo restante
- Se generará un código de victoria único

---

## 📊 Datos de Bombas - Soluciones

Cada bomba tiene datos únicos generados por Pandas con las siguientes características:
- Registros con Nivel_Amenaza, Energia, Frecuencia
- Identificadores de Cable (R/G/B), Agentes, Sensores
- Ciudades y Timestamps variados

### Ejemplo B-01
```
M1: Suma = 127 → Binario 1111
M2: Ponderada = 6546 → Últimos 2 dígitos (46) + 2026 = 2046
M3: Rango Frecuencia = 50 (< 200) → STABLE
M4: Cable dominante = G (Verde)
M5: Agentes con Energía > 50 = 4
M6: Sensor moda 101 → Invertido 101
M7: STD = 00:52
M8: Ciudad = Bogotá (7 letras) → Seleccionar 7
M9: Correlación positiva → Dial a 9
M10: Checksum = (15 + 4 + 7) % 10 = 6
```

---

## 🎓 Detalles Técnicos

### Estructura del Código

**index.html** (12KB)
- Estructura de 3 pantallas principales
- Templates para 10 módulos con descripciones Pandas
- Sistema de screens (password, game, victory, failure)

**styles.css** (25KB)
- Variables CSS personalizadas
- Animaciones cyberpunk (glitch, pulse, blink)
- Grid layout responsive
- Estilos modulares para cada elemento

**script.js** (16KB)
- Objeto `bombData` con 7 bombas basadas en análisis Pandas
- Sistema de estado del juego (`gameState`)
- Funciones modulares para cada M1-M10
- Validación específica para cada reto estadístico
- Timer con actualización en tiempo real

### Arquitectura de Módulos

Cada módulo tiene:
1. Template HTML con descripción del reto Pandas
2. Función `initM[1-10]()` para lógica
3. Validación personalizada según análisis
4. Llamada a `completeModule()` en éxito
5. Llamada a `showError()` en fallo

---

## 🔧 Personalización

### Generar Nuevas Bombas
Usa Python con Pandas para crear datos nuevos:

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "Nivel_Amenaza": np.random.randint(1, 20, 12),
    "Energia": np.random.randint(30, 75, 12),
    "Frecuencia": np.random.randint(60, 300, 12),
    # ... más columnas
})

# Calcular respuestas
m1 = df["Nivel_Amenaza"].sum()
m2 = int(str(int((df["Energia"] * df["Frecuencia"]).mean()))[-2:]) + 2026
# ... etc
```

### Cambiar Tiempo Límite
En `script.js`, modifica:
```javascript
gameState.timeRemaining = 1200; // segundos (20 min)
```

---

## 🎮 Tips para Jugar

1. **Aprende Pandas primero** - Conocer las consultas es esencial
2. **Planifica tu tiempo** - 2 minutos por módulo es ideal
3. **Lee las descripciones** - Cada módulo describe la consulta Pandas
4. **Presta atención al cronómetro** - Acelera cuando falten 2 min
5. **Verifica tus cálculos** - Los datos varían por bomba

---

## 🌐 Compatibilidad

✅ Navegadores soportados:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

❌ No soportado:
- Internet Explorer (obsoleto)
- Navegadores muy antiguos

---

## 📝 Notas de Desarrollo

- El juego se ejecuta completamente en el cliente (sin servidor necesario)
- Las respuestas son datos reales generados con Pandas
- Los módulos son independientes y pueden extenderse
- Fácil de personalizar con nuevos datasets
- Ideal para educación en Ciencia de Datos

---

## 🎬 Ejemplo de Uso

```
1. Abrir: http://localhost:8000/index.html
2. Ingresar: B-01
3. Resolver 10 módulos Pandas antes de 20:00
4. ¡MISIÓN CUMPLIDA! 🎉
```

---

**Creado por: Equipo Dinamita - Operaciones Especiales de Datos** 🎮💣📊✨