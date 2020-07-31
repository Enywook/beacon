import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import ciasieChat from '../api/ciasieChat';
import AsyncStorage from '@react-native-community/async-storage';
import base64 from 'react-native-base64' ;
import { BaseRouter } from '@react-navigation/native';

function LoginScreen({navigation}: any){
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [modalMessage, setModaleMessage] = useState('');
    const [successModalVisible, setSuccessModalVisible ] = useState(false);

    const register = async (username: string, password: string) => {
        try{
            const response = await ciasieChat.post('/user', {
                username: username,
                password: password
            });
            setModaleMessage('Account created successfully !');
            setSuccessModalVisible(true);
        }catch(error){
            setSuccessModalVisible(true);
            setModaleMessage(error.response.data.message);
        }
    }

    const login = async(username: string, password: any)=>{
        try{
            setUsername('FrancisCabrel');
            setPassword('Poker');
            const authHeader = 'Basic '+ base64.encode(`${username}:${password}`);
            const response = await ciasieChat.get('/user/login',{
                headers: { 'Authorization': authHeader}
            });
            await AsyncStorage.setItem('token', response.data.data.token);
            navigation.navigate('Messages');
            
        }catch(error){
            console.log(error);
            setSuccessModalVisible(true);
            setModaleMessage('An error occured, please Try Again');
        }
    }

    return (
        <View style={styles.marginTop}>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={successModalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{modalMessage}</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                            setSuccessModalVisible(!successModalVisible);
                        }}>
                            <Text style={styles.textStyle}>OK</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <Input placeholder="Email"
             value={username}
             onChangeText={(email)=>{setUsername(email)}}
             autoCompleteType="email"
             autoCorrect={false}
             keyboardType="email-address"
             />
            <Input placeholder="Password"
            value={password}
            onChangeText={(password)=>{setPassword(password)}}
            autoCompleteType="password"
            secureTextEntry={true}/>
            {password.length < 4 && !isLogin && <Text style={styles.errorMessage}>Must be at least 4 character long</Text>}
            {!isLogin && <Input placeholder="Repeat Password"
            onChangeText={(repeatPassword)=>{setRepeatPassword(repeatPassword)}}
            autoCompleteType="password"
            secureTextEntry={true}
            />}
            {!isLogin && password!=repeatPassword && <Text style={styles.errorMessage}>Must be the same as Password</Text>}
            <TouchableOpacity 
                onPress={() => {
                    setIsLogin(true)
                }}
                style={styles.buttonStyle}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setIsLogin(false)
            }} style={styles.buttonStyle}>
                <Text>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                Submit()
            }} style={styles.submitButton}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );

    function Submit(){
        if(!isLogin && password==repeatPassword && username.length>=4){
            register(username, password);
        }
        if(isLogin){
            login(username, password)
        }
    }
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    marginTop: {
        marginTop: 25
    },
    buttonStyle: {
        margin: 15,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    submitButton:{
        margin: 15,
        alignItems: "center",
        backgroundColor: "#3366ff",
        padding: 10,
        borderRadius: 10
    },
    errorMessage:{
        color: "red"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
})

export default LoginScreen;