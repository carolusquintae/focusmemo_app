import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function cambiarContrasena() {
  
  const [contraseñaActual, setContraseñaActual] = useState("")
  const [ocultarContraseñaActual, setOcultarContraseñaActual] = useState(true)

  const [contraseñaNueva, setContraseñaNueva] = useState("")
  const [ocultarContraseñaNueva, setOcultarContraseñaNueva] = useState(true)
  
  const iconoContraseñaActual = <TextInput.Icon 
                                  icon={ocultarContraseñaActual ? "eye-off" : "eye"} 
                                  onPress={() => setOcultarContraseñaActual(!ocultarContraseñaActual)} 
                                />

  const iconoContraseñaNueva = <TextInput.Icon 
                                 icon={ocultarContraseñaNueva ? "eye-off" : "eye"} 
                                 onPress={() => setOcultarContraseñaNueva(!ocultarContraseñaNueva)}
                               />
  
  return (
    <SafeAreaView className='flex-1'>
      <TextInput 
        mode='outlined' 
        label={"Contraseña actual"} 
        value={contraseñaActual} 
        onChangeText={setContraseñaActual} 
        secureTextEntry={ocultarContraseñaActual} 
        right={iconoContraseñaActual} 
        style={[styles.centrado, styles.margenPorAbajo]}
      />

      <TextInput 
        mode='outlined' 
        label={"Nueva contraseña"} 
        value={contraseñaNueva} 
        onChangeText={setContraseñaNueva} 
        secureTextEntry={ocultarContraseñaNueva} 
        right={iconoContraseñaNueva} 
        style={[styles.centrado, styles.margenPorAbajo]}
      />

      <Button 
        mode='contained' 
        onPress={() => {}}
        style={styles.centrado}
      >Actualizar</Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  centrado: {
    width: "90%",
    alignSelf: "center"
  },
  margenPorAbajo: {
    marginBottom: 15
  }
})