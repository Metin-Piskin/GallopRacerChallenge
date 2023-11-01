import React from 'react';
import {View, Text,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Redux/ReduxStore';

import Home from './Pages/Home';
import HorseStore from './Pages/HorseStore';
import Barn from './Pages/Barn';
import Races from './Pages/Races';
import Loading from './Components/Loading';

const Stack = createNativeStackNavigator();

export type RouterProps = {
  Home: undefined;
  HorseStore: undefined;
  Barn: undefined;
  Races: undefined;
};

const Router = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <StatusBar hidden={true}/>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HorseStore" component={HorseStore} />
            <Stack.Screen name="Barn" component={Barn} />
            <Stack.Screen name="Races" component={Races} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default Router;
