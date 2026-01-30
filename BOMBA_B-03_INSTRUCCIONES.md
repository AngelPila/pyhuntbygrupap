# 💣 BOMBA B-03: CÓDIGO ÍCARO
## Nivel de Amenaza: ⭐⭐⭐⭐☆ (Avanzado)

```
╔════════════════════════════════════════════════════════════╗
║  OPERACIÓN EQUIPO DINAMITA - MÁXIMA PRIORIDAD             ║
║  Bomba: B-03 "ÍCARO"                                       ║
║  Estado: CRÍTICO - REQUIERE EXPERTO                        ║
║  Tiempo límite: 20:00 minutos                              ║
╚════════════════════════════════════════════════════════════╝
```

---

## ⚠️ ADVERTENCIA CRÍTICA

La **Bomba B-03** es una de las más peligrosas. Requiere:
- Análisis estadístico avanzado
- Manipulación de datos temporales complejos
- Entendimiento de distribuciones y percentiles
- **Pensamiento crítico en CADA paso**

**NO asumas** que los métodos de B-01 o B-02 funcionarán aquí.

---

## 🔍 PREPARACIÓN EXPERTA

```python
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

df_completo = pd.read_csv('dataset_bombas_completo.csv')
df = df_completo[df_completo['ID_Bomba'] == 'B-03'].copy()
df['Timestamp'] = pd.to_datetime(df['Timestamp'])

# Validación inicial
assert len(df) > 0, "No se encontraron datos para B-03"
print(f"Dataset B-03 cargado: {len(df)} registros")
print(f"Columnas disponibles: {df.columns.tolist()}")
```

---

## 🧩 MÓDULO 1: Suma Ponderada por Prioridad

**Complejidad:** ⭐⭐⭐⭐

### Desafío AVANZADO
No uses suma directa. Usa suma **ponderada** por prioridad:

1. Asigna pesos a cada prioridad:
   - `Crítica`: peso 2.0
   - `Alta`: peso 1.5
   - `Media`: peso 1.0
   - `Baja`: peso 0.5

2. Calcula: `Σ(Nivel_Amenaza × peso_prioridad)`

3. Aplica la regla binaria sobre este valor ponderado

### 💡 Implementación
```python
pesos = {'Crítica': 2.0, 'Alta': 1.5, 'Media': 1.0, 'Baja': 0.5}
df['Peso'] = df['Prioridad'].map(pesos)
suma_ponderada = (df['Nivel_Amenaza'] * df['Peso']).sum()
```

### 🤔 Reflexión
¿Por qué una amenaza "Crítica" debe contar el doble que una "Media"?

---

## 🧩 MÓDULO 2: Promedio Armónico de Intensidad

**Complejidad:** ⭐⭐⭐⭐⭐

### Desafío MATEMÁTICO
No uses promedio aritmético. Usa **promedio armónico**:

La fórmula del promedio armónico es:
$$H = \frac{n}{\sum_{i=1}^{n} \frac{1}{x_i}}$$

1. Crea variable: `Intensidad = Energia × Frecuencia`
2. Calcula el promedio armónico de `Intensidad`
3. Toma últimos 2 dígitos + 2026

### 💡 Código
```python
from scipy.stats import hmean  # O implementación manual

intensidad = df['Energia'] * df['Frecuencia']
# Nota: hmean no acepta valores 0
promedio_armonico = hmean(intensidad[intensidad > 0])
```

### 🎯 ¿Por qué armónico?
El promedio armónico penaliza valores extremadamente bajos, siendo útil para detectar anomalías en sistemas eléctricos.

### 📚 Implementación Manual
```python
n = len(intensidad)
suma_reciprocos = sum(1/x for x in intensidad if x > 0)
promedio_armonico = n / suma_reciprocos
```

---

## 🧩 MÓDULO 3: Estabilidad Multi-Percentil

**Complejidad:** ⭐⭐⭐⭐

### Desafío ESTADÍSTICO
1. Calcula percentil 90 (P90) y percentil 10 (P10) de `Frecuencia`
2. Calcula el rango inter-percentil: `P90 - P10`
3. Regla modificada:
   - Rango > **150**: UNSTABLE
   - Rango ≤ **150**: STABLE

### 💡 Código
```python
p90 = df['Frecuencia'].quantile(0.90)
p10 = df['Frecuencia'].quantile(0.10)
rango_percentil = p90 - p10
```

### 🤔 ¿Por qué percentiles y no max-min?
Los percentiles son más robustos contra outliers extremos.

---

## 🧩 MÓDULO 4: Cable por Mediana de Energía

**Complejidad:** ⭐⭐⭐

### Desafío
1. Agrupa por `Hex_Cable`
2. Calcula la **mediana** (no suma ni promedio) de `Energia` por cable
3. El cable con mayor mediana es el dominante

### 💡 Razón
La mediana es más robusta que el promedio contra valores atípicos.

```python
medianas = df.groupby('Hex_Cable')['Energia'].median()
cable_dom = medianas.idxmax()
```

---

## 🧩 MÓDULO 5: Agentes en Zona de Riesgo Extremo

**Complejidad:** ⭐⭐⭐⭐

### Desafío TRIPLE CONDICIÓN
Cuenta agentes únicos que cumplan **TODAS** estas condiciones:
1. `Energia > 55` (umbral más alto que B-02)
2. `Nivel_Amenaza > mediana_amenaza` (amenaza sobre la mediana de B-03)
3. `Estado == 'Activo'` o `Estado == 'Verificado'`

### 💡 Implementación
```python
mediana_amenaza = df['Nivel_Amenaza'].median()
df_extremo = df[
    (df['Energia'] > 55) &
    (df['Nivel_Amenaza'] > mediana_amenaza) &
    (df['Estado'].isin(['Activo', 'Verificado']))
]
num_agentes = df_extremo['Agente'].nunique()
```

### 🎯 Análisis
¿Qué porcentaje de los registros totales cumplen estas condiciones?

---

## 🧩 MÓDULO 6: Sensor por Entropía

**Complejidad:** ⭐⭐⭐⭐⭐

### Desafío AVANZADO
No uses moda simple. Encuentra el sensor más "significativo":

1. Calcula la distribución de frecuencias de sensores
2. Identifica sensores que aparecen en al menos el **10%** de registros
3. De esos, toma el sensor con **ID más alto**
4. Invierte sus dígitos

### 💡 Código
```python
frecuencias = df['Sensor_ID'].value_counts()
porcentajes = frecuencias / len(df) * 100

# Sensores significativos (>=10%)
sensores_sign = frecuencias[porcentajes >= 10]

# ID más alto entre los significativos
sensor_seleccionado = sensores_sign.index.max()
sensor_invertido = int(str(sensor_seleccionado)[::-1])
```

### 🤔 Justificación
Sensores raros pueden ser ruido. Queremos sensores relevantes pero preferimos IDs altos (más recientes).

---

## 🧩 MÓDULO 7: Desviación Temporal Robusta (MAD)

**Complejidad:** ⭐⭐⭐⭐⭐

### Desafío ESTADÍSTICO AVANZADO
No uses desviación estándar. Usa **MAD (Median Absolute Deviation)**:

$$MAD = median(|x_i - median(x)|)$$

1. Convierte timestamps a segundos
2. Calcula la mediana de los timestamps
3. Calcula las desviaciones absolutas respecto a la mediana
4. La MAD es la mediana de esas desviaciones
5. Convierte a MM:SS

### 💡 Implementación
```python
ts_segundos = df['Timestamp'].apply(lambda x: x.timestamp())
mediana_ts = ts_segundos.median()
desviaciones_abs = abs(ts_segundos - mediana_ts)
mad = desviaciones_abs.median()

# Convertir a MM:SS
minutos = int(mad // 60)
segundos = int(mad % 60)
codigo = f"{minutos:02d}:{segundos:02d}"
```

### 📊 Ventaja de MAD
MAD es extremadamente robusta contra outliers temporales.

---

## 🧩 MÓDULO 8: Ciudad por Índice de Concentración

**Complejidad:** ⭐⭐⭐⭐

### Desafío COMPLEJO
1. Calcula el **Índice de Herfindahl** (concentración) para ciudades:
   $$H = \sum_{i=1}^{n} p_i^2$$
   donde $p_i$ es la proporción de cada ciudad

2. Si H > 0.25 (alta concentración): usa la ciudad más frecuente
3. Si H ≤ 0.25 (baja concentración): usa la ciudad con mayor energía promedio

4. Cuenta las letras de la ciudad seleccionada

### 💡 Código Herfindahl
```python
frecuencias = df['Ciudad'].value_counts()
proporciones = frecuencias / len(df)
indice_h = (proporciones ** 2).sum()

if indice_h > 0.25:
    ciudad = frecuencias.idxmax()
else:
    ciudad = df.groupby('Ciudad')['Energia'].mean().idxmax()

num_letras = len(ciudad)
```

### 🎯 Interpretación
- H cerca de 1: una ciudad domina
- H cerca de 0: ciudades distribuidas uniformemente

---

## 🧩 MÓDULO 9: Correlación de Spearman

**Complejidad:** ⭐⭐⭐⭐⭐

### Desafío AVANZADO
No uses correlación de Pearson. Usa **correlación de Spearman** (basada en rangos):

1. Calcula la correlación de Spearman entre `Nivel_Amenaza` y `Energia`
2. Spearman es más robusta ante relaciones no-lineales
3. Aplica la regla del dial (positiva→9, negativa→1)

### 💡 Código
```python
from scipy.stats import spearmanr

correlacion, p_valor = spearmanr(df['Nivel_Amenaza'], df['Energia'])
dial = 9 if correlacion > 0 else 1
```

### 📊 Spearman vs Pearson
```python
pearson = df['Nivel_Amenaza'].corr(df['Energia'])
print(f"Pearson: {pearson:.3f}")
print(f"Spearman: {correlacion:.3f}")
```

¿Por qué pueden diferir?

---

## 🧩 MÓDULO 10: Checksum Criptográfico

**Complejidad:** ⭐⭐⭐⭐

### Desafío MODIFICADO
Usa una fórmula más compleja:

$$Checksum = (M1 \times 2 + M5 + M8) \mod 10$$

Nota el **multiplicador 2** en M1 (porque usaste suma ponderada).

### 💡 Código
```python
m1_bits = bin(int(suma_ponderada)).count('1') if suma_ponderada > 50 else int(suma_ponderada)
checksum = (m1_bits * 2 + m5_valor + m8_valor) % 10
```

---

## 🎓 CONCEPTOS ESTADÍSTICOS APLICADOS

| Concepto | Módulo | Razón |
|----------|--------|-------|
| Media armónica | M2 | Penaliza valores bajos |
| Percentiles | M3 | Robustez contra outliers |
| Mediana | M4 | Medida de tendencia central robusta |
| MAD | M7 | Desviación robusta |
| Índice Herfindahl | M8 | Mide concentración |
| Correlación Spearman | M9 | Detecta relaciones monotónicas |

---

## 🔬 PREGUNTAS DE ANÁLISIS PROFUNDO

1. **M2:** ¿Cómo difiere el promedio armónico del aritmético? ¿Cuál es mayor?
2. **M3:** ¿Cuántos valores quedan fuera del rango P10-P90?
3. **M5:** ¿Qué porcentaje de agentes están en riesgo extremo?
4. **M7:** ¿Cómo se compara MAD vs desviación estándar?
5. **M8:** ¿El índice H indica concentración alta o baja?
6. **M9:** ¿Hay diferencia significativa entre Pearson y Spearman?

---

## 🎯 CHECKLIST EXPERTO

- [ ] Usaste suma **ponderada** en M1
- [ ] Aplicaste promedio **armónico** en M2
- [ ] Usaste **percentiles** en M3
- [ ] Calculaste **mediana** por cable en M4
- [ ] Triple filtro en M5
- [ ] Entropía de sensores en M6
- [ ] MAD (no STD) en M7
- [ ] Índice Herfindahl en M8
- [ ] Spearman (no Pearson) en M9
- [ ] Checksum con multiplicador en M10

---

## 🚀 DESACTIVACIÓN

1. `index.html`
2. Contraseña: **B-03**
3. ⏱️ **20:00 minutos**

---

**Esta bomba requiere maestría estadística. ¡Confía en tu análisis! 📊🔬💣**

---

*Clasificación: ULTRA SECRETO | Operación Ícaro | Bomba B-03*
