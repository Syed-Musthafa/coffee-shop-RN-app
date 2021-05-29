import React from "react";
import { View, Text, Image } from "react-native";

import { COLORS, FONTS, icons } from "../exports";

const TabIcon = ({ focused, icon, iconStyle, label,  }) => {
 
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? COLORS.lightGreen : COLORS.secondary,
            ...iconStyle,
          }}
        />
        {/* <Text
          style={{
            color: focused ? COLORS.white : COLORS.secondary,
            ...FONTS.h4,
          }}
        >
          {label}
        </Text> */}
      </View>
    );
  
};

export default TabIcon;
