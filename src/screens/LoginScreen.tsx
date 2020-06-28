import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';


function LoginScreen({navigation}: any){
    return (
        <View>
    <Text style={styles.textStyle}> Login Screen</Text>
    <Button
    title="Go to Messages"
    onPress={() => navigation.navigate('Messages')}
  />
  </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default LoginScreen;