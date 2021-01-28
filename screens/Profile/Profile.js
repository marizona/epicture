import React, { useState } from "react";
import {
  Image,
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const Profile = () => {
  const [username, setUsername] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  const [UserData, setUserData] = useState(null);

  const imagedata = [
    { key: 0, image: { uri: "https://woodgreen.org.uk/image/image/image/V8Iw3SL87ubcIekoP1DmmhekPFXPNbBL5yB4JpVR.jpeg?w=800&h=422&fit=crop-center" } },
    { key: 1, image: { uri: "https://picsum.photos/200" } },
   
  ];

  const RenderImage = ({ item }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", marginTop: 5 }} key={item}>
        <Image style={styles.pImage} source={item.image} />
      </View>
    );
  };

  const getUserData = async () => {
    const jsonValue = await AsyncStorage.getItem("user_data");
    const data = JSON.parse(jsonValue);
    console.log(data.username);
    let clientID = "adcadfe92139167";
    let token = data.acess_token;

    console.log(token);
    console.log(clientID);
    setUsername(data.username);
    axios
      .get("https://api.imgur.com/3/account/me/images", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const img = response.data.data.map((item) => item.link);
        console.log(img);

        setImagePath(response.data.link);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getUserData();

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
          />
          <Text style={styles.name}>{username}</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={imagedata}
          renderItem={RenderImage}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  box: {
    marginTop: 10,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
    paddingTop: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 300,
  },
  pImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  name: {
    fontSize: 25,
    marginBottom: 20,
    color: "#1cb36c",
  },
});
export default Profile;
