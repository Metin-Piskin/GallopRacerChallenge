import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  BackButtonImage: {
    width: 90,
    height: 45,
    resizeMode: 'contain',
  },
  DayText:{
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize:28
  },
  MoneyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MoneyText: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize:28
  },
  MoneyImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
});
