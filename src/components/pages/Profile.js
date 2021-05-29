
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../exports'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color:COLORS.white}}>Profile</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignItems:'center'
    }
})

