
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native';
import { Alert } from 'react-native-web';

const BotorNotApp = () => {
  const [titleText, setTitleText] = useState("Twitter's Bot or Not");
  const bodyText = "Input Twitter handle below:";
  const inputtext = "@twitterhandle";
  const [number, onChangeNumber] = React.useState(null);
  const [tweeter, setHandle] = useState('');
  const [data, setData] = useState([]);


  

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAG9%2FhAEAAAAAjr6zswcErhKyOsEHPCtV0zq%2BX4A%3DDfbx0OX7YVHgtM6AHFOJWMyt23MveToG9GR6qSeJ4wnDklPRp3");
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };
  
  fetch("https://api.twitter.com/2/users/by/username/elonmusk", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  });  





  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>{titleText}</Text>
        <Text numberOfLines={5}>{"\n\n\n\n"}
          {bodyText}</Text>
      </Text>
      <TextInput 
        style={styles.textinput}
        placeholder={inputtext}
        keyboardType="numeric"
        onChangeText={(val) => setHandle(val)}
      />
      <Button
        title = "Submit Tweeter"
        onPress={() => {alert('Looking for user ' + tweeter)}}
      />
    </SafeAreaView>
  );
};



//TextStyle

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    marginTop: 20
  },
  container: {
    flex: 1,
    padding: 24
  },
  titleText: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 16,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default BotorNotApp;