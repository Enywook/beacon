import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import { Input } from 'react-native-elements';
import ciasieChat from '../api/ciasieChat';

function LoginScreen({navigation}: any){
    const [isLogin, setIsLogin] = useState(true);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [errorModalVisible, setErrorModalVisible ] = useState(false);
    const [successModalVisible, setSuccessModalVisible ] = useState(false);

    const register = async (username: string, password: string) => {
        try{
            const response = await ciasieChat.post('/user', {
                username: username,
                password: password
            });
            setSuccessModalVisible(true);
        }catch(error){
            setErrorModalVisible(true);
            console.log(error);
            //setErrorMessage(error);
        }
    }

    return (
        <View style={styles.marginTop}>
            <Modal 
            animationType="slide"
            transparent={true}
            visible={errorModalVisible}
            >
                <Text>ERROR</Text>
            </Modal>
            <Modal 
            animationType="slide"
            transparent={true}
            visible={successModalVisible}
            >
                        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Account created Successfully</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setSuccessModalVisible(!successModalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
            </Modal>
            <Input placeholder="Email"
             value={login}
             onChangeText={(email)=>{setLogin(email)}}
             autoCompleteType="email"
             autoCorrect={false}
             keyboardType="email-address"
             />
            <Input placeholder="Password"
            value={password}
            onChangeText={(password)=>{setPassword(password)}}
            autoCompleteType="password"
            secureTextEntry={true}/>
            {login.length <= 4 && !isLogin && <Text style={styles.errorMessage}>Must be at least 4 character long</Text>}
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
                Register()
            }} style={styles.submitButton}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );

    function Register(){
        console.log("REGISTER");
        if(!isLogin && password==repeatPassword && login.length>=4){
            register(login, password);
        }
        if(isLogin){
            navigation.navigate("Messages");
        }
    }
};

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