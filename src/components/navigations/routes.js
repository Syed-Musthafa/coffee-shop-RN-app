import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';


import { DrawerContent } from "./Drawer";

import Tab from "./tabs"




import {
  DetailsScreen
} from "./../pages/SubScreens"
import { COLORS } from '../exports';


const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();


const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={[{ flex: 1, overflow: 'hidden' }, style]}>
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false
        // }}
        initialRouteName={"Tab"}
        headerMode="none"
      >

        {/* mainScreen */}

        <Stack.Screen name="Tab" component={Tab} />



        {/* subsScreen */}

        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

      </Stack.Navigator>

    </Animated.View>
  )
}

const Routes = () => {

  const [progress, setProgress] = React.useState(new Animated.Value(0))

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 10],
  })



  const screensStyles = { borderRadius, transform: [{ scale }] };

  return (
    <Drawer.Navigator headerMode="none"
      drawerType="slide"
      overlayColor="tranparent"
      drawerStyle={{ width: '55%', backgroundColor: COLORS.primary }}
      contentContainerStyle={{ flex: 1 }}
      drawerContentOptions={{
        activeBackgroundColor: COLORS.primary,
        activeTintColor: "green",
        inactiveTintColor: "green"
      }}
      sceneContainerStyle={{ backgroundColor: COLORS.primary }}
      // initialRouteName=""
      drawerContent={(props) => {
        setProgress(props.progress);

        return <DrawerContent {...props} />
      }}
    >



      <Drawer.Screen name="Screens"  >
        {props => <Screens {...props} style={screensStyles} />}
      </Drawer.Screen>

    </Drawer.Navigator>
  )
}

export default Routes