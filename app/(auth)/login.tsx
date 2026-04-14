import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Checkbox, Text, TextInput } from 'react-native-paper'
import { useRouter } from 'expo-router'
import InputContraseña from '../../components/InputContraseña'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function login() {
  
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [contraseñaOculta, setContraseñaOculta] = useState(true)
  const [recordar, setRecordar] = useState(false)

  const icono = <TextInput.Icon 
                  icon={contraseñaOculta ? "eye-off" : "eye"} 
                  onPress={() => setContraseñaOculta(!contraseñaOculta)} 
                />
  
  return (
    <SafeAreaView className='flex-1'>
      <Text variant="headlineMedium" style={[styles.texto, { fontWeight: "bold" }]}>Bienvenido de nuevo</Text>
      <Text variant='bodyLarge' style={[styles.texto, { fontStyle: "italic", marginTop: 10, marginBottom: 10 }]}>
        ¿Vas a darle caña al estudio?
      </Text>
      
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

      <View className='flex-row items-center gap-2 m-3 ml-4'>
        <Checkbox 
          status={recordar ? "checked" : "unchecked"} 
          onPress={() => setRecordar(!recordar)} 
        />
        
        <Text>Recordarme</Text>
      </View>

      <Button 
        mode='contained' 
        onPress={() => router.replace("/tabs/inicio")} 
        style={styles.margenes}
      >Acceder</Button>

      <Text style={{ textAlign: "center", margin: 15 }}>¿No tienes cuenta?</Text>

      <Button 
        mode='outlined' 
        onPress={() => router.replace("/registro")}
        style={styles.margenes}
      >Crea tu cuenta</Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  texto: {
    textAlign: "center"
  },
  margenes: { 
    marginHorizontal: 20, 
    marginTop: 10 
  }
})