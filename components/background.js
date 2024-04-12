import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const Backgroundpage = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/Flowers.png')}
        style={{ height: '100%' }} />
      <View style={{ position: 'absolute' }}>
        {children}
      </View>
    </View>
  );
};


export default Backgroundpage;