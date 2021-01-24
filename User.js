import React, { useState } from "react";
import { Image, SafeAreaView, Text } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const User = () => {
  const [username, setUsername] = useState(null);
  const [imagePath, setImagePath] = useState(null);

  const getUserData = async () => {
    const jsonValue = await AsyncStorage.getItem("user_data");
    const data = JSON.parse(jsonValue);
    console.log(data.username);
    let clientID = "adcadfe92139167";
    let token = data.access_token;

    setUsername(data.username);
    axios
      .get(`https://api.imgur.com/3/account/${data.username}/avatar`, {
        Authorization: {
          Token: `${token}`,
        },
        headers: {
          Authorization: `Client-ID ${clientID}`,
        },
      })
      .then((response) => {
        console.log(response.data.data.avatar);
        setImagePath(response.data.data.avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getUserData();

  return (
    <SafeAreaView style={{ flex: 1, marginLeft: 5, flexDirection: 'row' }}>
      <Image
        source={{
          uri: imagePath,
        }}
        style={{ height: 55, width: 55, borderRadius: 15, }}
      />
      <Text style={{ marginLeft: 10, textAlign: 'center', marginTop: 18, fontSize:18}}>{username}</Text>
    </SafeAreaView>
  );
};

export default User;
