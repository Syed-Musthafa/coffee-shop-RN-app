import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"



import { Home, Purchase, Favourite, Profile } from "../pages"
import { TabIcon } from "../../components/components"
import { COLORS, icons } from "../exports"

const Tab = createBottomTabNavigator()



const Tabs = () => {

     return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                style: {
                    backgroundColor: COLORS.primary,
                    borderTopColor: "transparent",
                    height:70
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                       
                        return(
                            <TabIcon 
                                focused={focused}
                                icon={icons.home}
                                label="Home"
                            />
                        )
                    
                    }
                }}
               
            />
            <Tab.Screen
                name="Purchase"
                component={Purchase}
                options={{
                    tabBarIcon: ({focused }) => {
                        
                        return(
                            <TabIcon 
                                focused={focused}
                                icon={icons.shop}
                                label="Purchase"
                            />
                        )
                        
                    }
                }}
               
            />
            
            <Tab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    tabBarIcon: ({focused }) => {
                        
                        return(
                            <TabIcon 
                                focused={focused}
                                icon={icons.favourite}
                                label="Favourite"
                            />
                        )
                        
                    }
                }}
               
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused }) => {
                        
                        return(
                            <TabIcon 
                                focused={focused}
                                icon={icons.profile}
                                label="Profile"
                            />
                        )
                        
                    }
                }}
               
            />
        </Tab.Navigator>
    )
}

export default Tabs;

