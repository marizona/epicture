import React, { useState } from 'react';
import { Image, View, SafeAreaView, CardList, ScrollView, StyleSheet,Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = () => {

    const [username, setUsername] = useState(null);
    const [imagePath, setImagePath] = useState(null);


    const getUserData = async () => {
        const jsonValue = await AsyncStorage.getItem('user_data');
        const data = JSON.parse(jsonValue)
        console.log(data.username)
        let clientID = 'adcadfe92139167';
        let token = data.access_token;

        setUsername(data.username)
        axios
            .get(
                `https://api.imgur.com/3/account/me/images`,
                {
                    Authorization: {

                        'Token': `${token}`,
                    },
                    headers: {
                        'Authorization': `Client-ID ${clientID}`,
                    },
                }
            )
            .then(
                (response) => {
                    console.log(response.data.data.link);
                    setImagePath(response.data.data.link)

                })
            .catch(
                (error) => {
                    console.log(error);
                });

    }
    getUserData()

    return (
        
        <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Image style={styles.profileImage} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <Text style={styles.name}>{username}</Text>
          </View>
          </View>
      </ScrollView>
    );
    

};

const styles = StyleSheet.create({
    scrollContainer:{
      flex: 1,
    },
    container:{
      padding:20,
    },
    box: {
      marginTop:10,
      backgroundColor: 'white',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height:1,
        width:-2
      },
      elevation:2,
      paddingTop:10
    },
    profileImage:{
      width:100,
      height:100,
      marginBottom:20,
      borderRadius:300,
    },
    name:{
      fontSize:25,
      marginBottom:20,
      color: '#1E90FF',
    },
    
    
})



export default Profile;