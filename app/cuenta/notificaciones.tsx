import { View, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider, List, Switch, Text } from 'react-native-paper'

type AjustesNotificaciones = {
  push: boolean,  
  correo: boolean
}

export default function notificaciones() {
  
  const estiloContenedor = 'border border-gray-200 rounded-xl overflow-hidden bg-white'
  
  const estadoInicial = { 
    push: false, 
    correo: false 
  }

  const [ajustes, setAjustes] = useState<AjustesNotificaciones>(estadoInicial)

  function cambiarAjuste(clave: keyof AjustesNotificaciones, valor: boolean) {
    setAjustes(prev => ({
      ...prev,
      [clave]: valor
    }))
  }
  
  return (
    <ScrollView className="flex-1 bg-gray-50 p-6">
      <Text variant='labelSmall' style={styles.titulo}>
        Alertas de la app
      </Text>
      
      <View className={estiloContenedor}>
        <List.Item 
          title={"Notificaciones Push"} 
          description={"Recibir alertas en el móvil"} 
          right={() => <Switch 
                         value={ajustes.push} 
                         onValueChange={nuevoValor => cambiarAjuste("push", nuevoValor)} 
                       />
                }
        />

        <Divider style={{ marginLeft: 16, marginRight: 16 }} />
        
        <List.Item 
          title={"Correo electrónico"}
          description={"Resúmenes semanales"}
          right={() => <Switch 
                         value={ajustes.correo} 
                         onValueChange={nuevoValor => cambiarAjuste("correo", nuevoValor)} 
                       />
                }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    color: "#6b7280",          
    marginBottom: 16,
    textTransform: "uppercase",
    fontSize: 12,         
    fontWeight: "700",
    letterSpacing: 1.5,
    marginLeft: 16
  }
})