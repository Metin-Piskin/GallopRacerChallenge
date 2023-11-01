import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  AllContainer: {
    flex: 1,
  },
  HomeHorseCardContainer: {
    position: 'absolute',
    //bottom: 50,
    bottom: Dimensions.get('screen').height / 10,
    //width: 400,
    alignItems: 'center',
    // backgroundColor:'red'
  },
  PlayButtonContainer: {
    position: 'absolute',
    bottom: 15,
    left: Dimensions.get('screen').width/2.2,
  },
  PlayButtonImage: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
});
