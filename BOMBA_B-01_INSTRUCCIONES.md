# 💣 BOMBA B-01: PROTOCOLO SIGMA
## Nivel de Amenaza: ⭐⭐☆☆☆ (Introductorio)

```
╔════════════════════════════════════════════════════════════╗
║  OPERACIÓN EQUIPO DINAMITA - CLASIFICADO                  ║
║  Bomba: B-01 "SIGMA"                                       ║
║  Estado: ARMADA                                            ║
║  Tiempo límite: 20:00 minutos                              ║
╚════════════════════════════════════════════════════════════╝
```

---

## 📋 INFORMACIÓN DE INTELIGENCIA

Has sido asignado para desactivar la **Bomba B-01**, conocida como "Protocolo Sigma". Esta bomba contiene **10 módulos interconectados** que deben ser desactivados en cualquier orden antes de que expire el cronómetro.

**DATOS DISPONIBLES:** `dataset_bombas_completo.csv`

⚠️ **ADVERTENCIA:** El dataset contiene información de **todas las bombas**. Debes filtrar únicamente los datos correspondientes a **B-01**.

---

## 🔍 MISIÓN: RESOLVER 10 MÓDULOS

### 📊 PASO 0: Preparación

```python
import pandas as pd

# Cargar dataset completo
df_completo = pd.read_csv('dataset_bombas_completo.csv')

# PASO CRÍTICO: Filtrar SOLO datos de B-01
df = df_completo[df_completo['ID_Bomba'] == 'B-01'].copy()

print(f"Total de registros para B-01: {len(df)}")
```

**🎯 Pregunta de reflexión:** ¿Por qué es importante hacer `.copy()` después del filtrado?

---

## 🧩 MÓDULO 1: Sistema de Interruptores Binarios

### Descripción del Módulo
Cuatro interruptores que deben configurarse según el **nivel de amenaza acumulada**.

### 🎯 Tu Misión
1. Calcula la **suma total** de `Nivel_Amenaza` para todos los registros de B-01
2. Aplica la siguiente lógica:
   - Si la suma es **mayor a 50**: activa los 4 interruptores (código: `1111`)
   - Si la suma es **50 o menor**: convierte la suma a binario de 4 bits

### 💡 Pistas
- Usa `.sum()` para agregar valores
- Python tiene una función `bin()` para convertir a binario
- Recuerda: necesitas exactamente 4 dígitos binarios

### ❓ Desafío Adicional
¿Qué porcentaje del total de amenaza global (todas las bombas) representa B-01?

### ✅ Validación
Tu código debe activar los 4 interruptores en el juego.

---

## 🧩 MÓDULO 2: Cálculo de Energía Ponderada

### Descripción del Módulo
Un display numérico de 4 dígitos que requiere un cálculo de promedio ponderado.

### 🎯 Tu Misión
1. Calcula el **promedio ponderado** de energía y frecuencia: `(Energia × Frecuencia).mean()`
2. Toma los **últimos 2 dígitos** del resultado (parte entera)
3. Suma **2026** a esos 2 dígitos
4. El resultado es el código de 4 dígitos

### 💡 Pistas
- El promedio ponderado refleja la "intensidad energética" de la bomba
- Usa `int()` para convertir a entero antes de extraer dígitos
- Puedes usar slicing de strings: `str(numero)[-2:]`

### ❓ Desafío Adicional
¿Cuál es la diferencia entre el promedio ponderado de B-01 vs el promedio simple de energía?

### 🔢 Ejemplo
Si el promedio ponderado es `8546.7`:
- Últimos 2 dígitos: `46`
- Código final: `46 + 2026 = 2072`

---

## 🧩 MÓDULO 3: Análisis de Estabilidad de Frecuencia

### Descripción del Módulo
Un selector de dos estados que determina la estabilidad del sistema.

### 🎯 Tu Misión
1. Calcula el **rango** de frecuencias: `max(Frecuencia) - min(Frecuencia)`
2. Determina el estado:
   - Rango **> 200**: Sistema **UNSTABLE**
   - Rango **≤ 200**: Sistema **STABLE**

### 💡 Pistas
- Un rango grande indica alta variabilidad = sistema inestable
- Usa `.max()` y `.min()` en la columna de frecuencias

### ❓ Desafío Adicional
Crea un histograma de las frecuencias. ¿Observas algún patrón o distribución especial?

### 📊 Contexto Técnico
El rango mide la dispersión absoluta de los datos, indicando cuán volátil es el sistema.

---

## 🧩 MÓDULO 4: Identificación de Cable Dominante

### Descripción del Módulo
Tres cables (Rojo, Verde, Azul) conectados al detonador. Debes cortar el correcto.

### 🎯 Tu Misión
1. Agrupa los datos por `Hex_Cable` (R/G/B)
2. Suma la `Energia` total de cada cable
3. Identifica el cable con **mayor energía acumulada**
4. Ese es el cable dominante que debes "cortar" (seleccionar en el juego)

### 💡 Pistas
- Usa `.groupby('Hex_Cable')['Energia'].sum()`
- Encuentra el índice del valor máximo con `.idxmax()`
- R = Rojo 🔴, G = Verde 🟢, B = Azul 🔵

### ❓ Desafío Adicional
¿Cuál es el cable con **menor** energía? ¿Cuál sería el riesgo de cortarlo accidentalmente?

### ⚠️ Advertencia
Seleccionar el cable incorrecto resultará en detonación inmediata.

---

## 🧩 MÓDULO 5: Conteo de Agentes de Alto Riesgo

### Descripción del Módulo
Un teclado numérico que requiere saber cuántos agentes operan en zona de peligro.

### 🎯 Tu Misión
1. Filtra registros donde `Energia > 50` (zona de alto riesgo)
2. Cuenta cuántos **agentes únicos** aparecen en ese subconjunto
3. Ingresa ese número en el módulo

### 💡 Pistas
- Primero filtra: `df[df['Energia'] > 50]`
- Luego cuenta únicos: `.nunique()` en la columna `Agente`
- No confundas "registros totales" con "agentes únicos"

### ❓ Desafío Adicional
¿Cuál es el agente que aparece más frecuentemente en zonas de alto riesgo?

### 🎯 Reflexión
¿Por qué es importante contar agentes **únicos** en lugar del total de registros?

---

## 🧩 MÓDULO 6: Código de Sensor Invertido

### Descripción del Módulo
Un display que muestra el sensor más utilizado, pero necesita ser "reflejado".

### 🎯 Tu Misión
1. Encuentra el sensor más frecuente (moda estadística) en `Sensor_ID`
2. **Invierte** los dígitos del ID (ejemplo: `201` → `102`, `101` → `101`)
3. Ingresa el número invertido

### 💡 Pistas
- La moda se calcula con `.mode()[0]`
- Para invertir: convierte a string, usa slicing `[::-1]`, reconvierte a int
- Algunos números son **palíndromos** (igual invertidos)

### ❓ Desafío Adicional
¿Qué porcentaje de los registros usan el sensor más frecuente? ¿Es una moda fuerte o débil?

### 🔢 Ejemplo
Si el sensor más frecuente es `301`:
- Invertido: `103`

---

## 🧩 MÓDULO 7: Desviación Temporal

### Descripción del Módulo
Un cronómetro que muestra la variabilidad temporal del sistema.

### 🎯 Tu Misión
1. Convierte la columna `Timestamp` a formato datetime
2. Transforma cada timestamp a segundos (Unix timestamp)
3. Calcula la **desviación estándar** de esos valores
4. Convierte el resultado a formato `MM:SS`

### 💡 Pistas
- Usa `pd.to_datetime()` para convertir timestamps
- Método `.timestamp()` convierte datetime a segundos
- Divide por 60 para obtener minutos, usa `%` para segundos

### ❓ Desafío Adicional
¿Cuál es el timestamp más temprano y más tardío? ¿Cuál es el span temporal total?

### 📊 Ejemplo de Conversión
Si `std = 75.3` segundos:
- Minutos: `75 // 60 = 1`
- Segundos: `75 % 60 = 15`
- Formato: `01:15`

---

## 🧩 MÓDULO 8: Densidad Geográfica

### Descripción del Módulo
Un selector numérico basado en análisis geográfico.

### 🎯 Tu Misión
1. Encuentra la ciudad más frecuente en la columna `Ciudad`
2. Cuenta el **número de letras** en el nombre de esa ciudad
3. Selecciona ese número en el módulo

### 💡 Pistas
- Usa `.value_counts().idxmax()` para encontrar el valor más frecuente
- La función `len()` cuenta caracteres
- No cuentes espacios si el nombre tiene varias palabras

### ❓ Desafío Adicional
Crea un ranking de las top 3 ciudades más frecuentes. ¿Hay alguna que domine claramente?

### 🌍 Nota
Las ciudades reflejan las ubicaciones geográficas de los sensores de la bomba.

---

## 🧩 MÓDULO 9: Correlación de Amenaza-Energía

### Descripción del Módulo
Un dial rotatorio con posiciones del 1 al 9 basado en análisis estadístico.

### 🎯 Tu Misión
1. Calcula la **correlación de Pearson** entre `Nivel_Amenaza` y `Energia`
2. Determina la posición del dial:
   - Correlación **positiva** (> 0): posición **9**
   - Correlación **negativa** (< 0): posición **1**

### 💡 Pistas
- Usa `.corr()` para calcular correlación
- Sintaxis: `df['Col1'].corr(df['Col2'])`
- El signo de la correlación es lo importante, no la magnitud

### ❓ Desafío Adicional
¿Cuál es el valor exacto de correlación? ¿Es fuerte (cerca de -1 o 1) o débil (cerca de 0)?

### 📊 Interpretación
- Correlación positiva: a mayor amenaza, mayor energía
- Correlación negativa: a mayor amenaza, menor energía

---

## 🧩 MÓDULO 10: Checksum de Integridad

### Descripción del Módulo
Un verificador final que valida la consistencia de tus respuestas previas.

### 🎯 Tu Misión
1. Toma el número de **interruptores activos** de M1 (cuántos '1' en el código binario)
2. Suma el **número de agentes** de M5
3. Suma el **número de letras** de M8
4. Calcula: `(M1_bits + M5_valor + M8_valor) % 10`
5. El resultado (último dígito) es el checksum

### 💡 Pistas
- Si M1 es "1111", hay 4 bits activos
- El operador `%` da el residuo de la división
- Este módulo valida la consistencia interna de tu análisis

### ❓ Desafío Adicional
¿Qué pasaría si cambiara uno solo de los valores anteriores? ¿Cómo cambia el checksum?

### 🔢 Ejemplo
- M1: `1111` → 4 bits activos
- M5: `5` agentes
- M8: `7` letras
- Checksum: `(4 + 5 + 7) % 10 = 16 % 10 = 6`

---

## 🎯 LISTA DE VERIFICACIÓN FINAL

Antes de intentar desactivar la bomba, verifica:

- [ ] Filtraste correctamente los datos de B-01
- [ ] Usaste `.copy()` para evitar warnings
- [ ] Verificaste cada cálculo dos veces
- [ ] Entiendes **por qué** cada respuesta es correcta, no solo el "qué"
- [ ] Tienes las 10 respuestas anotadas
- [ ] Convertiste los valores al formato correcto (binario, MM:SS, etc.)

---

## 🚀 CÓMO DESACTIVAR LA BOMBA

1. Abre `index.html` en tu navegador
2. Ingresa contraseña: **B-01**
3. Resuelve los 10 módulos con tus respuestas calculadas
4. **¡Desactiva la bomba antes de 20:00!**

---

## 💡 CONSEJOS DE ESTRATEGIA

1. **Explora primero:** Usa `df.head()`, `df.info()`, `df.describe()`
2. **Valida el filtrado:** Asegúrate de tener ~150 registros de B-01
3. **Documenta:** Anota cada paso de tu análisis
4. **Verifica tipos:** Usa `df.dtypes` para confirmar tipos de datos
5. **Piensa críticamente:** ¿Tiene sentido tu respuesta en el contexto?

---

## 📚 RECURSOS ÚTILES

- **Pandas Filtering:** `df[df['columna'] == valor]`
- **Agregaciones:** `.sum()`, `.mean()`, `.max()`, `.min()`
- **Conteos:** `.nunique()`, `.value_counts()`
- **Estadística:** `.std()`, `.corr()`, `.mode()`
- **GroupBy:** `.groupby('columna')['otra'].operación()`

---

**¡Buena suerte, Agente! La ciudad cuenta contigo. 💣🔧**

---

*Clasificación: CONFIDENCIAL | Operación Equipo Dinamita | Bomba B-01*
