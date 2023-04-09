import React from "react";  

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === "light"

    return(
        <View style = {styles.container}>
            <Text style = {isDarkMode ? styles.textWhite : styles.darkText}>
                Hello!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    textWhite: {
        color: "#00cc31"
    },

    darkText: {
        color: "#000000"
    }
})


export default AppPro