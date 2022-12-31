import React from 'react'
import {View,Text, TouchableHighlight} from 'react-native';
import { base, primary, secondary } from './Constants';


export default class Support extends React.Component{
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
                <Text style={{fontWeight: '900', paddingBottom: 10}}>Support Details</Text>
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
                        Email:
                    </Text>
                    <Text style={{
                        marginLeft:80,
                        justifyContent:"center",
                        color: primary,
                        fontSize:16
                    }}>
                        <Text style={{fontWeight: '900'}}>signalticker@gmail.com</Text>
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
                        Phone/SMS/WhatsApp:
                    </Text>
                    <Text style={{
                        marginLeft:10,
                        justifyContent:"center",
                        color: primary,
                        alignSelf: "flex-end",
                        fontSize:16,
                        fontWeight: "900"
                    }}>+2349070791111
                    </Text>
                </View>
               
            </View>
        )
    }
}