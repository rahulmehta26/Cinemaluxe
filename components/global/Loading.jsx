import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import color from '../../constant/Color';
import * as Progress from 'react-native-progress';

const Loading = () => {

    const {width, height} = useWindowDimensions();

  return (
    <View
    style = {{height, width}}
    className = 'absolute flex-row justify-center items-center' 
    >

        <Progress.CircleSnail thickness = {6} size = {60} color = '#FFD700' />
      
    </View>
  );
};

export default Loading;