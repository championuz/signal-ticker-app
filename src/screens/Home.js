import React, {useEffect, useState, useContext} from 'react';
import EventSource from "react-native-sse";
import {View,Text,Image, StyleSheet, ImageBackground,TouchableOpacity, StatusBar} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Posts from '../components/Posts'
import {base, primary} from '../components/Constants'
import ListCard from '../components/ListCard';
import RecentLists from '../components/RecentLists';
import { SafeAreaView,  SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import Toast from 'react-native-toast-message'


const CustomStatusBar =  ({
    backgroundColor,
    barStyle = "light-content",
}) => {
    const insets = useSafeAreaInsets();
        return (
            <View style={{ height: insets.top, backgroundColor }}>
                <StatusBar
                animated={true}
                    backgroundColor={backgroundColor}
                    barStyle={barStyle} />
                    </View>
        );
}



const Home = ({navigation}) => {
  const [selected, setSelected] = useState(false);
  const [nextSelect, setNextSelect] = useState(false);
    const {loggedIn, userData} = useContext(AuthContext);
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

    const [data, setData] = useState([
      <RecentLists />,
      <ListCard /> 
      
      ]);

    const [currentIdx, setCurrentIdx] = useState(0);
    const [showCurrent, setShowCurrent] = useState(false);

    const toggleCurrent = () => {
        if (!showCurrent) {
          setShowCurrent(true);
          return;
        }
      };

      const setCurrent = (index) => {
        setCurrentIdx(index);
        toggleCurrent();
      };
    
      useEffect(() => {
        setCurrent(0);
        setSelected(false)
      setNextSelect(true)
      }, []);

    // useEffect(() => {
    //     if(userData === null) {
    //       navigation.replace("Login");
    //     } else {
    //       navigation.replace("Tabs");
    //     }
    //   }, [userData]);

    const setSignals = () => {
      setCurrent(1)
      setSelected(true)
      setNextSelect(false)
    }
    const nextSignals = () => {
      setCurrent(0)
      setSelected(false)
      setNextSelect(true)
    }

    

        return(
            <SafeAreaProvider>
                <CustomStatusBar backgroundColor={base} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                height:"100%",
                backgroundColor:base
            }}
          >
           
              <View style={{
                  height:200,
                  width:"100%",
                  paddingHorizontal:35
              }}>
                 <View style={{backgroundColor: "white"}}>
                <Toast
              position='top'
              topOffset={1}/>
                </View>
                  <View style={{
                      flexDirection:"row",
                      width:"100%",
                      paddingTop:40,
                      alignItems:"center"
                  }}>
                      <View style={{
                          width:"50%"
                      }}>
                          <Image source={require('../assets/Untitled.png')}
                            style={{width:20,height:20}}/>
                      </View>
                      <View style={{
                          width:"50%",
                          alignItems:"flex-end",
                      }}>
                        <TouchableOpacity
                          
                            onPress={()=>navigation.navigate("Plans")}>
                     <Text   style={{color:"#f2f2f2", fontWeight: '900'}}>View Plans</Text>
                     </TouchableOpacity>
                      </View>
                  </View>

                <Text style={{
                    fontSize:25,
                    color:"#FFF",
                    paddingTop: 20,
                }}>Welcome</Text>
                <Text style={{
                    fontSize:25,
                    color:"#FFF",
                    fontWeight: '900',
                    paddingBottom: 10,
                }}>{userData ? userData.name : null}</Text>
                {/* <Text style={{
                    fontSize:15,
                    color:"#FFF",
                    fontWeight: '900',
                    paddingBottom: 20,
                }}>Find recent signals and make money</Text> */}

              </View>

              <View style={{
                  backgroundColor:"#FFF",
                  borderTopLeftRadius:40,
                  borderTopRightRadius:40,
                  paddingHorizontal:35
              }}>
                  <View style={{
                      flexDirection:"row",
                      paddingTop:20
                  }}>
                      <TouchableOpacity
                      onPress={nextSignals}
                        style={nextSelect ? styles.nextSelect : { paddingVertical: 6 }}
                      >
                          <Text style={nextSelect ? {color: base} : { color: '#9ca1a2'}}>RECENT</Text>
                      </TouchableOpacity>


                      <TouchableOpacity
                      onPress={setSignals}
                        style={selected ? styles.selected : { paddingVertical: 6, marginLeft:30 }}
                      >
                          <Text style={selected ? {color: base} : { color: '#9ca1a2'}}>ALL SIGNALS</Text>
                      </TouchableOpacity>
                  </View>

        <ScrollView
           showsVerticalScrollIndicator={false}
         style={{ flex: 1, paddingTop:10, paddingBottom:10 }}
          keyboardDismissMode='on-drag'>
        <View style={{paddingBottom: 110}}>
        {showCurrent ? <View>{data[currentIdx]}</View> : null}
          </View>
        </ScrollView>
              </View>

          </ScrollView>
          </SafeAreaProvider>
        )
}


export default Home;

const styles = StyleSheet.create({
  selected: {
    color: base,
    borderBottomColor: base,
    borderBottomWidth: 2,
    marginLeft:30
  },
  nextSelect: {
    color: base,
    borderBottomColor: base,
    borderBottomWidth: 2
  }
})