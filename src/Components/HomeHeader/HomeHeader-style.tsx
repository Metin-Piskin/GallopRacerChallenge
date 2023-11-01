import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MoneyContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  MoneyImage:{
    width: 45,
    height: 45,
    resizeMode:'contain'
  },
  MoneyText:{
    color:'#fff',
    fontFamily:'AmaticSC-Bold',
    fontSize:30
  },
  BarnImage: {
    width: 60,
    height: 60,
    resizeMode:'contain'
  },
});
//AmaticSC-Regular