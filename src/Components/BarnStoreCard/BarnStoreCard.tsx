import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

import styles from './BarnStoreCard-style';

interface BarnStoreCardProps {
  onPress: () => void;
  img: any;
  price: any;
  size: any;
  tik: any;
  disabled:any
}

const BarnStoreCard: FC<BarnStoreCardProps> = ({
  onPress,
  img,
  price,
  size,
  tik,
  disabled
}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      {tik < size ? (
        <></>
        ) : (
        <Image
          source={require('../../Assets/Tik.png')}
          style={styles.TikImage}
        />
      )}
      <ImageBackground
        source={require('../../Assets/BarnBack.png')}
        style={styles.ImageBackground}
        resizeMode="contain">
        <Image source={img} style={styles.Image} />
        <View style={styles.TextContainer}>
          <View>
            <Text style={styles.Title}>Size</Text>
            <Text style={styles.Text}>{size}</Text>
          </View>
          <View>
            <Text style={styles.Title}>Price</Text>
            <Text style={styles.Text}>{price}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default BarnStoreCard;
