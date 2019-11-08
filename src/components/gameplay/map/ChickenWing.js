import React from 'react';

import { Image } from 'react-native';

import { AvatarContext } from '../../App'
import players from '../../playerData';

export function ChickenWing(props){
  const chickenWingStyles = {
    image: {
      position: 'absolute',
      left: props.chickenPosition.left,
      top: props.chickenPosition.top
    }
  }

  return (
    <AvatarContext.Consumer>
      {
        ({avatar}) => {
          const character = players[avatar];
          const sizeStyles = character.itemWidth > character.itemHeight ? {
            width: props.cellDimensions.width * (character.itemWidth / character.itemHeight) * character.itemScale,
            height: props.cellDimensions.width * character.itemScale
          } : {
            width: props.cellDimensions.width * character.itemScale,
            height: props.cellDimensions.width * (character.itemHeight / character.itemWidth) * character.itemScale
          }
          return <Image source={character.itemToEat} style={[chickenWingStyles.image, sizeStyles]}/> 
        }
      }
    </AvatarContext.Consumer>
  )
}