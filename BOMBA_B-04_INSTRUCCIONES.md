# 💣 BOMBA B-04: PROYECTO MEDUSA
## Nivel de Amenaza: ⭐⭐⭐☆☆ (Intermedio-Avanzado)

```
╔════════════════════════════════════════════════════════════╗
║  OPERACIÓN EQUIPO DINAMITA - CÓDIGO NARANJA               ║
║  Bomba: B-04 "MEDUSA"                                      ║
║  Estado: REQUIERE ANÁLISIS CUIDADOSO                       ║
║  Tiempo límite: 20:00 minutos                              ║
╚════════════════════════════════════════════════════════════╝
```

---

## ⚠️ BRIEFING

**B-04 "Medusa"** requiere que **pienses críticamente** sobre los datos. Las instrucciones son menos directivas - deberás **decidir qué hacer** basándote en el contexto y el sentido común.

**Técnicas:** Solo Pandas básico, pero con razonamiento más profundo.

---

## 🧩 MÓDULO 1: Análisis de Riesgo Elevado

**Lo que debes descubrir:** No todos los registros tienen el mismo nivel de peligro.

### Pistas
- Piensa: ¿Qué hace que un registro sea "de alto riesgo"?
- Considera tanto amenaza ALTA como energía BAJA (ambas son peligrosas)
- Los sectores Norte y Sur son más críticos que el Centro
- Necesitas una forma de identificar valores "extremos"

### Preguntas para guiarte
1. ¿Cómo identificarías los registros más peligrosos usando percentiles?
2. ¿Cómo combinarías múltiples condiciones (amenaza alta O energía baja)?
3. ¿Cómo darías más peso a ciertos sectores en tu cálculo?

### 🎯 Objetivo final
Calcular una suma de `Nivel_Amenaza`, pero solo de registros "críticos" y considerando la importancia del sector.

---

## 🧩 MÓDULO 2: Intensidad de Registros Activos

**Lo que debes descubrir:** Solo los registros "activos" transmiten datos confiables.

### Pistas
- Hay una columna que indica el estado de cada registro
- Los registros "Inactivos" o "Pendientes" pueden tener datos desactualizados
- La intensidad sigue siendo `Energia × Frecuencia`
- Pero... ¿de qué registros debes calcular el promedio?

### Preguntas para guiarte
1. ¿Qué valores tiene la columna `Estado`?
2. ¿Cuáles estados indican que los datos son confiables?
3. ¿Cómo filtrarías para quedarte solo con esos registros?
4. Una vez filtrado, ¿cómo calculas el promedio de intensidad?

### 🎯 Objetivo final
Promedio de `(Energia × Frecuencia)` solo de registros confiables. Últimos 2 dígitos + 2026.

---

## 🧩 MÓDULO 3: Variabilidad Relativa

**Lo que debes descubrir:** La estabilidad no es solo cuánto varían los datos, sino cuánto varían en relación a su promedio.

### Pistas
- Un rango de 100 es mucho si el promedio es 50, pero poco si el promedio es 1000
- Necesitas una medida de variabilidad "relativa" o "porcentual"
- Piensa en términos de: ¿qué % del promedio representa la variación?

### Preguntas para guiarte
1. ¿Cómo calculas cuánto varían los datos? (hay una función de Pandas para esto)
2. ¿Cómo calculas el promedio?
3. ¿Cómo expresas la variación como porcentaje del promedio?
4. Si ese porcentaje es mayor al 25%, ¿qué significa sobre la estabilidad?

### 🎯 Objetivo final
Determinar si el sistema es STABLE o UNSTABLE basándote en variabilidad relativa (no absoluta).

---

## 🧩 MÓDULO 4: Cable por Clustering K-Means

**Complejidad:** ⭐⭐⭐⭐⭐

### Desafío MACHINE LEARNING
1. Aplica **K-Means clen Registros de Alta Energía

**Lo que debes descubrir:** No todos los cables tienen la misma importancia. Los de alta energía son más peligrosos.

### Pistas
- Define qué significa "alta energía" (piensa en percentiles o promedios)
- Una vez identificados esos registros, ¿qué cable aparece más?
- O mejor: ¿qué cable tiene la mayor suma de energía en esa zona de peligro?

### Preguntas para guiarte
1. ¿Cómo separas registros de "alta energía" del resto?
2. ¿Usarías un valor fijo o algo relativo (como percentil 75)?
3. De esos registros filtrados, ¿cómo agrupas por cable?
4. ¿Sumas o promedias la energía por cable?

### 🎯 Objetivo final
Identificar el cable dominante, pero solo considerando la zona de alto riesgo
**Complejidad:** ⭐⭐⭐⭐⭐

### Desafío
Identifica agentes en "zona anómala":
1. Calcula Z-Score de `Energia`: $z = \frac{x - \mu}{\sigma}$
2. Agentes anómalos: `|z| > 1.5` (energía muy alta o muy baja)
3. Cuenta agentes únicos anómalos

### 💡 CódigoFuera de lo Normal

**Lo que debes descubrir:** Algunos agentes operan con valores de energía "raros" - ni muy normales ni extremos.

### Pistas
- "Normal" significa cerca del promedio
- "Raro" significa alejado del promedio, pero ¿cómo medir "alejado"?
- Piensa en desviaciones estándar: ¿cuántas "desviaciones" debe estar un valor para ser raro?
- Pista adicional: valores que estén a más de 1.5 desviaciones del promedio

### Preguntas para guiarte
1. ¿Cuál es el promedio de energía?
2. ¿Cuál es la desviación estándar?
3. ¿Cómo identificas valores que están muy por encima O muy por debajo?
4. De esos registros "raros", ¿cuántos agentes únicos hay?

### Análisis manual
Puedes crear una columna que calcule: `|Energia - promedio| / desviacion_std`
Si ese valor es > 1.5, es "raro".

### 🎯 Objetivo final
Contar agentes únicos que tienen valores de energía anómalos.

---

## 🧩 MÓDULO 6: Ciudad con Mayor Concentración de Problemas

**Lo que debes descubrir:** Algunas ciudades tienen más registros problemáticos que otras.

### Pistas
- Define qué hace que un registro sea "problemático" (nivel de amenaza alto, estado crítico, energía extrema...)
- Agrupa por ciudad y cuenta cuántos registros problemáticos tiene cada una
- La ciudad con más problemas es la más peligrosa

### Preguntas para guiarte
1. ¿Qué criterio usarías para definir "registro crítico"?
2. ¿Es nivel de amenaza > 70? ¿Estado Inactivo? ¿Energía < 30? ¿Una combinación?
3. ¿Cómo agrupas por ciudad?
4. ¿Cuentas registros o sumas algo?

### 🎯 Objetivo final
Identificar la ciudad más peligrosa según tu definición de "crítico". Contar las letras del nombre.

---

## 🧩 MÓDULO 7: Tendencia Temporal Simple

**Lo que debes descubrir:** ¿Los valores de energía aumentan, disminuyen o se mantienen estables con el tiempo?

### Pistas
- Tienes timestamps que indican cuándo se tomó cada medición
- Compara el promedio de energía en la "primera mitad" vs la "segunda mitad" del tiempo
- Si el promedio sube mucho, hay tendencia creciente

### Preguntas para guiarte
1. ¿Cómo ordenas los registros por tiempo?
2. ¿Cómo divides el dataset en dos mitades temporales?
3. ¿Cómo calculas el promedio de energía de cada mitad?
4. ¿La diferencia es significativa (mayor al 10%)?

### 🎯 Objetivo final
Retornar "CRECIENTE" si aumenta >10%, "DECRECIENTE" si baja >10%, "ESTABLE" en otro caso. Formato MM:SS → 03:00 si CRECIENTE, 06:00 si ESTABLE, 09:00 si DECRECIENTE.

---

## 🧩 MÓDULO 8: Relación entre Variables

**Lo que debes descubrir:** ¿Están relacionadas Energía y Frecuencia? ¿Cuándo una sube, la otra también?

### Pistas
- Hay una medida estadística que te dice "qué tan juntas se mueven dos variables"
- Los valores van de -1 (relación inversa) a +1 (relación directa)
- En Pandas hay un método para calcular esto

### Preguntas para guiarte
1. ¿Qué método de Pandas calcula la relación entre dos columnas?
2. ¿Cómo interpretas un valor de 0.8? ¿Y de -0.3? ¿Y de 0.05?
3. ¿Necesitas filtrar datos primero o usar todo el dataset?

### 🎯 Objetivo final
Calcular correlación entre `Energia` y `Frecuencia`. Si es positiva (> 0.2) → dial 9, si es negativa (< -0.2) → dial 1, si es cercana a cero → dial 5.

---

## 🧩 MÓDULO 9: Grupos Naturales en los Datos

**Lo que debes descubrir:** ¿Cuántos "tipos" de registros diferentes existen según sector y prioridad?

### Pistas
- Los registros se pueden agrupar de forma natural por categorías
- Combinar `Sector` y `Prioridad` crea grupos únicos
- ¿Cuántas combinaciones diferentes existen?

### Preguntas para guiarte
1. ¿Cómo agrupas por DOS columnas a la vez?
2. ¿Cómo cuentas cuántos grupos únicos resultan?
3. ¿Algún grupo tiene muy pocos registros (menos de 5)?

### 🎯 Objetivo final
Contar cuántas combinaciones únicas de `Sector` + `Prioridad` existen con al menos 5 registros

# Correlación parcial
correlacion_parcial = pd.Series(amenaza_residual).corr(pd.Series(energia_residual))
dial = 9 if correlacion_parcial > 0 else 1
```

### 🎯 Correlación Parcial
Mide la relación entre dos variables eliminando el efecto de una tercera.

---

## 🧩 MÓDULO 10: Checksum con Hash

**Complejidad:** ⭐⭐⭐⭐⭐

### Desafío CRIPTOGRÁFICO
1. Concatena M1, M5, M8 como string: `f"{m1}{m5}{m8}"`
2. Calcula hash MD5 de ese string
3. Suma los dígitos numéricos del hash
4. Aplica módulo 10

### 💡 Código
```python
import hashlib

# Concatenar valores
cadena = f"{m1_valor}{m5_valor}{m8_valor}"

# Hash MD5
hash_obj = hashlib.md5(cadena.encode())
hash_hex = hash_obj.hexdigest()

# Sumar dígitos
suma_digitos = sum(int(c) for c in hash_hex if c.isdigit())
checksum = suma_digitos % 10
```

---

## 🧩 MÓDULO 10: Registro Más Extremo

**Lo que debes descubrir:** ¿Cuál es el registro más "raro" o extremo del dataset?

### Pistas
- "Extremo" puede significar valores muy altos O muy bajos
- Piensa en múltiples dimensiones: amenaza, energía, frecuencia
- Una forma: crear un "score combinado" sumando las tres variables

### Preguntas para guiarte
1. ¿Cómo combinas tres variables en un solo "índice de rareza"?
2. ¿Deberías normalizar primero (escala 0-1) para que todas tengan el mismo peso?
3. ¿O simplemente sumas amenaza + energía + frecuencia sin normalizar?
4. Una vez tengas el score, ¿cómo encuentras el registro con el valor máximo?

### 🎯 Objetivo final
Retornar el `Sensor_ID` del registro con el mayor score combinado. Invertir los dígitos.

---

## 🎓 TÉCNICAS APLICADAS

| Técnica | Módulo | Complejidad |
|---------|--------|-------------|
| Percentiles + ponderación | M1 | ⭐⭐⭐ |
| Filtros por estado | M2 | ⭐⭐ |
| Coeficiente de variación | M3 | ⭐⭐⭐ |
| Agrupación con percentiles | M4 | ⭐⭐⭐ |
| Detección de outliers (Z-score básico) | M5 | ⭐⭐⭐ |
| Agrupación por categorías | M6 | ⭐⭐ |
| Análisis temporal básico | M7 | ⭐⭐⭐ |
| Correlación | M8 | ⭐⭐ |
| Grupos combinados | M9 | ⭐⭐ |
| Score combinado | M10 | ⭐⭐⭐ |

---

## 📚 LIBRERÍAS NECESARIAS

```bash
pip install pandas numpy
```

---

## 🎯 CHECKLIST MAESTRO

- [ ] Usar percentiles para definir "alto riesgo"
- [ ] Filtrar por estado antes de promediar
- [ ] Entender coeficiente de variación (std/mean)
- [ ] Agrupar por cable y sumar energía
- [ ] Detectar outliers con Z-score manual
- [ ] Definir criterio de "crítico"
- [ ] Analizar tendencias temporales
- [ ] Calcular correlaciones
- [ ] Combinar múltiples agrupaciones
- [ ] Crear scores compuestos

---

## 🚀 DESACTIVACIÓN

Contraseña: **B-04**
⏱️ **20:00**

---

**La inteligencia está en el análisis, no en el código complejo. 📊💡💣**

---

*Clasificación: CONFIDENCIAL | Proyecto Medusa | B-04*
