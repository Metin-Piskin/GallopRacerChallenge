import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  AllContainer: {
    flex: 1,
  },
  ModalImageBackground: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height - 100,
    //backgroundColor:'red',
    alignSelf: 'center',
    //justifyContent:'space-evenly',
    alignItems: 'center',
    paddingTop: Dimensions.get('screen').height / 7,
  },
  ModalDifficultyText: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 40,
  },
  ModalPistImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  ModalTextContainer: {
    flexDirection: 'row',
    //backgroundColor: 'red',
    width: Dimensions.get('screen').width - 100,
    justifyContent: 'space-between',
  },
  HorsesintheRaceTitle: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 25,
    textDecorationLine: 'underline',
  },
  HorsesintheRaceText: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  ModalAverageTitle: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 25,
    textDecorationLine: 'underline',
  },
  ModalAverageText: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  ModalMoneyTContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor:'red',
    // width: Dimensions.get('screen').width - 100,
    //justifyContent:'space-around',
    marginTop: 20,
  },
  ModalMoneyInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ModalMoneyTikImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 9,
  },
  ModalMoneyText: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 20,
  },
  ModalMoneyImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  ConclusionText: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 35,
  },
  ModalNextButtonContainer: {
    position: 'absolute',
    bottom: Dimensions.get('screen').height / 6.5,
  },
  HorseContainer: {
    alignItems: 'center',
  },
  HorseCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HorseCardImage: {
    width: 120,
    height: 100,
  },
  HorseCardAverageText: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 20,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  HorseCardText: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 35,
  },
  NextDayImageBackground: {
    width: Dimensions.get('screen').width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 7,
    flexDirection: 'row',
  },
  NextDayText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 23,
  },
});
