import React from 'react';
import {View, ScrollView, ImageBackground} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RouterProps} from '../../Router';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, setmainHorse} from '../../Redux/ReduxStore';

import styles from './Barn-style';
import {Horse} from '../../Data/HorseData';
import BarnHeader from '../../Components/BarnHeader';
import BarnHorseCard from '../../Components/BarnHorseCard';

type BarnProps = NativeStackNavigationProp<RouterProps, 'Barn'>;

const Barn = () => {
  const navigation = useNavigation<BarnProps>();
  const At = useSelector((state: RootState) => state.at.at);
  const mainHorse = useSelector(
    (state: RootState) => state.mainHorse.mainHorse,
  );
  const Barn = useSelector((state: RootState) => state.barn.barn);
  const dispatch = useDispatch();

  const SeleckHourse = (e: any) => {
    dispatch(setmainHorse(e));
  };

  return (
    <ImageBackground
      source={require('../../Assets/2161.jpg')}
      style={styles.AllContainer}>
      <ScrollView>
        <BarnHeader
          BackPress={() => navigation.goBack()}
          Props={Horse.filter(e => At.includes(e.id)).length}
          Barn={Barn}
        />
        <View style={styles.BarnHorseContainer}>
          {Horse.filter(e => At.includes(e.id)).map(e => {
            return (
              <BarnHorseCard
                onPress={() => SeleckHourse(e.id)}
                color={e.id == mainHorse ? true : false}
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
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Barn;
