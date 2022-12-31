import React from 'react'
import {View,Text, TouchableHighlight} from 'react-native';
import { base, primary, secondary } from './Constants';


export default class HibridCard extends React.Component{
    render(){
        return(
            <View style={{
                paddingHorizontal:20,
                alignSelf:"center",
                marginTop:10,
                backgroundColor:"#f3f3f3",
                height:250,
                alignItems: 'center',
                elevation:1,
                width:"80%",
                borderRadius:15
            }}>
                <View style={{
                    flexDirection:"row",
                    paddingTop:20,
                    alignItems:"center"
                }}>
                    <Text style={{
                        color:"#4b3ca7",
                        fontSize:20
                    }}>
                        Forex & Indices /<Text style={{fontWeight: '900'}}>$10 Month</Text>
                    </Text>
                </View>
               

               <View style={{
                   flexDirection:"row",
                   marginTop:10,
                   alignItems:"center",
               }}>
                   <Text style={{
                       fontSize:16,
                       color:"#522289",
                       fontWeight: '900',
                   }}>
                       Weekly Signals:
                   </Text>
                   <Text style={{
                       color:"#522289",
                       paddingLeft:70,
                       fontSize:16,
                       fontWeight: '900',

                   }}>
                       20
                   </Text>

               </View>
               <View style={{
                   flexDirection:"row",
                   marginTop:10,
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontSize:16,
                       fontWeight: '900',
                       color:"#522289"
                   }}>
                       Pips Target:
                   </Text>
                   <Text style={{
                       color:"#522289",
                       paddingLeft:90,
                       fontWeight: '900',
                       fontSize:16
                   }}>
                       800
                   </Text>

               </View>
               <View style={{
                   flexDirection:"row",
                   marginTop:10,
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontSize:16,
                       fontWeight: '900',
                       color:"#522289"
                   }}>
                       Customer Support:
                   </Text>
                   <Text style={{
                       color:"#522289",
                       paddingLeft:30,
                       fontWeight: '900',
                       fontSize:16,
                       textAlign: 'left'
                   }}>
                       24/7
                   </Text>

               </View>

               <TouchableHighlight
                underlayColor="#6600bb"
                style={{
                    width:200,
                    marginLeft:5,
                    elevation:2,
                    marginTop:15,
                    backgroundColor:base,
                    paddingVertical:13,
                    borderRadius:25,
                    alignSelf:"center"
                }}
                onPress={this.props.onPress}
               >
                   <Text style={{
                       color:"#FFF",
                       textAlign:"center",
                       fontSize:18
                   }}>Subscribe
                   </Text>
               </TouchableHighlight>

               <Text style={{
                   color:"#a2a2db",
                   alignSelf:"center",
                   textAlign: 'center',
                   fontSize:12,
                   marginTop: 4
               }}>
                   Making multiples of the unit payment extends the expiry date.
               </Text>
            </View>
        )
    }
}