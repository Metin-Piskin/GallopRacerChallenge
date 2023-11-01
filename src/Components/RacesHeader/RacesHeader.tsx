import React, {FC} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import styles from './RacesHeader-style';

interface RacesHeaderProps {
  onPress: () => void;
  Money: any;
  Day: any;
}

const RacesHeader: FC<RacesHeaderProps> = ({onPress, Money, Day}) => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.BackButtonImage}
          source={require('../../Assets/Back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.DayText}>{Day} Day</Text>
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

export default RacesHeader;
