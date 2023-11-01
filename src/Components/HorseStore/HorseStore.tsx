import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './HorseStore-style';

interface HorseStoreProps {
  HorseStorePress: () => void;
}

const HorseStore: FC<HorseStoreProps> = ({HorseStorePress}) => {
  return (
    <TouchableOpacity style={styles.Container} onPress={HorseStorePress}>
      <Image
        style={styles.ShopImage}
        source={require('../../Assets/Shop.png')}
      />
    </TouchableOpacity>
  );
};

export default HorseStore;
