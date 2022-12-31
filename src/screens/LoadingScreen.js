
import React, { useEffect, useContext } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import {base} from "../components/Constants"

import { AuthContext } from "../context/AuthContext";

function LoadingScreen({ navigation }) {
  const { loading, loggedIn, userData } = useContext(AuthContext);

  useEffect(() => {
    if(userData === null) {
      navigation.replace("Login");
    } else {
      navigation.replace("Tabs");
    }
  }, [userData]);

  return (
    <View style={styles.container}>
      {loading && (
        <React.Fragment>
          <ActivityIndicator size="large" color={base} />
          <View style={{ marginTop: 10 }}>
            <Text>Please wait...</Text>
          </View>
        </React.Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;