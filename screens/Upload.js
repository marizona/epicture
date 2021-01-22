import React, { useState, useEffect} from 'react';
import {Image, 
        View, 
        Platform, 
        SafeAreaView, 
        Alert,
        StyleSheet,
        TouchableOpacity,
        Text,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const Upload = () => {
    const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
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
      base64:true,
    });

    console.log('result', result);

    if (!result.cancelled) {
      setImage(result);
    }
  };
    const ImgUpload = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer d274fad811df1542f0535e33ec0e0671c2e7b213");


      var formdata = new FormData();
      var img = image.uri.split(',');
      formdata.append("image", img[1]);

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
          <Text style={{ alignContent: 'center', justifyContent:'center', position:'relative'}}>Post your image</Text>
            {/* DISPLAY IMAGE UPLOAD */}
            {image && <Image source={{ uri: image.uri}} style={{ width: 300, height:200 }} /> }
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  addButton: {
    width: 100,
    height:70,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 10,
  },
  sendButton: {
    width: 100,
    height:70,
    backgroundColor: "#333C59",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
},
  image: {
    
    alignItems: "center",
    marginBottom: 10,
    position: 'absolute',
    bottom: 70,
    right: 10,
    left:10,
}
})

export default Upload;