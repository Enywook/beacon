import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

function Message({author, message} : any){
    return (
        <View style={{paddingLeft: 6}}>
            <Text style={styles.author}>{author} : </Text><Text style={styles.message}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
author:{
    color: 'red',
    fontSize: 18
},
message:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    fontSize: 18,
    flexWrap: 'wrap',
}
})

export default Message;