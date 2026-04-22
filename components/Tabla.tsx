import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Divider, Card, DataTable, Avatar } from 'react-native-paper'

type TablaProps = {
  puntos: number,
  errores: number
}

export default function Tabla({ puntos, errores }: TablaProps) {
  
  const filaEstilo = 'flex-row items-center justify-between py-4 px-10'

  return (
    <Card style={styles.tarjeta}>
      <View className={filaEstilo}>
        <View className="flex-row items-center">
          <Avatar.Icon 
            size={36} 
            icon="trophy" 
            color="#fbc02d" 
            style={{ backgroundColor: "#fff9c4" }} 
          />
          <Text variant="titleMedium" className="ml-4 text-gray-700">Puntos finales</Text>
        </View>
        <Text variant="headlineSmall" style={styles.textoPuntos}>{puntos}</Text>
      </View>

      <Divider style={styles.separador} />

      <View className={filaEstilo}>
        <View className="flex-row items-center">
          <Avatar.Icon 
            size={36} 
            icon="close-circle-outline" 
            color="#d32f2f" 
            style={{ backgroundColor: "#ffebee" }} 
          />
          <Text variant="titleMedium" className="ml-4 text-gray-700">Errores</Text>
        </View>
        <Text variant="headlineSmall" style={styles.textoErrores}>{errores}</Text>
      </View>
    </Card>
  )
}
  
const styles = StyleSheet.create({
  tarjeta: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "#f0f0f0"
  },
  separador: {
    height: 1,
    backgroundColor: "#eeeeee",
    marginHorizontal: 20
  },
  textoPuntos: {
    color: "#2e7d32",
    fontWeight: "900",
    letterSpacing: -1
  },
  textoErrores: {
    color: "#d32f2f",
    fontWeight: "900",
    letterSpacing: -1
  },
  contenedorIcono: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    
  }
})