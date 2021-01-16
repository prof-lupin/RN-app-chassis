import React, { useContext } from 'react';
import { Button, Text } from 'react-native';
import { AuthContext } from '../AuthProvider';
import Center from '../utils/Center';

const Home = ({navigation}) => {
    const {logout} = useContext(AuthContext);
    return (
        <Center>
            <Text>You have successfully logged in.</Text>
            <Button title='View Calendar' onPress={()=>navigation.navigate('CalendarScreen')} />
            <Button title='Logout' onPress={logout} />
        </Center>
    );
};

export default Home;