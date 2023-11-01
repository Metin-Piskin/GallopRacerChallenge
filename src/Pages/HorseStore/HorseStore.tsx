import React from 'react';
import {ScrollView, ImageBackground, View, Text, Alert} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RouterProps} from '../../Router';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, setmoney, setat, setbarn} from '../../Redux/ReduxStore';

import styles from './HorseStore-style';
import {Horse, Barn} from '../../Data/HorseData';
import HorseStoreHeader from '../../Components/HorseStoreHeader';
import BarnStoreCard from '../../Components/BarnStoreCard';
import HorseStoreCard from '../../Components/HorseStoreCard';

type HorseStoreProps = NativeStackNavigationProp<RouterProps, 'HorseStore'>;

const HorseStore = () => {
  const navigation = useNavigation<HorseStoreProps>();
  const At = useSelector((state: RootState) => state.at.at);
  const Money = useSelector((state: RootState) => state.money.value);
  const BarnN = useSelector((state: RootState) => state.barn.barn);

  const dispatch = useDispatch();

  const BuyHourse = (e: any) => {
    if (At.length < BarnN) {
      if (Money >= e.price) {
        dispatch(setat([...At, e.id]));
        dispatch(setmoney(Money - e.price));
      } else {
        Alert.alert('Warning', 'Not Enough Money');
      }
    } else {
      Alert.alert('Warning', 'Increase the Capacity of Your Full Stable');
    }
  };

  const BuyBarn = (e: any) => {
    if (Money >= e.price) {
      dispatch(setbarn(e.size));
      dispatch(setmoney(Money - e.price));
    } else {
      Alert.alert('Warning', 'Not Enough Money');
    }
  };

  return (
    <ImageBackground
      source={require('../../Assets/2161.jpg')}
      style={styles.AllContainer}>
      <ScrollView>
        <HorseStoreHeader
          BackPress={() => navigation.goBack()}
          Props={Horse.filter(e => At.includes(e.id)).length}
          Money={Money}
        />
        <Text style={styles.Title}>Barn</Text>
        <View style={styles.BarnContainer}>
          {Barn.map(e => {
            return (
              <BarnStoreCard
                disabled={BarnN < e.size ? false : true}
                key={e.id}
                tik={BarnN}
                onPress={() => BuyBarn(e)}
                img={e.img}
                price={e.price}
                size={e.size}
              />
            );
          })}
        </View>
        <Text style={styles.Title}>Horse</Text>
        {Horse.map(e => {
          return (
            <HorseStoreCard
              onPress={() => BuyHourse(e)}
              color={At.includes(e.id) ? true : false}
              disabled={At.includes(e.id) ? true : false}
              key={e.id}
              source={e.img}
              title={e.title}
              price={e.price}
              endurance={e.endurance}
              speed={e.speed}
              power={e.power}
            />
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default HorseStore;
