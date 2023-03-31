import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
}