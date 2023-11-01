import React, {FC} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import styles from './HorseStoreCard-style';

interface HorseStoreCardProps {
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

const HorseStoreCard: FC<HorseStoreCardProps> = ({
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
      disabled={disabled}
      onPress={onPress}
      style={styles.AllContainer}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../Assets/3333.png')}
        style={styles.ImageBackground}>
        {color ? (
          <Image
            style={styles.TikImage}
            source={require('../../Assets/Tik.png')}
          />
        ) : (
          <></>
        )}
        <Text style={styles.TitleText}>{title}</Text>
        <View style={styles.Container}>
          <Image style={styles.Image} source={source} />
          <View>
            <Text style={styles.StatsText}>Endurance: {endurance}</Text>
            <Text style={styles.StatsText}>Speed: {speed}</Text>
            <Text style={styles.StatsText}>Power: {power}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.PriceContainer}>
        <Text style={styles.StatsText}>{price}</Text>
        <Image
          style={styles.PriceImage}
          source={require('../../Assets/iconsmoney.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HorseStoreCard;
