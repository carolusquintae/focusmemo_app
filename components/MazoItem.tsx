import { StyleSheet } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper'
import { useRouter } from 'expo-router'
import { Mazo } from '../model/Types'

type MazoItemProps = {
  mazo: Mazo
}

export default function MazoItem({mazo}: MazoItemProps) {
  
  const router = useRouter()

  return (
    <Card 
      mode="elevated" 
      style={styles.card} 
      onPress={() => router.push("/estudio/listaTarjetas")}
    >
      <Card.Title 
        title={<Text variant='titleLarge' style={styles.texto}>{mazo.nombre}</Text>} 
      />
      <Card.Content>
        {
          !!mazo.descripcion && <Text>{mazo.descripcion}</Text>
        }
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  texto: { 
    fontWeight: "bold" 
  },
  card: {
    width: "90%",
    marginBottom: 20,
    alignSelf: "center"
  }
})