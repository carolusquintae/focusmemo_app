import React, { useState, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'

export default function ValoracionPregunta() {
  
  const numeros = ['1', '2', '3', '4', '5']
  const [puntuacion, setPuntuacion] = useState('3')
  
  const getRadioButton = useCallback((numero: string) => { return (
    <View key={numero} style={styles.opcion}>
      <RadioButton value={numero} color="#6200ee" />
      <Text variant='titleMedium' style={styles.numero}>{numero}</Text>
    </View>
  )}, [])
  
  return (
    <View style={styles.contenedor}>
      <Text variant='titleLarge' style={styles.valoracion}>Valoración de la pregunta</Text>

      <RadioButton.Group 
        onValueChange={puntuacion => setPuntuacion(puntuacion)} 
        value={puntuacion}
      >
        <View style={styles.fila}>
          {numeros.map(numero => getRadioButton(numero))}
        </View>
      </RadioButton.Group>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    padding: 16,
    width: '100%'
  },
  valoracion: {
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "center"
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  opcion: {
    alignItems: 'center'
  },
  numero: {
   
  }
})