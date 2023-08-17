import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './screens/ButtomTabs.navigtor';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};
