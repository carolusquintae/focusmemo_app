import '../global.css'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name='premium' 
        options={{ 
          headerShown: true, 
          title: "FocusMemo Pro" 
        }} 
      />
    </Stack>
  )
}