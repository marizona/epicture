import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
       <ImageBackground 
       style={styles.background}
       source={require('../assets/welcome.png')}
       >
           <View style={styles.loginButton}>
               <Text>Login</Text>
            </View>
       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
        justifyContent:"flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '80%',
        marginBottom: 20,
        height:70,
        backgroundColor: "#45FA40",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    logo: {
        width:100,
        height:100,    
    },

    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    }
})
export default WelcomeScreen;