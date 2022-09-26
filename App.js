
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native';
import { Alert } from 'react-native-web';

const BotorNotApp = () => {
  const [titleText, setTitleText] = useState("Twitter's Bot or Not");
  const bodyText = "Input Twitter handle below:";
  const inputtext = "twitterhandle";
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

  const url = "https://api.twitter.com/2/users/by/username/";
  const text=url+tweeter
  fetch(text, requestOptions)
    .then(response => response.json())
    .then(result => setData(result.data.id))
    .catch(error => console.log('error', error));

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '614f313a16msh4e4a3bcba6257fcp1420ccjsn47f6e3ef2ae2',
        'X-RapidAPI-Host': 'botometer-pro.p.rapidapi.com'
      },
      body: '{"mentions":[{"contributors":null,"coordinates":null,"created_at":"Fri Aug 07 11:26:56 +0000 2020","entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[{"id":11330,"id_str":"11330","indices":[3,11],"name":"test user 1","screen_name":"screen_name"}]},"favorite_count":0,"favorited":false,"geo":null,"id":1291697,"id_str":"1291697","in_reply_to_screen_name":null,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"is_quote_status":false,"lang":"en","metadata":{"iso_language_code":"en","result_type":"recent"},"place":null,"retweet_count":14,"retweeted":false,"retweeted_status":{"contributors":null,"coordinates":null,"created_at":"Mon Jul 20 16:03:30 +0000 2020","entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[]},"favorite_count":35,"favorited":false,"geo":null,"id":128524,"id_str":"128524","in_reply_to_screen_name":null,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"is_quote_status":false,"lang":"en","metadata":{"iso_language_code":"en","result_type":"recent"},"place":null,"possibly_sensitive":false,"retweet_count":14,"retweeted":false,"source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>","text":"orignial tweet","truncated":true,"user":{"contributors_enabled":false,"created_at":"Mon May 27 17:57:42 +0000 2019","default_profile":true,"default_profile_image":false,"description":"description","entities":{},"favourites_count":754,"follow_request_sent":false,"followers_count":130,"following":false,"friends_count":295,"geo_enabled":false,"has_extended_profile":true,"id":11330,"id_str":"11330","is_translation_enabled":false,"is_translator":false,"lang":null,"listed_count":3,"location":"location","name":"test user 1","notifications":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_banner_url":null,"profile_image_url":null,"profile_image_url_https":null,"profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"protected":false,"screen_name":"screen_name","statuses_count":283,"time_zone":null,"translator_type":"none","url":null,"utc_offset":null,"verified":false}},"source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>","text":"RT @test_screen_name: test tweet","truncated":false,"user":{"contributors_enabled":false,"created_at":"Fri Jan 28 02:42:39 +0000 2011","default_profile":true,"default_profile_image":false,"description":"","entities":{"description":{"urls":[]}},"favourites_count":5756,"follow_request_sent":false,"followers_count":31,"following":false,"friends_count":260,"geo_enabled":true,"has_extended_profile":false,"id":24391,"id_str":"24391","is_translation_enabled":false,"is_translator":false,"lang":null,"listed_count":0,"location":"location","name":"test user 2","notifications":false,"profile_background_color":"C0DEED","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":null,"profile_image_url_https":null,"profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"protected":false,"screen_name":"test_screen_name_2","statuses_count":351,"time_zone":null,"translator_type":"none","url":null,"utc_offset":null,"verified":false}}],"timeline":[{"contributors":null,"coordinates":null,"created_at":"Fri Aug 07 14:26:36 +0000 2020","entities":{"hashtags":[],"symbols":[],"urls":[],"user_mentions":[{"id":2584,"id_str":"2584","indices":[0,12],"name":"mentined user","screen_name":"mentioned_user"}]},"favorite_count":0,"favorited":false,"geo":null,"id":12917,"id_str":"12917","in_reply_to_screen_name":"mentioned_user","in_reply_to_status_id":1291741,"in_reply_to_status_id_str":"1291741","in_reply_to_user_id":2584,"in_reply_to_user_id_str":"2584","is_quote_status":false,"lang":"und","place":null,"retweet_count":0,"retweeted":false,"source":"<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>","text":"@mentioned_user Yes","truncated":false,"user":{"contributors_enabled":false,"created_at":"Mon May 27 17:57:42 +0000 2019","default_profile":true,"default_profile_image":false,"description":"description","entities":{"description":{"urls":[]},"url":{"urls":[]}},"favourites_count":754,"follow_request_sent":false,"followers_count":130,"following":false,"friends_count":295,"geo_enabled":false,"has_extended_profile":true,"id":11330,"id_str":"11330","is_translation_enabled":false,"is_translator":false,"lang":null,"listed_count":3,"location":"location","name":"test user 1","notifications":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_banner_url":null,"profile_image_url":null,"profile_image_url_https":null,"profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"protected":false,"screen_name":"screen_name_2","statuses_count":283,"time_zone":null,"translator_type":"none","url":null,"utc_offset":null,"verified":false}}],"user":{"id_str":"11330","screen_name":"screen_name"}}'
    };
    
    fetch('https://botometer-pro.p.rapidapi.com/4/check_account', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

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
        data={data}
      />
      <Text
      style={styles.baseText}>Botometer: {data}</Text>
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