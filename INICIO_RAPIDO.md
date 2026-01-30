# 🚀 GUÍA DE INICIO RÁPIDO - 5 MINUTOS

Esta guía te permitirá empezar a jugar en menos de 5 minutos.

---

## ✅ PASO 1: Verificar Prerequisitos (30 segundos)

```bash
# Verificar Python instalado
python --version
# Debe mostrar Python 3.7 o superior

# Verificar pip
pip --version
```

Si no tienes Python, descárgalo de: https://www.python.org/downloads/

---

## ✅ PASO 2: Instalar Dependencias Básicas (1 minuto)

```bash
# Navega al directorio del proyecto
cd /ruta/a/pyhuntbygrupap

# Instala pandas y numpy (es todo lo que necesitas)
pip install pandas numpy
```

**Nota:** Todas las bombas usan SOLO Pandas y NumPy básicos.

---

## ✅ PASO 3: Verificar Dataset (30 segundos)

```bash
# Lista los archivos
ls -la

# Debes ver:
# ✓ dataset_bombas_completo.csv
# ✓ index.html
# ✓ BOMBA_B-01_INSTRUCCIONES.md (y otros 6)
```

**Si NO tienes `dataset_bombas_completo.csv`:**
```bash
python generar_dataset_unificado.py
```

---

## ✅ PASO 4: Exploración Rápida (2 minutos)

Crea un archivo `test.py` y ejecuta:

```python
import pandas as pd

# Cargar dataset
df = pd.read_csv('dataset_bombas_completo.csv')

# Verificar
print("✅ Dataset cargado correctamente!")
print(f"Total de registros: {len(df)}")
print(f"Bombas disponibles: {df['ID_Bomba'].nunique()}")

# Filtrar bomba B-01
df_b01 = df[df['ID_Bomba'] == 'B-01'].copy()
print(f"\n✅ Registros de B-01: {len(df_b01)}")

# Primer módulo de ejemplo
suma_amenaza = df_b01['Nivel_Amenaza'].sum()
print(f"\n🎯 M1 - Suma de amenaza: {suma_amenaza}")
print(f"🎯 M1 - Código: {'1111' if suma_amenaza > 50 else format(suma_amenaza, '04b')}")

print("\n✅ ¡Todo funcionando! Lee BOMBA_B-01_INSTRUCCIONES.md para continuar.")
```

Ejecuta:
```bash
python test.py
```

**Salida esperada:**
```
✅ Dataset cargado correctamente!
Total de registros: 1050
Bombas disponibles: 7

✅ Registros de B-01: 150

🎯 M1 - Suma de amenaza: [número]
🎯 M1 - Código: 1111

✅ ¡Todo funcionando! Lee BOMBA_B-01_INSTRUCCIONES.md para continuar.
```

---

## ✅ PASO 5: Empezar a Jugar (1 minuto)

### Opción A: Primero analiza, luego juega (RECOMENDADO)

1. Abre `BOMBA_B-01_INSTRUCCIONES.md`
2. Resuelve los 10 módulos con Python/Pandas
3. Anota tus respuestas
4. Abre `index.html` en tu navegador
5. Ingresa contraseña: `B-01`
6. Ingresa tus respuestas
7. ¡Desactiva la bomba!

### Opción B: Explorar el juego primero

1. Abre `index.html` en tu navegador (doble clic)
2. Ingresa contraseña: `B-01`
3. Explora la interfaz
4. Vuelve a analizar los datos

---

## 🎯 PRÓXIMOS PASOS

Una vez que completes el setup:

1. **Lee el índice:** [INDICE_NAVEGACION.md](INDICE_NAVEGACION.md)
2. **Empieza con B-01:** [BOMBA_B-01_INSTRUCCIONES.md](BOMBA_B-01_INSTRUCCIONES.md)
3. **Consulta el README completo:** [README.md](README.md)

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### Error: "No module named 'pandas'"
```bash
pip install pandas numpy
```

### Error: "FileNotFoundError: dataset_bombas_completo.csv"
```bash
python generar_dataset_unificado.py
```

### Error: El juego no abre en el navegador
- Asegúrate de tener un navegador moderno (Chrome, Firefox, Edge, Safari)
- Internet Explorer NO es compatible

### Las respuestas no coinciden con el juego
- Verifica que filtraste correctamente por ID_Bomba
- Lee atentamente las instrucciones de cada módulo
- Algunas bombas tienen condiciones especiales (ej: filtros múltiples en B-02)

---

## 📊 VALIDACIÓN RÁPIDA

Ejecuta este código para verificar que el dataset está correcto:

```python
import pandas as pd

df = pd.read_csv('dataset_bombas_completo.csv')

# Verificaciones
assert len(df) == 1050, "❌ Error: Dataset debe tener 1050 registros"
assert df['ID_Bomba'].nunique() == 7, "❌ Error: Debe haber 7 bombas"
assert all(df['ID_Bomba'].value_counts() == 150), "❌ Error: Cada bomba debe tener 150 registros"
assert 'Timestamp' in df.columns, "❌ Error: Falta columna Timestamp"
assert 'Energia' in df.columns, "❌ Error: Falta columna Energia"

print("✅ ¡Dataset validado correctamente!")
print("✅ ¡Todo listo para empezar!")
```

---

## 💡 TIPS FINALES

1. **No saltes bombas:** Sigue el orden de dificultad
2. **Instala librerías cuando las necesites:** No todas las bombas requieren todas las librerías
3. **Usa Jupyter Notebook:** Más interactivo para explorar datos
4. **Guarda tu código:** Te será útil para bombas posteriores
5. **Lee la teoría:** Entiende QUÉ haces, no solo CÓMO

---

## 🎮 INSTALACIÓN COMPLETA (Opcional)

Si quieres instalar TODO de una vez (para bombas avanzadas):

```bash
pip install pandas numpy scipy scikit-learn statsmodels networkx deap matplotlib seaborn
```

**Tamaño:** ~500 MB
**Tiempo:** 5-10 minutos

---

## ⏱️ RESUMEN DE 5 MINUTOS

```bash
# 1. Verificar Python
python --version

# 2. Instalar dependencias
pip install pandas numpy

# 3. Generar dataset (si es necesario)
python generar_dataset_unificado.py

# 4. Test rápido
python test.py

# 5. ¡A jugar!
# - Abre BOMBA_B-01_INSTRUCCIONES.md
# - Abre index.html
```

---

**¡Listo! Ahora tienes todo para empezar la Operación Equipo Dinamita. 💣🔧**

**¡Buena suerte, Agente!**
