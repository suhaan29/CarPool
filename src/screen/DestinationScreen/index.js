import React from "react"
import {View, Text, TextInput, SafeAreaView} from 'react-native'
import styles from "./styles"
import { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const DestinationScreen = (props) => {
const [fromText, setFromText] = useState('');
const [toText, setToText] = useState('');




    return (
        <SafeAreaView >
          <View style = {styles.container}>
          
          <TextInput style = {styles.textInput} 
          placeholder = "Current Location"
          value = {fromText}
          onChangeText = {setFromText}
           />
           
           
           <TextInput  style = {styles.textInput}
            placeholder = "Where to?"
            value = {toText}
            onChangeText = {setToText}
             />

            <GooglePlacesAutocomplete
                 placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                 console.log(data, details);
                      }}
                 query={{
                      key: 'AIzaSyB1KoK7KQe8YzwScTNjCJlHRSi7my056bk',
                      language: 'en',
                     }}
             />

          </View>
          
        </SafeAreaView>
    )
}

export default DestinationScreen