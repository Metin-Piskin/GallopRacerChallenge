import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './HomeHeader-style';

interface HomeHeaderProps {
  Money: any;
  BarnPress: () => void;
  img: any;
}

const HomeHeader: FC<HomeHeaderProps> = ({Money, BarnPress, img}) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.MoneyContainer}>
        <Image
          style={styles.MoneyImage}
          source={require('../../Assets/iconsmoney.png')}
        />

        <Text style={styles.MoneyText}>{Money}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={BarnPress}>
        {img == 7 && (
          <Image
            style={styles.BarnImage}
            source={require('../../Assets/BarnOne.png')}
          />
        )}
         {img == 17 && (
          <Image
            style={styles.BarnImage}
            source={require('../../Assets/BarnTwo.png')}
          />
        )}
         {img == 28 && (
          <Image
            style={styles.BarnImage}
            source={require('../../Assets/BarnThree.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
