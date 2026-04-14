import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { useRouter } from 'expo-router'
import InputContraseña from '../../components/InputContraseña'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function registro() {
  
  const router = useRouter()
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [contraseñaOculta, setContraseñaOculta] = useState(true)

  const icono = <TextInput.Icon 
                  icon={contraseñaOculta ? "eye-off" : "eye"} 
                  onPress={() => setContraseñaOculta(!contraseñaOculta)} 
                />

  return (
    <SafeAreaView className='flex-1'>
      <Text variant='headlineMedium' style={{ textAlign: "center", fontWeight: "bold" }}>
        Crea tu cuenta
      </Text>
      
      <TextInput
        label={"Nombre"}
        mode='outlined'
        value={nombre}
        onChangeText={setNombre}
        style={styles.margenes}
      />

      <TextInput
        label={"Email"}
        mode='outlined'
        value={email}
        onChangeText={setEmail}
        style={styles.margenes}
      />

      <InputContraseña 
        contraseña={contraseña} 
        setContraseña={setContraseña} 
        ocultar={contraseñaOculta} 
        icono={icono}
        style={styles.margenes}
      />

      <Button 
        mode='contained' 
        onPress={() => router.replace("/tabs/inicio")} 
        style={styles.margenes}
      >Registrarme</Button>

      <Button 
        mode='text' 
        onPress={() => router.replace("/login")} 
        style={styles.margenes}
      >Cancelar</Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  margenes: { 
    marginHorizontal: 20, 
    marginTop: 10 
  }
})