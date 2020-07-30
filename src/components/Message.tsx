import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

function Message({author, message} : any){
    return (
        <View>
            <Text>{author}</Text>
            <Text> {message} </Text>
        </View>
    )
}

export default Message;