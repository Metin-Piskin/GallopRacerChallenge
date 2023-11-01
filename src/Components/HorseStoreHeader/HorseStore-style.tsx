import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  AllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  BackButtonImage: {
    width: 90,
    height: 45,
    resizeMode: 'contain',
  },
  FullnessText: {
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 26,
  },
  MoneyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MoneyText: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 26,
  },
  MoneyImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
});
