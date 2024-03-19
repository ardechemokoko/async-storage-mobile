import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {

  const [value, setValue] = useState(null);
  const load = async()=>{
    try {
      const  name = await AsyncStorage.getItem('myName');
      if(name !==null){
        setValue(name);
      }
    } catch (error) {
      alert(error)
    }
  }

  useLayoutEffect(()=>{
    load();
  },[])

  const Logout = async()=>{
    try {
      await AsyncStorage.removeItem('myName');
      navigation.navigate('Login');
    } catch (error) {
      alert(error);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Utilisateur : {value}</Text>
      <Button 
        title='Retour à la page hom'
        onPress={Logout}
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