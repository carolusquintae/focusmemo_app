import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { MD3Colors, ProgressBar, Text } from 'react-native-paper'

type BarraProgresoProps = {
  porcentajeFinal: number
}

export default function BarraProgreso({porcentajeFinal}: BarraProgresoProps) {

  const [progreso, setProgreso] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgreso(porcentajeFinal), 300)
    return () => clearTimeout(timer)
  }, [porcentajeFinal])
  

  return (
    <View className='w-[90%] justify-center'>
      <Text variant='titleLarge' style={{ textAlign: 'center' }}>
        Progreso: {(progreso * 100).toFixed(0)}%
      </Text>
      <ProgressBar 
        progress={progreso} 
        color={MD3Colors.primary60} 
        style={{ height: 10, borderRadius: 5, marginTop: 10 }} 
      />
    </View>
  )
}