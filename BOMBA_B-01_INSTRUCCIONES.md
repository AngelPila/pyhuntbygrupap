# 💣 BOMBA B-01: PROTOCOLO SIGMA
## Nivel de Amenaza: ⭐⭐☆☆☆ (Introductorio)

```
╔════════════════════════════════════════════════════════════╗
║  OPERACIÓN EQUIPO DINAMITA - CLASIFICADO                  ║
║  Bomba: B-01 "SIGMA"                                       ║
║  Estado: ARMADA                                            ║
║  Tiempo límite: 60:00 minutos                              ║
╚════════════════════════════════════════════════════════════╝
```

---

## 📋 INFORMACIÓN DE INTELIGENCIA

Objetivo: desactivar la **Bomba B-01**. Hay **11 módulos** y se resuelven en cualquier orden.

**Dataset:** `dataset_bombas_completo.csv` (filtra solo `ID_Bomba == 'B-01'`).

---

## 📊 PASO 0: Preparación

Necesitas cargar el dataset completo y filtrar solo los datos de la Bomba B-01. Este es un paso esencial para que todos tus análisis posteriores sean correctos.

**Nota:** asegúrate de trabajar con una copia de los datos filtrados para evitar problemas al modificar columnas.

---

## 🧩 MÓDULO 1: Sistema de Interruptores Binarios
**Penalización por error: -1:30**

Este módulo controla un panel de 4 interruptores. El nivel de amenaza acumulada determina la configuración binaria del sistema.

**El proceso:**
1. Suma todos los niveles de amenaza de B-01
2. Aplica módulo 16 para obtener un valor entre 0 y 15
3. Convierte ese valor a código binario de 4 dígitos

**Ayuda técnica:**
- La operación `valor % 16` genera números entre 0 y 15
- Para convertir a binario de 4 dígitos usa `bin()` y `zfill(4)`
- Cada interruptor representa un bit: 0 = apagado, 1 = encendido

---

## 🧩 MÓDULO 2: Cálculo de Energía Ponderada
**Penalización por error: -1:30**

Este display de 4 dígitos mide la "intensidad energética" del sistema. No es simplemente el promedio de energía, sino cómo interactúan la energía y la frecuencia juntas. El sistema genera un valor potencialmente grande (porque multiplica dos variables), y luego lo normaliza a un rango manejable que el hardware puede procesar (1990–2030).

**El proceso:**
1. Considera cómo la energía y la frecuencia se multiplican e interactúan en cada registro
2. Calcula el promedio de esa interacción
3. Usa la operación módulo 40 para "comprimir" el resultado a un rango pequeño (0–39)
4. Suma 1990 para desplazarlo al rango final donde cabe en el display

**Ayuda técnica:**
- Crea una nueva columna multiplicando Energía × Frecuencia
- Calcula el promedio de esa columna
- El módulo 40 genera valores entre 0 y 39
- Después sumas 1990 para obtener valores entre 1990 y 2029

---

## 🧩 MÓDULO 3: Preguntas Teóricas sobre Python
**Penalización por error: -1:30 por cada pregunta**

Este módulo evalúa tus conocimientos fundamentales sobre el lenguaje Python. Necesitarás responder correctamente 3 preguntas de opción múltiple que cubren conceptos básicos como tipos de datos, funciones incorporadas y convenciones de sintaxis.

**El proceso:**
1. Responde sobre clasificación de tipos de datos en Python
2. Predice el resultado de funciones incorporadas
3. Reconoce la sintaxis correcta para comentarios

**Ayuda técnica:**
- Pregunta 1: Considera cómo Python clasifica valores entre comillas
- Pregunta 2: Piensa en qué devuelve la función len() cuando se aplica a una lista
- Pregunta 3: Recuerda que Python usa un símbolo específico para iniciar comentarios
- **IMPORTANTE:** Cada pregunta incorrecta resta 1:30, así que piensa bien antes de responder

---

## 🧩 MÓDULO 4: Panel de Cables de Energía
**Penalización por error: -7:30**

El sistema tiene tres cables de colores diferentes que transportan energía. Cada cable tiene un color (Rojo, Verde o Azul) y transporta cantidades variables de energía en diferentes registros. Debes identificar qué cable transporta la mayor cantidad de energía acumulada en total.

**El proceso:**
1. Agrupa los datos por el campo que identifica cables (busca una columna con valores: R, G, B)
2. Suma toda la energía transportada por cada cable
3. Identifica cuál cable tiene el máximo total
4. En el juego, corta el cable correspondiente (el primero que cortes es tu respuesta)

**Ayuda técnica:**
- Busca una columna que contenga valores como "R", "G", "B" (colores abreviados)
- Usa `groupby()` para agrupar por cable
- Suma la energía de cada grupo
- El cable dominante es el que tiene mayor suma
- **CUIDADO:** Este módulo tiene la penalización más alta (-7:30), así que verifica bien tu análisis

---

## 🧩 MÓDULO 5: Agentes de Alto Riesgo
**Penalización por error: -5:00**

Múltiples agentes operan en el sitio. Solo algunos están en zonas donde la energía es suficientemente peligrosa. El módulo necesita saber cuántos agentes **distintos** están expuestos a ese peligro.

**El proceso:**
1. Identifica la zona de alto riesgo según los niveles de energía (filtra con umbral > 50)
2. Filtra los registros que están en esa zona
3. Cuenta cuántos agentes únicos operan en esa zona filtrada
4. Ingresa el número directamente (sin normalización)

**Ayuda técnica:**
- Usa condición: `Energia > 50`
- Identifica la columna de agentes (busca `ID_Agente` o similar)
- Usa `.nunique()` para contar valores únicos
- El resultado es un número entre 0 y 4

---

## 🧩 MÓDULO 6: Sensor Invertido
**Penalización por error: -5:00**

Un sensor es utilizado mucho más que los demás. Este sensor tiene un código que necesita ser invertido para acceder a un subsistema oculto. El reflejo de ese código es la clave de acceso.

**El proceso:**
1. Encuentra cuál sensor es el más usado (calcula la moda del ID_Sensor)
2. Toma el identificador numérico de ese sensor (un número de 3 dígitos)
3. Invierte el orden de sus dígitos (ej: 301 → 103)

**Ayuda técnica:**
- Usa `.mode()[0]` o `.value_counts().idxmax()` para encontrar el sensor más frecuente
- La inversión se puede hacer con slicing de strings: `str(numero)[::-1]`
- El resultado es un número de 3 dígitos invertido

---

## 🧩 MÓDULO 7: Desviación Temporal
**Penalización por error: -0:30 por cada reinicio**

Los eventos de la bomba no ocurren a intervalos perfectos. Hay variaciones en los tiempos entre mediciones. El sistema necesita cuantificar cuánta variación temporal existe en todo el conjunto de eventos.

**El proceso:**
1. Convierte todos los timestamps a un formato que permita cálculos numéricos
2. Calcula la desviación estándar de esos tiempos
3. Redondea a 2 decimales y convierte a formato de tiempo MM:SS

**Ayuda técnica:**
- Usa `pd.to_datetime()` para convertir timestamps
- Usa `.std()` para calcular desviación estándar
- El resultado final debe expresarse como MM:SS con 2 dígitos cada uno
- Este módulo requiere precisión de tiempo: ±2 segundos de margen

---

## 🧩 MÓDULO 8: Ruta de Evacuación Provincial
**Penalización por error: -4:00**

La bomba B-01 está desplegada en múltiples provincias. El sistema necesita que identifiques las provincias específicas en el orden de prioridad correcto para establecer la ruta de evacuación.

**El proceso:**
1. Identifica todas las provincias únicas donde hay registros de B-01
2. Ordénalas alfabéticamente
3. En el juego, selecciona las provincias en el mapa en ese orden exacto

**Ayuda técnica:**
- Usa `.unique()` o `.drop_duplicates()` en la columna `Provincia`
- Ordena con `.sort_values()` o `sorted()`
- La respuesta son 4 provincias específicas
- En el juego: haz clic en cada provincia del mapa en el orden correcto (aparecerá un número de prioridad)

---

## 🧩 MÓDULO 9: Correlación Amenaza-Energía
**Penalización por error: -5:00**

En sistemas complejos, las variables a menudo se relacionan entre sí. Existe una relación entre el nivel de amenaza de la bomba y la energía que está usando. El dial físico necesita saber qué tipo de relación existe para establecer el equilibrio correcto.

**El proceso:**
1. Analiza cómo se relacionan amenaza y energía en los datos de B-01
2. Calcula la correlación de Pearson entre estas dos variables
3. Según el signo de la correlación, posiciona el dial

**Interfaz del juego - Cómo ingresar:**
- El dial en la interfaz tiene valores de 0 a 9
- Si la correlación es **positiva** (ambas variables crecen juntas) → coloca el dial en **9**
- Si la correlación es **negativa** (una crece mientras la otra decrece) → coloca el dial en **1**
- Si la correlación es casi cero (sin relación clara) → coloca el dial en **5**
- Usa el slider para seleccionar el valor deseado

**Ayuda técnica:**
- Usa `.corr()` entre las columnas `Amenaza` y `Energia`
- Si correlación > 0.1 → dial = 9
- Si correlación < -0.1 → dial = 1
- Si está entre -0.1 y 0.1 → dial = 5

---

## 🧩 MÓDULO 10: Verificación Integrada Multi-Código
**Penalización por error: -1:00**

Este es el módulo de validación final. NO es un simple checksum, sino que requiere **5 códigos diferentes** derivados de los módulos anteriores. Cada código se obtiene mediante cálculos específicos que integran resultados de módulos previos.

**Estructura de códigos:**
- **Code 1 (M1-M3):** Se deriva combinando resultados de Módulos 1 y 3
- **Code 2 (M2-M5):** Se deriva combinando resultados de Módulos 2 y 5
- **Code 3 (M4-M6):** Se deriva del cable dominante (M4) más información de M6
- **Code 4 (M7-M8):** Se deriva combinando tiempo (M7) y provincias (M8)
- **Code 5 (M9):** Se deriva directamente del dial de correlación (M9)

**El proceso:**
1. Para cada código, identifica qué módulos anteriores necesitas
2. Aplica las fórmulas de integración correspondientes
3. Cada código tiene una longitud específica (2-4 caracteres)
4. Code 3 incluye la letra del cable (G, R o B) seguida de dígitos
5. Ingresa los 5 códigos en los campos correspondientes del juego

**Ayuda técnica:**
- Analiza qué datos de cada módulo anterior puedes usar
- Los códigos son alfanuméricos (pueden incluir letras y números)
- El sistema valida los 5 códigos juntos
- Si falla, revisa todos los módulos previos para verificar tus cálculos

**Nota importante:** Este módulo es la verificación final de todo tu análisis. Si algo está mal en módulos anteriores, los códigos no coincidirán.

## 🧩 MÓDULO 11: Memoria de Funciones Python
**Penalización por error: ninguna (módulo de aprendizaje)**

Este módulo final es un juego de memoria diseñado para reforzar tu conocimiento de funciones y conceptos de Python y Pandas. Debes emparejar 18 pares de tarjetas: cada función con su definición correspondiente.

**El proceso:**
1. Haz clic en una tarjeta para voltearla
2. Haz clic en otra tarjeta para buscar su pareja
3. Si coinciden, permanecerán visibles
4. Si no coinciden, se voltearán de nuevo
5. Completa todos los 18 pares para desactivar el módulo

**Conceptos incluidos:**
- Funciones básicas de Python: `print()`, `input()`, `len()`, `int()`
- Estructuras de control: `if/else`, `while`, `for`, `def`
- Métodos de listas: `list.append()`
- Funciones de Pandas: `pd.read_csv()`, `df.head()`, `df.describe()`, `df.groupby()`, etc.

**Ayuda técnica:**
- Este módulo NO resta tiempo por errores
- Puedes reiniciar el juego si pierdes la cuenta
- El objetivo es aprender mientras desactivas la bomba
- Tómate tu tiempo para memorizar las funciones

---

## 🚀 DESACTIVAR

1. Abre `index.html`.
2. Contraseña: **B-01**.
3. Completa los 11 módulos en cualquier orden.
4. Ten en cuenta las penalizaciones de tiempo por errores.

---

*Clasificación: CONFIDENCIAL | Operación Equipo Dinamita | Bomba B-01*