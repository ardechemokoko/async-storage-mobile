import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button 
        title='Retour à la page hom'
        onPress={()=>navigation.goBack()}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });