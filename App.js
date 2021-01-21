import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
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
import BottomNavigator from "./BottomNavigator";
import User from "./User.js"



export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const setAuth = () => {
    setIsAuth(true);
  };

  const disconnect = () => {
    setIsAuth(false);
  };

  useEffect(() => {
    getUserData().then((value) => {
      if (value !== 'null' && value !== null) setAuth();
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
          <TouchableOpacity onPress={() => eraseUserData().then(disconnect())} style={styles.t}>
            <Text >Logout</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
          <BottomNavigator />
          <User/>
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
  },

  t:{
   
    alignItems:'center',
    justifyContent: 'center',
  },
});


