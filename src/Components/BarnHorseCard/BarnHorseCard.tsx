import React, {FC} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import styles from './BarnHorseCard-style';

interface BarnHorseCardProps {
  source: any;
  title: string;
  price: number;
  endurance: number;
  speed: number;
  power: number;
  onPress: () => void;
  color?: any;
  disabled?: any;
}
//style={[styles.Container, {backgroundColor: color}]}
const BarnHorseCard: FC<BarnHorseCardProps> = ({
  source,
  title,
  price,
  endurance,
  speed,
  power,
  onPress,
  color,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={styles.Container}
      disabled={disabled}
      onPress={onPress}>
      <ImageBackground
        resizeMode="contain"
        source={require('../../Assets/3232.png')}
        style={styles.ImageBackground}>
        {color ? (
          <Image
            style={styles.TikImage}
            source={require('../../Assets/Tik.png')}
          />
        ) : (
          <></>
        )}
        <Image style={styles.Image} source={source} />
        <View>
          <Text style={styles.Text}>{title}</Text>
        </View>
        <View>
          <Text style={styles.Text}>Endurance: {endurance}</Text>
          <Text style={styles.Text}>Speed: {speed}</Text>
          <Text style={styles.Text}>Power: {power}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default BarnHorseCard;
