import { View, ScrollView, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { Divider, List, Switch, Text } from 'react-native-paper'
import { useRouter } from 'expo-router'

type AjustesSeguridad = {
  biometria: boolean,
  alertasInicio: boolean
}

export default function seguridad() {
  
  const estiloContenedor = 'border border-gray-200 rounded-xl overflow-hidden bg-white'
  
  const estadoInicial = {
    biometria: false,
    alertasInicio: true
  }
  
  const [ajustes, setAjustes] = useState<AjustesSeguridad>(estadoInicial)
  const router = useRouter()
  
  function cambiarAjuste(clave: keyof AjustesSeguridad, valor: boolean) {
    setAjustes(prev => ({
      ...prev,
      [clave]: valor
    }))
  }
  
  function mostrarAlerta() { 
    Alert.alert(
      "Función en desarrollo", 
      "Pronto estará disponible esta función para proteger aún más la cuenta. Gracias por la espera"
    )
  }
  
  return (
    <ScrollView className="flex-1 bg-gray-50 p-6">
      <Text variant='labelSmall' style={styles.titulo}>Acceso y Contraseña</Text>
      <View className={`${estiloContenedor} mb-8`}>
        <List.Item
          title={"Cambiar contraseña"}
          description={"Se recomienda usar una clave segura"}
          left={props => <List.Icon {...props} icon="lock-reset" />}
          right={props => <List.Icon {...props} icon="chevron-right" />}
          onPress={() => router.push("/cuenta/cambiarContrasena")}
        />

        <Divider style={styles.divider} />

        <List.Item
          title="Activar 2FA"
          description="Añade una capa extra de seguridad"
          left={props => <List.Icon {...props} icon="shield-check-outline" />}
          right={props => <List.Icon {...props} icon="chevron-right" />}
          onPress={mostrarAlerta}
        />
      </View>

      <Text variant='labelSmall' style={styles.titulo}>Seguridad Avanzada</Text>
      <View className={estiloContenedor}>
        
        <List.Item
          title={"Bloqueo con Huella"}
          description={"Gestiona cómo proteges tu cuenta y tus datos personales"}
          left={props => <List.Icon {...props} icon="fingerprint" />}
          right={() => <Switch 
                         value={ajustes.biometria} 
                         onValueChange={(val) => cambiarAjuste("biometria", val)} 
                       />
                }
        />

        <Divider style={styles.divider} />
                
        <List.Item
          title={"Alertas de inicio de sesión"}
          description={"Te avisaremos si alguien entra en tu cuenta"}
          left={props => <List.Icon {...props} icon="bell-badge-outline" />}
          right={() => <Switch 
                         value={ajustes.alertasInicio} 
                         onValueChange={(val) => cambiarAjuste("alertasInicio", val)} 
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
    marginBottom: 8,
    textTransform: "uppercase",
    fontSize: 12,         
    fontWeight: "700",
    letterSpacing: 1.5,
    marginLeft: 16
  },
  divider: {
    marginLeft: 56,
    marginRight: 16 
  }
})