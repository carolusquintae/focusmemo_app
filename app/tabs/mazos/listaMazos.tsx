import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, FAB, Modal, Text, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import MazoItem from '../../../components/MazoItem'
import { Mazos } from '../../../model/Types'
import ColorPicker, { Panel1, HueSlider, Preview } from 'reanimated-color-picker'

export default function listaMazos() {
  
  const mazos: Mazos = [
    {
      idMazo: 1,
      idUsuario: 1,
      nombre: "Inglés B2"
    },
    {
      idMazo: 2,
      idUsuario: 1,
      nombre: "DAM Bases de datos",
      descripcion: "Mazo de tarjetas sobre BD relacionales"
    },
    {
      idMazo: 3,
      idUsuario: 1,
      nombre: "Oposiciones policía"
    }
  ]

  const [modalVisible, setModalVisible] = useState(false)
  const [nombreMazo, setNombreMazo] = useState("")
  const [colorMazo, setColorMazo] = useState("#6750a4")
  
  return (
    <SafeAreaView className='flex-1'>
      <Text variant='headlineLarge' style={styles.texto}>
        Mis mazos
      </Text>
      
      <FlatList
        data={mazos}
        keyExtractor={ item => item.idMazo.toString() }
        renderItem={ ({item}) => <MazoItem mazo={item} /> }
        contentContainerStyle={{ paddingBottom: 120 }} 
      />

      <FAB 
        mode={"elevated"} 
        icon={"plus"} 
        color={"#ffffff"}
        customSize={60} 
        style={styles.fab} 
        onPress={() => setModalVisible(true)} 
      />

      <Modal 
        visible={modalVisible} 
        onDismiss={() => setModalVisible(false)} 
        contentContainerStyle={styles.bottomSheet}
      >
        <KeyboardAvoidingView behavior={"height"}>
          <Text 
            variant='headlineSmall' 
            style={{ fontWeight: "bold", textAlign: "center", marginBottom: 20 }}
          >Crear mazo</Text>

          <TextInput 
            mode="outlined" 
            label="Nombre del mazo" 
            value={nombreMazo} 
            onChangeText={setNombreMazo} 
            autoFocus={true} 
            activeOutlineColor="#6750a4" 
            outlineColor="#e0e0e0" 
            style={styles.input} 
          />

          <Text variant="titleMedium" style={styles.labelColor}>Color del mazo</Text>

          <View className='mb-5'>
            <ColorPicker 
              value={colorMazo} 
              onComplete={ ({ hex }) => setColorMazo(hex) }
            >
              <Panel1 style={styles.panel} />
              <HueSlider style={styles.slider} />
              <Preview hideText={false} style={styles.preview} />
            </ColorPicker>
          </View>
          
          <Button 
            mode="contained" 
            onPress={() => setModalVisible(false)}
            style={{ marginTop: 20 }}
          >Guardar</Button>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  texto: { 
    fontWeight: "bold", 
    textAlign: "center", 
    marginBottom: 20
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: "#6750a4", 
    elevation: 15,
    shadowColor: "#6750a4",
    shadowOffset: { 
      width: 0, 
      height: 10 
    },
    shadowOpacity: 0.6,
    shadowRadius: 12,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 25,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 10
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 15,
  },
  labelColor: {
    marginBottom: 10,
    fontWeight: '600',
  },
  panel: {
    height: 150,
    borderRadius: 15,
    marginBottom: 15
  },
  slider: {
    height: 20,
    borderRadius: 10,
    marginBottom: 15
  },
  preview: {
    height: 30,
    borderRadius: 10
  }
})