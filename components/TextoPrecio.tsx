import { View, Text } from 'react-native'
import React from 'react'

export default function TextoPrecio() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginRight: 16 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>3,99 €</Text>      
      <Text style={{ fontSize: 14, color: "#666666", marginLeft: 4, marginBottom: 1 }}>
        / mes
      </Text>
    </View>
  )
}