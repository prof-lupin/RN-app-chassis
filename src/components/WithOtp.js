import React, { useContext, useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';
import {otpAuth} from '../api/loginApi';
import { AuthContext } from '../AuthProvider';

const WithOtp = ({navigation}) => {
    const [val, setVal] = useState('');
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [errorSubmit, setErrorSubmit] = useState(false);

    const reqData = {
        mobileNumber: val
    };

    const onChangeText = (text) => {
        const regexp = /^\d+$/;
        if(regexp.test(text.toString())) {
            setVal(text);
            // validateVal();
            setSubmitDisabled(false);
        }
        else {
            setVal("");
            setSubmitDisabled(true);
        }
    };
// 9680796743
    // const validateVal = () => {
    //     // return val.length===10;
    //     console.log(val.length);
    //     // (val.length+1)==10 ? setSubmitDisabled(false) : setSubmitDisabled(true);
    // };

    const onSubmit = async () => {
        if(val.length===10) {
            try{
                setErrorSubmit(false);
                // validateVal();
                const data = await axios.post('https://localhost:8443/api/auth/otp/generate', {data: reqData}).then((res) => res.data);
                console.log(data);
                if(data) {
                    navigation.navigate('EnterOtp', {
                        phoneNo: val,
                    });
                }
            } catch(err) {
                console.error(err);
            } 
        }
        else{
            setErrorSubmit(true);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS==='ios' ? 'padding' : null}
            style={styles.container}
        >
            <Text style={{marginLeft:5, fontWeight:'bold'}}>Enter Your Mobile No.</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyles} keyboardType={'number-pad'} autoFocus={true}
                    value={val}
                    onChangeText={(text) => onChangeText(text)}
                    maxLength={10}
                />
            </View>
            {errorSubmit===true && <Text style={{fontSize:13, color: 'red'}}>Enter a valid number.</Text>}
            <Button title='Send OTP' onPress={()=>navigation.navigate('EnterOtp', {phoneNo: val,})} disabled={submitDisabled} />
        </KeyboardAvoidingView>
    );
};

export default WithOtp;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex:1,
        margin:15
    },
    inputContainer: {
        borderColor: '#d4d4d4',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        margin:5
    },
    inputStyles: {
        padding: 10,
        fontWeight: 'bold',
        color: '#3543bf',
        fontSize: 18,
        width: '100%',
        // textAlign: 'center',
    }
});