import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

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
    <FlatList
        keyExtractor={(message)=> message.author}
        data={messages}
        renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.author}</Text>
        }
    }/>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginHorizontal: 20
    }
});

export default MessageListScreen;