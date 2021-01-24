import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import User from "../User/User";
import BottomNavigator from "../BottomNavigator/BottomNavigator";
import Upload from "../Upload/Upload";
import SearchingBar from "../SearchingBar/SearchingBar";
import Profile from "../Profile/Profile";
import { Feather } from "@expo/vector-icons";

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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
