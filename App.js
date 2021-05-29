import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/components/navigations/routes'

// import Tabs from "./src/components/navigations/tabs";

const Stack = createStackNavigator();


const App = () => {
    return (
       
      <NavigationContainer>
      {/* <StatusBar backgroundColor="#50B282" barStyle="light-content" /> */}
      {/* <StatusBar translucent backgroundColor={COLORS.tranparent} /> */}
      <Routes />
      {/* <Drawer /> */}
    </NavigationContainer>
       
    )
}

export default App