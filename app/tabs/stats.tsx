import React, { useEffect, useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { BarChart } from "react-native-gifted-charts/dist/BarChart"
import { Card, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function stats() {

  const meses = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

  const valorInicial = meses.map(m => ({ label: m, value: 0 }))
  const [datosGrafico, setDatosGrafico] = useState<Array<{label: string, value: number}>>(valorInicial)
  
  return (
    <SafeAreaView className='flex-1 px-3 items-center justify-center'>
      <Text variant='headlineLarge' style={{ fontWeight: 'bold', marginBottom: 30 }}>Estadísticas</Text>
      
      <BarChart
        data={datosGrafico} 
        maxValue={100} 
        noOfSections={10} 
        barWidth={18} 
        spacing={5} 
        frontColor={"#4ABFF4"}
        roundedTop={false}
        isAnimated={true}
        yAxisTextStyle={styles.axisText} 
        xAxisLabelTextStyle={styles.axisText} 
        yAxisLabelContainerStyle={{ width: 35 }} 
        showFractionalValues={false} 
        width={Dimensions.get('window').width - 80} 
      />

      <Card mode='elevated' style={[styles.card, { marginTop: 30 }]}>
        <Card.Title title={<Text variant='titleLarge' style={styles.texto}>Tarjetas dominadas</Text>} />
        <Card.Content>
          <Text>• Tarjeta 1</Text>
          <Text>• Tarjeta 2</Text>
        </Card.Content>
      </Card>

      <Card mode='elevated' style={styles.card}>
        <Card.Title title={<Text variant='titleLarge' style={styles.texto}>Tarjetas pendientes</Text>} />
        <Card.Content>
          <Text>• Tarjeta 3</Text>
          <Text>• Tarjeta 4</Text>
        </Card.Content>
      </Card>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  axisText: { 
    color: "gray", 
    fontSize: 10 
  },
  card: {
    width: "95%",
    marginBottom: 20
  },
  texto: { 
    fontWeight: "bold" 
  }
})