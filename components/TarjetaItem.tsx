import { Alert, StyleSheet } from 'react-native'
import React from 'react'
import { Tarjeta } from '../model/Types'
import { useRouter } from 'expo-router'
import { Button, Card, Text } from 'react-native-paper'

type TarjetaItemProps = {
  tarjeta: Tarjeta
}

export default function TarjetaItem({tarjeta}: TarjetaItemProps) {
  
  const router = useRouter()

  function mostrarAlerta() { 
    Alert.alert(
      "¿Seguro que quieres borrar la tarjeta?", 
      "La tarjeta borrada no podrá ser recuperada", 
      [
        { 
          text: "Sí, borrar", 
          onPress: () => console.log("tarjeta borrada") 
        }, 
        { 
          text: "No, cancelar" 
        }
      ]
    )
  }

  return (
    <Card mode="elevated" style={styles.card}>
      <Card.Content>
        <Text variant='titleLarge' style={styles.texto}>
          {tarjeta.pregunta}
        </Text>
      </Card.Content>

      <Card.Actions>
        <Button 
          mode={"contained-tonal"} 
          icon={"pencil"} 
          onPress={() => router.push("/estudio/editarTarjeta")}
        >Editar</Button>

        <Button 
          mode={"contained-tonal"} 
          textColor={"#b3261e"} 
          buttonColor={"#f9dedc"} 
          icon={"trash-can-outline"} 
          onPress={mostrarAlerta}
        >Eliminar</Button>
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  texto: { 
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  card: {
    width: "90%",
    marginBottom: 20,
    alignSelf: "center"
  }
})