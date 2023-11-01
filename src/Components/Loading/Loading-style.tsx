import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  LoadedContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  LoadedTitleOne: {
    fontFamily: 'AmaticSC-Bold',
    color: '#fff',
    fontSize: Dimensions.get('screen').width / 4.5,
    //fontWeight: '900',
    textAlign: 'center',
    marginRight: Dimensions.get('screen').width / 5,
  },
  LoadedTitleTwo: {
    fontFamily: 'AmaticSC-Bold',
    color: '#fff',
    fontSize: Dimensions.get('screen').width / 4.5,
    //fontWeight: '900',
    textAlign: 'center',
    marginTop: -25,
    marginLeft: Dimensions.get('screen').width / 4,
  },
  LoadedLottie: {
    width: Dimensions.get('screen').width / 1,
    height: Dimensions.get('screen').width / 1,
  },
});
