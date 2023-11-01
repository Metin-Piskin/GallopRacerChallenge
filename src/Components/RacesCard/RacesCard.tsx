import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import styles from './RacesCard-style';

interface RacesCardProps {
  difficulty: any;
  AverageStats: any;
  NumberOfHorses: any;
  EntranceFee: any;
  Award: any;
  Length: any;
  onPress: () => void;
}

const RacesCard: FC<RacesCardProps> = ({
  onPress,
  difficulty,
  AverageStats,
  NumberOfHorses,
  EntranceFee,
  Award,
  Length,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Container}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../../Assets/3333.png')}
        style={styles.ImageBackground}>
        <Text style={styles.DifficultyText}>{difficulty}</Text>
        <View style={styles.ContentContainer}>
          <View>
            <View>
              <Text style={styles.TitleText}>Horses in the Race</Text>
              <Text style={styles.TitleContentText}>{NumberOfHorses}</Text>
            </View>
            <View>
              <Text style={styles.TitleText}>Statistic Average</Text>
              <Text style={styles.TitleContentText}>{AverageStats}</Text>
            </View>
          </View>

          <View>
            <Image
              style={styles.PistImage}
              source={require('../../Assets/Pist.png')}
            />
            <Text style={styles.LengthText}>{Length} m</Text>
          </View>

          <View>
            <Text style={styles.MoneyTitle}>Entrance Fee</Text>
            <View style={styles.MoneyContainer}>
              <Text style={styles.MoneyText}>{EntranceFee}</Text>
              <Image
                source={require('../../Assets/iconsmoney.png')}
                style={styles.MoneyImage}
              />
            </View>
            <Text style={styles.MoneyTitle}>Award</Text>
            <View style={styles.MoneyContainer}>
              <Text style={styles.MoneyText}>{Award}</Text>
              <Image
                source={require('../../Assets/iconsmoney.png')}
                style={styles.MoneyImage}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RacesCard;
