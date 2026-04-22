import { StyleSheet } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams, useRouter } from 'expo-router'
import Tabla from '../../components/Tabla'

export default function resultados() {
  
  const router = useRouter()
  const {puntos, errores} = useLocalSearchParams<{puntos: string, errores: string}>()

  const puntosFinales = Number(puntos) || 0
  const erroresFinales = Number(errores) || 0

  return (
    <SafeAreaView className='flex-1 p-5 items-center'>
      <Text 
        variant='headlineLarge' 
        style={{ textAlign: "center", fontWeight: "bold", marginBottom: 40 }}
      >
        Resultados
      </Text>

      <Tabla puntos={puntosFinales} errores={erroresFinales} />

      <Button 
          mode="contained" 
          onPress={() => router.replace("/estudio/estudiar")}
          style={[styles.boton, { margin: 20 }]}
        >
          Repetir Mazo
        </Button>

        <Button 
          mode="outlined" 
          onPress={() => router.replace("/tabs/inicio")}
          style={styles.boton}
        >
          Ir al Inicio
        </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  tarjeta: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    elevation: 4
  },
  textoPuntos: {
    color: '#4caf50',
    fontWeight: 'bold'
  },
  textoErrores: {
    color: '#f44336',
    fontWeight: 'bold'
  },
  boton: {
    width: "90%"
  }
})