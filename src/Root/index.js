import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/LoginPage';
import BottomTabNavigator from '../navigation/BottomTabNavigator';

const Stack = createStackNavigator();

const Root = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginPage'>
                <Stack.Screen name="LoginPage" component={LoginPage}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                  <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}
                    options={() => ({
                        headerShown: false,
                    })}
                />
                    
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Root;