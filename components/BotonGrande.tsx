import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'

type BotonGrandeProps = {
  texto: string,
  modo: React.ComponentProps<typeof Button>['mode'],
  onPress: () => void,
  style?: StyleProp<ViewStyle>
}

export default function BotonGrande({texto, modo, onPress, style}: BotonGrandeProps) {
  
  const estiloTexto = modo === "contained" ? { color: "white" } : {}
  
  return (
    <Button 
      mode={modo} 
      onPress={onPress} 
      style={[styles.estiloBoton, style]} 
      contentStyle={styles.estiloContenido}
    >
      <Text style={estiloTexto}>{texto}</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  estiloBoton: { 
    width: "90%", 
    alignSelf: "center",
    borderRadius: 50,
    marginTop: 12 
  },
  estiloContenido: { 
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
})