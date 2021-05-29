import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../exports'

const Purchase = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color:COLORS.white}}>Purchase</Text>
        </View>
    )
}

export default Purchase

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignItems:'center'
    }
})


