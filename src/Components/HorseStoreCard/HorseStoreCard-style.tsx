import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  AllContainer: {
    marginVertical: 10,
  },
  ImageBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
  },
  TitleText:{
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize:26,
    marginTop:-15
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('window').width - 75,
    //backgroundColor:'red',
    
  },
  TikImage: {
    position: 'absolute',
    width: 40,
    height: 40,
    top: 0,
    right: 15,
  },
  Image: {
    width: 140,
    height: 120,
    //resizeMode: 'contain',
  },
  StatsText: {
    color: '#fff',
    fontFamily: 'AmaticSC-Bold',
    fontSize:25
  },
  PriceContainer: {
    position: 'absolute',
    flexDirection: 'row',
    //backgroundColor: 'red',
    bottom: 8,
    right: 25,
    alignItems:'center'
  },
  PriceImage:{
    width:20,
    height:30,
    marginLeft:5,
    resizeMode:'contain'
  }
});
