
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';

export type RootStackParamList = {
  Home: undefined;
  ImageScreen: { folderName: string, folderTitle: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'واجبات الفرد المسلم' }} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} options={({ route }) => ({ title: route.params.folderTitle })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
