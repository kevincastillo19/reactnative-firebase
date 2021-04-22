import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { Text, StyleSheet, View } from 'react-native'
export default function initialScreen({ navigation }) {
  return (
    <Background>
      <View style={styles.bottomContainer}>
        <Header style={styles.title}>adba</Header>
        <Paragraph style={styles.text}>
          Watch your favorite movies or series on only one plataform. You can
          watch it anytime and anywhere.
        </Paragraph>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('LoginScreen')}
        >
          Get started
        </Button>
      </View>
    </Background>
  )
}
const styles = StyleSheet.create({
  title: {
    color: '#ffffff',
    padding: 10,
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:20
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    padding: 20,
  },
  bottomContainer:{
      marginTop:400,
      width:'100%'
  }
})
