import React from 'react'
import ValoracionPregunta from '../../components/ValoracionPregunta'
import { SafeAreaView } from 'react-native-safe-area-context'
import BarraProgreso from '../../components/BarraProgreso'
import { Button, Card, Text } from 'react-native-paper'
import { useRouter } from 'expo-router'

export default function estudiar() {
  
  const router = useRouter()
  
  return (
    <SafeAreaView className='items-center justify-center'>
      <Text variant='headlineLarge' style={{ fontWeight: "bold" }}>Mazo 1</Text>
      <BarraProgreso porcentajeFinal={3 / 4} />
      <Card style={{ width: "90%", margin: 20 }}>
        <Card.Content>
          <Text 
            variant='headlineSmall' 
            style={{ fontFamily: 'sans-serif-medium', fontWeight: "600" }}
          >
            Pregunta 1
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button 
            mode='contained' 
            onPress={() => router.push("/minijuego/memorizaGame")}
          >
            Ver respuestas
          </Button>
        </Card.Actions>
      </Card>
      <ValoracionPregunta />
    </SafeAreaView>
  )
}