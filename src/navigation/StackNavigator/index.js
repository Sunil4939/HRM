import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import { Image, TouchableOpacity, Dimensions } from 'react-native';
import { COLORS, icons, images } from '../../constants';
const { width, height } = Dimensions.get('window')
import MyProfile from '../../screens/MyProfile';
import HomePage from '../../screens/HomePage';
import LeaveRequest from '../../screens/LeaveRequest';
import Holiday from '../../screens/Holiday';
import OverTime from '../../screens/OverTime';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {

  return (
    <Stack.Navigator initialRouteName='HomePage'>
      <Stack.Screen name="HomePage" component={HomePage}
        options={() => ({
          // headerShown: false,
          headerStyle: { elevation: 25, backgroundColor: COLORS.white },
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image style={styles.brandName} source={images.brandName} resizeMode='stretch' />
          ),

          headerLeft: () => (
            <TouchableOpacity >
              <Image style={styles.logo} source={images.logo} resizeMode="contain" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerBtn}>
              <Image style={styles.menu} source={icons.menu} resizeMode="contain" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="MyProfile" component={MyProfile}
        options={({navigation}) => ({
          headerTitle: "My Profile",
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity style={[styles.headerBtn,{marginLeft: width * .04}]} onPress={() => navigation.goBack()}>
            <Image style={styles.menu} source={icons.back} resizeMode="contain" />
          </TouchableOpacity>
          ),
        })}
      />
       
       <Stack.Screen name="LeaveRequest" component={LeaveRequest}
        options={({navigation}) => ({
          headerTitle: "Leave Request",
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity style={[styles.headerBtn,{marginLeft: width * .04}]} onPress={() => navigation.goBack()}>
            <Image style={styles.menu} source={icons.back} resizeMode="contain" />
          </TouchableOpacity>
          ),
        })}
      />
       <Stack.Screen name="OverTime" component={OverTime}
        options={({navigation}) => ({
          headerTitle: "OverTime",
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity style={[styles.headerBtn,{marginLeft: width * .04}]} onPress={() => navigation.goBack()}>
            <Image style={styles.menu} source={icons.back} resizeMode="contain" />
          </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
const Holidays = ({navigation}) => {

  return (
    <Stack.Navigator initialRouteName='Holidays'>
     
      <Stack.Screen name="Holidays" component={Holiday}
        options={({navigation}) => ({
          headerTitle: "Holidays",
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity style={[styles.headerBtn,{marginLeft: width * .04}]} onPress={() => navigation.goBack()}>
            <Image style={styles.menu} source={icons.back} resizeMode="contain" />
          </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}




export {
  HomeStack,
  Holidays,
}