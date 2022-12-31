import React, {useState, useEffect, useContext} from 'react';
import {View, TextInput, Text, StyleSheet, ActivityIndicator, KeyboardAvoidingView, Platform, Touchable, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';
import Background from '../components/Background';
import Btn from '../components/Btn';
import {darkGreen, base, primary} from '../components/Constants';
import { AuthContext } from "../context/AuthContext";
import Toast from 'react-native-toast-message'



const Login = ({navigation}) => {
  const { login, email, setEmail, userData, loggedIn, spinner, loginError, password, setPassword } = useContext(AuthContext);


  // useEffect(() => {
  //   if(userData === null) {
  //     navigation.replace("Login");
  //   } else {
  //     navigation.replace("Tabs");
  //   }
  // }, [userData]);

  useEffect(() => {
    if(userData) {
      navigation.replace("Tabs");
    } 
  }, [userData]);

  return (
    <SafeAreaView>
    <StatusBar />
    <Background>
      <View style={{alignItems: 'center'}}>

      <View style={{backgroundColor: "white"}}>
        <Toast
       position='top'
       topOffset={1}/>
        </View>
           

        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>

       
        
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 410,
            paddingHorizontal: 20,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>

       
               
          <Text style={{fontSize: 40, color: base, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
         {/* {loginError ? 
         <Text
         style={{
          color: 'red',
          fontSize: 16,
          textAlign: 'center',
          justifyContent: 'center',
         }}>
         {loginError.message}
       </Text> : <></>} */}

       {/* <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.container}> */}
          <TextInput
              style={styles.input}
              placeholderTextColor={base}
              placeholder="Email Address"
              value={email}
              autoCapitalize="none"
              onChangeText={(Text)=>setEmail(Text)} />
          <TextInput
              style={styles.input}
              placeholderTextColor={base}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(Text)=>setPassword(Text)} />
        
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{color: primary, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password?
            </Text>
            </TouchableOpacity>
          </View>
         
    <TouchableOpacity
    onPress={login}
      style={styles.button}>
         {spinner ? <ActivityIndicator size="large" color="#ffffff" />
 : <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
      login
      </Text> }
      
    </TouchableOpacity>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: base, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>

          

        </View>
      </View>
    </Background>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: 10,
  },
  input: {
    borderRadius: 100, 
    color: base, 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    width: "80%", 
    backgroundColor: 'rgb(220,220, 220)',
     marginVertical: 10
  },
  button: {
    backgroundColor: base,
    borderRadius: 100,
    alignItems: 'center',
    width: "80%",
    paddingVertical: 5,
    marginVertical: 10
  }
});