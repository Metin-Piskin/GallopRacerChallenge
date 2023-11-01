import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  ImageBackground: {
    width: Dimensions.get('screen').width / 3.3,
    height: Dimensions.get('screen').width / 3.3,
    justifyContent: 'center',
  },
  TikImage:{
    width: 30,
    height: 30,
    position: 'absolute',
    right: 10,
    zIndex: 99,
  },
  Image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  TextContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //backgroundColor: 'red',
  },
  Title: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontFamily: 'AmaticSC-Bold',
    fontSize: 19,
    marginTop: -5,
  },
  Text: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    textAlign: 'center',
    fontSize: 19,
    marginTop: -5,
  },
});
