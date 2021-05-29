import React from 'react'
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem

} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



import { SIZES ,COLORS, images, icons} from '../exports';




export function DrawerContent(props) {

  // const isFocused = useIsFocused();
 
    // console.log("progress", props.progress);
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex:1, backgroundColor:COLORS.primary}}>
        <View>

       

        <View style={{ flex:1, padding:SIZES.padding2, alignItems:"center", justifyContent:'center'}}>
            <Text style={{ fontSize:40, fontWeight:'bold'}}>
                Menu
            </Text>
        </View>
            <DrawerItem
                icon={({color, size}) => (
                  // <Icon name="home" color={color} size={size} style={{marginTop:20}} />
                  <View style={{ marginTop:23}}>
                  <Image source={icons.home} resizeMode="contain" style={{ width:30, height:30, tintColor:COLORS.lightGray3}} />
                  </View>
                )}
                label="Home"
                labelStyle={{marginLeft: -16, marginTop:20, color:COLORS.white}}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <View style={{}}>
                  <Image source={icons.shop} resizeMode="contain" style={{ width:30, height:30, tintColor:COLORS.lightGray3}} />
                  </View>
                )}
                label="Purchase"
                labelStyle={{marginLeft: -16, color:COLORS.white}}
                onPress={() => {
                  props.navigation.navigate('Purchase');
                }}
              />
              <DrawerItem
                icon={({color, size}) => (
                  <View style={{ }}>
                  <Image source={icons.favourite} resizeMode="contain" style={{ width:25, height:25,tintColor:COLORS.lightGray3}} />
                  </View>
                )}
                label="Favourite"
                labelStyle={{marginLeft: -12,color:COLORS.white}}
                onPress={() => {
                  props.navigation.navigate('Favourite');
                }}
              />
               <DrawerItem
                icon={({color, size}) => (
                  <View style={{ }}>
                  <Image source={icons.profile} resizeMode="contain" style={{ width:25, height:25, tintColor:COLORS.lightGray3}} />
                  </View>
                )}
                label="Profile"
                labelStyle={{marginLeft: -12, color:COLORS.white}}
                onPress={() => {
                  props.navigation.navigate('Profile');
                }}
              />
              
             
            </View>  
            <View style={{ flex:1 , justifyContent:'flex-end', marginBottom:20}}>
            <DrawerItem
                icon={({color, size}) => (
                  <View style={{ }}>
                  <Image source={icons.logout} resizeMode="contain" style={{ width:25, height:25, tintColor:COLORS.lightGray3}} />
                  </View>
                )}
                label="Logout"
                labelStyle={{marginLeft: -16, color:COLORS.white}}
                // onPress={() => {
                //   Alert.alert("log out")
                // }}
              />
            </View>
        </DrawerContentScrollView>
    )
}


const styles = StyleSheet.create({})
