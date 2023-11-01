import React, {useEffect, FC, useRef, useState} from 'react';
import {View, Text, Animated} from 'react-native';

interface ProgressBarProps {
  step: any;
  steps: any;
  height: any;
}

const ProgressBar: FC<ProgressBarProps> = ({step, steps, height}) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <View
      style={{
        height: height,
        width: '70%',
        backgroundColor: 'red',
        borderRadius: height,
        overflow: 'hidden',
        alignSelf:'center'
      }}>
      <Animated.Image
        source={require('../../Assets/HorseImage/Beş.png')}
        onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height: height,
          resizeMode: 'contain',
          width: '100%',
          
          borderRadius: height,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 0,
          left: 0,
          transform: [
            {
              translateX: animatedValue,
            },
          ],
        }}
      />
    </View>
  );
};
export default ProgressBar;
