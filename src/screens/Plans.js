
import React from "react";
import { View, Text, Alert, Modal, Image, StatusBar, TextInput, ImageBackground } from "react-native";
import IndicesCard from "../components/IndicesCard";
import ListCard from "../components/ListCard";
import { ScrollView } from "react-native-gesture-handler";
import {Background2} from "../components/Background";
import { SafeAreaView,  SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { backgrd } from "../components/Constants";
import ForexCard from "../components/ForexCard";
import HybridCard from "../components/HybridCard";

export default class Plan extends React.Component {
  state = {
    modalVisible: false,
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
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
    const { modalVisible } = this.state;
    return (
        <SafeAreaProvider>
      <ImageBackground source={require("../assets/back2.jpg")} style={{ height: '100%' }} >
       <CustomStatusBar backgroundColor={backgrd} />
       <View style={{flex: 1, width: 410}}>
        <View style={{ paddingHorizontal: 40 }}>
          <Text
            style={{
              fontSize: 24,
              paddingTop: 30,
              fontWeight: 'bold',
              color: "#522289",
            }}
          >
            Choose Signals Plan
          </Text>

          <Text
            style={{
              fontSize: 15,
              paddingVertical: 10,
              paddingRight: 20,
              lineHeight: 22,
              color: "#000",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipscing elit.
          </Text>
          </View>


          {/* <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFF",
              borderRadius: 40,
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 30,
            }}
          >
            <Image
              source={require("../assets/search.png")}
              style={{ height: 14, width: 14 }}
            />
            <TextInput
              placeholder="Lorem ipsum"
              style={{ paddingHorizontal: 20, paddingVertical:5, fontSize: 15, color: "#ccccef" }}
            />
          </View> */}

        <ScrollView
           showsVerticalScrollIndicator={false}
         style={{ flex: 1, paddingTop:10}}
          keyboardDismissMode='on-drag'>
        <View  style={{paddingBottom: 120}}>
          <IndicesCard />
          <ForexCard />
          <HybridCard />
          </View>
        </ScrollView>
        </View>
        </ImageBackground>
        </SafeAreaProvider>
    );
  }
}