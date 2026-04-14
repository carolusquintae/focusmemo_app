import React from 'react'
import { Tabs } from 'expo-router'
import { Icon } from 'react-native-paper'

export default function _layout() {
  return (
    <Tabs initialRouteName="inicio" screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="inicio"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => <Icon source={'home'} size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="mazos/listaMazos"
        options={{
          title: 'Mazos',
          tabBarIcon: ({ color, size }) => <Icon source={'cards'} size={size} color={color} />,
        }}
      />

      <Tabs.Screen 
        name="mazos/[id]" 
        options={{
          href: null // Evita que aparezca en la barra de navegación
        }} 
      />

      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, size }) => <Icon source={'chart-bar'} size={size} color={color} />,
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <Icon source={'account'} size={size} color={color} />,
        }}
      />
    </Tabs>
  )
}