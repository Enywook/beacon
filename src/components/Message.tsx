import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

function Message(props: any){
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text> {props.message} </Text>
        </View>
    )
}

export default Message;