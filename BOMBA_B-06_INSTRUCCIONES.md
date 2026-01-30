# 💣 BOMBA B-06: PROYECTO TITAN
## Nivel de Amenaza: ⭐⭐⭐☆☆ (Intermedio)

```
╔════════════════════════════════════════════════════════════╗
║  OPERACIÓN EQUIPO DINAMITA - CÓDIGO NARANJA               ║
║  Bomba: B-06 "TITAN"                                       ║
║  Estado: ALTA COMPLEJIDAD ANALÍTICA                        ║
║  Tiempo límite: 20:00 minutos                              ║
╚════════════════════════════════════════════════════════════╝
```

---

## ⚠️ BRIEFING

**B-06 "Titan"** no te dará respuestas fáciles. Las instrucciones son **deliberadamente vagas**. Tu trabajo es **interpretar, decidir y ejecutar**.

**Esto simula situaciones reales:** datos ambiguos, requisitos poco claros, decisiones basadas en criterio propio.

---

## 🧩 MÓDULO 1: Índice de Riesgo Compuesto

**Situación:** Necesitas crear una métrica que combine amenaza, energía y frecuencia en un solo número.

### Lo que NO te diré
- ¿Sumas? ¿Promedias? ¿Ponderas?
- ¿Qué peso tiene cada variable?
- ¿Normalizas antes o después?

### Lo que SÍ te diré
- El resultado final debe ser un índice entre 0 y 100
- Amenaza alta + energía baja = más riesgo
- Frecuencia alta = más riesgo

### Tu decisión
Diseña la fórmula. Justifícala mentalmente. Aplícala.

### 🎯 Objetivo
Promedio del índice de riesgo. Últimos 2 dígitos + 2026.

---

## 🧩 MÓDULO 2: Promedio Resistente a Outliers

**Situación:** El promedio normal de intensidad está distorsionado por valores extremos.

### Pista única
Usa una medida de tendencia central que no se vea afectada por outliers.

### Tu decisión
¿Mediana? ¿Media recortada? ¿Percentil 50? ¿Otra cosa?

### 🎯 Objetivo
Promedio "robusto" de `Energia × Frecuencia`. Últimos 2 dígitos + 2026.

---

## 🧩 MÓDULO 3: Dispersión Relativa

**Situación:** Quieres saber si la frecuencia es "estable" o "caótica".

### Pista única
No uses rangos absolutos. Usa algo **relativo** al promedio.

### Tu decisión
¿Coeficiente de variación? ¿Rango normalizado? ¿Desviación relativa?
Define tu umbral: ¿20%? ¿30%? ¿50%?

### 🎯 Objetivo
STABLE o UNSTABLE según TU criterio de dispersión relativa.

---

## 🧩 MÓDULO 4: Cable Crítico Multicriterio

**Situación:** El cable más peligroso no es necesariamente el más frecuente.

### Pistas
- Considera amenaza alta
- Considera energía baja
- Considera frecuencia alta
- Combina estos criterios

### Tu decisión
¿Filtras primero? ¿Ponderas? ¿Usas percentiles?
¿Qué cable es "dominante" bajo TU definición multidimensional?

### 🎯 Objetivo
Cable hex más peligroso según análisis multicriterio.

---

## 🧩 MÓDULO 5: Agentes Outliers Multidimensionales

**Situación:** Algunos agentes operan con valores "raros" en múltiples dimensiones.

### Pistas
- Un valor puede ser normal en amenaza pero raro en energía
- O raro en ambos
- O extremo en frecuencia

### Tu decisión
¿Calculas Z-scores para cada variable?
¿Defines "outlier" como |Z| > 1.5? ¿> 2?
¿Cuentas outliers en ANY dimensión o en ALL dimensiones?

### 🎯 Objetivo
Número de agentes con valores anómalos (según TU definición).

---

## 🧩 MÓDULO 6: Ciudad con Distribución Anómala

**Situación:** Una ciudad tiene un patrón de sensor_IDs "diferente" al resto.

### Pista única
Piensa en cómo se "distribuyen" los IDs de sensores por ciudad.

### Tu decisión
¿Usas rangos? ¿Varianza? ¿Algo más sofisticado?
¿La ciudad con mayor dispersión? ¿O menor?

### 🎯 Objetivo
Ciudad con distribución más anómala de Sensor_IDs. Cuenta letras.

---

## 🧩 MÓDULO 7: Tendencia No Lineal

**Situación:** La energía podría no cambiar linealmente con el tiempo.

### Pistas
- Divide el tiempo en 3 partes: inicio, medio, final
- Compara promedios de energía en cada parte
- ¿Hay aceleración? ¿Desaceleración?

### Tu decisión
Define "aceleración": ¿la diferencia aumenta entre periodos?
¿O el cambio porcentual crece?

### 🎯 Objetivo
"ACCELERATING" si el cambio se acelera, "DECELERATING" si se frena, "LINEAR" si es constante.
Formato MM:SS → 02:30 si ACCEL, 05:30 si LINEAR, 08:30 si DECEL.

---

## 🧩 MÓDULO 8: Correlación Condicional

**Situación:** La relación entre Energía y Frecuencia podría ser diferente según el sector.

### Pistas
- Calcula correlación en cada sector
- Identifica el sector con correlación más fuerte (positiva o negativa)
- En ese sector, ¿la correlación es fuerte?

### Tu decisión
¿Usas valor absoluto para "más fuerte"?
¿Qué umbral defines como "fuerte": >0.5? >0.7?

### 🎯 Objetivo
Sector con mayor correlación absoluta. Si correlación > 0.6 → dial 9, sino → dial 5.

---

## 🧩 MÓDULO 9: Segmentación Natural

**Situación:** Los datos se agrupan naturalmente de alguna forma.

### Pista única
Combina múltiples categóricas y encuentra el grupo dominante.

### Tu decisión
¿Agrupas por Sector + Prioridad? ¿+ Estado?
¿El grupo "dominante" es el más grande? ¿O el más peligroso?

### 🎯 Objetivo
Tamaño del grupo dominante (según TU criterio de dominancia).

---

## 🧩 MÓDULO 10: Registro Extremo Compuesto

**Situación:** Queremos el registro MÁS RARO del dataset.

### Pistas
- No es solo el valor más alto
- Es el más "alejado del comportamiento normal"
- Considera múltiples dimensiones

### Tu decisión
¿Calculas distancia desde el promedio en cada dimensión?
¿Usas distancia euclidiana? ¿Manhattan?
¿Normalizas antes?

### 🎯 Objetivo
Sensor_ID del registro más anómalo, dígitos invertidos.

---

## 🎓 HABILIDADES REQUERIDAS

- **Pensamiento crítico:** Definir métricas sin instrucciones exactas
- **Criterio estadístico:** Elegir medidas apropiadas
- **Análisis multidimensional:** Combinar múltiples variables
- **Interpretación de contexto:** Entender qué significa "riesgo", "estabilidad", "anomalía"
- **Pandas básico aplicado creativamente**

---

## 📚 LIBRERÍAS NECESARIAS

```bash
pip install pandas numpy
```

---

## 🎯 FILOSOFÍA DE B-06

> "No te doy la respuesta. Te doy el problema. Tú decides cómo resolverlo."

En el mundo real, nadie te dirá exactamente qué función usar o qué umbral aplicar. **Este es tu entrenamiento para eso.**

---

## 🚀 DESACTIVACIÓN

Contraseña: **B-06**
⏱️ **20:00**

---

**La inteligencia no está en copiar código, sino en saber QUÉ código escribir. 🎯🧠💣**

---

*Clasificación: RESTRINGIDO | Proyecto Titan | B-06*
