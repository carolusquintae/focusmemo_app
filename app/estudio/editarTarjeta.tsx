import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

export default function editarTarjeta() {
  
  const [editar, setEditar] = useState(false)
  const [pregunta, setPregunta] = useState("")
  const [respuesta, setRespuesta] = useState("")
  const router = useRouter()

  return (
    <SafeAreaView>
      <Text 
        variant='headlineLarge' 
        style={{ textAlign: "center", fontWeight: "bold" }}
      >{editar ? "Editar" : "Crear"} tarjeta</Text>

      <TextInput 
        mode={"outlined"}
        label={"Pregunta"} 
        value={pregunta}
        onChangeText={setPregunta}
        style={styles.input}
      />

      <TextInput 
        mode={"outlined"}
        label={"Respuesta"} 
        value={respuesta}
        onChangeText={setRespuesta}
        style={[styles.input, { marginBottom: 30 }]}
      />

      <Button 
        mode={"contained"} 
        onPress={() => router.back()}
        style={{ width: "90%", alignSelf: "center" }}
      >{editar ? "Actualizar" : "Crear"}</Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 20,
    marginTop: 10
  }
})