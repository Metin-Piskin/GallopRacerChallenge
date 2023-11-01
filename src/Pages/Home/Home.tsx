import React, {useEffect, useState} from 'react';
import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RouterProps} from '../../Router';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, setmoney} from '../../Redux/ReduxStore';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';

import styles from './Home-style';
import {Horse} from '../../Data/HorseData';
import HomeHeader from '../../Components/HomeHeader';
import HorseStore from '../../Components/HorseStore';
import HomeHorseCard from '../../Components/HomeHorseCard';
import Loading from '../../Components/Loading';

type HomeProps = NativeStackNavigationProp<RouterProps, 'Home'>;

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'key';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

const Home = () => {
  const navigation = useNavigation<HomeProps>();
  const Money = useSelector((state: RootState) => state.money.value);
  const MainHorse = useSelector(
    (state: RootState) => state.mainHorse.mainHorse,
  );
  const BarnN = useSelector((state: RootState) => state.barn.barn);

  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      },
    );
    const unsubscribeerr = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        console.log('ad closed');
        setLoaded(false);
        //reload ad
        interstitial.load();
      },
    );

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      unsubscribeerr();
      unsubscribe();
    };
  }, []);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <ImageBackground
      style={styles.AllContainer}
      resizeMode="cover"
      source={require('../../Assets/2161.jpg')}>
      <HomeHeader
        Money={Money}
        BarnPress={() => navigation.navigate('Barn')}
        img={BarnN}
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            interstitial.show();
            dispatch(setmoney(Money + 100));
          }}>
          <Image
            style={{
              width: 85,
              height: 60,
              resizeMode: 'contain',
            }}
            source={require('../../Assets/iconsbillboard.png')}
          />
        </TouchableOpacity>
        <HorseStore HorseStorePress={() => navigation.navigate('HorseStore')} />
      </View>
      <View style={styles.HomeHorseCardContainer}>
        {Horse.filter(e => e.id == MainHorse).map(e => {
          return (
            <HomeHorseCard
              key={e.id}
              speed={e.speed}
              power={e.power}
              endurance={e.endurance}
              img={e.img}
            />
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.PlayButtonContainer}
        onPress={() => navigation.navigate('Races')}>
        <Image
          style={styles.PlayButtonImage}
          source={require('../../Assets/Play.png')}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Home;
