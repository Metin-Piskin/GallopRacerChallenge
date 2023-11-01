import React, {FC} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';

import styles from './HomeHorseCard-style';

interface HomeHorseCardProps {
  speed: any;
  power: any;
  endurance: any;
  img: any;
}

const HomeHorseCard: FC<HomeHorseCardProps> = ({
  speed,
  power,
  endurance,
  img,
}) => {
  return (
    <View style={styles.AllContainer}>
      <ImageBackground
        style={styles.StatsImageContainer}
        resizeMode="contain"
        source={require('../../Assets/385.png')}>
        <View style={styles.StatsContainer}>
          <Text style={styles.StatsText}>Speed: {speed}</Text>
          <Text style={styles.StatsText}>Power: {power}</Text>
          <Text style={styles.StatsText}>Endurance: {endurance}</Text>
        </View>
      </ImageBackground>
      <Image style={styles.HorseImage} source={img} />
    </View>
  );
};

export default HomeHorseCard;
