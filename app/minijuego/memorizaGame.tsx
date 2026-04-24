import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Button, MD3LightTheme, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Respuesta from '../../components/Respuesta'
import { useRouter } from 'expo-router'

const PREGUNTA = [
  {
    titulo: "¿Cuál es la capital de Francia?",
    opciones: [
      { letra: 'A', texto: 'Madrid', correcta: false },
      { letra: 'B', texto: 'París', correcta: true },
      { letra: 'C', texto: 'Londres', correcta: false },
      { letra: 'D', texto: 'Berlín', correcta: false }
    ]
  },
  {
    titulo: "¿En qué año se descubrió América?",
    opciones: [
      { letra: 'A', texto: '1923', correcta: false },
      { letra: 'B', texto: '1512', correcta: false },
      { letra: 'C', texto: '1482', correcta: false },
      { letra: 'D', texto: '1492', correcta: true }
    ]
  }
]

export default function memorizaGame() {
  
  const router = useRouter()
  
  const [respondido, setRespondido] = useState(false)
  const [tiempo, setTiempo] = useState(30)
  const [puntos, setPuntos] = useState(0)
  const [errores, setErrores] = useState(0)
  
  const [indicePregunta, setIndicePregunta] = useState(0)
  const preguntaActual = PREGUNTA[indicePregunta]

  const pantallaActiva = useRef(true)
  
  const textoBoton = indicePregunta < PREGUNTA.length - 1 
                       ? "Siguiente pregunta" 
                       : "Finalizar"
  
  useEffect(() => {
    pantallaActiva.current = true
  
    return () => {
      pantallaActiva.current = false
    }
  }, [])
  
  useEffect(() => {
    if (respondido) {
      return
    }
    
    const intervalo = setInterval(() => {
      setTiempo(segundosActuales => {
        
        if (segundosActuales <= 1) {
          clearInterval(intervalo)
          
          if (pantallaActiva.current === true) {
            setRespondido(true)
            setErrores(erroresActuales => erroresActuales + 1)
            
            Alert.alert(
              "¡Tiempo agotado!", 
              "No has seleccionado ninguna opción"
            )
          }

          return 0
        }

        return segundosActuales - 1
      })
    }, 1000)

    return () => clearInterval(intervalo)
  }, [respondido, indicePregunta])
  
  
  function manejarSeleccion(opcion: string, correcta: boolean) {
    if (respondido) {
      return
    }
    
    if (correcta) {
      setPuntos(puntosActuales => puntosActuales + 10)
    } else {
      setErrores(erroresActuales => erroresActuales + 1)
    }

    setRespondido(true)
  }

  function siguientePregunta() {
    if (indicePregunta < PREGUNTA.length - 1) {
      setIndicePregunta(indice => indice + 1)
      setRespondido(false)
      setTiempo(30)
    } else {
      router.push({
        pathname: "/estudio/resultados",
        params: {
          puntos,
          errores
        }
      })
    }
  }

  return (
    <SafeAreaView className='flex-1 items-center p-5'>
      <Text variant="headlineLarge" style={styles.titulo}>
        {preguntaActual.titulo}
      </Text>

      <View className='flex-row flex-wrap justify-center gap-4'>
        {
          preguntaActual.opciones.map(item => <Respuesta
                                                key={item.letra}
                                                opcion={item.letra}
                                                respuesta={item.texto}
                                                esCorrecta={item.correcta}
                                                revelar={respondido}
                                                alSeleccionar={manejarSeleccion}
                                              />
                                     )
        }
      </View>
      
      <View className='flex-row gap-7 mt-5'>
        <View>
          <Text variant='titleMedium'>Tiempo restante</Text>
          
          <View style={styles.circulo}>
            <Text variant='titleLarge' style={{ color: "white" }}>{tiempo}</Text>
          </View>
        </View>
        
        <View>
          <Text variant='titleMedium'>Puntos</Text>
          
          <View style={styles.circulo}>
            <Text variant='titleLarge' style={{ color: "white" }}>
              {puntos}
            </Text>
          </View>
        </View>
      </View>

      <Button 
        mode="contained" 
        onPress={siguientePregunta} 
        disabled={!respondido} 
        style={{ marginTop: 30, width: "90%" }}
      >{textoBoton}</Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontWeight: 'bold'
  },
  circulo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: MD3LightTheme.colors.primary, // cambiar color por el del tema
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 3 
    },
    shadowOpacity: 0.2,
    shadowRadius: 4
  }
})