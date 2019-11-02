import React from 'react';

import { Image } from 'react-native';

import { AvatarContext } from '../../App'

export function ChickenWing(props){
  const chickenWingStyles = {
    image: {
      width: props.cellDimensions.width,
      height: props.cellDimensions.width,
      position: 'absolute',
      left: props.chickenPosition.left,
      top: props.chickenPosition.top
    }
  }

  return (
    <AvatarContext.Consumer>
      {
        avatar => {
          const character = require('../../playerData')[avatar];
          return <Image source={character.itemToEat} style={chickenWingStyles.image}/> 
        }
      }
    </AvatarContext.Consumer>
  )
}