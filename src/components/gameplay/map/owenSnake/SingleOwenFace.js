import React from 'react';

import { Animated } from 'react-native';

import { daniel as character } from '../../../playerData'

export function SingleOwenFace(props){
  owenFaceStyles = {
    singleFace: {
      width: props.cellDimensions.width,
      height: props.cellDimensions.height,
      position: 'absolute',
      left: props.face.left,
      top: props.face.top
    }
  }

  return <Animated.Image source={character.gameplayImage} style={owenFaceStyles.singleFace}/>
}
