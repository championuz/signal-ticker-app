import React, { useState, useEffect } from "react";
import EventSource from "react-native-sse";
import axios, { isAxiosError, handleAxiosError } from "axios";
import Toast from 'react-native-toast-message'


const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const [regError, setRegError] = useState(null);
    const [loginError, setLoginError] = useState({"message":"Error"});
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRetype, setPasswordRetype] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const BASE_URL = "https://signaltickerbackend.herokuapp.com"
    // const BASE_URL = "http://localhost:3006"

   
    const ssEvents = new EventSource(`${BASE_URL}/stream`, {
      withCredentials: true })

      ssEvents.addEventListener("posts", (event) => {
        const data = JSON.parse(event.data)
        console.log("Finally we did it" + data)
        
        Toast.show({
          type: 'success',
          text1: 'A new signal have been posted'
        });
      })


      const showLoginToast =() =>{
        Toast.show({
        type: 'error',
        text1: loginError.message,
      });
    }
      const showRegToast =() =>{
        Toast.show({
        type: 'error',
        text1: regError.message,
      });
    }


      const login = async () => {
   
        setSpinner(true)
          if (email.length === 0 || password.length === 0) {
            setLoginError({"message": "Email and Password cannot be empty"})
            showLoginToast()
            return setSpinner(false)
          }
              fetch(`${BASE_URL}/auth/login`, {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email,
                password
              })
            })
            .then((response) => response.json())
            .then((json)=>  {
                    if(json.status === 'ok'){
                      console.log(json)
                      setUserData(json.data)
                      setLoggedIn(true)
                       setSpinner(false)
                       setLoginError(null)
                      } else {
                          console.log(json.message)
                          showLoginToast()
                          setLoginError(json)
                          setSpinner(false)
                      }
                  })
              .catch((error) => {
                setLoginError(error)
                  console.error(error);
                  setSpinner(false)
                  showLoginToast()
              })
              .catch((error) => {
                  console.error(error);
                  setSpinner(false)
              })
        }    

                        // const resData = response.json()
          // console.log(resData)
          // setLoginError({"message": "this is it"})
          //  return setSpinner(false)
  
          // if (response.status === 'ok') {
          //   setUserData(response.data)
          //   setLoggedIn(true)
          //   console.log(userData)
          //   return setSpinner(false)
          //   } else {
          //     console.log(response)
          //     setLoginError({"message": "Login failed"})
          //     return setSpinner(false)
          //   }
            // console.log(err)
            // setSpinner(false)
            // return setLoginError(err);
  

      const logout = async () => {
        try {
          setLoggedIn(false);
          setUserData(null);
        } catch (err) {
          alert('Error logging out');
        }
      };

      const handleRegister = async () => {
        setSpinner(true)
        if (email.length === 0 || password.length === 0 || username.length === 0 || phone.length === 0 || country.length === 0 ) {
          setRegError({"message": "All fields are required"})
          showRegToast()
          return setSpinner(false)
        }
        if (password !== passwordRetype) {
          setRegError({"message": "Passwords do not match"})
          showRegToast()
          return setSpinner(false)
        } else {
          fetch(`${BASE_URL}/auth/register`, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password,
            phone,
            country,
            name: username
          })
        })
        .then((response) => response.json())
        .then((json)=>  {
                if(json.status === 'ok'){
                  console.log(json)
                  setUserData(json.data)
                  setLoggedIn(true)
                   setSpinner(false)
                   setRegError(null)
                  } else {
                      console.log(json.message)
                      setRegError(json)
                      showRegToast()
                      setSpinner(false)
                  }
              })
          .catch((error) => {
              console.error(error);
              setRegError(error)
              showRegToast()
              setSpinner(false)
          })
        }
      }
        
        // try {
        //   if (username.length === 0 || email.length === 0 || phone.length === 0 || country.length === 0 ){
        //     setRegError({"message": "All Fields are required"});
        //     setSpinner(false)
        //     return;
        //   }
        //   if (password !== passwordRetype){
        //     setRegError({"message": "Passwords do not match"});
        //     setSpinner(false)
        //     return;
        // }    
        // const response = await axios.post(`${BASE_URL}/auth/register`, {
        //     "name":username,
        //     "email":email,
        //     "password":password,
        //     "country": country,
        //     "phone": phone
        // })
        // if (response.status === 'ok') {
        //   setUserData(response.data)
        //   setLoggedIn(true)
        //   setSpinner(false)
        //   return console.log(userData)
        //   }
        // } catch (err) {
        // console.log(err)
        // setSpinner(false)
        // setRegError(err);
        // }
       
    
      const variables = {
        loading,
        loggedIn,
        login,
        logout,
        userData,
        handleRegister,
        username,
        setUsername,
        phone,
        spinner,
        setPhone,
        password,
        setPassword,
        passwordRetype,
        setPasswordRetype,
        email,
        setEmail,
        country,
        setCountry,
        regError,
        loginError
      };
    
      return (
        <AuthContext.Provider value={variables}>{props.children}</AuthContext.Provider>
      );
    };
    
    export { AuthContext, AuthContextProvider };