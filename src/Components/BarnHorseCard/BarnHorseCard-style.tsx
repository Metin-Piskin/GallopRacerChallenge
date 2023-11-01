import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    //flexDirection: 'row',
    //backgroundColor: 'red',
    //marginHorizontal: 20,
    //marginTop: 15,
    //justifyContent: 'space-evenly',
    //alignItems: 'center',
    //borderRadius: 10,
    //width:Dimensions.get('window').width/5
  },
  ImageBackground:{
    alignItems:'center',
    justifyContent:'center',
    width:Dimensions.get('window').width/2.1,
    //height:Dimensions.get('window').height/3,
    height:270,
    //backgroundColor:'red'
  },
  TikImage:{
    position:'absolute',
    width:40,
    height:40,
    top:0,
    right:15
  },
  Image: {
    width: 140,
    height: 120,
    //resizeMode: 'contain',
  },
  Text:{
    color:'#fff',
    fontFamily:'AmaticSC-Bold',
    fontSize:18
  },
});
