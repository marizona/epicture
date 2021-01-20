import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Linking } from 'react-native';


Linking.getInitialURL().then(url =>{
console.log(url);
})
Linking.addEventListener("/oauth/callback", getData)
function getData(e){
  console.log(e);
}

async function goApp(){
  await Linking.openURL('https://api.imgur.com/oauth2/authorize?client_id=04f7ce5c8c9437f&response_type=token');
}

export default function App(){
  return (
    <View>
      <Text>
        hello world!
      </Text>
      <Button
      onPress={goApp}
      title="go to app"
      color="blue"
      accessibilityLabel="go to app"/>
<StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});