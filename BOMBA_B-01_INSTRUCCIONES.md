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

Objetivo: desactivar la **Bomba B-01**. Hay **10 módulos** y se resuelven en cualquier orden.

**Dataset:** `dataset_bombas_completo.csv` (filtra solo `ID_Bomba == 'B-01'`).

---

## 📊 PASO 0: Preparación

Necesitas cargar el dataset completo y filtrar solo los datos de la Bomba B-01. Este es un paso esencial para que todos tus análisis posteriores sean correctos.

**Nota:** asegúrate de trabajar con una copia de los datos filtrados para evitar problemas al modificar columnas.

---

## 🧩 MÓDULO 1: Sistema de Interruptores Binarios

Este módulo controla un panel de 4 interruptores. La amenaza acumulada en B-01 determina cuál debe ser la configuración del sistema. 

**Lógica del módulo:**
- Si el nivel total de amenaza es **mayor a 50**: el sistema entra en modo crítico y necesitas reducir ese número usando operación módulo 15, luego convertir el resultado a binario.
- Si el nivel total de amenaza es **50 o menor**: conviertes directamente ese número a binario.

En ambos casos, el resultado final debe ser un código de exactamente **4 dígitos binarios**.

**Ayudas técnicas:**
- Para conversión a binario: usa `bin()` y `zfill(4)` para asegurar exactamente 4 dígitos
- Operación módulo: `valor % 15` genera un número entre 0 y 14

---

## 🧩 MÓDULO 2: Cálculo de Energía Ponderada

Este display de 4 dígitos mide la "intensidad energética" del sistema. No es simplemente el promedio de energía, sino cómo interactúan la energía y la frecuencia juntas. El sistema genera un valor potencialmente grande (porque multiplica dos variables), y luego lo normaliza a un rango manejable que el hardware puede procesar (1990–2030).

**El proceso:**
1. Considera cómo la energía y la frecuencia se multiplican e interactúan en cada registro
2. Calcula el promedio de esa interacción
3. Usa la operación módulo 40 para "comprimir" el resultado a un rango pequeño (0–39)
4. Suma 1990 para desplazarlo al rango final donde cabe en el display

**Ayuda técnica:**
- El módulo 40 genera valores entre 0 y 39
- Después sumas 1990 para obtener valores entre 1990 y 2029

---

## 🧩 MÓDULO 3: Estabilidad de Frecuencia

La bomba opera en un rango de frecuencias. Cuando esa variación es pequeña, el sistema está bajo control y funciona de forma estable. Si la variación es muy grande, indica que hay fluctuaciones peligrosas. El tipo de respuesta (STABLE o UNSTABLE) determina cómo el sistema puede operar.

**El proceso:**
1. Analiza la variabilidad de las frecuencias registradas
2. Mide cuánto varían entre sus valores extremos
3. Compara esa variación con un umbral crítico

**Ayuda técnica:**
- Umbral crítico: 200 Hz
- Si variación > 200 → UNSTABLE; si ≤ 200 → STABLE

---

## 🧩 MÓDULO 4: Cable Dominante

Tres cables conducen energía hacia el detonador. Uno de ellos concentra la mayor parte de la carga energética y es el más crítico. El juego necesita saber cuál cable domina el flujo energético total.

**El proceso:**
1. Agrupa todos los registros por el tipo de cable
2. Suma la energía total acumulada por cada cable
3. Identifica cuál cable tiene la mayor energía acumulada

**Ayuda técnica:**
- Los cables se identifican como: R (Rojo), G (Verde), B (Azul)
- El resultado es una única letra

---

## 🧩 MÓDULO 5: Agentes de Alto Riesgo

Múltiples agentes operan en el sitio. Solo algunos están en zonas donde la energía es suficientemente peligrosa. El módulo necesita saber cuántos agentes **distintos** están expuestos a ese peligro. Esto es importante porque distingue entre pocos agentes con muchos registros versus muchos agentes distintos en riesgo.

**El proceso:**
1. Identifica cuál es la zona de alto riesgo según los niveles de energía
2. Filtra los registros que están en esa zona
3. Cuenta cuántos agentes únicos operan en esa zona filtrada
4. Normaliza el resultado a un rango específico

**Ayuda técnica:**
- El resultado final debe estar entre 0 y 3

---

## 🧩 MÓDULO 6: Sensor Invertido

Un sensor es utilizado mucho más que los demás. Este sensor tiene un código que necesita ser invertido para acceder a un subsistema oculto. El reflejo de ese código es la clave de acceso.

**El proceso:**
1. Encuentra cuál sensor es el más usado
2. Toma el identificador numérico de ese sensor
3. Invierte el orden de sus dígitos

**Ayuda técnica:**
- La inversión crea un nuevo número: 301 → 103, 101 → 101 (palíndromo)
- Algunos números se leen igual al revés

---

## 🧩 MÓDULO 7: Desviación Temporal

Los eventos de la bomba no ocurren a intervalos perfectos. Hay variaciones en los tiempos entre mediciones. El sistema necesita cuantificar cuánta variación temporal existe en todo el conjunto de eventos. Esta variabilidad indica cuán dispersos están los eventos en el tiempo.

**El proceso:**
1. Convierte todos los timestamps a un formato que permita cálculos numéricos
2. Calcula la variabilidad estadística de esos tiempos
3. Convierte el resultado a un formato de tiempo legible (minutos y segundos)

**Ayuda técnica:**
- El resultado final debe expresarse como MM:SS con 2 dígitos cada uno (ej. 00:59)

---

## 🧩 MÓDULO 8: Densidad Geográfica

La bomba B-01 está desplegada en múltiples provincias. Cada provincia es un sector geográfico distinto. El número de provincias involucradas refleja cuán disperso está el sistema geográficamente.

**El proceso:**
1. Identifica todas las provincias donde hay registros de B-01
2. Cuenta cuántas provincias **distintas** hay
3. Ese número es la respuesta

**Nota importante:**
- Cuenta provincias diferentes, no el total de registros

---

## 🧩 MÓDULO 9: Correlación Amenaza-Energía

En sistemas complejos, las variables a menudo se relacionan entre sí. Existe una relación entre el nivel de amenaza de la bomba y la energía que está usando. Si ambas suben y bajan juntas, la relación es directa. Si una crece mientras la otra decrece, la relación es inversa. El dial necesita saber qué tipo de relación existe.

**El proceso:**
1. Analiza cómo se relacionan amenaza y energía en los datos
2. Determina si la relación es directa (positiva) o inversa (negativa)
3. Usa esa información para establecer la posición del dial

**Ayuda técnica:**
- Solo importa el tipo de relación (signo), no la fuerza de la correlación
- Relación positiva → posición 9; negativa → posición 1

---

## 🧩 MÓDULO 10: Checksum de Integridad

Este es el módulo de validación final. Combina información de tres módulos anteriores para verificar que todo tu análisis es coherente. Si cometiste un error en alguno de esos módulos, el checksum lo detectará.

**El proceso:**
1. Extrae valores específicos de tres módulos anteriores
2. Combina esos valores según una fórmula
3. Normaliza el resultado a un dígito final (0–9)

**Lo que necesitas saber:**
- El checksum es como una firma digital que confirma consistencia
- Si algo está mal en módulos previos, el checksum cambiará

---

## 🚀 DESACTIVAR

1. Abre `index.html`.
2. Contraseña: **B-01**.
3. Ingresa los 10 resultados.

---

*Clasificación: CONFIDENCIAL | Operación Equipo Dinamita | Bomba B-01*
