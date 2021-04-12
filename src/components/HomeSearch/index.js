import React from "react"
import {View, Text, StyleSheet} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Feather from "react-native-vector-icons/Feather"
const HomeSearch = (props) =>
{
    return (
        <View>

            <View style = {styles.inputContainer}>
                <Text style = {styles.inputText}>Where to?</Text>

                <View style = {styles.timeContainer}>
                    <AntDesign name = "clockcircle" size = {16}/>
                    <Text>Now</Text>
                    <MaterialIcons name = "keyboard-arrow-down" size = {16}/>
                </View>
            </View>
            <View style = {styles.row}>

                <View style = {styles.destinationContainer}>
                    <AntDesign name = "clockcircle" size = {25} color = {'#e9896a'} />
                </View>
                <Text>
                    Pheonix City Mall
                </Text>

            </View>
        
            <View style = {styles.rowTwo}>

                <View style = {styles.homeContainer}>
                    <Feather name = "home" size = {30} color = {'#1597bb'} />
                </View>
                <Text>
                    Bandra Kurla Complex
                </Text>

            </View>

            
            

         
        </View>
    );
}

export default HomeSearch;

const styles = StyleSheet.create({

    inputContainer: {
        backgroundColor: "#f3f4ed", //colorhunt color
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', //align them to different ends
        alignItems: 'center',
        padding: 10
    },

    inputText: {
        fontSize: 20,

    },

    timeContainer: {
        flexDirection: 'row',
        width: 100,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: 'white',
        padding: 10,
        borderColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        
        paddingLeft: 20,
        paddingBottom: 20,
        paddingTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor:  "#f3f4ed",
    },

    destinationContainer: {
      
        marginRight: 20

    },

    rowTwo: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#f3f4ed"
    },

    homeContainer: {
        marginRight: 20
    }

    

})