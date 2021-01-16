// 1. With Credentials      2. With OTP
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/WithCredentials';
import WithOtp from '../components/WithOtp';
import EnterOtp from '../components/EnterOtp';

const Stack = createStackNavigator();

const LoginStack = () => {
    return(
        <Stack.Navigator initialRouteName='Credentials' screenOptions={{headerTitle:'Log In'}}>
            <Stack.Screen name='Credentials' component={Login} />
            <Stack.Screen name='Otp' component={WithOtp} />
            <Stack.Screen name='EnterOtp' component={EnterOtp} />
        </Stack.Navigator>
    );
}

export default LoginStack;