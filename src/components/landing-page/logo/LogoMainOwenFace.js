import React from 'react';

import { Animated } from 'react-native';

import { AvatarContext } from '../../App';

export function LogoMainOwenFace (props) {
  return (
    <AvatarContext.Consumer>
      {
        avatar => {
          const character = require('../../playerData')[avatar]
          return <Animated.Image 
            source={character.faceImageWithBorder} 
            style={props.styleProps}
        />
        }
      }
    </AvatarContext.Consumer>
  )
}