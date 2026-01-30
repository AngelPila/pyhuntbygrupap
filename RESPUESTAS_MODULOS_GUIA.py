"""
RESPUESTAS A TODOS LOS MÓDULOS - GUÍA DE REFERENCIA PARA INSTRUCTORES
======================================================================

Este archivo contiene las respuestas correctas a cada módulo de todas las bombas.
Los estudiantes deben obtener resultados similares ejecutando sus propios análisis en Google Colab.

INSTRUCCIONES DE USO:
1. Los estudiantes cargan el CSV en Google Colab
2. Realizan sus propios análisis con Pandas
3. Comparan resultados con esta guía
4. Pueden usar para validar sus codes antes de ingresar en el juego

"""

import pandas as pd
import numpy as np
from scipy.stats import hmean

# Cargar dataset
df_completo = pd.read_csv('dataset_bombas_completo.csv')

print("="*70)
print("BOMBAS Y MÓDULOS - RESPUESTAS CORRECTAS")
print("="*70)

# ============================================================================
# BOMBA B-01: PROTOCOLO SIGMA
# ============================================================================
print("\n" + "="*70)
print("BOMBA B-01: PROTOCOLO SIGMA ⭐⭐☆☆☆")
print("="*70)

df_b01 = df_completo[df_completo['ID_Bomba'] == 'B-01'].copy()
print(f"\n📊 Registros totales de B-01: {len(df_b01)}")

# MÓDULO 1: Sistema de Interruptores Binarios
print("\n🧩 MÓDULO 1: Sistema de Interruptores Binarios")
suma_amenaza_b01 = df_b01['Nivel_Amenaza'].sum()
print(f"  • Suma total de Nivel_Amenaza: {suma_amenaza_b01}")
if suma_amenaza_b01 > 50:
    modulo1_b01 = "1111"
    print(f"  • Suma > 50 → Código binario: {modulo1_b01}")
else:
    binario = bin(int(suma_amenaza_b01))[2:].zfill(4)
    modulo1_b01 = binario
    print(f"  • Suma ≤ 50 → Convertir a binario (4 bits): {modulo1_b01}")

suma_global = df_completo['Nivel_Amenaza'].sum()
porcentaje_b01 = (suma_amenaza_b01 / suma_global) * 100
print(f"  • Porcentaje de amenaza global: {porcentaje_b01:.2f}%")
print(f"  ✅ RESPUESTA: {modulo1_b01}")

# MÓDULO 2: Cálculo de Energía Ponderada
print("\n🧩 MÓDULO 2: Cálculo de Energía Ponderada")
promedio_ponderado_b01 = (df_b01['Energia'] * df_b01['Frecuencia']).mean()
print(f"  • Promedio ponderado (E × F): {promedio_ponderado_b01:.2f}")
ultimos_dos_b01 = int(promedio_ponderado_b01) % 100
codigo_final_b01_m2 = ultimos_dos_b01 + 2026
print(f"  • Últimos 2 dígitos: {ultimos_dos_b01}")
print(f"  • Código final (+ 2026): {codigo_final_b01_m2}")
promedio_simple = df_b01['Energia'].mean()
diferencia = promedio_ponderado_b01 - promedio_simple
print(f"  • Diferencia vs promedio simple: {diferencia:.2f}")
print(f"  ✅ RESPUESTA: {codigo_final_b01_m2}")

# MÓDULO 3: Análisis de Estabilidad de Frecuencia
print("\n🧩 MÓDULO 3: Análisis de Estabilidad de Frecuencia")
rango_b01 = df_b01['Frecuencia'].max() - df_b01['Frecuencia'].min()
promedio_freq_b01 = df_b01['Frecuencia'].mean()
print(f"  • Rango de Frecuencia: {rango_b01}")
print(f"  • Promedio de Frecuencia: {promedio_freq_b01:.2f}")
estabilidad_b01_m3 = "UNSTABLE" if rango_b01 > 200 else "STABLE"
print(f"  • Regla: Rango > 200 = UNSTABLE, ≤ 200 = STABLE")
print(f"  ✅ RESPUESTA: {estabilidad_b01_m3}")

# MÓDULO 4: Cable Dominante por Frecuencia Máxima
print("\n🧩 MÓDULO 4: Cable Dominante por Frecuencia Máxima")
cable_max_freq = df_b01.loc[df_b01['Frecuencia'].idxmax(), 'Hex_Cable']
print(f"  • Cable con máxima frecuencia: {cable_max_freq}")
print(f"  ✅ RESPUESTA: {cable_max_freq}")

# MÓDULO 5: Agentes en Estado Activo
print("\n🧩 MÓDULO 5: Agentes en Estado Activo")
agentes_activos_b01 = df_b01[df_b01['Estado'] == 'Activo']['Agente'].nunique()
print(f"  • Agentes únicos con Estado = 'Activo': {agentes_activos_b01}")
print(f"  ✅ RESPUESTA: {agentes_activos_b01}")

# MÓDULO 6: Timestamp del Registro Más Reciente
print("\n🧩 MÓDULO 6: Timestamp del Registro Más Reciente")
df_b01['Timestamp'] = pd.to_datetime(df_b01['Timestamp'])
mas_reciente_b01 = df_b01['Timestamp'].max()
print(f"  • Timestamp más reciente: {mas_reciente_b01}")
print(f"  ✅ RESPUESTA: {mas_reciente_b01}")

# MÓDULO 7: Ciudad con Mayor Número de Registros
print("\n🧩 MÓDULO 7: Ciudad con Mayor Número de Registros")
ciudad_dominante_b01 = df_b01['Ciudad'].value_counts().index[0]
count_ciudad = df_b01['Ciudad'].value_counts().iloc[0]
print(f"  • Conteo de registros por ciudad:")
print(f"    {df_b01['Ciudad'].value_counts()}")
print(f"  • Ciudad con más registros: {ciudad_dominante_b01} ({count_ciudad})")
print(f"  ✅ RESPUESTA: {ciudad_dominante_b01}")

# MÓDULO 8: Sector Crítico (Mayor Nivel de Amenaza Promedio)
print("\n🧩 MÓDULO 8: Sector Crítico")
amenaza_por_sector = df_b01.groupby('Sector')['Nivel_Amenaza'].mean().sort_values(ascending=False)
print(f"  • Promedio de amenaza por sector:")
print(f"    {amenaza_por_sector}")
sector_critico_b01 = amenaza_por_sector.index[0]
print(f"  • Sector más crítico: {sector_critico_b01}")
print(f"  ✅ RESPUESTA: {sector_critico_b01}")

# MÓDULO 9: Energía Crítica (Percentil 75)
print("\n🧩 MÓDULO 9: Energía Crítica")
p75_energia_b01 = df_b01['Energia'].quantile(0.75)
print(f"  • Percentil 75 de Energía: {p75_energia_b01:.2f}")
print(f"  • Registros con Energía > P75: {(df_b01['Energia'] > p75_energia_b01).sum()}")
print(f"  ✅ RESPUESTA: {p75_energia_b01:.2f}")

# MÓDULO 10: Frecuencia de Prioridades
print("\n🧩 MÓDULO 10: Distribución de Prioridades")
prioridades_b01 = df_b01['Prioridad'].value_counts()
print(f"  • Conteo de Prioridades:")
print(f"    {prioridades_b01}")
prioridad_dominante_b01 = prioridades_b01.index[0]
print(f"  ✅ RESPUESTA: {prioridad_dominante_b01}")

# ============================================================================
# BOMBA B-02: OPERACIÓN FÉNIX
# ============================================================================
print("\n\n" + "="*70)
print("BOMBA B-02: OPERACIÓN FÉNIX ⭐⭐⭐☆☆")
print("="*70)

df_b02 = df_completo[df_completo['ID_Bomba'] == 'B-02'].copy()
df_b02['Timestamp'] = pd.to_datetime(df_b02['Timestamp'])
print(f"\n📊 Registros totales de B-02: {len(df_b02)}")

# MÓDULO 1: Agregación Vectorial
print("\n🧩 MÓDULO 1: Agregación Vectorial")
suma_amenaza_b02 = df_b02['Nivel_Amenaza'].sum()
print(f"  • Suma total de Nivel_Amenaza: {suma_amenaza_b02}")
if suma_amenaza_b02 > 50:
    modulo1_b02 = "1111"
    print(f"  • Suma > 50 → Código binario: {modulo1_b02}")
else:
    binario = bin(int(suma_amenaza_b02))[2:].zfill(4)
    modulo1_b02 = binario
    print(f"  • Suma ≤ 50 → Convertir a binario (4 bits): {modulo1_b02}")

media_b02 = df_b02['Nivel_Amenaza'].mean()
mediana_b02 = df_b02['Nivel_Amenaza'].median()
std_b02 = df_b02['Nivel_Amenaza'].std()
print(f"  • Media: {media_b02:.2f}, Mediana: {mediana_b02:.2f}, Std: {std_b02:.2f}")
print(f"  ✅ RESPUESTA: {modulo1_b02}")

# MÓDULO 2: Energía Ponderada con Filtro de Prioridad
print("\n🧩 MÓDULO 2: Energía Ponderada con Filtro")
df_b02_critico = df_b02[df_b02['Prioridad'].isin(['Alta', 'Crítica'])]
print(f"  • Registros con Prioridad Alta o Crítica: {len(df_b02_critico)} de {len(df_b02)}")
promedio_ponderado_b02 = (df_b02_critico['Energia'] * df_b02_critico['Frecuencia']).mean()
print(f"  • Promedio ponderado (registros críticos): {promedio_ponderado_b02:.2f}")
ultimos_dos_b02 = int(promedio_ponderado_b02) % 100
codigo_final_b02_m2 = ultimos_dos_b02 + 2026
print(f"  • Últimos 2 dígitos: {ultimos_dos_b02}")
print(f"  • Código final (+ 2026): {codigo_final_b02_m2}")
print(f"  ✅ RESPUESTA: {codigo_final_b02_m2}")

# MÓDULO 3: Estabilidad por Sector
print("\n🧩 MÓDULO 3: Estabilidad por Sector")
sector_counts = df_b02['Sector'].value_counts()
sector_dominante_b02 = sector_counts.index[0]
print(f"  • Conteo de registros por sector: {dict(sector_counts)}")
print(f"  • Sector dominante: {sector_dominante_b02}")
df_sector_dom = df_b02[df_b02['Sector'] == sector_dominante_b02]
rango_freq_sector = df_sector_dom['Frecuencia'].max() - df_sector_dom['Frecuencia'].min()
print(f"  • Rango de frecuencia en {sector_dominante_b02}: {rango_freq_sector}")
estabilidad_b02_m3 = "UNSTABLE" if rango_freq_sector > 200 else "STABLE"
print(f"  ✅ RESPUESTA: {estabilidad_b02_m3}")

# MÓDULO 4: Correlación Energía-Frecuencia
print("\n🧩 MÓDULO 4: Correlación E-F")
correlacion_b02 = df_b02['Energia'].corr(df_b02['Frecuencia'])
print(f"  • Correlación E-F: {correlacion_b02:.4f}")
print(f"  ✅ RESPUESTA: {correlacion_b02:.4f}")

# MÓDULO 5: Contador de Estados
print("\n🧩 MÓDULO 5: Distribución de Estados")
estados_b02 = df_b02['Estado'].value_counts()
print(f"  • Conteo de Estados:")
print(f"    {estados_b02}")
estado_dominante = estados_b02.index[0]
print(f"  ✅ RESPUESTA: {estado_dominante}")

# MÓDULO 6: Agente Más Frecuente
print("\n🧩 MÓDULO 6: Agente Más Frecuente")
agente_counts_b02 = df_b02['Agente'].value_counts()
agente_dominante_b02 = agente_counts_b02.index[0]
print(f"  • Top 5 agentes: {dict(agente_counts_b02.head(5))}")
print(f"  ✅ RESPUESTA: {agente_dominante_b02}")

# MÓDULO 7: Sensor Más Usado
print("\n🧩 MÓDULO 7: Sensor Más Usado")
sensor_counts_b02 = df_b02['Sensor_ID'].value_counts()
sensor_dominante_b02 = sensor_counts_b02.index[0]
print(f"  • Top 5 sensores: {dict(sensor_counts_b02.head(5))}")
print(f"  ✅ RESPUESTA: {sensor_dominante_b02}")

# MÓDULO 8: Cable Predominante
print("\n🧩 MÓDULO 8: Cable Predominante")
cable_counts_b02 = df_b02['Hex_Cable'].value_counts()
cable_dominante_b02 = cable_counts_b02.index[0]
print(f"  • Conteo de cables: {dict(cable_counts_b02)}")
print(f"  ✅ RESPUESTA: {cable_dominante_b02}")

# MÓDULO 9: Hora con Más Actividad
print("\n🧩 MÓDULO 9: Hora con Más Actividad")
df_b02['Hora'] = df_b02['Timestamp'].dt.hour
hora_counts = df_b02['Hora'].value_counts().sort_index()
hora_dominante = hora_counts.index[hora_counts.values.argmax()]
print(f"  • Actividad por hora: {dict(hora_counts)}")
print(f"  ✅ RESPUESTA: {hora_dominante}")

# MÓDULO 10: Promedio de Frecuencia
print("\n🧩 MÓDULO 10: Promedio de Frecuencia")
promedio_freq_b02 = df_b02['Frecuencia'].mean()
print(f"  • Promedio de Frecuencia: {promedio_freq_b02:.2f}")
print(f"  ✅ RESPUESTA: {promedio_freq_b02:.2f}")

# ============================================================================
# BOMBA B-03: CÓDIGO ÍCARO
# ============================================================================
print("\n\n" + "="*70)
print("BOMBA B-03: CÓDIGO ÍCARO ⭐⭐⭐☆☆")
print("="*70)

df_b03 = df_completo[df_completo['ID_Bomba'] == 'B-03'].copy()
df_b03['Timestamp'] = pd.to_datetime(df_b03['Timestamp'])
print(f"\n📊 Registros totales de B-03: {len(df_b03)}")

# MÓDULO 1: Suma Ponderada por Prioridad
print("\n🧩 MÓDULO 1: Suma Ponderada por Prioridad")
pesos = {'Crítica': 2.0, 'Alta': 1.5, 'Media': 1.0, 'Baja': 0.5}
df_b03['Peso'] = df_b03['Prioridad'].map(pesos)
suma_ponderada_b03 = (df_b03['Nivel_Amenaza'] * df_b03['Peso']).sum()
print(f"  • Suma ponderada por prioridad: {suma_ponderada_b03:.2f}")
if suma_ponderada_b03 > 50:
    modulo1_b03 = "1111"
else:
    modulo1_b03 = bin(int(suma_ponderada_b03))[2:].zfill(4)
print(f"  • Código binario (4 bits): {modulo1_b03}")
print(f"  ✅ RESPUESTA: {modulo1_b03}")

# MÓDULO 2: Promedio Armónico de Intensidad
print("\n🧩 MÓDULO 2: Promedio Armónico")
intensidad_b03 = df_b03['Energia'] * df_b03['Frecuencia']
# Implementación manual del promedio armónico
intensidad_filtrado = intensidad_b03[intensidad_b03 > 0]
promedio_armonico_b03 = len(intensidad_filtrado) / sum(1/x for x in intensidad_filtrado)
print(f"  • Promedio armónico de intensidad: {promedio_armonico_b03:.2f}")
ultimos_dos_b03 = int(promedio_armonico_b03) % 100
codigo_final_b03_m2 = ultimos_dos_b03 + 2026
print(f"  • Últimos 2 dígitos: {ultimos_dos_b03}")
print(f"  • Código final (+ 2026): {codigo_final_b03_m2}")
print(f"  ✅ RESPUESTA: {codigo_final_b03_m2}")

# MÓDULO 3: Estabilidad Multi-Percentil
print("\n🧩 MÓDULO 3: Estabilidad Multi-Percentil")
p90 = df_b03['Frecuencia'].quantile(0.90)
p10 = df_b03['Frecuencia'].quantile(0.10)
rango_percentil_b03 = p90 - p10
print(f"  • P90: {p90:.2f}, P10: {p10:.2f}")
print(f"  • Rango inter-percentil: {rango_percentil_b03:.2f}")
estabilidad_b03_m3 = "UNSTABLE" if rango_percentil_b03 > 150 else "STABLE"
print(f"  • Regla: Rango > 150 = UNSTABLE, ≤ 150 = STABLE")
print(f"  ✅ RESPUESTA: {estabilidad_b03_m3}")

# MÓDULO 4: Cable por Mediana de Energía
print("\n🧩 MÓDULO 4: Cable por Mediana")
medianas_cables = df_b03.groupby('Hex_Cable')['Energia'].median()
cable_dominante_b03 = medianas_cables.idxmax()
print(f"  • Medianas por cable: {dict(medianas_cables)}")
print(f"  • Cable con mayor mediana: {cable_dominante_b03}")
print(f"  ✅ RESPUESTA: {cable_dominante_b03}")

# MÓDULO 5: Z-Score Anómalos
print("\n🧩 MÓDULO 5: Agentes Anómalos (Z-Score)")
media_energia = df_b03['Energia'].mean()
std_energia = df_b03['Energia'].std()
z_scores = np.abs((df_b03['Energia'] - media_energia) / std_energia)
anomalos_b03 = df_b03[z_scores > 1.5]['Agente'].nunique()
print(f"  • Media de Energía: {media_energia:.2f}, Std: {std_energia:.2f}")
print(f"  • Agentes con |Z| > 1.5: {anomalos_b03}")
print(f"  ✅ RESPUESTA: {anomalos_b03}")

# MÓDULO 6: Ciudad con Mayor Concentración de Problemas
print("\n🧩 MÓDULO 6: Ciudad Crítica")
df_b03_critico = df_b03[
    ((df_b03['Nivel_Amenaza'] > 70) | (df_b03['Energia'] < 30)) & 
    (df_b03['Sector'].isin(['Norte', 'Sur']))
]
ciudad_problematica = df_b03_critico['Ciudad'].value_counts()
if len(ciudad_problematica) > 0:
    ciudad_critica_b03 = ciudad_problematica.index[0]
    print(f"  • Registros críticos por ciudad: {dict(ciudad_problematica)}")
else:
    ciudad_critica_b03 = "No hay datos críticos"
print(f"  ✅ RESPUESTA: {ciudad_critica_b03}")

# MÓDULO 7: Correlación Amenaza-Energía
print("\n🧩 MÓDULO 7: Correlación A-E")
corr_ae_b03 = df_b03['Nivel_Amenaza'].corr(df_b03['Energia'])
print(f"  • Correlación Amenaza-Energía: {corr_ae_b03:.4f}")
print(f"  ✅ RESPUESTA: {corr_ae_b03:.4f}")

# MÓDULO 8: Máxima Amenaza
print("\n🧩 MÓDULO 8: Máxima Amenaza")
max_amenaza_b03 = df_b03['Nivel_Amenaza'].max()
print(f"  • Máximo nivel de amenaza: {max_amenaza_b03}")
print(f"  ✅ RESPUESTA: {max_amenaza_b03}")

# MÓDULO 9: Sensor Menos Usado
print("\n🧩 MÓDULO 9: Sensor Menos Usado")
sensor_counts_b03 = df_b03['Sensor_ID'].value_counts(ascending=True)
sensor_menos_usado = sensor_counts_b03.index[0]
print(f"  • Top 5 sensores menos usados: {dict(sensor_counts_b03.head(5))}")
print(f"  ✅ RESPUESTA: {sensor_menos_usado}")

# MÓDULO 10: Agentes Únicos
print("\n🧩 MÓDULO 10: Agentes Únicos")
agentes_unicos_b03 = df_b03['Agente'].nunique()
print(f"  • Total de agentes únicos: {agentes_unicos_b03}")
print(f"  ✅ RESPUESTA: {agentes_unicos_b03}")

# ============================================================================
# BOMBA B-04: PROYECTO MEDUSA
# ============================================================================
print("\n\n" + "="*70)
print("BOMBA B-04: PROYECTO MEDUSA ⭐⭐⭐☆☆")
print("="*70)

df_b04 = df_completo[df_completo['ID_Bomba'] == 'B-04'].copy()
df_b04['Timestamp'] = pd.to_datetime(df_b04['Timestamp'])
print(f"\n📊 Registros totales de B-04: {len(df_b04)}")

# MÓDULO 1: Análisis de Riesgo Elevado
print("\n🧩 MÓDULO 1: Análisis de Riesgo Elevado")
# Criterio: Amenaza en P90 O Energía en P10, AND Sector en Norte/Sur
p90_amenaza = df_b04['Nivel_Amenaza'].quantile(0.90)
p10_energia = df_b04['Energia'].quantile(0.10)
df_b04_riesgo = df_b04[
    ((df_b04['Nivel_Amenaza'] >= p90_amenaza) | (df_b04['Energia'] <= p10_energia)) &
    (df_b04['Sector'].isin(['Norte', 'Sur']))
]
suma_riesgo_b04 = df_b04_riesgo['Nivel_Amenaza'].sum()
print(f"  • P90 Amenaza: {p90_amenaza:.2f}, P10 Energía: {p10_energia:.2f}")
print(f"  • Registros de riesgo encontrados: {len(df_b04_riesgo)}")
print(f"  • Suma de amenaza en riesgo: {suma_riesgo_b04:.2f}")
if suma_riesgo_b04 > 50:
    modulo1_b04 = "1111"
else:
    modulo1_b04 = bin(int(suma_riesgo_b04))[2:].zfill(4) if suma_riesgo_b04 > 0 else "0000"
print(f"  ✅ RESPUESTA: {modulo1_b04}")

# MÓDULO 2: Intensidad de Registros Activos
print("\n🧩 MÓDULO 2: Intensidad Activos")
df_b04_activos = df_b04[df_b04['Estado'] == 'Activo']
print(f"  • Registros con Estado='Activo': {len(df_b04_activos)}")
if len(df_b04_activos) > 0:
    promedio_intensidad_activos_b04 = (df_b04_activos['Energia'] * df_b04_activos['Frecuencia']).mean()
    ultimos_dos_b04 = int(promedio_intensidad_activos_b04) % 100
    codigo_final_b04_m2 = ultimos_dos_b04 + 2026
else:
    promedio_intensidad_activos_b04 = 0
    codigo_final_b04_m2 = 2026
print(f"  • Promedio intensidad (Activos): {promedio_intensidad_activos_b04:.2f}")
print(f"  ✅ RESPUESTA: {codigo_final_b04_m2}")

# MÓDULO 3: Variabilidad Relativa
print("\n🧩 MÓDULO 3: Variabilidad Relativa")
std_freq_b04 = df_b04['Frecuencia'].std()
media_freq_b04 = df_b04['Frecuencia'].mean()
cv_b04 = (std_freq_b04 / media_freq_b04) * 100
estabilidad_b04_m3 = "UNSTABLE" if cv_b04 > 25 else "STABLE"
print(f"  • Media: {media_freq_b04:.2f}, Std: {std_freq_b04:.2f}")
print(f"  • Coeficiente de Variación: {cv_b04:.2f}%")
print(f"  • Regla: CV > 25% = UNSTABLE, ≤ 25% = STABLE")
print(f"  ✅ RESPUESTA: {estabilidad_b04_m3}")

# MÓDULO 4: Cable en Zona de Alto Riesgo
print("\n🧩 MÓDULO 4: Cable en Alto Riesgo")
p75_energia_b04 = df_b04['Energia'].quantile(0.75)
df_b04_alto_riesgo = df_b04[df_b04['Energia'] >= p75_energia_b04]
cable_dominante_riesgo_b04 = df_b04_alto_riesgo['Hex_Cable'].value_counts().index[0]
print(f"  • P75 Energía: {p75_energia_b04:.2f}")
print(f"  • Registros en zona alto riesgo: {len(df_b04_alto_riesgo)}")
print(f"  • Cable dominante: {cable_dominante_riesgo_b04}")
print(f"  ✅ RESPUESTA: {cable_dominante_riesgo_b04}")

# MÓDULO 5: Agentes Fuera de Rango Normal
print("\n🧩 MÓDULO 5: Agentes Anómalos")
media_e_b04 = df_b04['Energia'].mean()
std_e_b04 = df_b04['Energia'].std()
z_scores_b04 = np.abs((df_b04['Energia'] - media_e_b04) / std_e_b04)
agentes_anomalos_b04 = df_b04[z_scores_b04 > 1.5]['Agente'].nunique()
print(f"  • Agentes con energía anómala (|Z| > 1.5): {agentes_anomalos_b04}")
print(f"  ✅ RESPUESTA: {agentes_anomalos_b04}")

# MÓDULO 6: Ciudad Crítica
print("\n🧩 MÓDULO 6: Ciudad Crítica")
df_b04_critico = df_b04[
    ((df_b04['Nivel_Amenaza'] > 70) | (df_b04['Energia'] < 30)) &
    (df_b04['Sector'].isin(['Norte', 'Sur']))
]
if len(df_b04_critico) > 0:
    ciudad_critica_b04 = df_b04_critico['Ciudad'].value_counts().index[0]
else:
    ciudad_critica_b04 = "No crítico"
print(f"  • Registros críticos por ciudad: {df_b04_critico['Ciudad'].value_counts().to_dict()}")
print(f"  ✅ RESPUESTA: {ciudad_critica_b04}")

# MÓDULO 7: Sensor Más Usado
print("\n🧩 MÓDULO 7: Sensor Más Usado")
sensor_dominante_b04 = df_b04['Sensor_ID'].value_counts().index[0]
print(f"  • Sensor más frecuente: {sensor_dominante_b04}")
print(f"  ✅ RESPUESTA: {sensor_dominante_b04}")

# MÓDULO 8: Promedio Amenaza
print("\n🧩 MÓDULO 8: Promedio Amenaza")
promedio_amenaza_b04 = df_b04['Nivel_Amenaza'].mean()
print(f"  • Promedio de Nivel_Amenaza: {promedio_amenaza_b04:.2f}")
print(f"  ✅ RESPUESTA: {promedio_amenaza_b04:.2f}")

# MÓDULO 9: Máxima Frecuencia
print("\n🧩 MÓDULO 9: Máxima Frecuencia")
max_freq_b04 = df_b04['Frecuencia'].max()
print(f"  • Máxima Frecuencia: {max_freq_b04}")
print(f"  ✅ RESPUESTA: {max_freq_b04}")

# MÓDULO 10: Agentes Únicos
print("\n🧩 MÓDULO 10: Agentes Únicos")
agentes_unicos_b04 = df_b04['Agente'].nunique()
print(f"  • Total de agentes únicos: {agentes_unicos_b04}")
print(f"  ✅ RESPUESTA: {agentes_unicos_b04}")

# ============================================================================
# BOMBA B-05: OPERACIÓN ATLAS
# ============================================================================
print("\n\n" + "="*70)
print("BOMBA B-05: OPERACIÓN ATLAS ⭐⭐⭐☆☆")
print("="*70)

df_b05 = df_completo[df_completo['ID_Bomba'] == 'B-05'].copy()
df_b05['Timestamp'] = pd.to_datetime(df_b05['Timestamp'])
print(f"\n📊 Registros totales de B-05: {len(df_b05)}")

# MÓDULO 1: Suma Robusta (sin extremos)
print("\n🧩 MÓDULO 1: Suma Robusta")
amenaza_ordenada = df_b05['Nivel_Amenaza'].sort_values().reset_index(drop=True)
n = len(amenaza_ordenada)
percent_10 = int(n * 0.1)
amenaza_robusta = amenaza_ordenada.iloc[percent_10:n-percent_10]
suma_robusta_b05 = amenaza_robusta.sum()
print(f"  • Registros originales: {n}")
print(f"  • Registros eliminados (10% cada lado): {percent_10 * 2}")
print(f"  • Suma robusta: {suma_robusta_b05:.2f}")
if suma_robusta_b05 > 50:
    modulo1_b05 = "1111"
else:
    modulo1_b05 = bin(int(suma_robusta_b05))[2:].zfill(4) if suma_robusta_b05 > 0 else "0000"
print(f"  ✅ RESPUESTA: {modulo1_b05}")

# MÓDULO 2: Intensidad por Cable Dominante
print("\n🧩 MÓDULO 2: Intensidad Cable Dominante")
cable_counts = df_b05['Hex_Cable'].value_counts()
cable_dom_b05 = cable_counts.index[0]
df_cable_dom = df_b05[df_b05['Hex_Cable'] == cable_dom_b05]
intensidad_cable_dom = (df_cable_dom['Energia'] * df_cable_dom['Frecuencia']).mean()
ultimos_dos_b05 = int(intensidad_cable_dom) % 100
codigo_final_b05_m2 = ultimos_dos_b05 + 2026
print(f"  • Cable dominante: {cable_dom_b05} ({cable_counts.iloc[0]} registros)")
print(f"  • Intensidad promedio: {intensidad_cable_dom:.2f}")
print(f"  ✅ RESPUESTA: {codigo_final_b05_m2}")

# MÓDULO 3: Estabilidad por Rangos
print("\n🧩 MÓDULO 3: Estabilidad por Rangos")
rango_freq_b05 = df_b05['Frecuencia'].max() - df_b05['Frecuencia'].min()
promedio_freq_b05 = df_b05['Frecuencia'].mean()
porcentaje_rango = (rango_freq_b05 / promedio_freq_b05) * 100
estabilidad_b05_m3 = "UNSTABLE" if porcentaje_rango > 50 else "STABLE"
print(f"  • Rango: {rango_freq_b05:.2f}, Promedio: {promedio_freq_b05:.2f}")
print(f"  • Rango como % del promedio: {porcentaje_rango:.2f}%")
print(f"  ✅ RESPUESTA: {estabilidad_b05_m3}")

# MÓDULO 4: Cable Problemático
print("\n🧩 MÓDULO 4: Cable Problemático")
# Criterio: Amenaza > 70 O Energía < 30
df_b05_problema = df_b05[(df_b05['Nivel_Amenaza'] > 70) | (df_b05['Energia'] < 30)]
cable_problema = df_b05_problema['Hex_Cable'].value_counts().index[0] if len(df_b05_problema) > 0 else "N/A"
print(f"  • Registros problemáticos: {len(df_b05_problema)}")
print(f"  • Cable más frecuente en problemas: {cable_problema}")
print(f"  ✅ RESPUESTA: {cable_problema}")

# MÓDULO 5: Agentes en Sectores Críticos
print("\n🧩 MÓDULO 5: Agentes en Sectores Críticos")
df_b05_sectores = df_b05[df_b05['Sector'].isin(['Norte', 'Sur'])]
agentes_criticos_b05 = df_b05_sectores['Agente'].nunique()
print(f"  • Registros en Norte/Sur: {len(df_b05_sectores)}")
print(f"  • Agentes únicos: {agentes_criticos_b05}")
print(f"  ✅ RESPUESTA: {agentes_criticos_b05}")

# MÓDULO 6: Sensor Más Usado
print("\n🧩 MÓDULO 6: Sensor Más Usado")
sensor_dominante_b05 = df_b05['Sensor_ID'].value_counts().index[0]
print(f"  • Sensor más frecuente: {sensor_dominante_b05}")
print(f"  ✅ RESPUESTA: {sensor_dominante_b05}")

# MÓDULO 7: Patrones Temporales
print("\n🧩 MÓDULO 7: Patrones Temporales")
df_b05_sorted = df_b05.sort_values('Timestamp').reset_index(drop=True)
mitad = len(df_b05_sorted) // 2
energia_primera_mitad = df_b05_sorted.iloc[:mitad]['Energia'].mean()
energia_segunda_mitad = df_b05_sorted.iloc[mitad:]['Energia'].mean()
cambio_porcentual = ((energia_segunda_mitad - energia_primera_mitad) / energia_primera_mitad) * 100
if cambio_porcentual > 5:
    patron_b05 = "INCREASING"
elif cambio_porcentual < -5:
    patron_b05 = "DECREASING"
else:
    patron_b05 = "STABLE"
print(f"  • Energía primera mitad: {energia_primera_mitad:.2f}")
print(f"  • Energía segunda mitad: {energia_segunda_mitad:.2f}")
print(f"  • Cambio porcentual: {cambio_porcentual:.2f}%")
print(f"  ✅ RESPUESTA: {patron_b05}")

# MÓDULO 8: Máxima Amenaza
print("\n🧩 MÓDULO 8: Máxima Amenaza")
max_amenaza_b05 = df_b05['Nivel_Amenaza'].max()
print(f"  • Máximo nivel de amenaza: {max_amenaza_b05}")
print(f"  ✅ RESPUESTA: {max_amenaza_b05}")

# MÓDULO 9: Ciudad Dominante
print("\n🧩 MÓDULO 9: Ciudad Dominante")
ciudad_dominante_b05 = df_b05['Ciudad'].value_counts().index[0]
print(f"  • Ciudad con más registros: {ciudad_dominante_b05}")
print(f"  ✅ RESPUESTA: {ciudad_dominante_b05}")

# MÓDULO 10: Prioridad Dominante
print("\n🧩 MÓDULO 10: Prioridad Dominante")
prioridad_dominante_b05 = df_b05['Prioridad'].value_counts().index[0]
print(f"  • Conteo de prioridades: {dict(df_b05['Prioridad'].value_counts())}")
print(f"  ✅ RESPUESTA: {prioridad_dominante_b05}")

print("\n\n" + "="*70)
print("FIN DE RESPUESTAS")
print("="*70)
print("\n📚 NOTA IMPORTANTE PARA INSTRUCTORES:")
print("   - Este archivo es una GUÍA DE REFERENCIA")
print("   - Esperamos que los estudiantes obtengan resultados SIMILARES")
print("   - Pequeñas variaciones pueden ocurrir por redondeo o enfoque diferente")
print("   - Lo importante es el RAZONAMIENTO detrás del análisis")
print("="*70)
