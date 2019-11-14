import React from 'react';

import { Image } from 'react-native';

export function ChickenWing(props){
  const chickenWingStyles = {
    image: {
      position: 'absolute',
      left: props.chickenPosition.left,
      top: props.chickenPosition.top
    }
  }

  const sizeStyles = {
    width: props.itemDimensions.itemWidth,
    height: props.itemDimensions.itemHeight
  }

  return <Image source={props.character.itemToEat} style={[chickenWingStyles.image, sizeStyles]}/> 
}