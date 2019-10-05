import React from 'react';

import { Image } from 'react-native';

import { owenWilson as character } from '../../playerData';

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
    <Image source={character.itemToEat} style={chickenWingStyles.image}/>
  )
}