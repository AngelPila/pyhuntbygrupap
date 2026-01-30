# 🎮 OPERACIÓN EQUIPO DINAMITA
## Escape Room Técnico - Desactivador de Bombas Digital
### Retos Basados en Análisis de Datos con Pandas

Un juego interactivo en tiempo real de desactivación de bombas digitales basado en análisis de datos reales. 10 módulos desafiantes que requieren conocimientos de ciencia de datos y estadística para ser resueltos.

---

## ✨ Características Principales

### 🎯 Mecánicas de Juego
- **7 Bombas Diferentes** (B-01 a B-07) con soluciones basadas en Pandas
- **10 Módulos Desafiantes** usando análisis de datos reales
- **Cronómetro Global** de 20 minutos
- **Sistema de Progreso Visual** en tiempo real
- **Pantallas de Victoria y Detonación** animadas

### 🔐 Módulos de Desactivación (Retos de Ciencia de Datos)

| Módulo | Reto Pandas | Mecánica |
|--------|------------|----------|
| M1 | **Suma Vectorial** | `df.groupby('ID_Bomba')['Nivel_Amenaza'].sum()` → Si > 50 → 1111, sino → binario |
| M2 | **Promedio Ponderado** | `(df['Energia'] * df['Frecuencia']).mean()` → Últimos 2 dígitos + 2026 |
| M3 | **Análisis de Outliers** | `df['Frecuencia'].max() - df['Frecuencia'].min()` → Si > 200 → UNSTABLE |
| M4 | **Dominancia Energética** | `df.groupby('Hex_Cable')['Energia'].sum()` → Identifica cable dominante |
| M5 | **Filtro por Condición** | `df[df['Energia'] > 50]['Agente'].nunique()` → Contar agentes únicos |
| M6 | **Moda de Sensores** | `df['Sensor_ID'].mode()[0]` → Invertir el ID más frecuente |
| M7 | **Delta de Tiempo** | `df['Timestamp'].std()` → Desviación estándar redondeada |
| M8 | **Densidad Geográfica** | `df['Ciudad'].value_counts().idxmax()` → Contar letras de ciudad |
| M9 | **Relación de Variables** | `df['Nivel_Amenaza'].corr(df['Energia'])` → Si > 0 → 9, si < 0 → 1 |
| M10 | **Checksum de Integridad** | Suma de M1 + M5 + M8 (último dígito) |

### 🎨 Diseño Cyberpunk
- Fondo oscuro con grid animado
- Colores neón verde, rojo, azul, amarillo
- Efecto glitch en títulos
- Animaciones de pulso y parpadeo
- Fuente monoespaciada 'Courier New'
- Sombras luminosas y efectos de brillo

---

## 🚀 Instrucciones de Uso

### 1. **Iniciar el Juego**
Abre `index.html` en un navegador web moderno (Chrome, Firefox, Edge, Safari).

```bash
# O ejecuta un servidor local:
python3 -m http.server 8000
# Luego accede a: http://localhost:8000/index.html
```

### 2. **Ingresa una Contraseña**
Usa una de estas 7 contraseñas de bomba válidas:
- **B-01** a **B-07** - Bombas con datos únicos de Pandas

### 3. **Resuelve los Módulos**
- Selecciona un módulo en la barra lateral izquierda
- Analiza el reto de ciencia de datos
- Ingresa la respuesta correcta
- Presiona **VALIDAR** para confirmar
- Los módulos resueltos aparecen en amarillo (★)

### 4. **Contra Reloj**
- El cronómetro corre desde 20:00 minutos
- Si llega a 00:00, la bomba se detona 💣
- El cronómetro se vuelve rojo cuando quedan menos de 60 segundos

### 5. **Victoria**
Si completas los 10 módulos antes de que se acabe el tiempo:
- Verás la pantalla de "¡MISIÓN CUMPLIDA!"
- Se mostrará el tiempo restante
- Se generará un código de victoria único

---

## 📊 Datos de Bombas - Soluciones

Cada bomba tiene datos únicos generados por Pandas con las siguientes características:
- Registros con Nivel_Amenaza, Energia, Frecuencia
- Identificadores de Cable (R/G/B), Agentes, Sensores
- Ciudades y Timestamps variados

### Ejemplo B-01
```
M1: Suma = 127 → Binario 1111
M2: Ponderada = 6546 → Últimos 2 dígitos (46) + 2026 = 2046
M3: Rango Frecuencia = 50 (< 200) → STABLE
M4: Cable dominante = G (Verde)
M5: Agentes con Energía > 50 = 4
M6: Sensor moda 101 → Invertido 101
M7: STD = 00:52
M8: Ciudad = Bogotá (7 letras) → Seleccionar 7
M9: Correlación positiva → Dial a 9
M10: Checksum = (15 + 4 + 7) % 10 = 6
```

---

## 🎓 Detalles Técnicos

### Estructura del Código

**index.html** (12KB)
- Estructura de 3 pantallas principales
- Templates para 10 módulos con descripciones Pandas
- Sistema de screens (password, game, victory, failure)

**styles.css** (25KB)
- Variables CSS personalizadas
- Animaciones cyberpunk (glitch, pulse, blink)
- Grid layout responsive
- Estilos modulares para cada elemento

**script.js** (16KB)
- Objeto `bombData` con 7 bombas basadas en análisis Pandas
- Sistema de estado del juego (`gameState`)
- Funciones modulares para cada M1-M10
- Validación específica para cada reto estadístico
- Timer con actualización en tiempo real

### Arquitectura de Módulos

Cada módulo tiene:
1. Template HTML con descripción del reto Pandas
2. Función `initM[1-10]()` para lógica
3. Validación personalizada según análisis
4. Llamada a `completeModule()` en éxito
5. Llamada a `showError()` en fallo

---

## 🔧 Personalización

### Generar Nuevas Bombas
Usa Python con Pandas para crear datos nuevos:

```python
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "Nivel_Amenaza": np.random.randint(1, 20, 12),
    "Energia": np.random.randint(30, 75, 12),
    "Frecuencia": np.random.randint(60, 300, 12),
    # ... más columnas
})

# Calcular respuestas
m1 = df["Nivel_Amenaza"].sum()
m2 = int(str(int((df["Energia"] * df["Frecuencia"]).mean()))[-2:]) + 2026
# ... etc
```

### Cambiar Tiempo Límite
En `script.js`, modifica:
```javascript
gameState.timeRemaining = 1200; // segundos (20 min)
```

---

## 🎮 Tips para Jugar

1. **Aprende Pandas primero** - Conocer las consultas es esencial
2. **Planifica tu tiempo** - 2 minutos por módulo es ideal
3. **Lee las descripciones** - Cada módulo describe la consulta Pandas
4. **Presta atención al cronómetro** - Acelera cuando falten 2 min
5. **Verifica tus cálculos** - Los datos varían por bomba

---

## 🌐 Compatibilidad

✅ Navegadores soportados:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

❌ No soportado:
- Internet Explorer (obsoleto)
- Navegadores muy antiguos

---

## 📝 Notas de Desarrollo

- El juego se ejecuta completamente en el cliente (sin servidor necesario)
- Las respuestas son datos reales generados con Pandas
- Los módulos son independientes y pueden extenderse
- Fácil de personalizar con nuevos datasets
- Ideal para educación en Ciencia de Datos

---

## 🎬 Ejemplo de Uso

```
1. Abrir: http://localhost:8000/index.html
2. Ingresar: B-01
3. Resolver 10 módulos Pandas antes de 20:00
4. ¡MISIÓN CUMPLIDA! 🎉
```

---

**Creado por: Equipo Dinamita - Operaciones Especiales de Datos** 🎮💣📊✨