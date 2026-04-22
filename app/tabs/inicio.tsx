import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Card, Text } from 'react-native-paper'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextoPrecio from '../../components/TextoPrecio'
import BotonGrande from '../../components/BotonGrande'

export default function inicio() {
  
  const router = useRouter()
  const beneficios = [
    "Tarjetas ilimitadas.",
    "Estadísticas avanzadas.",
    "Sincronización en la nube.",
    "Compartir mazos.",
    "Sin publicidad."
  ]
  
  return (
    <SafeAreaView className='flex-1'>
      <Card mode='elevated' style={styles.card}>
        <Card.Title 
          title={<Text variant='titleLarge' style={{ fontWeight: "bold" }}>Hola, Carlos {/* nombre */}</Text>} 
          subtitle={`Progreso semanal: 56 %` /* progresoSemanal */} 
        />
      </Card>

      <BotonGrande 
        modo={"contained"} 
        onPress={() => router.push("/estudio/estudiar")} 
        texto="Estudia ahora"
      />

      <BotonGrande 
        modo={"contained-tonal"} 
        texto={"Mis mazos"}
        onPress={() => router.push("/tabs/mazos/listaMazos")} 
      />
      
      <BotonGrande 
        modo={"contained-tonal"} 
        texto={"Minijuego"} 
        onPress={() => router.push("/minijuego/memorizaGame")} 
      />
      
      <Card mode='elevated' style={styles.card}>
        <Card.Title 
          title={"FocusMemo Pro"}
          titleStyle={{ fontSize: 22, fontWeight: "bold" }}
          right={() => <TextoPrecio />}
        />
        <Card.Content>
          {
            beneficios.map((item, index) => <Text key={index} style={styles.textoBeneficios}>· {item}</Text>)
          }
        </Card.Content>
        <Card.Actions style={{ justifyContent: "center" }}>
          <Button mode='contained' onPress={() => router.push("/premium")}>Hazte pro ahora</Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: { 
    margin: 12
  },
  textoBeneficios: { 
    marginBottom: 6, 
    fontSize: 14 
  }
})