import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Icon, Text } from 'react-native-paper'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function index() {
  
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => router.replace("/login"), 700)
    return () => clearTimeout(timer)
  }, [router])
  
  return (
    <LinearGradient 
      className='flex-1' 
      colors=
      {[ "#121212", "#00f2fe" ]}
      // {[ "#28e4ee", "#0078ff", "#0926e6" ]}
    >
      <View className='flex-1 items-center justify-center'>
        <View className='p-8 rounded-[32px] mb-9' style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
          <Icon source={"home"} color={styles.colorTexto.color} size={100} /> {/* cambiar */}
        </View>

        <Text style={[styles.colorTexto, { fontWeight: "700" }]} variant='displayMedium'>
          FocusMemo
        </Text>

        <Text variant='titleMedium' style={[styles.colorTexto, { marginTop: 8 }]}>
          Estudia mejor. Recuerda más.
        </Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  colorTexto: {
    color: "white"
  }
})