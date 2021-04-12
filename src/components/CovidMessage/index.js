import React from "react"
import {View, Text, StyleSheet} from "react-native"

const CovidMessage = (props) =>
{
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Travel only if necessary!</Text>
            <Text style = {styles.text}>
                Due to the current pandemic, travelling is not advised unless absolutely necessary. We will be offereing our
                services, but that does not mean we recommend using it.
            </Text>
            <Text style = {styles.learn}>
                Learn more
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {

        container: {
            backgroundColor: "#5f939a",
            padding: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10
        },

        title: {

            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10

        },

        text: {

            color: '#eeebdd',
            fontSize: 15,
            marginBottom: 10

        },

        learn: {
            color: 'white',
            fontSize: 18
        }

    }
)

export default CovidMessage;