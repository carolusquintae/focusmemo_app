import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { TextInput } from 'react-native-paper'

type InputContraseñaProps = {
  contraseña: string,
  setContraseña: (contraseña: string) => void,
  ocultar: boolean,
  icono?: React.ReactNode,
  style?: StyleProp<TextStyle>
}

export default function InputContraseña({contraseña, setContraseña, ocultar, icono, style}: InputContraseñaProps) {
  return (
    <TextInput
      label={"Contraseña"}
      mode='outlined'
      value={contraseña}
      onChangeText={setContraseña}
      secureTextEntry={ocultar}
      right={icono}
      style={style}
    />
  )
}