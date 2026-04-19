import { ScrollView, Switch, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Avatar, Text, Divider, List, IconButton } from 'react-native-paper'
import { useRouter } from 'expo-router'

export default function perfil() {
  
  const router = useRouter()
  const [modoOscuroActivado, setModoOscuroActivado] = useState(false)
  const estiloContenedorSeccion = "border border-gray-200 rounded-xl overflow-hidden bg-white"
  const estiloTituloSeccion = "ml-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-widest"
  const estiloDivider = "mx-4"

  return (   
    <ScrollView className='flex-1 bg-white'>
      <View className='m-6'>
        <View className='flex-row items-center gap-4 mt-4 mb-8'>
          <Avatar.Icon icon={"account"} size={56} />
          <Text variant='headlineSmall' className='font-bold'>Nombre de Usuario</Text>
        </View>
        
        <View className="mb-6">
          <Text className={estiloTituloSeccion}>Ajustes de la cuenta</Text>

          <View className={estiloContenedorSeccion}>
            <List.Item
              title="Editar Perfil"
              left={props => <List.Icon {...props} icon="account-cog-outline" />}
              right={props => <IconButton 
                                {...props} 
                                icon="chevron-right" 
                                onPress={() => router.push("/cuenta/editar")}
                              />
                    }
            />
            <Divider className={estiloDivider} />
            <List.Item
              title="Seguridad"
              left={props => <List.Icon {...props} icon="lock-outline" />}
              right={props => <IconButton 
                                {...props} 
                                icon="chevron-right" 
                                onPress={() => router.push("/cuenta/seguridad")}
                              />
                    }
            />
          </View>
        </View>

        <View className="mb-6">
          <Text className={estiloTituloSeccion}>
            Preferencias
          </Text>

          <View className={estiloContenedorSeccion}>
            <List.Item
              title="Modo Oscuro"
              left={props => <List.Icon {...props} icon="theme-light-dark" />}
              right={props => <Switch 
                                {...props}
                                value={modoOscuroActivado} 
                                onValueChange={() => setModoOscuroActivado(!modoOscuroActivado)} 
                              />
                    }
            />
            <Divider className={estiloDivider} />
            <List.Item
              title="Notificaciones"
              left={props => <List.Icon {...props} icon="bell-outline" />}
              right={props => <IconButton 
                                {...props} 
                                icon="chevron-right" 
                                onPress={() => router.push("/cuenta/notificaciones")} 
                              />
                    }
            />
          </View>
        </View>
        
        <View className='mt-10'>
          <Button 
            onPress={() => router.replace("/(auth)/login")} 
            mode="contained-tonal" 
            className="rounded-xl" 
            buttonColor="#f3f4f6" 
            textColor="#374151"            
          >Cerrar sesión</Button>
        </View>
      </View>
    </ScrollView>
  )
}