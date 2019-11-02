import React from 'react';
import { View, Button } from 'react-native';

import { changeAvatar } from '../../fetchFunctions/changeAvatar';

import { LogoMain } from './logo/LogoMain';
import { StartButton } from './StartButton';

export class LandingMain extends React.Component {
  state = {
    selectingAvatar: false
  }


  landingMainStyles = {
    main: {
      display: 'flex',
      flex: 1
    }
  }

  render(){
    let backButton = null
    if (this.state.selectingAvatar) {
      backButton = <Button title='Back' onPress={() => this.setState({selectingAvatar: false})}/>
    }

    return (
      <View style={this.landingMainStyles.main}>
        <LogoMain />
        <StartButton setToPlaying={this.props.setToPlaying}/>
        <Button title='Logout' onPress={() => this.props.setLoggedIn(false)} color='white'/>
        <Button title='Change Avatar' onPress={() => this.setState({selectingAvatar: true})} color='white'/>
        {backButton}
      </View>
    )
  }
}