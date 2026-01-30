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

## 🧩 MÓDULO 4: Panel de Cables

El sistema de seguridad tiene tres cables que controlan diferentes funciones. Debes identificar cuál cable tiene la mayor energía acumulada y cortarlo para desactivar la bomba.

**Cómo resolver:**
- En la interfaz verás 3 cables: ROJO (R), VERDE (G), AZUL (B)
- Haz clic en el cable con mayor energía acumulada
- Para B-01, la respuesta correcta es: **VERDE (G)**

---

## 🧩 MÓDULO 5: Panel de Agentes

Hay múltiples agentes operando en el sitio. Solo aquellos en zonas de alto riesgo (Energía > 50) tienen acceso a sistemas críticos. El módulo necesita contar cuántos agentes **únicos** están en esas zonas de alto riesgo.

**Cómo resolver:**
- Filtra registros donde Energía > 50
- Cuenta los agentes únicos en esa zona
- Normaliza el resultado a un rango de 0 a 3
- Para B-01, la respuesta correcta es: **1**

---

## 🧩 MÓDULO 6: Teclado Inverso

Un sensor específico es el más frecuente en los datos. Su código numérico debe ser invertido para acceder al subsistema de seguridad.

**Cómo resolver:**
1. Encuentra el sensor más usado
2. Invierte el orden de sus dígitos
3. Ingresa el código invertido
- Para B-01, la respuesta correcta es: **101**

---

## 🧩 MÓDULO 7: Sincronización Temporal

Los eventos ocurren en diferentes momentos. El sistema necesita cuantificar cuánta variabilidad existe en los tiempos entre mediciones.

**Cómo resolver:**
1. Extrae todos los timestamps de los registros de B-01
2. Calcula la desviación estándar de esos tiempos
3. Convierte el resultado a formato MM:SS (minutos y segundos)
- Para B-01, la respuesta correcta es: **00:59**

---

## 🧩 MÓDULO 8: Ruta Geográfica

La bomba B-01 está desplegada en múltiples provincias. El sistema debe conocer el alcance geográfico exacto.

**Cómo resolver:**
1. Identifica todas las provincias únicas en los registros de B-01
2. Selecciona las provincias en la interfaz
- Para B-01, las provincias correctas son: **Cotopaxi, Imbabura, Manabí, Pichincha**

---

## 🧩 MÓDULO 9: Indicador de Dial

Un dial físico debe posicionarse según la relación entre amenaza y energía. La correlación entre estas variables determina hacia dónde apunta el dial.

**Cómo resolver:**
1. Calcula la correlación de Pearson entre Nivel_Amenaza y Energia
2. Según el signo:
   - Correlación POSITIVA → Dial en posición **9**
   - Correlación NEGATIVA → Dial en posición **1**
- Para B-01, la respuesta correcta es: **9** (correlación positiva)

---

## 🧩 MÓDULO 10: Verificación Integrada

Este es el módulo final que integra información de múltiples módulos anteriores. Requiere 5 códigos derivados del análisis completo.

**Cómo resolver - Ingresa los 5 códigos:**
1. **Code1:** 43 (Derivado de M1 y M3)
2. **Code2:** 38 (Derivado de M2 y M5)
3. **Code3:** G36 (Cable G de M4 + Sensor de M6)
4. **Code4:** 394 (Derivado de M7 y M8)
5. **Code5:** 30 (Derivado de M9)

**Para B-01, los códigos correctos son:**
- Code1: **43**
- Code2: **38**
- Code3: **G36**
- Code4: **394**
- Code5: **30**

---

---

## 🚀 DESACTIVAR

1. Abre `index.html`.
2. Contraseña: **B-01**.
3. Ingresa los 10 resultados.

---

*Clasificación: CONFIDENCIAL | Operación Equipo Dinamita | Bomba B-01*
