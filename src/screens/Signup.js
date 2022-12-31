import React, {useState, useContext} from 'react';
import {View, Text, TextInput, KeyboardAvoidingView, Platform, ActivityIndicator, Touchable, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../components/Background';
import Btn from '../components/Btn';
import {darkGreen, primary, primary_light, secondary, secondary_light, base} from '../components/Constants';
import Field from '../components/Field';
import { AuthContext } from "../context/AuthContext";
import Toast from 'react-native-toast-message'



const Signup = ({navigation}) => {
  const { handleRegister, userData, loggedIn, username, spinner, regError, setUsername, phone, setPhone, country, setCountry, email, setEmail, passwordRetype, setPasswordRetype, password, setPassword } = useContext(AuthContext);

  // useEffect(() => {
  //   if(userData === null) {
  //     navigation.replace("Login");
  //   } else {
  //     navigation.replace("Tabs");
  //   }
  // }, [userData]);

 
  return (
    <SafeAreaView>
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
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account 
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 410,
            borderTopLeftRadius: 130,
            paddingTop: 30,
            alignItems: 'center',
          }}>
           

            <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} >
        

          {/* {regError ?
          <Text
          style={{
            color: 'red',
            fontSize: 16,
            textAlign: 'center',
            justifyContent: 'center',
          }}> {regError.message} </Text> : <></> } */}



              <TextInput
              style={styles.Field}
              placeholderTextColor={base}
              placeholder="Full Name"
              value={username}
              onChangeText={(Text)=>setUsername(Text)} />

              <TextInput
              style={styles.Field}
              placeholderTextColor={base}
              placeholder="Email Address"
              value={email}
              autoCapitalize="none" 
              onChangeText={(Text)=>setEmail(Text)} />

              <TextInput
              style={styles.Field}
              placeholderTextColor={base}
              placeholder="Phone Number"
              value={phone}
              keyboardType={'numeric'}
              onChangeText={(Text)=>setPhone(Text)} />

              <TextInput
              style={styles.Field}
              placeholderTextColor={base}
              placeholder="City, Country"
              value={country}
              onChangeText={(Text)=>setCountry(Text)} />

              <TextInput
              style={styles.Field}
              placeholderTextColor={base}
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(Text)=>setPassword(Text)} />

              <TextInput
              style={styles.Field}
              placeholderTextColor={base}
              placeholder="Confirm Password"
              value={passwordRetype}
              secureTextEntry={true}
              onChangeText={(Text)=>setPasswordRetype(Text)} />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
            }}>            
            <Text style={{color: 'grey', fontSize: 14}}>
              By signing in, you agree to our {" "}</Text>
              <TouchableOpacity>
            <Text style={{color: primary, fontWeight: 'bold', fontSize: 14}}>
             Terms & Conditions
            </Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
    onPress={handleRegister}
      style={styles.button}>
         {spinner ? <ActivityIndicator size="large" color="#ffffff" />
 : <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
      Signup
      </Text> }
        </TouchableOpacity>
         
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{color: base, fontWeight: 'bold', fontSize: 16}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
BtnStyle : {
  borderRadius: 100,
  color: base,
  paddingHorizontal: 10,
  paddingVertical: 10,
  width: '80%',
  backgroundColor: 'rgb(220,220, 220)',
  marginVertical: 10,
},
button: {
  backgroundColor: base,
  borderRadius: 100,
  alignItems: 'center',
  width: "80%",
  paddingVertical: 5,
  marginVertical: 10
},
Field: {
  borderRadius: 100, 
  paddingTop: 10, 
  color: base, 
  paddingHorizontal: 10, 
  paddingVertical: 10, 
  backgroundColor: 'rgb(220,220, 220)', 
  marginVertical: 10
},
container: {
  flex: 1
},
});

export default Signup;