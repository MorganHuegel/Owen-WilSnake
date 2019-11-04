import React from 'react'
import { View, Picker, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { changeAvatar } from '../../fetchFunctions/changeAvatar';
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
              onValueChange={newAvatar => {
                return AsyncStorage.getItem('@webToken')
                  .then(webToken => changeAvatar(webToken, newAvatar))
                  .then(updatedUser => setAvatar(updatedUser.avatar))
                  .catch(e => console.log('Probably should error handle here in SelectAvatar component: ' + e))
              }}
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