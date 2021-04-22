import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../assets/background-app.jpg')}
      resizeMode="cover"
      style={styles.background}
    >    
    <LinearGradient
      // Background Linear Gradient
      colors={['transparent','rgba(0,0,0,1)']}
      style={styles.gradient}
    />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  gradient:{
    position:'absolute',
    width: '100%',
    height:'100%',
    opacity:0.5,
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
