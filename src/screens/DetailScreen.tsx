import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'

interface Props extends StackScreenProps<any, any>{}{

}
export const DetailScreen = ({route}:Props) => {
  console.log(route.params);
  
  return (
    <View>
        
    </View>
  )
}