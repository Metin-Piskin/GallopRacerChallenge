import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Lottie from 'lottie-react-native';

import styles from './Loading-style';

const Loading = () => {
  return (
    <ImageBackground
      source={require('../../Assets/20454.jpg')}
      style={styles.LoadedContainer}>
      <View>
        <Text style={styles.LoadedTitleOne}>Gallop Racer</Text>
        <Text style={styles.LoadedTitleTwo}>Challenge</Text>
      </View>
      <Lottie
        source={require('../../Assets/animationln1n9v87.json')}
        autoPlay
        style={styles.LoadedLottie}
      />
    </ImageBackground>
  );
};

export default Loading;
