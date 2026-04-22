import { StyleSheet, View } from "react-native"
import React from "react"
import { Button, Text } from "react-native-paper"

type RespuestaProps = { 
  opcion: string, 
  respuesta: string,
  esCorrecta: boolean,
  revelar: boolean,
  alSeleccionar: (opcion: string, correcta: boolean) => void
}

export default function Respuesta({opcion, respuesta, esCorrecta, revelar, alSeleccionar}: RespuestaProps) { 
  
  const colorBoton = !revelar 
                        ? undefined 
                        : esCorrecta 
                          ? "#4caf50" 
                          : "#f44336"
  
  return (
    <Button 
      mode="contained" 
      compact={true} 
      style={styles.boton} 
      contentStyle={styles.estiloContenido} 
      buttonColor={colorBoton} 
      onPress={() => alSeleccionar(opcion, esCorrecta)}
    >
      <View style={styles.contenedorInterno}>
        <Text style={[styles.textoBoton, { fontWeight: "bold" }]}>
          {opcion}.
        </Text>
        
        <Text style={[styles.textoBoton, { marginLeft: 20 }]}>
          {respuesta}
        </Text>
      </View>
    </Button>
  )
}

const styles = StyleSheet.create({
  boton: {
    borderRadius: 99,
    width: '47%',
    paddingHorizontal: 0
  },
  estiloContenido: { 
    height: 56,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  contenedorInterno: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textoBoton: {
    color: "white"
  },
  titulo: {
    textAlign: "center",
    marginBottom: 20
  } 
})