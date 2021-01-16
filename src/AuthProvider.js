import React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = React.useState(false);
    return (
        <AuthContext.Provider value={{
            loggedIn,
            login: () => {
                setLoggedIn(true);
                // try {
                //     await AsyncStorage.setItem('user', user);
                // } catch(err) {
                //     console.error(err);
                // } 
            },
            logout: () => {
                // try {
                //     await AsyncStorage.removeItem('user');
                // } catch(err) {
                //     console.error(err);
                // }
                setLoggedIn(false);
            }}
        }>
            {children}
        </AuthContext.Provider>
    );
};