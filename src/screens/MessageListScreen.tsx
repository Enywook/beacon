import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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
            <Message message="Couco" imageSource={require('../../assets/images/beach.jpg')}></Message>
        </View>
        
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginHorizontal: 20
    }
});

export default MessageListScreen;