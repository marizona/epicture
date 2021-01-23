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
} from 'react-native';
import Auth, { eraseUserData, getUserData } from './screens/Auth';
import { Root } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from "./BottomNavigator";
import User from "./User.js";
import Upload from "./screens/Upload";
import Navbar from './screens/Navbar';
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
  
  function UploadScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <StatusBar style="auto" />
          <Upload />
      </View>
    );
  }


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

          <TouchableOpacity onPress={() => eraseUserData().then(disconnect())} style={styles.t}>
            <Text >Logout</Text>
          </TouchableOpacity>
          <Navbar />
          {/* <SearchingBar /> */}

          {/* <StatusBar style="auto" />
          {showUpload && <Upload />}
          <BottomNavigator setShowUpload={setShowUpload}
            showUpload={showUpload} /> 
            
           <User /> */}
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
