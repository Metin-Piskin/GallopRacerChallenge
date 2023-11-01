import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {},
  ImageBackground: {
    marginTop: 15,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4.5,
  },
  DifficultyText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 28,
  },
  ContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
    marginTop: -6,
  },
  TitleText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 17,
    textDecorationLine: 'underline',
  },
  TitleContentText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 19,
  },
  PistImage: {
    width: 90,
    height: 55,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  LengthText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 23,
  },
  MoneyTitle:{
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 18,
    textDecorationLine:'underline'
  },
  MoneyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:-7
  },
  MoneyText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 23,
  },
  MoneyImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
