import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    const [name,setName]=useState(null);

    const HandleSave = async() => {
        if(name.length > 0){
            try {
                await AsyncStorage.setItem("myName",name)
                setName(null)
                navigation.navigate('Home');
            } catch (error) {
                alert(error);
            }
        }
        else{
            alert('Le nom est obligatoire !');
        }
    }
    const load = async()=>{
       try {
            let name = await AsyncStorage.getItem('myName');
            if(name !== null){
                navigation.navigate('Home');
            }
       } catch (error) {
            alert(error)
       } 
    }

    useEffect(()=>{
        load()
    },[]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <MaterialIcons name="facebook" size={80} color="white" />
      </View>
      <View style={styles.inputContianer}>
        <Text>{name}</Text>
        <TextInput
            placeholder='Votre nom ' 
            style={styles.input}
            onChangeText={text=>setName(text)}
        />
        <TouchableOpacity 
        onPress={HandleSave}
        style={styles.touchable}>
            <View style={styles.boutton}>
                <Text style={styles.textBnt}>Se connecter</Text>
            </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#229EAD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        marginBottom:40,
    },
    inputContianer:{
        width :"100%",
        paddingHorizontal:50
    },
    input:{
        backgroundColor :'#FFF',
        borderRadius:25,
        padding:9,
        textAlign:'center',
        fontSize:19
    },
    touchable:{
        marginVertical:9
    },
    boutton:{
        borderColor:'white',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        padding:12,
        borderRadius:25,
        marginTop:20
    },
    textBnt:{
        color:'white'
    }
})