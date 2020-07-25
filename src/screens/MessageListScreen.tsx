import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Message  from '../components/Message';

function MessageListScreen(){
    const messages = [
        { author: "Billy" },
        { author: "Bobby" },
        { author: "Daffy" },
        { author: "Spooky" },
        { author: "Fred" },
        { author: "Gérard" },
        { author: "Bob" },
        { author: "Cindy" }
    ];
    return (
        <View>
            
        <ScrollView>
            {messages.map(message => 
            <Message message={message.author} imageSource={require('../../assets/images/beach.jpg')}></Message>
            )}
        </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginHorizontal: 20
    }
});

export default MessageListScreen;