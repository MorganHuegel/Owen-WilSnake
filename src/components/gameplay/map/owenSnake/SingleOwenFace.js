import React from 'react';

import { Animated } from 'react-native';

import { AvatarContext } from '../../../App';
import players from '../../../playerData';

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

  return (
    <AvatarContext.Consumer>
      {
        ({avatar}) => {
          const character = players[avatar];
          return <Animated.Image source={character.gameplayImage} style={owenFaceStyles.singleFace}/>
        }
      }
    </AvatarContext.Consumer>
  )
}
