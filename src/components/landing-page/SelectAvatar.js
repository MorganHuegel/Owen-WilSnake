import React from 'react'
import { View, Picker, Button } from 'react-native';

import players from '../playerData';
import { AvatarContext } from '../App';

export function SelectAvatar(props){
  const selectAvatarStyles = {
    container: {
      position: 'relative',
      flex: 1,
      justifyContent: 'center'
    },
    picker: {
    },
    items: {
      color: 'white'
    }
  }

  let pickerItems = []
  for (let character in players) {
    pickerItems.push(<Picker.Item label={players[character].displayName} value={character} key={character}/>)
  }

  return (
    <AvatarContext.Consumer>
      { ({avatar, setAvatar}) => {
        return (
          <View style={selectAvatarStyles.container}>
            <Button title='Back' color='rgb(82,152,193)' onPress={() => props.toggleSelectAvatar()}/>
            <Picker 
              selectedValue={avatar}
              style={selectAvatarStyles.container}
              onValueChange={newAvatar => setAvatar(newAvatar)}
              itemStyle={selectAvatarStyles.items}
            >
              {pickerItems}
            </Picker>
          </View>
        )
      }
      }
    </AvatarContext.Consumer>
  )
}