"""
╔════════════════════════════════════════════════════════════╗
║  OPERACIÓN EQUIPO DINAMITA - RESOLUCIÓN B-01              ║
║  Bomba: B-01 "SIGMA"                                       ║
║  Estado: DESACTIVADA ✓                                     ║
║  Tiempo utilizado: Análisis Completo                       ║
╚════════════════════════════════════════════════════════════╝
"""

import pandas as pd
import numpy as np
from datetime import datetime

# ====== PASO 0: PREPARACIÓN ======
print("\n" + "="*60)
print("PASO 0: PREPARACIÓN Y CARGA DE DATOS")
print("="*60)

# Cargar dataset completo
df_completo = pd.read_csv('dataset_bombas_completo.csv')
print(f"Total de registros en el dataset: {len(df_completo)}")
print(f"Bombas disponibles: {df_completo['ID_Bomba'].unique()}")

# FILTRAR SOLO DATOS DE B-01
df = df_completo[df_completo['ID_Bomba'] == 'B-01'].copy()
print(f"\n✓ Total de registros para B-01: {len(df)}")

# Exploración inicial
print("\nPrimeras filas de B-01:")
print(df.head())
print("\nInfo del dataset:")
print(df.info())
print("\nEstadísticas descriptivas:")
print(df.describe())

# ====== MÓDULO 1: SISTEMA DE INTERRUPTORES BINARIOS ======
print("\n" + "="*60)
print("MÓDULO 1: SISTEMA DE INTERRUPTORES BINARIOS")
print("="*60)

suma_amenaza = df['Nivel_Amenaza'].sum()
print(f"Suma total de Nivel_Amenaza para B-01: {suma_amenaza}")

# Aplicar lógica
if suma_amenaza > 50:
    # Calcular valor modulo 15 para obtener número menor a 15
    valor_modulo = suma_amenaza % 15
    # Convertir a binario de 4 bits
    codigo_modulo1 = bin(valor_modulo)[2:].zfill(4)
    print(f"Suma ({suma_amenaza}) > 50 → Aplicar módulo 15: {suma_amenaza} % 15 = {valor_modulo}")
    print(f"Convertir a binario de 4 bits: {valor_modulo} → {codigo_modulo1}")
else:
    # Convertir a binario de 4 bits
    binario = bin(suma_amenaza)[2:].zfill(4)
    codigo_modulo1 = binario
    print(f"Suma ({suma_amenaza}) ≤ 50 → Convertir a binario de 4 bits: {binario}")

print(f"\n✓ MÓDULO 1 RESPUESTA: {codigo_modulo1}")

# Desafío adicional
suma_total_amenaza = df_completo['Nivel_Amenaza'].sum()
porcentaje_b01 = (suma_amenaza / suma_total_amenaza) * 100
print(f"  Desafío: B-01 representa {porcentaje_b01:.2f}% del total de amenaza global")

# ====== MÓDULO 2: CÁLCULO DE ENERGÍA PONDERADA ======
print("\n" + "="*60)
print("MÓDULO 2: CÁLCULO DE ENERGÍA PONDERADA")
print("="*60)

promedio_ponderado = (df['Energia'] * df['Frecuencia']).mean()
print(f"Promedio ponderado (Energia × Frecuencia): {promedio_ponderado}")

# Obtener un valor entre 1990 y 2030
# Usar módulo 40 para obtener valor entre 0 y 39, luego sumar 1990
offset = int(promedio_ponderado) % 40
codigo_modulo2 = 1990 + offset
print(f"Aplicar módulo 40 al promedio: {int(promedio_ponderado)} % 40 = {offset}")
print(f"Código final: 1990 + {offset} = {codigo_modulo2}")
print(f"\n✓ MÓDULO 2 RESPUESTA: {codigo_modulo2}")

# Desafío adicional
promedio_simple = df['Energia'].mean()
diferencia = promedio_ponderado - promedio_simple
print(f"  Desafío: Promedio ponderado ({promedio_ponderado:.2f}) vs Promedio simple ({promedio_simple:.2f})")
print(f"  Diferencia: {diferencia:.2f}")

# ====== MÓDULO 3: ANÁLISIS DE ESTABILIDAD DE FRECUENCIA ======
print("\n" + "="*60)
print("MÓDULO 3: ANÁLISIS DE ESTABILIDAD DE FRECUENCIA")
print("="*60)

rango_frecuencia = df['Frecuencia'].max() - df['Frecuencia'].min()
print(f"Rango de Frecuencia: {df['Frecuencia'].max()} - {df['Frecuencia'].min()} = {rango_frecuencia}")

if rango_frecuencia > 200:
    estado_sistema = "UNSTABLE"
else:
    estado_sistema = "STABLE"

codigo_modulo3 = estado_sistema
print(f"Estado del sistema: {codigo_modulo3}")
print(f"\n✓ MÓDULO 3 RESPUESTA: {estado_sistema}")

# Desafío adicional
print(f"  Desafío: Distribución de frecuencias")
print(df['Frecuencia'].describe())

# ====== MÓDULO 4: IDENTIFICACIÓN DE CABLE DOMINANTE ======
print("\n" + "="*60)
print("MÓDULO 4: IDENTIFICACIÓN DE CABLE DOMINANTE")
print("="*60)

energia_por_cable = df.groupby('Hex_Cable')['Energia'].sum()
print("Energía acumulada por cable:")
print(energia_por_cable)

cable_dominante = energia_por_cable.idxmax()
energia_dominante = energia_por_cable.max()

cable_nombre = {'R': 'Rojo 🔴', 'G': 'Verde 🟢', 'B': 'Azul 🔵'}
print(f"\nCable dominante: {cable_nombre.get(cable_dominante, cable_dominante)} ({cable_dominante})")
print(f"Energía acumulada: {energia_dominante}")

codigo_modulo4 = cable_dominante
print(f"\n✓ MÓDULO 4 RESPUESTA: {codigo_modulo4}")

# Desafío adicional
cable_menor = energia_por_cable.idxmin()
print(f"  Desafío: Cable con menor energía: {cable_nombre.get(cable_menor, cable_menor)} ({energia_por_cable.min()})")

# ====== MÓDULO 5: CONTEO DE AGENTES DE ALTO RIESGO ======
print("\n" + "="*60)
print("MÓDULO 5: CONTEO DE AGENTES DE ALTO RIESGO")
print("="*60)

alto_riesgo = df[df['Energia'] > 50]
print(f"Registros en zona de alto riesgo (Energia > 50): {len(alto_riesgo)}")
print("\nRegistros de alto riesgo:")
print(alto_riesgo[['Agente', 'Energia', 'Frecuencia', 'Sensor_ID']])

agentes_unicos = alto_riesgo['Agente'].nunique()
print(f"\nAgentes únicos en zona de alto riesgo: {agentes_unicos}")

# Aplicar módulo 4 para obtener valor entre 0 y 3
codigo_modulo5 = agentes_unicos % 4
print(f"Aplicar módulo 4: {agentes_unicos} % 4 = {codigo_modulo5}")

# Desafío adicional
agente_mas_frecuente = alto_riesgo['Agente'].value_counts()
print(f"  Desafío: Agente más frecuente en zonas de alto riesgo:")
print(agente_mas_frecuente.head(3))

# ====== MÓDULO 6: CÓDIGO DE SENSOR INVERTIDO ======
print("\n" + "="*60)
print("MÓDULO 6: CÓDIGO DE SENSOR INVERTIDO")
print("="*60)

sensor_mas_frecuente = df['Sensor_ID'].mode()[0]
print(f"Sensor más frecuente: {sensor_mas_frecuente}")
print(f"Frecuencia de aparición:")
print(df['Sensor_ID'].value_counts().head())

# Invertir los dígitos
sensor_invertido = int(str(sensor_mas_frecuente)[::-1])
print(f"Sensor invertido: {sensor_mas_frecuente} → {sensor_invertido}")

codigo_modulo6 = sensor_invertido
print(f"\n✓ MÓDULO 6 RESPUESTA: {sensor_invertido}")

# Desafío adicional
frecuencia_sensor = df['Sensor_ID'].value_counts()
porcentaje_sensor = (frecuencia_sensor.iloc[0] / len(df)) * 100
print(f"  Desafío: El sensor {sensor_mas_frecuente} aparece en {porcentaje_sensor:.2f}% de los registros")

# ====== MÓDULO 7: DESVIACIÓN TEMPORAL ======
print("\n" + "="*60)
print("MÓDULO 7: DESVIACIÓN TEMPORAL")
print("="*60)

# Convertir timestamp a datetime
df['Timestamp'] = pd.to_datetime(df['Timestamp'])
print(f"Timestamps convertidos a datetime")

# Convertir a segundos (Unix timestamp)
segundos = df['Timestamp'].apply(lambda x: x.timestamp())

# Calcular desviación estándar
std_segundos = segundos.std()
print(f"Desviación estándar de timestamps: {std_segundos:.2f} segundos")

# Convertir a MM:SS
minutos = int(std_segundos // 60)
segundos_resto = int(std_segundos % 60)
codigo_modulo7 = f"{minutos:02d}:{segundos_resto:02d}"

print(f"Formato MM:SS: {codigo_modulo7}")
print(f"\n✓ MÓDULO 7 RESPUESTA: {codigo_modulo7}")

# Desafío adicional
timestamp_min = df['Timestamp'].min()
timestamp_max = df['Timestamp'].max()
span = (timestamp_max - timestamp_min).total_seconds()
print(f"  Desafío: Timestamp más temprano: {timestamp_min}")
print(f"  Timestamp más tardío: {timestamp_max}")
print(f"  Span temporal total: {span:.0f} segundos ({span/3600:.2f} horas)")

# ====== MÓDULO 8: DENSIDAD GEOGRÁFICA ======
print("\n" + "="*60)
print("MÓDULO 8: DENSIDAD GEOGRÁFICA")
print("="*60)

# Encontrar provincias únicas
provincias_unicas = df['Provincia'].unique()
print(f"Provincias únicas en B-01: {provincias_unicas}")
print(f"Total de provincias diferentes: {len(provincias_unicas)}")

print("\nDistribución por provincia:")
print(df['Provincia'].value_counts())

codigo_modulo8 = len(provincias_unicas)
print(f"\n✓ MÓDULO 8 RESPUESTA: {codigo_modulo8}")

# Desafío adicional
print(f"  Desafío: Listado completo de provincias:")
for i, provincia in enumerate(sorted(provincias_unicas), 1):
    count = len(df[df['Provincia'] == provincia])
    print(f"    {i}. {provincia}: {count} registros")

# ====== MÓDULO 9: CORRELACIÓN DE AMENAZA-ENERGÍA ======
print("\n" + "="*60)
print("MÓDULO 9: CORRELACIÓN DE AMENAZA-ENERGÍA")
print("="*60)

correlacion = df['Nivel_Amenaza'].corr(df['Energia'])
print(f"Correlación de Pearson (Nivel_Amenaza vs Energia): {correlacion:.4f}")

if correlacion > 0:
    posicion_dial = 9
    tipo = "POSITIVA"
    print(f"Correlación {tipo} (> 0) → Posición 9")
else:
    posicion_dial = 1
    tipo = "NEGATIVA"
    print(f"Correlación {tipo} (< 0) → Posición 1")

codigo_modulo9 = posicion_dial
print(f"\n✓ MÓDULO 9 RESPUESTA: {posicion_dial}")

# Desafío adicional
print(f"  Desafío: Valor exacto de correlación: {correlacion:.4f}")
if abs(correlacion) > 0.7:
    fuerza = "FUERTE"
elif abs(correlacion) > 0.3:
    fuerza = "MODERADA"
else:
    fuerza = "DÉBIL"
print(f"  Tipo de correlación: {fuerza}")

# ====== MÓDULO 10: CHECKSUM DE INTEGRIDAD ======
print("\n" + "="*60)
print("MÓDULO 10: CHECKSUM DE INTEGRIDAD")
print("="*60)

# M1: Contar bits activos (cuántos '1' en el código binario)
m1_bits = codigo_modulo1.count('1')
print(f"M1 (Binario): {codigo_modulo1} → {m1_bits} bits activos")

# M5: Número de agentes
m5_valor = codigo_modulo5
print(f"M5 (Agentes): {m5_valor}")

# M8: Número de letras
m8_valor = codigo_modulo8
print(f"M8 (Letras): {m8_valor}")

# Calcular checksum
checksum = (m1_bits + m5_valor + m8_valor) % 10
print(f"\nCálculo: ({m1_bits} + {m5_valor} + {m8_valor}) % 10 = {m1_bits + m5_valor + m8_valor} % 10 = {checksum}")

codigo_modulo10 = checksum
print(f"\n✓ MÓDULO 10 RESPUESTA: {checksum}")

# ====== RESUMEN FINAL ======
print("\n" + "="*60)
print("RESUMEN FINAL - RESPUESTAS PARA DESACTIVAR BOMBA B-01")
print("="*60)

respuestas = {
    "MÓDULO 1 - Interruptores Binarios": codigo_modulo1,
    "MÓDULO 2 - Energía Ponderada": codigo_modulo2,
    "MÓDULO 3 - Estabilidad": codigo_modulo3,
    "MÓDULO 4 - Cable Dominante": codigo_modulo4,
    "MÓDULO 5 - Agentes Alto Riesgo": codigo_modulo5,
    "MÓDULO 6 - Sensor Invertido": codigo_modulo6,
    "MÓDULO 7 - Desviación Temporal": codigo_modulo7,
    "MÓDULO 8 - Densidad Geográfica": codigo_modulo8,
    "MÓDULO 9 - Correlación Amenaza-Energía": codigo_modulo9,
    "MÓDULO 10 - Checksum": codigo_modulo10,
}

print("\n")
for i, (modulo, respuesta) in enumerate(respuestas.items(), 1):
    print(f"{i:2d}. {modulo:40s} → {respuesta}")

print("\n" + "="*60)
print("✓ BOMBA B-01 RESUELTA EXITOSAMENTE")
print("="*60)
print("\nPROXIMOS PASOS:")
print("1. Abre index.html en tu navegador")
print("2. Ingresa contraseña: B-01")
print("3. Introduce cada respuesta en el módulo correspondiente")
print("4. ¡DESACTIVA LA BOMBA!")
print("\n" + "="*60)
