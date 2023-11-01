import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './BarnHeader-style';

interface BarnHeaderProps {
  BackPress: () => void;
  Props: any;
  Barn: any;
}

const BarnHeader: FC<BarnHeaderProps> = ({BackPress, Props, Barn}) => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity onPress={BackPress}>
        <Image
          style={styles.BackButtonImage}
          source={require('../../Assets/Back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.FullnessText}>
        {Props}/{Barn}
      </Text>
      <TouchableOpacity style={{opacity: 0}} disabled>
        <Image
          style={styles.BackButtonImage}
          source={require('../../Assets/Back.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BarnHeader;
