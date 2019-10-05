import React from 'react';

import { Animated } from 'react-native';

import { owenWilson } from '../../playerData';

export function LogoMainOwenFace (props) {
  return (
    <Animated.Image 
      source={owenWilson.faceImageWithBorder} 
      style={props.styleProps}
    />
  )
}