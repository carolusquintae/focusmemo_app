import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name="ajustes" 
        options={{ 
          headerShown: false 
        }} 
      />

      <Stack.Screen 
        name="editar" 
        options={{ 
          title: 'Editar Cuenta' 
        }} 
      />

      <Stack.Screen 
        name="notificaciones" 
        options={{ 
          title: 'Notificaciones' 
        }} 
      />

      <Stack.Screen 
        name="seguridad" 
        options={{ 
          title: 'Seguridad' 
        }} 
      />

      <Stack.Screen 
        name="cambiarContrasena" 
        options={{ 
          title: 'Cambiar contraseña' 
        }} 
      />
    </Stack>
  )
}