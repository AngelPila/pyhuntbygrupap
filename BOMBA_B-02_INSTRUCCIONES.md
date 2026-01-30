# 💣 BOMBA B-02: OPERACIÓN FÉNIX
## Nivel de Amenaza: ⭐⭐⭐☆☆ (Intermedio)

```
╔════════════════════════════════════════════════════════════╗
║  OPERACIÓN EQUIPO DINAMITA - CLASIFICADO                  ║
║  Bomba: B-02 "FÉNIX"                                       ║
║  Estado: ARMADA - PRIORIDAD ALTA                           ║
║  Tiempo límite: 20:00 minutos                              ║
╚════════════════════════════════════════════════════════════╝
```

---

## 📋 BRIEFING DE INTELIGENCIA

La **Bomba B-02 "Fénix"** es significativamente más compleja que B-01. Incluye **trampas de datos** y requiere análisis más sofisticado. Algunos módulos tienen condiciones especiales que debes descubrir.

**⚠️ ALERTA:** Esta bomba contiene datos anómalos mezclados con los datos de otras bombas. El filtrado básico no será suficiente en todos los casos.

---

## 🔍 PREPARACIÓN AVANZADA

```python
import pandas as pd
import numpy as np

# Cargar y filtrar
df_completo = pd.read_csv('dataset_bombas_completo.csv')
df = df_completo[df_completo['ID_Bomba'] == 'B-02'].copy()

# Convertir timestamp INMEDIATAMENTE
df['Timestamp'] = pd.to_datetime(df['Timestamp'])

print(f"Registros B-02: {len(df)}")
print(f"Rango de fechas: {df['Timestamp'].min()} a {df['Timestamp'].max()}")
```

---

## 🧩 MÓDULO 1: Agregación Vectorial

**Complejidad:** Media

### Desafío
El nivel de amenaza de B-02 es más volátil. Debes:
1. Calcular la suma total de `Nivel_Amenaza`
2. Aplicar la regla binaria (igual que B-01)

### 🤔 Pregunta Crítica
¿Cómo se compara la amenaza promedio de B-02 con B-01? ¿Qué bomba es más peligrosa en promedio?

### Análisis Adicional
Calcula también:
- Media de amenaza
- Mediana de amenaza
- Desviación estándar

¿Por qué estos valores importan en el análisis de riesgo?

---

## 🧩 MÓDULO 2: Energía Ponderada con Filtro

**Complejidad:** Alta

### Desafío ESPECIAL
Esta bomba tiene un **filtro de prioridad**:
1. **PRIMERO:** Filtra solo registros donde `Prioridad == 'Alta'` o `Prioridad == 'Crítica'`
2. Sobre ese subconjunto, calcula `(Energia × Frecuencia).mean()`
3. Aplica la fórmula estándar (últimos 2 dígitos + 2026)

### ⚠️ Trampa Común
Si calculas el promedio ponderado de TODOS los datos de B-02, obtendrás un resultado **incorrecto**.

### 💡 Pista
```python
# Doble filtrado
df_critico = df[df['Prioridad'].isin(['Alta', 'Crítica'])]
promedio = (df_critico['Energia'] * df_critico['Frecuencia']).mean()
```

### 🎯 Reflexión
¿Por qué solo consideramos registros de alta prioridad para este cálculo?

---

## 🧩 MÓDULO 3: Estabilidad por Sector

**Complejidad:** Media-Alta

### Desafío Modificado
No analices TODA la frecuencia de B-02. En su lugar:
1. Identifica el sector con **mayor número de registros** en la columna `Sector`
2. Filtra solo ese sector
3. Calcula el rango de frecuencias **solo de ese sector**
4. Aplica la regla: >200 = UNSTABLE, ≤200 = STABLE

### 🤔 Pregunta Analítica
¿Por qué analizamos solo el sector dominante? ¿Qué información perdemos al ignorar otros sectores?

### 📊 Visualización Sugerida
```python
df['Sector'].value_counts().plot(kind='bar')
```

---

## 🧩 MÓDULO 4: Cable Dominante Excluyente

**Complejidad:** Media

### Desafío
Igual que B-01, pero con una **consideración adicional**:
1. Agrupa por `Hex_Cable` y suma `Energia`
2. Identifica el cable dominante

### 💡 Análisis Profundo
Calcula el **porcentaje** de energía que representa el cable dominante del total. Si es menos del 40%, ¿qué significaría esto para la estabilidad?

---

## 🧩 MÓDULO 5: Agentes Verificados de Alto Riesgo

**Complejidad:** Alta

### Desafío TRIPLE FILTRO
1. Filtra `Energia > 50`
2. Filtra solo registros donde `Estado == 'Verificado'` o `Estado == 'Activo'`
3. Cuenta agentes **únicos** en ese subconjunto

### ⚠️ Advertencia
Este es un filtro compuesto. Debes usar operadores lógicos:
```python
df[(df['Energia'] > 50) & (df['Estado'].isin(['Verificado', 'Activo']))]
```

### 🎯 Pregunta
¿Cuántos agentes hay en total con E>50 (sin filtro de estado)? ¿Cuál es la diferencia?

---

## 🧩 MÓDULO 6: Sensor Modal Secundario

**Complejidad:** Media-Alta

### Desafío TWIST
No uses el sensor más frecuente. Usa el **segundo** más frecuente:
1. Calcula `value_counts()` de `Sensor_ID`
2. Toma el sensor en la **segunda posición**
3. Invierte sus dígitos

### 💡 Método
```python
sensores_ranking = df['Sensor_ID'].value_counts()
segundo_sensor = sensores_ranking.index[1]  # Posición 1 = segundo lugar
```

### 🤔 Reflexión
¿Por qué el segundo sensor es relevante? ¿Qué podría indicar sobre redundancia en el sistema?

---

## 🧩 MÓDULO 7: Desviación Temporal por Estado

**Complejidad:** Alta

### Desafío AVANZADO
1. Filtra solo registros donde `Estado == 'Activo'`
2. De esos, calcula la desviación estándar de timestamps
3. Convierte a formato MM:SS

### 🎯 Justificación
Solo los sensores activos están transmitiendo en tiempo real. Los inactivos pueden tener timestamps antiguos que distorsionan el análisis.

### 📊 Comparación
Calcula también la STD de TODOS los registros. ¿Cuál es mayor? ¿Por qué?

---

## 🧩 MÓDULO 8: Densidad Geográfica Ponderada

**Complejidad:** Alta

### Desafío COMPLEJO
No solo cuentes la ciudad más frecuente. Encuentra la ciudad que tiene:
1. Mayor frecuencia de apariciones
2. **Y además** tiene promedio de `Energia > 45`

Si ninguna cumple ambas condiciones, usa solo la más frecuente.

### 💡 Enfoque
```python
# Agrupar por ciudad y calcular métricas
ciudades_analisis = df.groupby('Ciudad').agg({
    'Ciudad': 'count',  # Frecuencia
    'Energia': 'mean'   # Promedio
}).rename(columns={'Ciudad': 'Frecuencia'})

# Filtrar y analizar
```

### 🤔 Pregunta
¿Por qué importa la energía promedio además de la frecuencia?

---

## 🧩 MÓDULO 9: Correlación Robusta

**Complejidad:** Alta

### Desafío ESTADÍSTICO
B-02 puede tener **outliers** que distorsionan la correlación. Tu misión:
1. Identifica valores extremos de `Energia` usando el método IQR:
   - Q1 = percentil 25
   - Q3 = percentil 75
   - IQR = Q3 - Q1
   - Outliers: valores < Q1 - 1.5×IQR o > Q3 + 1.5×IQR
2. Elimina outliers de energía
3. Calcula correlación entre `Nivel_Amenaza` y `Energia` (sin outliers)
4. Determina dial: positiva→9, negativa→1

### 💡 Código IQR
```python
Q1 = df['Energia'].quantile(0.25)
Q3 = df['Energia'].quantile(0.75)
IQR = Q3 - Q1
df_limpio = df[(df['Energia'] >= Q1 - 1.5*IQR) & (df['Energia'] <= Q3 + 1.5*IQR)]
```

### 🎯 Comparación
¿Cómo cambia la correlación con vs sin outliers?

---

## 🧩 MÓDULO 10: Checksum Modificado

**Complejidad:** Media

### Desafío
Igual que B-01, pero usando:
1. Bits activos de M1
2. Agentes de M5 (con filtros aplicados)
3. Letras de M8 (ciudad con condiciones)
4. Fórmula: `(M1 + M5 + M8) % 10`

### ⚠️ Validación Crítica
Si tu checksum no coincide con los valores esperados del juego, revisa especialmente M5 y M8, que tienen filtros complejos.

---

## 📊 ANÁLISIS COMPARATIVO FINAL

Antes de proceder, responde:

1. **Complejidad:** ¿En cuántos módulos tuviste que aplicar filtros dobles o triples?
2. **Outliers:** ¿Cuántos registros eliminaste en M9? ¿Es significativo?
3. **Prioridades:** ¿Qué porcentaje de B-02 tiene prioridad Alta/Crítica?
4. **Sectores:** ¿Hay un sector dominante claro o están balanceados?

---

## 🎯 LISTA DE VERIFICACIÓN AVANZADA

- [ ] Aplicaste TODOS los filtros especiales
- [ ] Usaste el segundo sensor más frecuente (no el primero)
- [ ] Filtraste por prioridad en M2
- [ ] Filtraste por sector en M3
- [ ] Eliminaste outliers en M9
- [ ] Verificaste tipos de datos (datetime para timestamps)

---

## 🚀 DESACTIVACIÓN

1. Abre `index.html`
2. Contraseña: **B-02**
3. Ingresa tus respuestas calculadas
4. **Tiempo límite: 20:00**

---

## 💡 LECCIONES CLAVE DE B-02

- **Filtrado condicional:** No todos los datos son igualmente relevantes
- **Análisis por segmentos:** A veces debes analizar subgrupos
- **Outliers:** Datos extremos pueden distorsionar resultados
- **Validación múltiple:** Verifica cada paso con print statements

---

**¡La dificultad ha aumentado, Agente. Piensa antes de actuar! 🧠💣**

---

*Clasificación: ALTO SECRETO | Operación Fénix | Bomba B-02*
