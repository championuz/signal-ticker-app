
import React from 'react';
import {View, ImageBackground} from 'react-native';

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground source={require("../assets/background.jpg")} style={{ height: '100%' }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}
const Background2 = ({ children }) => {
  return (
    <View>
      <ImageBackground source={require("../assets/back2.jpg")} style={{ height: '100%' }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}

export {Background2};
export default Background;