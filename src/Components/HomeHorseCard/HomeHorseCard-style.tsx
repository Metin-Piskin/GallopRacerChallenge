import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  AllContainer: {
    //backgroundColor: 'red',
    width: Dimensions.get('screen').width,
  },
  StatsImageContainer: {
    width: Dimensions.get('screen').width / 2.5,
    height: Dimensions.get('screen').height / 5,
    position: 'absolute',
    right: Dimensions.get('screen').width / 8.3,
    top: -Dimensions.get('screen').height / 5,
    //alignItems: 'center',
    justifyContent: 'flex-end',
    //alignSelf: 'flex-end',
  },
  StatsContainer: {
    //top: 39,
    bottom:14,
    alignItems: 'center',
  },
  StatsText: {
    color: '#fff',
    //fontWeight: 'bold',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 19,
    marginTop: -10,
  },
  HorseImage: {
    width: 280,
    height: 260,
    alignSelf: 'center',
  },
});
