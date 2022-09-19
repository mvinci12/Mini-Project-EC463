
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

const BotorNotApp = () => {
  const [titleText, setTitleText] = useState("Twitter's Bot or Not");
  const bodyText = "Input Twitter handle below:";
  const inputtext = "@twitterhandle";

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>{titleText}</Text>
        <Text numberOfLines={5}>{"\n\n\n\n"}
          {bodyText}</Text>
      </Text>
      <TextInput style={styles.textinput}>{inputtext}</TextInput>
    </View>
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