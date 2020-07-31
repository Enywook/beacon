import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import Message  from '../components/Message';
import AsyncStorage from '@react-native-community/async-storage' ;
import ciasieChat from '../api/ciasieChat';

function MessageListScreen(){
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState('');
    const [token, setToken] = useState('');
    const ws = useRef(null);

    useEffect(() => {
        const fectchToken = async () => {
             const tempToken = await AsyncStorage.getItem('token');
             setToken(tempToken);
        }
        fectchToken();
        loadMessages();
        ws.current = new WebSocket('wss://iut.jeremypgn.com/ws?session_token='+token);
        
        ws.current.onmessage = (httpResponse) =>{
            try{
                console.log((JSON.parse(httpResponse.data)));
                const httpResponseJSON = JSON.parse(httpResponse.data);
            if(httpResponseJSON.type == "new_message"){
                console.log("You've got mail");
            }
            //setMessages([...messages, JSON.parse(httpResponse.data.data)]);
            }catch(e){
                console.log(e);
            }
        }
    },[]);


    const loadMessages = async ()=>{
        try{
            const response = await ciasieChat.get('/message', {headers : {'Authorization': 'Bearer '+await AsyncStorage.getItem('token')}});
            setMessages(response.data.data);
        }catch(error){
            console.log(error.response.data);
        }
    }

    const sendMessage = async () =>{
        try{
            console.log(token);
            if(ws)
                ws.current.send(JSON.stringify({session:{token: token}, message: newMessage}));
                else
                console.log("NO WS");
        }catch(e){
            console.log(e);
        }

    }


        return (
        <View style={styles.container}>
        { messages!=null && <ScrollView>
            {messages.map((message) => (
            <Message key={message.id} message={message.content} author={message.user.username}></Message>
            ))}
        </ScrollView> }
        <View style={styles.bottom}>
            <TextInput style={styles.sendMessage}
            placeholder="Send Message"
            onChangeText={text => setNewMessage(text)}
            value={newMessage}
            onSubmitEditing={sendMessage}
            />
        </View>
        <Button onPress={()=>{if(ws)ws.close}} title="close connection">Close Connection</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginHorizontal: 20
    },
    sendMessage:{
        position: "absolute",
        bottom: 0,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        width: '90%',
        height: 40,
        paddingLeft: 8
    },
    bottom:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        marginLeft: 22
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
      }
});

export default MessageListScreen;