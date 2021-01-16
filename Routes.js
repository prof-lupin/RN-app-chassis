import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { AuthContext } from './src/AuthProvider';
import MainStack from './src/Stacks/MainStack';
// import LoginStack from './src/Stacks/LoginStack';
import AuthTabs from './src/Tabs/AuthTabs';



const Routes = () => {
    const {loggedIn} = useContext(AuthContext);
    return (
        <NavigationContainer>
            {loggedIn ? (
                <MainStack />
            ) : (
                <AuthTabs />
            )}
        </NavigationContainer>
    );
};

export default Routes;