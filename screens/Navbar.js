import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  Button,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import User from "../User";
import BottomNavigator from "../BottomNavigator";
import Upload from "./Upload";
import SearchingBar from "./SearchingBar/SearchingBar";
import Profile from "../Profile"
import { Feather } from '@expo/vector-icons'; 

function HomeScreen({ navigation }) {
  const [showUpload, setShowUpload] = useState(false);
  return (
    
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ flexDirection: "row", alignItems: "center", padding: 9 }}
      >
        <User />
        <Feather name="menu" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.container}>
        <SearchingBar />
      </View>
      <StatusBar style="auto" />
      {showUpload && <Upload />}
        <BottomNavigator setShowUpload={setShowUpload} showUpload={showUpload} />

    </SafeAreaView>
    
  );
}

function UploadScreen({ navigation }) {
  return (
    <View>
      <Upload />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ flexDirection: "row-reverse" }}
      >
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Profile />
      </View>
    </View>
  );
}

function FavoriteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ flexDirection: "rows" }}
      >
        <User />
        <Text>Menu</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Favorite Page</Text>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Favorite" component={FavoriteScreen} />
        {/* <Drawer.Screen name="Upload" component={UploadScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },

  t: {
    alignItems: "center",
    justifyContent: "center",
  },
});
