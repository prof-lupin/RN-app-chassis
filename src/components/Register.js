import React from 'react';
import { Text, Button, View } from 'react-native';
import Center from '../utils/Center';

const Register = ({navigation}) => {
    return (
        <Center>
            <Text>I am a Sign Up Screen.</Text>
            <Button title='Log In' onPress={()=>{navigation.navigate('Login')}} />
        </Center>
    );
};

export default Register;