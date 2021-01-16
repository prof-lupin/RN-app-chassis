import React, { useState, useRef, useContext } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Text, View } from 'react-native';
import { otpAuth } from '../api/loginApi';
import { AuthContext } from '../AuthProvider';
import { CustomTextInput } from '../lib/CustomTextInput';
import Center from '../utils/Center';

const EnterOtp = ({route, navigation}) => {

    const [otpArray, setOtpArray] = useState(['','','','']);
    const {phoneNo} = route.params;

    const {login} = useContext(AuthContext);

    const firstTextInputRef = useRef(null);
    const secondTextInputRef = useRef(null);
    const thirdTextInputRef = useRef(null);
    const fourthTextInputRef = useRef(null);

    const refCallback = textInputRef => node => {
        textInputRef.current = node;
    };

    const onSubmitButtonPress = async () => {
        // API call
        try {
          const otp=otpArray.join('');
          console.log(otp);
          const reqData = {
            otp: otp,
            mobileNumber: phoneNo
          }
          const data = await otpAuth.post('/validate/' ,{reqData});
          if(data) {
            login();
          }
        } catch (err) {
          console.error(err);
        }
    };

    // key presses other than backspace
    const onOtpChange = index => {
        return value => {
          if (isNaN(Number(value))) {
            return;
          }
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index] = value;
          setOtpArray(otpArrayCopy);
    
          if (value !== '') {
            if (index === 0) {
              secondTextInputRef.current.focus();
            } else if (index === 1) {
              thirdTextInputRef.current.focus();
            } else if (index === 2) {
              fourthTextInputRef.current.focus();
            }
          }
        };
    };

    // to handle pressing of backspace
    const onOtpKeyPress = index => {
        return ({nativeEvent: {key: value}}) => {
          // auto focus to previous InputText if value is blank and existing value is also blank
          if (value === 'Backspace' && otpArray[index] === '') {
            if (index === 1) {
              firstTextInputRef.current.focus();
            } else if (index === 2) {
              secondTextInputRef.current.focus();
            } else if (index === 3) {
              thirdTextInputRef.current.focus();
            }
          }
        };
    };
    
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS==='ios' ? 'padding' : null}
        style={{flex:1}}
      >
        <Center>
            <Text>Enter OTP sent on : {phoneNo==='' ? null: JSON.parse(phoneNo)}</Text>
            <View style={{flexDirection: 'row', marginTop: 12}}>
                {[firstTextInputRef,
                secondTextInputRef,
                thirdTextInputRef,
                fourthTextInputRef,
                ].map((textInputRef, index) => (
                    <CustomTextInput
                        value={otpArray[index]}
                        onKeyPress={onOtpKeyPress(index)}
                        onChangeText={onOtpChange(index)}
                        keyboardType={'numeric'}
                        maxLength={1}
                        key={index}
                        autoFocus={index===0 ? true : undefined}
                        refCallback={refCallback(textInputRef)}
                    />
                ))}
            </View>
        </Center>
        <Button title='Submit' onPress={login} />
      </KeyboardAvoidingView>
    );
};

export default EnterOtp;