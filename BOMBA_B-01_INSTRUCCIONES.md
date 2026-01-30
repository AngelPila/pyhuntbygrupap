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

Este módulo controla un panel de 4 interruptores. El nivel de amenaza acumulada determina la configuración binaria del sistema.

**El proceso:**
1. Suma todos los niveles de amenaza de B-01
2. Aplica módulo 16 para obtener un valor entre 0 y 15
3. Convierte ese valor a código binario de 4 dígitos

**Ayuda técnica:**
- La operación `valor % 16` genera números entre 0 y 15
- Para convertir a binario de 4 dígitos usa `bin()` y `zfill(4)`

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

## 🧩 MÓDULO 3: Preguntas Teóricas sobre Python

Este módulo evalúa tus conocimientos fundamentales sobre el lenguaje Python. Necesitarás responder correctamente 3 preguntas de opción múltiple que cubren conceptos básicos como tipos de datos, funciones incorporadas y convenciones de sintaxis.

**El proceso:**
1. Responde sobre clasificación de tipos de datos en Python
2. Predice el resultado de funciones incorporadas
3. Reconoce la sintaxis correcta para comentarios

**Ayuda técnica:**
- Pregunta 1: Considera cómo Python clasifica valores entre comillas
- Pregunta 2: Piensa en qué devuelve la función len() cuando se aplica a una lista
- Pregunta 3: Recuerda que Python usa un símbolo específico para iniciar comentarios

---

## 🧩 MÓDULO 4: Identificación Crítica

El sistema necesita identificar un elemento crítico de los datos. Este elemento aparece en los registros y su identificación es fundamental para el análisis.

**El proceso:**
1. Analiza los registros de B-01
2. Identifica el elemento más relevante en un campo específico
3. Proporciona su identificador único

**Ayuda técnica:**
- El resultado es una única letra o código
- Busca en la columna correspondiente qué valor dominan los registros

---

## 🧩 MÓDULO 5: Agentes de Alto Riesgo

Múltiples agentes operan en el sitio. Solo algunos están en zonas donde la energía es suficientemente peligrosa. El módulo necesita saber cuántos agentes **distintos** están expuestos a ese peligro.

**El proceso:**
1. Identifica la zona de alto riesgo según los niveles de energía
2. Filtra los registros que están en esa zona
3. Cuenta cuántos agentes únicos operan en esa zona filtrada
4. Normaliza el resultado a un rango de 0 a 3

**Nota:**
- Debes escribir solo el resultado final normalizado

---

## 🧩 MÓDULO 6: Sensor Invertido

Un sensor es utilizado mucho más que los demás. Este sensor tiene un código que necesita ser invertido para acceder a un subsistema oculto. El reflejo de ese código es la clave de acceso.

**El proceso:**
1. Encuentra cuál sensor es el más usado
2. Toma el identificador numérico de ese sensor
3. Invierte el orden de sus dígitos

**Ayuda técnica:**
- La inversión crea un nuevo número (ej: 301 → 103)
- Algunos números son palíndromos

---

## 🧩 MÓDULO 7: Desviación Temporal

Los eventos de la bomba no ocurren a intervalos perfectos. Hay variaciones en los tiempos entre mediciones. El sistema necesita cuantificar cuánta variación temporal existe en todo el conjunto de eventos.

**El proceso:**
1. Convierte todos los timestamps a un formato que permita cálculos numéricos
2. Calcula la variabilidad estadística de esos tiempos
3. Convierte el resultado a un formato de tiempo legible (minutos y segundos)

**Ayuda técnica:**
- El resultado final debe expresarse como MM:SS con 2 dígitos cada uno

---

## 🧩 MÓDULO 8: Densidad Geográfica

La bomba B-01 está desplegada en múltiples provincias. El sistema necesita conocer exactamente cuáles provincias están involucradas para entender el alcance geográfico de la operación.

**El proceso:**
1. Identifica todas las provincias únicas donde hay registros de B-01
2. Extrae la lista completa de esas provincias
3. Ordénalas alfabéticamente
4. Ingresa la lista en el formato requerido por el sistema (lista JSON o texto separado por comas)

**Ayuda técnica:**
- Busca valores únicos en la columna `Provincia`
- El resultado es una lista de strings
- Mantén los nombres exactos de las provincias del dataset

---

## 🧩 MÓDULO 9: Correlación Amenaza-Energía

En sistemas complejos, las variables a menudo se relacionan entre sí. Existe una relación entre el nivel de amenaza de la bomba y la energía que está usando. El dial físico necesita saber qué tipo de relación existe para establecer el equilibrio correcto.

**El proceso:**
1. Analiza cómo se relacionan amenaza y energía en los datos de B-01
2. Calcula la correlación de Pearson entre estas dos variables
3. Según el signo de la correlación, posiciona el dial

**Interfaz del juego - Cómo ingresar:**
- El dial en la interfaz tiene dos posiciones: **1** (izquierda) y **9** (derecha)
- Si la correlación es **positiva** (ambas variables crecen juntas) → coloca el dial en **9**
- Si la correlación es **negativa** (una crece mientras la otra decrece) → coloca el dial en **1**
- Usa el mouse para hacer clic en la posición deseada del dial

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
