import React from 'react'
import {View,Text, TouchableHighlight} from 'react-native';
import { base, primary, secondary } from './Constants';


export default class ProfileScreenCard extends React.Component{
    render(){
        return(
            <View style={{
                paddingHorizontal:10,
                paddingVertical:10,
                alignSelf:"center",
                marginTop:10,
                backgroundColor:"#f3f3f3",
                elevation:1,
                width:'90%',
                flex: 1,
                borderRadius:15
            }}>
                <View style={{color: base}}>
                <Text style={{fontWeight: '900', paddingBottom: 10}}>Subscription Details</Text>
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginBottom: 5
                }}>
                    <Text style={{
                        color:"#4b3ca7",
                        fontSize:16
                    }}>
                        Subscription Plan:
                    </Text>
                    <Text style={{
                        marginLeft:40,
                        justifyContent:"center",
                        color: primary,
                        fontSize:16
                    }}>
                        <Text style={{fontWeight: '900'}}>Hybrid/$10 Month</Text>
                    </Text>
                </View>
                <View style={{
                    flexDirection:"row",
                    marginBottom: 5
                }}>
                    
                    <Text style={{
                        color:"#4b3ca7",
                        fontSize:16
                    }}>
                        Subscription Status:
                    </Text>
                    <Text style={{
                        marginLeft:100,
                        justifyContent:"center",
                        color: primary,
                        fontSize:16
                    }}>
                        <Text style={{fontWeight: '900'}}>ongoing</Text>
                    </Text>
                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center"
                }}>
                    <Text style={{
                        color:"#4b3ca7",
                        fontSize:16
                    }}>
                        Subscription Span:
                    </Text>
                    <Text style={{
                        marginLeft:50,
                        justifyContent:"center",
                        color: primary,
                        fontSize:16
                    }}>
                        <Text style={{fontWeight: '900'}}>Aug. 5 - Sept. 5</Text>
                    </Text>
                </View>
               
            </View>
        )
    }
}