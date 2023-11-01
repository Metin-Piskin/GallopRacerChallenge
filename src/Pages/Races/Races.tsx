import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RouterProps} from '../../Router';
import {useSelector, useDispatch} from 'react-redux';
import {
  RootState,
  setmoney,
  setraces,
  setraceLength,
  setday,
} from '../../Redux/ReduxStore';

import styles from './Races-style';
import {Horse} from '../../Data/HorseData';
import RacesHeader from '../../Components/RacesHeader';
import RacesCard from '../../Components/RacesCard';

type RacesProps = NativeStackNavigationProp<RouterProps, 'Races'>;


const Races = () => {
  const navigation = useNavigation<RacesProps>();
  const Money = useSelector((state: RootState) => state.money.value);
  const MainHorse = useSelector(
    (state: RootState) => state.mainHorse.mainHorse,
  );
  const Races = useSelector((state: RootState) => state.races.races);
  const RaceLength = useSelector(
    (state: RootState) => state.raceLength.raceLength,
  );
  const Day = useSelector((state: RootState) => state.day.day);

  const dispatch = useDispatch();

  const [mainHorseStats, setMainHorseStats] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEasy, setModalEasy] = useState<number>(Races.Easy);
  const [modalMiddle, setModalMiddle] = useState<number>(Races.Middle);
  const [modalHard, setModalHard] = useState<number>(Races.Hard);
  const [modalDifficulty, setModalDifficulty] = useState<string>('');
  const [conclusion, setConclusion] = useState<boolean>();

  useEffect(() => {
    setMainHorseStats(
      Horse.filter(e => e.id == MainHorse).map(
        e => (e.power + e.speed + e.endurance) / 3,
      ),
    );
  }, []);

  const GeneratedRaces = () => {
    const generatedEasyAverageStatsNumbers = [];
    for (let index = 1; index <= 6; index++) {
      const EasyrandomNum =
        (Math.floor(Math.random() * (30 - 0 + 1)) +
          0 +
          (Math.floor(Math.random() * (30 - 0 + 1)) + 0) +
          (Math.floor(Math.random() * (30 - 0 + 1)) + 0)) /
        3;
      generatedEasyAverageStatsNumbers.push(EasyrandomNum);
    }

    const generatedMiddleAverageStatsNumbers = [];
    for (let index = 1; index <= 8; index++) {
      const MiddlerandomNum =
        (Math.floor(Math.random() * (60 - 30 + 1)) +
          30 +
          (Math.floor(Math.random() * (60 - 30 + 1)) + 30) +
          (Math.floor(Math.random() * (60 - 30 + 1)) + 30)) /
        3;
      generatedMiddleAverageStatsNumbers.push(MiddlerandomNum);
    }

    const generatedHardAverageStatsNumbers = [];
    for (let index = 1; index <= 10; index++) {
      const HardrandomNum =
        (Math.floor(Math.random() * (100 - 60 + 1)) +
          60 +
          (Math.floor(Math.random() * (100 - 60 + 1)) + 60) +
          (Math.floor(Math.random() * (100 - 60 + 1)) + 60)) /
        3;
      generatedHardAverageStatsNumbers.push(HardrandomNum);
    }
    setModalEasy(
      generatedEasyAverageStatsNumbers.reduce(
        (total, number) => total + number,
        0,
      ) / 6,
    );
    setModalMiddle(
      generatedMiddleAverageStatsNumbers.reduce(
        (total, number) => total + number,
        0,
      ) / 8,
    );
    setModalHard(
      generatedHardAverageStatsNumbers.reduce(
        (total, number) => total + number,
        0,
      ) / 10,
    );
    dispatch(
      setraces({
        Easy:
          generatedEasyAverageStatsNumbers.reduce(
            (total, number) => total + number,
            0,
          ) / 6,
        Middle:
          generatedMiddleAverageStatsNumbers.reduce(
            (total, number) => total + number,
            0,
          ) / 8,
        Hard:
          generatedHardAverageStatsNumbers.reduce(
            (total, number) => total + number,
            0,
          ) / 10,
      }),
    );
    dispatch(
      setraceLength({
        Easy: Math.floor(Math.random() * (600 - 200 + 1)) + 200,
        Middle: Math.floor(Math.random() * (1200 - 600 + 1)) + 600,
        Hard: Math.floor(Math.random() * (2400 - 1200 + 1)) + 1200,
      }),
    );
    dispatch(setday(Day + 1));
    setModalVisible(false);
  };

  const RacesEasyRun = () => {
    const raceLengthDiff =
      RaceLength.Easy / mainHorseStats - RaceLength.Easy / Races.Easy;
    const raceLengthDif =
      RaceLength.Easy / Races.Easy - RaceLength.Easy / mainHorseStats;
    if (Money - 25 >= 0) {
      dispatch(setmoney(Money - 25));
      setModalVisible(true);
      setModalDifficulty('Easy');
      if (RaceLength.Easy / mainHorseStats > RaceLength.Easy / Races.Easy) {
        console.log(
          'Bir' +
            (
              RaceLength.Easy / mainHorseStats -
              RaceLength.Easy / Races.Easy
            ).toFixed(2),
        );
        if (-1 < raceLengthDiff && raceLengthDiff <= 10) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 55) {
            console.log('defeat 10');
            setConclusion(false);
          } else {
            console.log('win 10');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          }
        } else if (10 < raceLengthDiff && raceLengthDiff <= 20) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 60) {
            console.log('defeat 20');
            setConclusion(false);
          } else {
            console.log('win 20');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          }
        } else if (20 < raceLengthDiff && raceLengthDiff <= 30) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 65) {
            console.log('defeat 30');
            setConclusion(false);
          } else {
            console.log('win 30');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          }
        } else if (30 < raceLengthDiff && raceLengthDiff <= 40) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 70) {
            console.log('defeat 40');
            setConclusion(false);
          } else {
            console.log('win 40');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          }
        } else if (40 < raceLengthDiff && raceLengthDiff <= 50) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 75) {
            console.log('defeat 50');
            setConclusion(false);
          } else {
            console.log('win 50');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          }
        } else if (50 < raceLengthDiff && raceLengthDiff <= 60) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 80) {
            console.log('defeat 60');
            setConclusion(false);
          } else {
            console.log('win 60');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          }
        } else if (60 < raceLengthDiff && raceLengthDiff <= 70) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 85) {
            console.log('defeat 70');
            setConclusion(false);
          } else {
            console.log('win 70');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          }
        } else if (70 < raceLengthDiff && raceLengthDiff <= 80) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 90) {
            console.log('defeat 80');
            setConclusion(false);
          } else {
            console.log('win 80');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          }
        } else if (80 < raceLengthDiff && raceLengthDiff <= 90) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 95) {
            console.log('defeat 90');
            setConclusion(false);
          } else {
            console.log('win 90');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          }
        } else if (90 < raceLengthDiff && raceLengthDiff <= 100) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 100) {
            console.log('defeat 100');
            setConclusion(false);
          } else {
            console.log('win 100');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          }
        }
      } else {
        console.log(
          'iki' +
            (
              RaceLength.Easy / Races.Easy -
              RaceLength.Easy / mainHorseStats
            ).toFixed(2),
        );
        if (-1 < raceLengthDif && raceLengthDif <= 10) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 55) {
            console.log('iki win 10');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          } else {
            console.log('iki defeat 10');
            setConclusion(false);
          }
        } else if (10 < raceLengthDif && raceLengthDif <= 20) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 60) {
            console.log('iki win 20');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          } else {
            console.log('iki defeat 20');
            setConclusion(false);
          }
        } else if (20 < raceLengthDif && raceLengthDif <= 30) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 65) {
            console.log(' win 30');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          } else {
            console.log('defeat 30');
            setConclusion(false);
          }
        } else if (30 < raceLengthDif && raceLengthDif <= 40) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 70) {
            console.log(' win 40');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          } else {
            console.log('defeat 40');
            setConclusion(false);
          }
        } else if (40 < raceLengthDif && raceLengthDif <= 50) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 75) {
            console.log(' win 50');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          } else {
            console.log('defeat 50');
            setConclusion(false);
          }
        } else if (50 < raceLengthDif && raceLengthDif <= 60) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 80) {
            console.log(' win 60');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          } else {
            console.log('defeat 60');
            setConclusion(false);
          }
        } else if (60 < raceLengthDif && raceLengthDif <= 70) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 85) {
            console.log(' win 70');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          } else {
            console.log('defeat 70');
            setConclusion(false);
          }
        } else if (70 < raceLengthDif && raceLengthDif <= 80) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 90) {
            console.log(' win 80');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          } else {
            console.log('defeat 80');
            setConclusion(false);
          }
        } else if (80 < raceLengthDif && raceLengthDif <= 90) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 95) {
            console.log(' win 90');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          } else {
            console.log('defeat 90');
            setConclusion(false);
          }
        } else if (90 < raceLengthDif && raceLengthDif <= 100) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 100) {
            console.log('win 100');
            setConclusion(true);
            dispatch(setmoney(Money + 75));
          } else {
            console.log('defeat 100');
            setConclusion(false);
          }
        }
      }
    } else {
      Alert.alert('Warning', 'Not Enough Money');
    }
  };

  const RacesMiddleRun = () => {
    const raceLengthDiff =
      RaceLength.Middle / mainHorseStats - RaceLength.Middle / Races.Middle;
    const raceLengthDif =
      RaceLength.Middle / Races.Middle - RaceLength.Middle / mainHorseStats;
    if (Money - 100 >= 0) {
      dispatch(setmoney(Money - 100));
      setModalVisible(true);
      setModalDifficulty('Middle');
      if (
        RaceLength.Middle / mainHorseStats >
        RaceLength.Middle / Races.Middle
      ) {
        console.log(
          'Bir' +
            (
              RaceLength.Middle / mainHorseStats -
              RaceLength.Middle / Races.Middle
            ).toFixed(2),
        );
        if (-1 < raceLengthDiff && raceLengthDiff <= 10) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 55) {
            console.log('defeat 10');
            setConclusion(false);
          } else {
            console.log('win 10');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (10 < raceLengthDiff && raceLengthDiff <= 20) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 60) {
            console.log('defeat 20');
            setConclusion(false);
          } else {
            console.log('win 20');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (20 < raceLengthDiff && raceLengthDiff <= 30) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 65) {
            console.log('defeat 30');
            setConclusion(false);
          } else {
            console.log('win 30');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (30 < raceLengthDiff && raceLengthDiff <= 40) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 70) {
            console.log('defeat 40');
            setConclusion(false);
          } else {
            console.log('win 40');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (40 < raceLengthDiff && raceLengthDiff <= 50) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 75) {
            console.log('defeat 50');
            setConclusion(false);
          } else {
            console.log('win 50');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (50 < raceLengthDiff && raceLengthDiff <= 60) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 80) {
            console.log('defeat 60');
            setConclusion(false);
          } else {
            console.log('win 60');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (60 < raceLengthDiff && raceLengthDiff <= 70) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 85) {
            console.log('defeat 70');
            setConclusion(false);
          } else {
            console.log('win 70');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (70 < raceLengthDiff && raceLengthDiff <= 80) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 90) {
            console.log('defeat 80');
            setConclusion(false);
          } else {
            console.log('win 80');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (80 < raceLengthDiff && raceLengthDiff <= 90) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 95) {
            console.log('defeat 90');
            setConclusion(false);
          } else {
            console.log('win 90');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (90 < raceLengthDiff && raceLengthDiff <= 100) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 100) {
            console.log('defeat 100');
            setConclusion(false);
          } else {
            console.log('win 100');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (100 < raceLengthDiff && raceLengthDiff <= 110) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 105) {
            console.log('defeat 110');
            setConclusion(false);
          } else {
            console.log('win 110');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (110 < raceLengthDiff && raceLengthDiff <= 120) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 110) {
            console.log('defeat 120');
            setConclusion(false);
          } else {
            console.log('win 120');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (120 < raceLengthDiff && raceLengthDiff <= 130) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 115) {
            console.log('defeat 130');
            setConclusion(false);
          } else {
            console.log('win 130');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        } else if (130 < raceLengthDiff && raceLengthDiff <= 140) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 120) {
            console.log('defeat 140');
            setConclusion(false);
          } else {
            console.log('win 140');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          }
        }
      } else {
        console.log(
          'iki' +
            (
              RaceLength.Middle / Races.Middle -
              RaceLength.Middle / mainHorseStats
            ).toFixed(2),
        );
        if (-1 < raceLengthDif && raceLengthDif <= 10) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 55) {
            console.log('iki win 10');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('iki defeat 10');
            setConclusion(false);
          }
        } else if (10 < raceLengthDif && raceLengthDif <= 20) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 60) {
            console.log('iki win 20');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('iki defeat 20');
            setConclusion(false);
          }
        } else if (20 < raceLengthDif && raceLengthDif <= 30) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 65) {
            console.log(' win 30');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 30');
            setConclusion(false);
          }
        } else if (30 < raceLengthDif && raceLengthDif <= 40) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 70) {
            console.log(' win 40');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 40');
            setConclusion(false);
          }
        } else if (40 < raceLengthDif && raceLengthDif <= 50) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 75) {
            console.log(' win 50');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 50');
            setConclusion(false);
          }
        } else if (50 < raceLengthDif && raceLengthDif <= 60) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 80) {
            console.log(' win 60');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 60');
            setConclusion(false);
          }
        } else if (60 < raceLengthDif && raceLengthDif <= 70) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 85) {
            console.log(' win 70');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 70');
            setConclusion(false);
          }
        } else if (70 < raceLengthDif && raceLengthDif <= 80) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 90) {
            console.log(' win 80');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 80');
            setConclusion(false);
          }
        } else if (80 < raceLengthDif && raceLengthDif <= 90) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 95) {
            console.log(' win 90');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 90');
            setConclusion(false);
          }
        } else if (90 < raceLengthDif && raceLengthDif <= 100) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 100) {
            console.log('win 100');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 100');
            setConclusion(false);
          }
        } else if (100 < raceLengthDif && raceLengthDif <= 110) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 105) {
            console.log('win 110');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 110');
            setConclusion(false);
          }
        } else if (110 < raceLengthDif && raceLengthDif <= 120) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 110) {
            console.log('win 120');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 120');
            setConclusion(false);
          }
        } else if (120 < raceLengthDif && raceLengthDif <= 130) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 115) {
            console.log('win 130');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 130');
            setConclusion(false);
          }
        } else if (130 < raceLengthDif && raceLengthDif <= 140) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 120) {
            console.log('win 140');
            setConclusion(true);
            dispatch(setmoney(Money + 300));
          } else {
            console.log('defeat 140');
            setConclusion(false);
          }
        }
      }
    } else {
      Alert.alert('Warning', 'Not Enough Money');
    }
  };

  const RacesHardRun = () => {
    const raceLengthDiff =
      RaceLength.Hard / mainHorseStats - RaceLength.Hard / Races.Hard;
    const raceLengthDif =
      RaceLength.Hard / Races.Hard - RaceLength.Hard / mainHorseStats;
    if (Money - 300 >= 0) {
      dispatch(setmoney(Money - 300));
      setModalVisible(true);
      setModalDifficulty('Hard');
      if (RaceLength.Hard / mainHorseStats > RaceLength.Hard / Races.Hard) {
        console.log(
          'Bir' +
            (
              RaceLength.Hard / mainHorseStats -
              RaceLength.Hard / Races.Hard
            ).toFixed(2),
        );
        if (-1 < raceLengthDiff && raceLengthDiff <= 10) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 55) {
            console.log('defeat 10');
            setConclusion(false);
          } else {
            console.log('win 10');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (10 < raceLengthDiff && raceLengthDiff <= 20) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 60) {
            console.log('defeat 20');
            setConclusion(false);
          } else {
            console.log('win 20');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (20 < raceLengthDiff && raceLengthDiff <= 30) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 65) {
            console.log('defeat 30');
            setConclusion(false);
          } else {
            console.log('win 30');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (30 < raceLengthDiff && raceLengthDiff <= 40) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 70) {
            console.log('defeat 40');
            setConclusion(false);
          } else {
            console.log('win 40');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (40 < raceLengthDiff && raceLengthDiff <= 50) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 75) {
            console.log('defeat 50');
            setConclusion(false);
          } else {
            console.log('win 50');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (50 < raceLengthDiff && raceLengthDiff <= 60) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 80) {
            console.log('defeat 60');
            setConclusion(false);
          } else {
            console.log('win 60');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (60 < raceLengthDiff && raceLengthDiff <= 70) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 85) {
            console.log('defeat 70');
            setConclusion(false);
          } else {
            console.log('win 70');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (70 < raceLengthDiff && raceLengthDiff <= 80) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 90) {
            console.log('defeat 80');
            setConclusion(false);
          } else {
            console.log('win 80');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (80 < raceLengthDiff && raceLengthDiff <= 90) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 95) {
            console.log('defeat 90');
            setConclusion(false);
          } else {
            console.log('win 90');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (90 < raceLengthDiff && raceLengthDiff <= 100) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 100) {
            console.log('defeat 100');
            setConclusion(false);
          } else {
            console.log('win 100');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        }
        //
        if (100 < raceLengthDiff && raceLengthDiff <= 110) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 105) {
            console.log('defeat 110');
            setConclusion(false);
          } else {
            console.log('win 110');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (110 < raceLengthDiff && raceLengthDiff <= 120) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 110) {
            console.log('defeat 120');
            setConclusion(false);
          } else {
            console.log('win 120');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (120 < raceLengthDiff && raceLengthDiff <= 130) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 115) {
            console.log('defeat 130');
            setConclusion(false);
          } else {
            console.log('win 130');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (130 < raceLengthDiff && raceLengthDiff <= 140) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 120) {
            console.log('defeat 140');
            setConclusion(false);
          } else {
            console.log('win 140');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (140 < raceLengthDiff && raceLengthDiff <= 150) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 125) {
            console.log('defeat 150');
            setConclusion(false);
          } else {
            console.log('win 150');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (150 < raceLengthDiff && raceLengthDiff <= 160) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 130) {
            console.log('defeat 160');
            setConclusion(false);
          } else {
            console.log('win 160');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (160 < raceLengthDiff && raceLengthDiff <= 170) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 135) {
            console.log('defeat 170');
            setConclusion(false);
          } else {
            console.log('win 170');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (170 < raceLengthDiff && raceLengthDiff <= 180) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 145) {
            console.log('defeat 180');
            setConclusion(false);
          } else {
            console.log('win 180');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (180 < raceLengthDiff && raceLengthDiff <= 190) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 150) {
            console.log('defeat 190');
            setConclusion(false);
          } else {
            console.log('win 190');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (190 < raceLengthDiff && raceLengthDiff <= 200) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 155) {
            console.log('defeat 200');
            setConclusion(false);
          } else {
            console.log('win 200');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (200 < raceLengthDiff && raceLengthDiff <= 210) {
          if (Math.floor(Math.random() * (250 - 0 + 1)) + 0 <= 160) {
            console.log('defeat 210');
            setConclusion(false);
          } else {
            console.log('win 210');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (210 < raceLengthDiff && raceLengthDiff <= 220) {
          if (Math.floor(Math.random() * (250 - 0 + 1)) + 0 <= 165) {
            console.log('defeat 220');
            setConclusion(false);
          } else {
            console.log('win 220');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (220 < raceLengthDiff && raceLengthDiff <= 230) {
          if (Math.floor(Math.random() * (250 - 0 + 1)) + 0 <= 170) {
            console.log('defeat 230');
            setConclusion(false);
          } else {
            console.log('win 230');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (230 < raceLengthDiff && raceLengthDiff <= 240) {
          if (Math.floor(Math.random() * (250 - 0 + 1)) + 0 <= 175) {
            console.log('defeat 240');
            setConclusion(false);
          } else {
            console.log('win 240');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        } else if (240 < raceLengthDiff && raceLengthDiff <= 250) {
          if (Math.floor(Math.random() * (250 - 0 + 1)) + 0 <= 180) {
            console.log('defeat 250');
            setConclusion(false);
          } else {
            console.log('win 250');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          }
        }
      } else {
        console.log(
          'iki' +
            (
              RaceLength.Hard / Races.Hard -
              RaceLength.Hard / mainHorseStats
            ).toFixed(2),
        );
        if (-1 < raceLengthDif && raceLengthDif <= 10) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 55) {
            console.log('iki win 10');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('iki defeat 10');
            setConclusion(false);
          }
        } else if (10 < raceLengthDif && raceLengthDif <= 20) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 60) {
            console.log('iki win 20');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('iki defeat 20');
            setConclusion(false);
          }
        } else if (20 < raceLengthDif && raceLengthDif <= 30) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 65) {
            console.log(' win 30');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 30');
            setConclusion(false);
          }
        } else if (30 < raceLengthDif && raceLengthDif <= 40) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 70) {
            console.log(' win 40');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 40');
            setConclusion(false);
          }
        } else if (40 < raceLengthDif && raceLengthDif <= 50) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 75) {
            console.log(' win 50');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 50');
            setConclusion(false);
          }
        } else if (50 < raceLengthDif && raceLengthDif <= 60) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 80) {
            console.log(' win 60');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 60');
            setConclusion(false);
          }
        } else if (60 < raceLengthDif && raceLengthDif <= 70) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 85) {
            console.log(' win 70');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 70');
            setConclusion(false);
          }
        } else if (70 < raceLengthDif && raceLengthDif <= 80) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 90) {
            console.log(' win 80');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 80');
            setConclusion(false);
          }
        } else if (80 < raceLengthDif && raceLengthDif <= 90) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 95) {
            console.log(' win 90');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 90');
            setConclusion(false);
          }
        } else if (90 < raceLengthDif && raceLengthDif <= 100) {
          if (Math.floor(Math.random() * (100 - 0 + 1)) + 0 <= 100) {
            console.log('win 100');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 100');
            setConclusion(false);
          }
        }
        if (100 < raceLengthDiff && raceLengthDiff <= 110) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 105) {
            console.log('win 110');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 110');
            setConclusion(false);
          }
        } else if (110 < raceLengthDiff && raceLengthDiff <= 120) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 110) {
            console.log('win 120');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 120');
            setConclusion(false);
          }
        } else if (120 < raceLengthDiff && raceLengthDiff <= 130) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 115) {
            console.log('win 130');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 130');
            setConclusion(false);
          }
        } else if (130 < raceLengthDiff && raceLengthDiff <= 140) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 120) {
            console.log('win 140');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 140');
            setConclusion(false);
          }
        } else if (140 < raceLengthDiff && raceLengthDiff <= 150) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 125) {
            console.log('win 150');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 150');
            setConclusion(false);
          }
        } else if (150 < raceLengthDiff && raceLengthDiff <= 160) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 130) {
            console.log('win 160');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 160');
            setConclusion(false);
          }
        } else if (160 < raceLengthDiff && raceLengthDiff <= 170) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 135) {
            console.log('win 170');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 170');
            setConclusion(false);
          }
        } else if (170 < raceLengthDiff && raceLengthDiff <= 180) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 145) {
            console.log('win 180');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 180');
            setConclusion(false);
          }
        } else if (180 < raceLengthDiff && raceLengthDiff <= 190) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 150) {
            console.log('win 190');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 190');
            setConclusion(false);
          }
        } else if (190 < raceLengthDiff && raceLengthDiff <= 200) {
          if (Math.floor(Math.random() * (200 - 0 + 1)) + 0 <= 155) {
            console.log('win 200');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 200');
            setConclusion(false);
          }
        } else if (200 < raceLengthDiff && raceLengthDiff <= 210) {
          if (Math.floor(Math.random() * (250 - 0 + 1)) + 0 <= 160) {
            console.log('win 210');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 210');
            setConclusion(false);
          }
        } else if (210 < raceLengthDiff && raceLengthDiff <= 220) {
          if (Math.floor(Math.random() * (250 - 0 + 1)) + 0 <= 165) {
            console.log('win 220');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 220');
            setConclusion(false);
          }
        } else if (220 < raceLengthDiff && raceLengthDiff <= 230) {
          if (Math.floor(Math.random() * (250 - 0 + 1)) + 0 <= 170) {
            console.log('win 230');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 230');
            setConclusion(false);
          }
        } else if (230 < raceLengthDiff && raceLengthDiff <= 240) {
          if (Math.floor(Math.random() * (250 - 0 + 1)) + 0 <= 175) {
            console.log('win 240');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 240');
            setConclusion(false);
          }
        } else if (240 < raceLengthDiff && raceLengthDiff <= 250) {
          if (Math.floor(Math.random() * (250 - 0 + 1)) + 0 <= 180) {
            console.log('win 250');
            setConclusion(true);
            dispatch(setmoney(Money + 900));
          } else {
            console.log('defeat 250');
            setConclusion(false);
          }
        }
      }
    } else {
      Alert.alert('Warning', 'Not Enough Money');
    }
  };

  return (
    <ImageBackground
      source={require('../../Assets/20454.jpg')}
      resizeMode="stretch"
      style={styles.AllContainer}>
      <RacesHeader
        onPress={() => navigation.goBack()}
        Money={Money}
        Day={Day}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ImageBackground
          source={require('../../Assets/Modal.png')}
          style={styles.ModalImageBackground}
          resizeMode="contain">
          {modalDifficulty == 'Easy' && (
            <View>
              <Text style={styles.ModalDifficultyText}>Easy</Text>
            </View>
          )}
          {modalDifficulty == 'Middle' && (
            <View>
              <Text style={styles.ModalDifficultyText}>Middle</Text>
            </View>
          )}
          {modalDifficulty == 'Hard' && (
            <View>
              <Text style={styles.ModalDifficultyText}>Hard</Text>
            </View>
          )}
          <Image
            style={styles.ModalPistImage}
            source={require('../../Assets/Pist.png')}
          />
          <View style={styles.ModalTextContainer}>
            <View>
              {modalDifficulty == 'Easy' && (
                <View>
                  <Text style={styles.HorsesintheRaceTitle}>
                    Horses in the Race
                  </Text>
                  <Text style={styles.HorsesintheRaceText}>6</Text>
                </View>
              )}
              {modalDifficulty == 'Middle' && (
                <View>
                  <Text style={styles.HorsesintheRaceTitle}>
                    Horses in the Race
                  </Text>
                  <Text style={styles.HorsesintheRaceText}>8</Text>
                </View>
              )}
              {modalDifficulty == 'Hard' && (
                <View>
                  <Text style={styles.HorsesintheRaceTitle}>
                    Horses in the Race
                  </Text>
                  <Text style={styles.HorsesintheRaceText}>10</Text>
                </View>
              )}
              {modalDifficulty == 'Easy' && (
                <View>
                  <Text style={styles.HorsesintheRaceTitle}>
                    Statistic Average
                  </Text>
                  <Text style={styles.HorsesintheRaceText}>
                    {modalEasy?.toFixed(2)}
                  </Text>
                </View>
              )}
              {modalDifficulty == 'Middle' && (
                <View>
                  <Text style={styles.HorsesintheRaceTitle}>
                    Statistic Average
                  </Text>
                  <Text style={styles.HorsesintheRaceText}>
                    {modalMiddle?.toFixed(2)}
                  </Text>
                </View>
              )}
              {modalDifficulty == 'Hard' && (
                <View>
                  <Text style={styles.HorsesintheRaceTitle}>
                    Statistic Average
                  </Text>
                  <Text style={styles.HorsesintheRaceText}>
                    {modalHard?.toFixed(2)}
                  </Text>
                </View>
              )}
            </View>
            <View style={{justifyContent: 'center'}}>
              {Horse.filter(e => e.id == MainHorse).map(e => {
                return (
                  <View key={e.id}>
                    <Text style={styles.ModalAverageTitle}>Average</Text>
                    <Text style={styles.ModalAverageText}>
                      {((e.power + e.speed + e.endurance) / 3).toFixed(2)}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          {modalDifficulty == 'Easy' && (
            <View style={styles.ModalMoneyTContainer}>
              <View style={styles.ModalMoneyInnerContainer}>
                {conclusion ? (
                  <Image
                    source={require('../../Assets/Tik.png')}
                    style={styles.ModalMoneyTikImage}
                  />
                ) : (
                  <Image
                    source={require('../../Assets/default.png')}
                    style={styles.ModalMoneyTikImage}
                  />
                )}

                <Text style={styles.ModalMoneyText}>75</Text>
                <Image
                  source={require('../../Assets/iconsmoney.png')}
                  style={styles.ModalMoneyImage}
                />
              </View>
            </View>
          )}
          {modalDifficulty == 'Middle' && (
            <View style={styles.ModalMoneyTContainer}>
              <View style={styles.ModalMoneyInnerContainer}>
                {conclusion ? (
                  <Image
                    source={require('../../Assets/Tik.png')}
                    style={styles.ModalMoneyTikImage}
                  />
                ) : (
                  <Image
                    source={require('../../Assets/default.png')}
                    style={styles.ModalMoneyTikImage}
                  />
                )}
                <Text style={styles.ModalMoneyText}>300</Text>
                <Image
                  source={require('../../Assets/iconsmoney.png')}
                  style={styles.ModalMoneyImage}
                />
              </View>
            </View>
          )}
          {modalDifficulty == 'Hard' && (
            <View style={styles.ModalMoneyTContainer}>
              <View style={styles.ModalMoneyInnerContainer}>
                {conclusion ? (
                  <Image
                    source={require('../../Assets/Tik.png')}
                    style={styles.ModalMoneyTikImage}
                  />
                ) : (
                  <Image
                    source={require('../../Assets/default.png')}
                    style={styles.ModalMoneyTikImage}
                  />
                )}
                <Text style={styles.ModalMoneyText}>900</Text>
                <Image
                  source={require('../../Assets/iconsmoney.png')}
                  style={styles.ModalMoneyImage}
                />
              </View>
            </View>
          )}
          {conclusion ? (
            <Text style={styles.ConclusionText}>Win</Text>
          ) : (
            <Text style={styles.ConclusionText}>Defeat</Text>
          )}

          <TouchableOpacity
            style={styles.ModalNextButtonContainer}
            onPress={GeneratedRaces}>
            <ImageBackground
              source={require('../../Assets/NextDay.png')}
              style={styles.NextDayImageBackground}
              resizeMode="contain">
              <Text style={styles.NextDayText}>Next Day</Text>
            </ImageBackground>
          </TouchableOpacity>
        </ImageBackground>
      </Modal>
      <View style={styles.HorseContainer}>
        {Horse.filter(e => e.id == MainHorse).map(e => {
          return (
            <View style={styles.HorseCardContainer} key={e.id}>
              <Image style={styles.HorseCardImage} source={e.img} />
              <View>
                <Text style={styles.HorseCardAverageText}>Average</Text>
                <Text style={styles.HorseCardText}>
                  {((e.power + e.speed + e.endurance) / 3).toFixed(2)}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <RacesCard
        onPress={RacesEasyRun}
        difficulty={'Easy'}
        AverageStats={Races.Easy.toFixed(2)}
        NumberOfHorses={6}
        EntranceFee={25}
        Award={75}
        Length={RaceLength.Easy}
      />
      <RacesCard
        onPress={RacesMiddleRun}
        difficulty={'Middle'}
        AverageStats={Races.Middle.toFixed(2)}
        NumberOfHorses={8}
        EntranceFee={100}
        Award={300}
        Length={RaceLength.Middle}
      />
      <RacesCard
        onPress={RacesHardRun}
        difficulty={'Hard'}
        AverageStats={Races.Hard.toFixed(2)}
        NumberOfHorses={10}
        EntranceFee={300}
        Award={900}
        Length={RaceLength.Hard}
      />
      <TouchableOpacity onPress={GeneratedRaces}>
        <ImageBackground
          source={require('../../Assets/NextDay.png')}
          style={styles.NextDayImageBackground}
          resizeMode="contain">
          <Text style={styles.NextDayText}>Next Day</Text>
        </ImageBackground>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Races;
