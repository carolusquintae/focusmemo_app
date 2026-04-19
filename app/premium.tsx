import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, Text } from 'react-native-paper'
import TextoPrecio from '../components/TextoPrecio'
import BotonGrande from '../components/BotonGrande'

export default function premium() {
  
  const beneficios = [
    "Tarjetas ilimitadas.",
    "Estadísticas avanzadas.",
    "Sincronización en la nube.",
    "Compartir mazos.",
    "Sin publicidad."
  ]
  
  return (
    <SafeAreaView className='items-center justify-center gap-4'>
      <Text variant='headlineSmall' style={{ fontWeight: "bold" }}>FocusMemo Pro</Text>
      
      <View className='flex-row gap-4 items-center justify-center'>
        <Text variant='titleLarge'>Precio</Text>
        <TextoPrecio />
      </View>

      <Card mode='elevated' style={{ width: "85%", marginVertical: 10 }}>
        <Card.Content>
          <Text variant='titleLarge'>Lista de beneficios {"\n"}</Text>
          {
            beneficios.map((item, index) => <Text key={index} style={styles.textoBeneficios}>· {item}</Text>)
          }
        </Card.Content>
      </Card>
      <BotonGrande 
        modo={"contained"} 
        texto={"Suscribirme"} 
        onPress={() => {}}
      />

      <BotonGrande 
        modo={"contained-tonal"} 
        texto={"Restaurar compra"} 
        onPress={() =>{}} 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  estiloBoton: { 
    width: "90%", 
    alignSelf: "center",
    borderRadius: 50,
    marginTop: 12
  }, 
  textoBeneficios: { 
    marginBottom: 6, 
    fontSize: 14 
  }
})