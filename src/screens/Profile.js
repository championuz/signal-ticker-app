import React, {useContext} from 'react';
import {Text,View,ImageBackground,ScrollView,Image,TouchableOpacity} from 'react-native';
import { base } from '../components/Constants';
import ProfileScreenCard from '../components/ProfileScreenCard';
import Support from '../components/Support';
import { AuthContext } from '../context/AuthContext';


const Profile = () => {
     const { loading, logout, userData } = useContext(AuthContext);


        const back = "<"
        return(
           
            <View style={{
                backgroundColor:base,
                height:"100%",
            }}>
          
                <View style={{
                    paddingHorizontal:40,
                    backgroundColor:"#FFF",
                    height:"40%",
                    borderBottomLeftRadius:50,
                    borderBottomRightRadius:50
                }}>
                    <View style={{
                        flexDirection:"row",
                        width:"100%",
                        marginTop:40
                    }}>
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}>
                                <Text style={{color: base, fontSize: 20, fontWeight: '900'}}>{back}</Text>
                          
                        </TouchableOpacity>
                        <View style={{
                            alignItems:"flex-end"
                        }}>
                       
                        </View>
                    </View>

                    <Image
                        source={require('../assets/account.png')}
                        style={{
                            height:100,
                            width:100,
                            tintColor: base,
                            borderRadius:20,
                            alignSelf:"center",
                            marginVertical:20
                        }}
                    />
                    <Text style={{
                        fontSize:22,
                        color:base,
                        alignSelf:"center"
                    }}>
                        {userData ? userData.name : null}
                    </Text>
                    <Text style={{
                        fontSize:16,
                        color:"#9ca1a2",
                        alignSelf:"center"
                    }}>
                        Kiev, Ukraine
                    </Text>
                    <Text style={{
                        fontSize:16,
                        color:"#9ca1a2",
                        alignSelf:"center"
                    }}>
                       {userData ? userData.name : null}
                    </Text>
                </View>
                <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex:1,
                height:"100%",
                backgroundColor:base
            }}
          >
            <View style={{height:"100%", paddingBottom: 110}}>
                <ProfileScreenCard />
                <Text style={{
                        fontSize:16,
                        color:"#fff",
                        paddingLeft: 20,
                        paddingTop: 10,
                        fontWeight:"bold",
                        alignSelf:"flex-start",
                    }}>
                        Get Support
                    </Text>
                <Support />

                <TouchableOpacity onPress={logout}>
                <Text style={{
                        fontSize:16,
                        color:"#fff",
                        paddingLeft: 20,
                        paddingTop: 10,
                        fontWeight:"bold",
                        alignSelf:"flex-start",
                    }}>
                        Logout
                    </Text>
                    </TouchableOpacity>
                </View>     
             </ScrollView>

            </View>
        )
    }
    


export default Profile;