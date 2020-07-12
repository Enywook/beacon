import React, { useState } from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import ciasieChat from '../api/ciasieChat';

function LoginScreen({navigation}: any){
    const [isLogin, setIsLogin] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    return (
        <View style={styles.marginTop}>
            <Input placeholder="Email" value={login}/>
            <Input placeholder="Password" value={password}/>
            {isLogin && <Input placeholder="Repeat Password"/>}
            <TouchableOpacity 
                onPress={() => {
                    setIsLogin(false)
                }}
                style={styles.buttonStyle}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setIsLogin(true)
            }} style={styles.buttonStyle}>
                <Text>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
};

function Register(){
    
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    marginTop: {
        marginTop: 25
    },
    buttonStyle: {
        margin: 15,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    }
})

export default LoginScreen;