import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './App';
import Note from './Note';


const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                    <Stack.Screen name="Note" component={Note} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
export default Navigator;