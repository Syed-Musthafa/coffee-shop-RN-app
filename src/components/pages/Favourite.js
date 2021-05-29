import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../exports'

const Favourite = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color:COLORS.white}}>Favourite</Text>
        </View>
    )
}

export default Favourite

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignItems:'center'
    }
})



