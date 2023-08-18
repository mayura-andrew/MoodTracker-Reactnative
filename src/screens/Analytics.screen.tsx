import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Analytics: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Analytics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});