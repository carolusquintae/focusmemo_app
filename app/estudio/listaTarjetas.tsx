import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import TarjetaItem from '../../components/TarjetaItem'
import { Tarjetas } from '../../model/Types'
import { useRouter } from 'expo-router'

export default function listaTarjetas() {
  
  const router = useRouter()
  const tarjetas: Tarjetas = [
    {
      idTarjeta: 1,
      idMazo: 1,
      pregunta: "Año en el que se descubrió América",
      respuesta: "1492"
    },
    {
      idTarjeta: 2,
      idMazo: 1,
      pregunta: "Capital de Francia",
      respuesta: "París"
    },
    {
      idTarjeta: 3,
      idMazo: 1,
      pregunta: "Río más largo del mundo",
      respuesta: "Amazonas"
    },
    {
      idTarjeta: 4,
      idMazo: 1,
      pregunta: "Capital de España",
      respuesta: "Madrid"
    },
    {
      idTarjeta: 5,
      idMazo: 1,
      pregunta: "Capital de Italia",
      respuesta: "Roma"
    },
    {
      idTarjeta: 6,
      idMazo: 1,
      pregunta: "Capital de Suiza",
      respuesta: "Laquesea"
    }
  ]

  return (
    <SafeAreaView className='flex-1'>
      <Text variant='headlineLarge' style={styles.texto}>Lista de tarjetas</Text>
      <FlatList 
        data={tarjetas} 
        keyExtractor={ item => item.idTarjeta.toString() } 
        renderItem={ ({item}) => <TarjetaItem tarjeta={item} /> } 
        style={{ flex: 1 }}
      />
      <Button 
        mode={"contained"} 
        onPress={() => router.push("/modal/editarTarjeta")}
        style={{ width: "90%", alignSelf: "center" }}
      >Crear tarjeta</Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  texto: { 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 20
  }
})