# 💣 BOMBA B-05: OPERACIÓN ATLAS
## Nivel de Amenaza: ⭐⭐⭐☆☆ (Intermedio)

```
╔════════════════════════════════════════════════════════════╗
║  OPERACIÓN EQUIPO DINAMITA - PRIORIDAD ALTA               ║
║  Bomba: B-05 "ATLAS"                                       ║
║  Estado: REQUIERE ANÁLISIS CUIDADOSO                       ║
║  Tiempo límite: 20:00 minutos                              ║
╚════════════════════════════════════════════════════════════╝
```

---

## 📋 BRIEFING

**B-05 "Atlas"** requiere que identifiques patrones **sin instrucciones explícitas**. Lee las pistas, piensa qué hacer, y decide tu enfoque.

**Técnicas:** Pandas básico + razonamiento lógico.

---

## 🧩 MÓDULO 1: Suma Robusta

**Situación:** Los datos tienen valores extremos que pueden distorsionar el análisis.

### Pistas
- Si calculas el promedio normal, valores muy altos o muy bajos pueden distorsionarlo
- Una técnica: eliminar el 10% de valores más altos y el 10% más bajos antes de calcular
- Después de eliminar esos extremos, calcula la suma del resto

### ¿Qué hacer?
1. Ordena los valores de amenaza
2. Calcula cuántos registros representan el 10% (multiplica total por 0.1)
3. Elimina ese número de registros del principio Y del final
4. Suma los que quedan

### 🎯 Resultado esperado
Suma de `Nivel_Amenaza` sin extremos. Últimos 2 dígitos + 2026.

---

## 🧩 MÓDULO 2: Intensidad por Importancia de Cable

**Situación:** No todos los cables tienen la misma importancia.

### Pistas
- El cable que más aparece es probablemente el más importante
- Los cables raros (que aparecen poco) son menos críticos
- Podrías asignar "pesos" según frecuencia

### ¿Qué hacer?
1. Identifica qué cable aparece más veces
2. Calcula la intensidad (`Energia × Frecuencia`) solo de ese cable
3. Promedia esas intensidades

### 🎯 Resultado esperado
Promedio de intensidad del cable dominante. Últimos 2 dígitos + 2026.

---

## 🧩 MÓDULO 3: Estabilidad por Rangos

**Situación:** El sistema oscila entre valores máximos y mínimos.

### Pistas
- "Rango" es la diferencia entre el valor más alto y el más bajo
- Si el rango es pequeño, el sistema es estable
- Pero "pequeño" es relativo al promedio...

### ¿Qué hacer?
1. Calcula el rango de frecuencia (max - min)
2. Calcula el promedio de frecuencia
3. Compara: ¿el rango es más del 50% del promedio?
4. Si sí → UNSTABLE, si no → STABLE

### 🎯 Resultado esperado
Estado: STABLE o UNSTABLE.

---

## 🧩 MÓDULO 4: Cable Problemático

**Situación:** Algunos cables están asociados con registros de alto riesgo.

### Pistas
- Define "alto riesgo" tú mismo (¿amenaza > 70? ¿energía < 30?)
- Filtra solo esos registros riesgosos
- De esos, ¿qué cable aparece más?

### ¿Qué hacer?
Tú decides el criterio de "riesgo" y aplicas el análisis. No hay instrucciones exactas.

### 🎯 Resultado esperado
Cable hexadecimal más común en registros riesgosos.

---

## 🧩 MÓDULO 5: Agentes en Sectores Críticos

**Situación:** Norte y Sur son sectores más peligrosos que el resto.

### Pistas
- Filtra registros solo de esos dos sectores
- De esos, cuenta cuántos agentes únicos hay
- Quizás también quieras filtrar por nivel de amenaza alto

### ¿Qué hacer?
1. Filtra por `Sector` (Norte o Sur)
2. ¿Agregas más filtros? Decide tú
3. Cuenta agentes únicos

### 🎯 Resultado esperado
Número de agentes únicos en sectores críticos (con criterio que tú definas).

---

## 🧩 MÓDULO 6: Sensor Más Usado

**Situación:** Algunos sensores se usan mucho más que otros.

### Pistas
- Cuenta cuántas veces aparece cada `Sensor_ID`
- El que más aparece es el más usado
- Invierte sus dígitos para el código

### ¿Qué hacer?
Simple: encuentra el sensor más frecuente. No hay trampa.

### 🎯 Resultado esperado
Sensor ID más frecuente, dígitos invertidos.

---

## 🧩 MÓDULO 7: Patrones Temporales

**Situación:** Los datos fueron capturados en diferentes momentos.

### Pistas
- Ordena por timestamp
- Divide en dos partes: primera mitad y segunda mitad del tiempo
- Compara promedios de energía entre ambas mitades
- ¿Aumentó, bajó o se mantuvo igual?

### ¿Qué hacer?
1. Ordena por tiempo
2. Calcula punto medio (mitad de registros)
3. Promedio energía primera mitad vs segunda mitad
4. Si aumenta > 5% → INCREASING
5. Si baja > 5% → DECREASING
6. Sino → CONSTANT

### 🎯 Resultado esperado
Formato 00:SS → 00:15 si INCREASING, 00:30 si CONSTANT, 00:45 si DECREASING.

---

## 🧩 MÓDULO 8: Ciudad Más Inestable

**Situación:** Algunas ciudades tienen datos más variables que otras.

### Pistas
- "Inestable" significa mucha variación en energía
- Agrupa por ciudad
- Calcula la desviación estándar de energía por ciudad
- La que tenga mayor desviación es la más inestable

### ¿Qué hacer?
1. Agrupa por `Ciudad`
2. Calcula desviación estándar de `Energia` para cada grupo
3. Identifica la ciudad con mayor desviación
4. Cuenta las letras

### 🎯 Resultado esperado
Número de letras de la ciudad más inestable.

---

## 🧩 MÓDULO 9: Combinaciones Peligrosas

**Situación:** Ciertas combinaciones de sector + prioridad son más comunes (y peligrosas).

### Pistas
- Agrupa por `Sector` Y `Prioridad` al mismo tiempo
- Cuenta cuántos registros tiene cada combinación
- La combinación más frecuente es la más peligrosa

### ¿Qué hacer?
1. Agrupa por dos columnas
2. Cuenta tamaño de cada grupo
3. Identifica el grupo más grande
4. Suma letras de sector + valor numérico de prioridad

### 🎯 Resultado esperado
Ejemplo: Si es "Norte" + Alta → 5 letras + (convierte "Alta" a número según tu criterio).

---

## 🧩 MÓDULO 10: Registro con Mayor Score Total

**Situación:** Queremos el registro más "intenso" considerando todas sus características.

### Pistas
- Crea un score sumando: `Nivel_Amenaza + Energia + Frecuencia`
- El registro con mayor score es el más intenso
- Devuelve su Sensor_ID invertido

### ¿Qué hacer?
1. Crea nueva columna: `Score = Nivel_Amenaza + Energia + Frecuencia`
2. Encuentra el registro con score máximo
3. Obtén su Sensor_ID
4. Invierte los dígitos

### 🎯 Resultado esperado
Sensor_ID del registro más intenso, dígitos invertidos.

---

## 🎓 TÉCNICAS APLICADAS

| Técnica | Módulo |
|---------|--------|
| Eliminación de outliers (trimming manual) | M1 |
| Filtrado por valor más frecuente | M2 |
| Rangos y estabilidad | M3 |
| Criterios de riesgo personalizados | M4 |
| Filtros por múltiples condiciones | M5 |
| Conteo de frecuencias | M6 |
| Análisis temporal por mitades | M7 |
| Agrupación con desviación estándar | M8 |
| Agrupación por múltiples columnas | M9 |
| Scores combinados | M10 |

---

## 📚 LIBRERÍAS NECESARIAS

```bash
pip install pandas numpy
```

---

## 🚀 DESACTIVACIÓN

Contraseña: **B-05**
⏱️ **20:00**

---

**El desafío no está en el código, sino en tu criterio. 🧠📊💣**

---

*Clasificación: CONFIDENCIAL | Operación Atlas | B-05*
