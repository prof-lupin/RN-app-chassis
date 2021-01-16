import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import Center from '../utils/Center';

const Login = ({navigation}) => {
    return (
        <Center>
            <Text>I am a "Log in with credentials" Screen.</Text>
            <Button title='Log In' onPress={()=>console.log('Pressed Log In button.')} />
            <Button title='Use OTP instead' onPress={()=> navigation.navigate('Otp')} />
        </Center>
    );
};

export default Login;