import React from 'react';

import { Animated } from 'react-native';

import { daniel as character } from '../../playerData';

export function LogoMainOwenFace (props) {
  return (
    <Animated.Image 
      source={character.faceImageWithBorder} 
      style={props.styleProps}
    />
  )
}