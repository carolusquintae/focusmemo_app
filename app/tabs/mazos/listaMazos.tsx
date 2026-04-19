import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import MazoItem from '../../../components/MazoItem'
import { Mazos } from '../../../model/Types'

export default function listaMazos() {
  
  const mazos: Mazos = [
    {
      idMazo: 1,
      idUsuario: 1,
      nombre: "Inglés B2"
    },
    {
      idMazo: 2,
      idUsuario: 1,
      nombre: "DAM Bases de datos",
      descripcion: "Mazo de tarjetas sobre BD relacionales"
    },
    {
      idMazo: 3,
      idUsuario: 1,
      nombre: "Oposiciones policía"
    }
  ]
  
  return (
    <SafeAreaView>
      <Text variant='headlineLarge' style={styles.texto}>Mis mazos</Text>
      <FlatList
        data={mazos}
        keyExtractor={ item => item.idMazo.toString() }
        renderItem={ ({item}) => <MazoItem mazo={item} /> }
      />
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