import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Card, Text } from 'react-native-paper'
import { useRouter } from 'expo-router'

export default function inicio() {
  
  const router = useRouter()
  const requisitos = [
    "Tarjetas ilimitadas.",
    "Estadísticas avanzadas.",
    "Sincronización en la nube.",
    "Compartir mazos.",
    "Sin publicidad."
  ]
    
  function textoPrecio() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", marginRight: 16 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>3,99 €</Text>      
        <Text style={{ fontSize: 14, color: "#666666", marginLeft: 4, marginBottom: 1 }}>
          / mes
        </Text>
      </View>
    )
  }

  return (
    <View className='flex-1'>
      <Card mode='elevated' style={styles.card}>
        <Card.Title 
          title={<Text variant='titleLarge' style={{ fontWeight: "bold" }}>Hola, Carlos {/* nombre */}</Text>} 
          subtitle={`Progreso semanal: 56 %` /* progresoSemanal */} 
        />
      </Card>

      <Button 
        mode="contained" 
        onPress={() => router.push("/estudio/resultados")} 
        style={[styles.estiloBoton, { marginTop: 6 }]} 
        contentStyle={styles.estiloContenido}
      >
        Estudia ahora
      </Button>
      
      <Button 
        mode="contained-tonal" 
        onPress={() => router.push("/tabs/mazos/listaMazos")} 
        style={styles.estiloBoton} 
        contentStyle={styles.estiloContenido}
      >
        Mis mazos
      </Button>

      <Button 
        mode="contained-tonal" 
        onPress={() => router.push("/minijuego/memorizaGame")} 
        style={styles.estiloBoton} 
        contentStyle={styles.estiloContenido}
      >
        Minijuego
      </Button>
    
      <Card mode='elevated' style={styles.card}>
        <Card.Title 
          title={"FocusMemo Pro"}
          titleStyle={{ fontSize: 22, fontWeight: "bold" }}
          right={textoPrecio}
        />
        <Card.Content>
          {
            requisitos.map((item, index) => <Text key={index} style={styles.textoRequisitos}>· {item}</Text>)
          }
        </Card.Content>
        <Card.Actions style={{ justifyContent: "center" }}>
          <Button mode='contained' onPress={() => router.push("/premium")}>Hazte pro ahora</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  estiloBoton: { 
    width: "90%", 
    alignSelf: "center",
    borderRadius: 50,
    marginTop: 12 
  },
  estiloContenido: { 
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  card: { 
    margin: 12
  },
  textoRequisitos: { 
    marginBottom: 6, 
    fontSize: 14 
  }
})