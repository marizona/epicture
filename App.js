import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Linking,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Auth, { eraseUserData, getUserData } from "./screens/Auth";
import { Root } from "native-base";
import BottomNavigator from "./BottomNavigator";
import User from "./User.js"
import Upload from "./screens/Upload";
import Profile from "./Profile";
import SearchingBar from "./screens/SearchingBar/SearchingBar";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const setAuth = () => {
    setIsAuth(true);
  };

  const disconnect = () => {
    setIsAuth(false);
  };

  useEffect(() => {
    getUserData().then((value) => {
      if (value !== "null" && value !== null) setAuth();
    });
  }, []);

  return (
    <Root>
      {!isAuth && (
        <>
          <Text>Not Connected</Text>
          <Auth setAuth={setAuth} />
        </>
      )}
      {isAuth && (
        <SafeAreaView style={styles.container}>
        <SearchingBar />
          <StatusBar style="auto" />
          <Profile />
          <TouchableOpacity onPress={() => eraseUserData().then(disconnect())} style={styles.t}>
            <Text >Logout</Text>
          </TouchableOpacity>
          <User />
          {showUpload && <Upload />}
          <BottomNavigator setShowUpload={setShowUpload}
            showUpload={showUpload} />
        </SafeAreaView>

      )}
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  t: {

    alignItems: 'center',
    justifyContent: 'center',
  },
});
