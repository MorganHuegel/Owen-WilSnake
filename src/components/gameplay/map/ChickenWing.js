import React from 'react';

import { Image } from 'react-native';

import { AvatarContext } from '../../App'
import players from '../../playerData';

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
          const character = players[avatar];
          return <Image source={character.itemToEat} style={chickenWingStyles.image}/> 
        }
      }
    </AvatarContext.Consumer>
  )
}