import React from 'react';
import { Text, StyleSheet } from 'react-native';

function LoginScreen(){
    return (
    <Text style={styles.textStyle}> Login Screen</Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default LoginScreen;