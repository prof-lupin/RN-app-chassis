import React from 'react';

import {StyleSheet, View, TextInput} from 'react-native';

export const CustomTextInput = (props) => {

    const {LeftComponent, RightComponent, refCallback, ...remainingProps} = props;

    return (
        <View style={styles.containerStyle}>
            {LeftComponent}
            <TextInput {...remainingProps}
                style={styles.textInputStyle}
                ref={refCallback}
            />
            {RightComponent}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderColor: '#d4d4d4',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        //height: 45,
        marginRight:10,
    },
    textInputStyle: {
        padding: 10,
        fontWeight: 'bold',
        color: '#3543bf',
        fontSize: 18,
        width: '100%',
        textAlign: 'center',
        
    },
});

CustomTextInput.defaultProps = {
    LeftComponent: <></>,
    RightComponent: <></>,
};