import React from 'react';
import {KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import PropTypes from 'prop-types';

const InputScreensHOC = (component) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS==='ios' ? 'padding' : 'height'}
            style={{flex:1}}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {component}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

InputScreensHOC.propTypes = {
    component: PropTypes.element,
};

export default InputScreensHOC;



