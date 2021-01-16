import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../components/Home';
import Calendar from '../components/Calendar';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name='HomeScreen' component={Home} options={{headerTitle: 'Home'}} />
            <Stack.Screen name='CalendarScreen' component={Calendar} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default MainStack;