/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Routes from './Routes';
import { AuthProvider } from './src/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;