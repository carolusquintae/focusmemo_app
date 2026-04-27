import { View, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Button, TextInput } from 'react-native-paper'

export default function editar() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6 items-center">
        <Avatar.Icon icon="account" size={100} />
        <Button mode="text" onPress={() => {}}>Cambiar foto</Button>
        
        <View className="w-full gap-4 mt-6">
          <TextInput 
            label="Nombre completo" 
            mode="outlined" 
            defaultValue="Nombre de Usuario" 
          />

          <TextInput 
            label="Correo electrónico" 
            mode="outlined" 
            defaultValue="usuario@correo.com" 
          />

          <TextInput 
            label="Biografía" 
            mode="outlined" 
            multiline={true} 
            numberOfLines={3} 
          />
          
          <Button 
            mode="contained" 
            style={{marginTop: 16, borderRadius: 12}} 
            onPress={() => {}}
          >Guardar Cambios</Button>
        </View>
      </View>
    </ScrollView>
  )
}