"""
GENERADOR DE DATASET UNIFICADO PARA OPERACIÓN EQUIPO DINAMITA
Genera un dataset único con 1000+ registros mezclando datos de todas las bombas
"""

import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Configurar semilla para reproducibilidad
np.random.seed(42)

def generar_dataset_unificado():
    """
    Genera un dataset unificado con ~1000 registros de todas las bombas
    Incluye datos relevantes y ruido para hacer el análisis más desafiante
    """
    
    # Configuración: ~150 registros por bomba = ~1050 total
    registros_por_bomba = 150
    
    todas_las_filas = []
    
    # Configuraciones específicas para cada bomba
    configuraciones = {
        'B-01': {
            'base_amenaza': 12,
            'std_amenaza': 3,
            'energia_media': 55,
            'frecuencia_base': 200,
            'cable_dominante': 'G',
            'agentes_principales': ['AG-001', 'AG-002', 'AG-003', 'AG-004'],
            'sensor_moda': 101,
            'ciudad_principal': 'Bogotá',
            'otras_ciudades': ['Madrid', 'Lima', 'Caracas'],
            'timestamp_std': 60,
            'correlacion_positiva': True
        },
        'B-02': {
            'base_amenaza': 14,
            'std_amenaza': 2,
            'energia_media': 48,
            'frecuencia_base': 180,
            'cable_dominante': 'R',
            'agentes_principales': ['AG-005', 'AG-006', 'AG-007', 'AG-008'],
            'sensor_moda': 501,
            'ciudad_principal': 'Madrid',
            'otras_ciudades': ['Barcelona', 'Valencia', 'Sevilla'],
            'timestamp_std': 75,
            'correlacion_positiva': False
        },
        'B-03': {
            'base_amenaza': 13,
            'std_amenaza': 4,
            'energia_media': 52,
            'frecuencia_base': 190,
            'cable_dominante': 'R',
            'agentes_principales': ['AG-009', 'AG-010', 'AG-011'],
            'sensor_moda': 201,
            'ciudad_principal': 'Madrid',
            'otras_ciudades': ['Lisboa', 'Porto', 'Bilbao'],
            'timestamp_std': 65,
            'correlacion_positiva': True
        },
        'B-04': {
            'base_amenaza': 15,
            'std_amenaza': 3,
            'energia_media': 45,
            'frecuencia_base': 250,
            'cable_dominante': 'G',
            'agentes_principales': ['AG-012', 'AG-013', 'AG-014', 'AG-015'],
            'sensor_moda': 201,
            'ciudad_principal': 'Bogotá',
            'otras_ciudades': ['Medellín', 'Cali', 'Cartagena'],
            'timestamp_std': 85,
            'correlacion_positiva': False
        },
        'B-05': {
            'base_amenaza': 11,
            'std_amenaza': 2,
            'energia_media': 58,
            'frecuencia_base': 170,
            'cable_dominante': 'G',
            'agentes_principales': ['AG-016', 'AG-017', 'AG-018'],
            'sensor_moda': 501,
            'ciudad_principal': 'Quito',
            'otras_ciudades': ['Cuenca', 'Guayaquil', 'Ambato'],
            'timestamp_std': 70,
            'correlacion_positiva': True
        },
        'B-06': {
            'base_amenaza': 13,
            'std_amenaza': 3,
            'energia_media': 50,
            'frecuencia_base': 260,
            'cable_dominante': 'R',
            'agentes_principales': ['AG-019', 'AG-020', 'AG-021'],
            'sensor_moda': 201,
            'ciudad_principal': 'Quito',
            'otras_ciudades': ['Lima', 'Santiago', 'La Paz'],
            'timestamp_std': 80,
            'correlacion_positiva': False
        },
        'B-07': {
            'base_amenaza': 10,
            'std_amenaza': 4,
            'energia_media': 47,
            'frecuencia_base': 165,
            'cable_dominante': 'G',
            'agentes_principales': ['AG-022', 'AG-023', 'AG-024'],
            'sensor_moda': 401,
            'ciudad_principal': 'Barcelona',
            'otras_ciudades': ['Valencia', 'Málaga', 'Zaragoza'],
            'timestamp_std': 75,
            'correlacion_positiva': False
        }
    }
    
    base_time = datetime(2026, 1, 15, 10, 0, 0)
    
    for bomba_id, config in configuraciones.items():
        print(f"Generando datos para {bomba_id}...")
        
        for i in range(registros_por_bomba):
            # Generar Nivel_Amenaza con distribución normal
            amenaza = int(np.random.normal(config['base_amenaza'], config['std_amenaza']))
            amenaza = max(5, min(20, amenaza))  # Limitar entre 5 y 20
            
            # Generar Energía correlacionada o anti-correlacionada con amenaza
            if config['correlacion_positiva']:
                # Correlación positiva: mayor amenaza → mayor energía
                energia = int(config['energia_media'] + (amenaza - config['base_amenaza']) * 2 + np.random.normal(0, 5))
            else:
                # Correlación negativa: mayor amenaza → menor energía
                energia = int(config['energia_media'] - (amenaza - config['base_amenaza']) * 2 + np.random.normal(0, 5))
            energia = max(30, min(70, energia))
            
            # Generar Frecuencia con variabilidad
            frecuencia = int(config['frecuencia_base'] + np.random.normal(0, 30))
            frecuencia = max(60, min(300, frecuencia))
            
            # Asignar Cable según dominancia (60% al dominante, 30% segundo, 10% tercero)
            cables = ['R', 'G', 'B']
            cable_dom = config['cable_dominante']
            otros_cables = [c for c in cables if c != cable_dom]
            
            # Dar más peso al cable dominante en registros con alta energía
            if energia > config['energia_media']:
                prob_cable = [0.7 if c == cable_dom else 0.15 for c in cables]
            else:
                prob_cable = [0.5 if c == cable_dom else 0.25 for c in cables]
            cable = np.random.choice(cables, p=prob_cable)
            
            # Agentes: usar principales si energía > 50, sino aleatorios
            if energia > 50 and np.random.random() < 0.8:
                agente = np.random.choice(config['agentes_principales'])
            else:
                agente = f"AG-{np.random.randint(100, 999):03d}"
            
            # Sensores: moda aparece ~40% de las veces, otros distribuidos
            if np.random.random() < 0.4:
                sensor = config['sensor_moda']
            else:
                sensores_opcionales = [101, 201, 301, 401, 501, 601, 701, 801, 901]
                sensores_opcionales = [s for s in sensores_opcionales if s != config['sensor_moda']]
                sensor = np.random.choice(sensores_opcionales)
            
            # Timestamp con distribución normal alrededor del base_time
            delta_segundos = int(np.random.normal(0, config['timestamp_std']))
            timestamp = base_time + timedelta(seconds=delta_segundos)
            
            # Ciudad: principal aparece ~50% de las veces
            if np.random.random() < 0.5:
                ciudad = config['ciudad_principal']
            else:
                ciudad = np.random.choice(config['otras_ciudades'])
            
            # Agregar registro
            todas_las_filas.append({
                'ID_Bomba': bomba_id,
                'Nivel_Amenaza': amenaza,
                'Energia': energia,
                'Frecuencia': frecuencia,
                'Hex_Cable': cable,
                'Agente': agente,
                'Sensor_ID': sensor,
                'Timestamp': timestamp,
                'Ciudad': ciudad,
                'Sector': np.random.choice(['Norte', 'Sur', 'Este', 'Oeste', 'Centro']),
                'Prioridad': np.random.choice(['Alta', 'Media', 'Baja', 'Crítica']),
                'Estado': np.random.choice(['Activo', 'Inactivo', 'Pendiente', 'Verificado'])
            })
    
    # Crear DataFrame
    df = pd.DataFrame(todas_las_filas)
    
    # Mezclar filas para que no estén agrupadas por bomba
    df = df.sample(frac=1, random_state=42).reset_index(drop=True)
    
    return df


# Generar dataset
print("=" * 70)
print("GENERADOR DE DATASET UNIFICADO - OPERACIÓN EQUIPO DINAMITA")
print("=" * 70)
print("\nGenerando dataset con 1000+ registros...")

df = generar_dataset_unificado()

# Guardar CSV
filename = "dataset_bombas_completo.csv"
df.to_csv(filename, index=False)

print(f"\n✅ Dataset generado: {filename}")
print(f"   Total de registros: {len(df)}")
print(f"   Total de columnas: {len(df.columns)}")

# Mostrar información general
print("\n📊 Distribución por bomba:")
print(df['ID_Bomba'].value_counts().sort_index())

print("\n📋 Primeras 10 filas:")
print(df.head(10).to_string(index=False))

print("\n📈 Estadísticas generales:")
print(df[['Nivel_Amenaza', 'Energia', 'Frecuencia']].describe())

print("\n" + "=" * 70)
print("✅ Dataset unificado creado exitosamente!")
print("=" * 70)
print(f"\n💡 Los estudiantes deben filtrar por ID_Bomba para analizar cada bomba")
print("   Ejemplo: df[df['ID_Bomba'] == 'B-01']")
print("\n🎯 Este dataset incluye:")
print("   - Datos relevantes para resolver los 10 módulos")
print("   - Ruido y datos de otras bombas para aumentar dificultad")
print("   - Columnas adicionales que pueden distraer")
print("   - Requiere filtrado y análisis cuidadoso")
