// SignIn and SignUp screens(Bottom tabs).
// SignIn has a stack: 
//      1. Sign in with OTP     2. Sign in with Credentials
// SignUp routes not thought of.
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Register from '../components/Register';
import LoginStack from '../Stacks/LoginStack';

const MaterialBottomTabs = createMaterialBottomTabNavigator();

const AuthTabs = () => {
    return (
        <MaterialBottomTabs.Navigator initialRouteName='Login'>
            <MaterialBottomTabs.Screen name='Login' component={LoginStack} />
            <MaterialBottomTabs.Screen name='Register' component={Register} options={{title:'Sign Up'}} />
        </MaterialBottomTabs.Navigator>
    );
};

export default AuthTabs;