import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>
                Home
            </Text>
            <Button title='Detail' onPress={()=>{navigation.navigate("Detail");}} />


        </View>
    )
}
