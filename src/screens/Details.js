import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, StatusBar, TextInput } from "react-native";
import Background from "../components/Background";
import {backgrd, base} from "../components/Constants"
import { SafeAreaView,  SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomStatusBar =  ({
    backgroundColor,
    barStyle = "dark-content",
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

const Details = () => {
    
    return (
        <Background>
             <SafeAreaProvider>
                <CustomStatusBar backgroundColor={backgrd} />
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Text>Menu</Text>
          <Text>Profile</Text>
        </View>

        <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
          <Text
            style={{
              fontSize: 40,
              color: "#522289",
            }}
          >
            Hello
          </Text>

          <Text
            style={{
              fontSize: 15,
              paddingVertical: 10,
              paddingRight: 80,
              lineHeight: 22,
              color: "#000",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipscing elit.
          </Text>

          <View
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
          </View>

          <Text
            style={{
              color: "#FFF",
              marginTop: 50,
              fontSize: 17,
            }}
          >
            Recommended
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -40, marginTop: 30 }}
          >
            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../assets/5.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Text>Map</Text>
                </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../assets/5.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Text>Map</Text>
                </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../assets/5.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Text>Map</Text> 
                </View>
            </View>
          </ScrollView>
        </View>
        </SafeAreaProvider>
      </Background>
    );

    
}

        {/* <View
          style={{
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "#5facdb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/p1.jpg")}
              style={{ height: 26, width: 26 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: "#FFF",
            }}
          >
            NYC
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 15,
            }}
          >
            - - - - - - - - - - - - - - - -
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: "#FFF",
            }}
          >
            IDN
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 40,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#a2a2db",
            }}
          >
            New York
          </Text>
          <Text
            style={{
              color: "#a2a2db",
              paddingLeft: 162,
            }}
          >
            Indonesia
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 50,
            marginTop: 60,
          }}
        >
         <Text>Dots</Text>
          <Text>Filter</Text>
        </View> */}

export default Details;