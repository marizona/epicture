import React, { useState, useEffect} from 'react';
import {Image, 
        View, 
        Platform, 
        SafeAreaView, 
        Alert,
        StyleSheet,
        TouchableOpacity,
        Text,
        StatusBar,
        TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './Navbar';

const Upload = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('Insert title');
    const [description, setContent] = useState('Insert Description');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    //console.log('result', result);

    if (!result.cancelled) {
      setImage(result);
    }
  };
    const ImgUpload = async () => {
      const jsonValue = await AsyncStorage.getItem('user_data');
      const data = JSON.parse(jsonValue)
      var myHeaders = new Headers();
      let token = data.acess_token;
      myHeaders.append("Authorization", `Bearer ${token}`);

    var formdata = new FormData();
    var img = image.uri.split(",");
    formdata.append("image", img[1]);

      var formdata = new FormData();
      
      formdata.append("image", image.base64, "title", title);
      formdata.append("title", title);
      formdata.append("description", description);
      console.log(image.base64); 
      formdata.append("type", "base64");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://api.imgur.com/3/image", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    };

    return (
        <SafeAreaView >
          <View style={styles.image}>
          <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold" }}>Post your image</Text>
          <TextInput
              style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, borderRadius: 10, textAlign : "center"  }}
              onChangeText={text => setTitle(text)}
              value={title}
            />
            <TextInput
              style={{ height: 100, width: 200, borderColor: 'gray', borderWidth: 1, borderRadius: 10, textAlign : "center" }}
              onChangeText={text => setContent(text)}
              value={description}
            />
          </View>
          <View style={styles.screenContainer}>
            {/* ADD BUTTON IMAGE */}
            <TouchableOpacity
              onPress={pickImage}
              style={styles.addButton}
              >
                <View>
                  <Text>Add</Text>
                </View>
            </TouchableOpacity>

            <View>
            {/* DISPLAY IMAGE UPLOAD */}
            {image && <Image source={{ uri: image.uri}} style={{ width: 200, height:100, marginBottom: 20 }} /> }
          </View>

            {/* SEND IMAGE */}
            <TouchableOpacity 
              onPress={ImgUpload}
              style={styles.sendButton}
              >
                <View>
                  <Text style={{ color: 'white'}}>Send</Text>
                </View>
            </TouchableOpacity>
           </View>
        </SafeAreaView>
    );  
};

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  addButton: {
    width: 60,
    height:40,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  sendButton: {
    width: 100,
    height: 70,
    backgroundColor: "#333C59",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
},
   image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
 }
})

export default Upload;
