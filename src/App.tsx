import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './screens/ButtomTabs.navigtor';
import { AppProvider } from "./App.provider";

export const App: React.FC = () => {
  return (
    <AppProvider>
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
    </AppProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});