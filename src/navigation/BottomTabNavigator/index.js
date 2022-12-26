import React from "react";
import { Image, ImageBackground,  } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons, images,  } from "../../constants";
import styles from "./styles";
import { Holidays, HomeStack,} from "../StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
  
    <Tab.Navigator initialRouteName='Home'
     screenOptions={() => ({
      tabBarActiveTintColor: COLORS.blue,
      tabBarInactiveTintColor: COLORS.black2,
      tabBarStyle:styles.tabBarStyle,
      tabBarShowLabel: false,
    })} >
      <Tab.Screen name="Home" component={HomeStack}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => <Image style={styles.home} source={icons.home} resizeMode="stretch" />
        })}
      />
      <Tab.Screen name="Exit" component={HomeStack}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => <ImageBackground style={styles.rectangle} source={images.Rectangle} resizeMode="stretch">
            <Image style={styles.exit} source={icons.exit} resizeMode="contain"/>
          </ImageBackground>
        })}
      />
   <Tab.Screen name="Holiday" component={Holidays}
        options={() => ({
          headerShown: false,
          tabBarIcon: () => <Image style={styles.holiday} source={icons.holiday} resizeMode="stretch" />
        })}
      />
    </Tab.Navigator>
  )
}


export default BottomTabNavigator;

