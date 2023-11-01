import React, {FC} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

import styles from './HorseStore-style';

interface HorseStoreHeaderProps {
  BackPress: () => void;
  Props: any;
  Money: any;
}

const HorseStoreHeader: FC<HorseStoreHeaderProps> = ({
  BackPress,
  Props,
  Money,
}) => {
  return (
    <View style={styles.AllContainer}>
      <TouchableOpacity onPress={BackPress}>
        <Image
          style={styles.BackButtonImage}
          source={require('../../Assets/Back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.FullnessText}>{Props}/28</Text>
      <View style={styles.MoneyContainer}>
        <Text style={styles.MoneyText}>{Money}</Text>
        <Image
          style={styles.MoneyImage}
          source={require('../../Assets/iconsmoney.png')}
        />
      </View>
    </View>
  );
};

export default HorseStoreHeader;
