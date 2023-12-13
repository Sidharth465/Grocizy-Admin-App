import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StackNavigation from './src/navigator/StackNavigation';

const App = () => {
  return (
    <>
      <StackNavigation />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
