import React from 'react';
import { View, Button } from 'react-native';

import { changeAvatar } from '../../fetchFunctions/changeAvatar';

import { LogoMain } from './logo/LogoMain';
import { StartButton } from './StartButton';
import { SelectAvatar } from './SelectAvatar';


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

  toggleSelectAvatar = () => {
    this.setState({selectingAvatar: !this.state.selectingAvatar})
  }

  render(){
    return this.state.selectingAvatar ? 
      <SelectAvatar toggleSelectAvatar={this.toggleSelectAvatar}/> :
      (<View style={this.landingMainStyles.main}>
          <LogoMain />
          <StartButton setToPlaying={this.props.setToPlaying}/>
          <Button title='Logout' onPress={() => this.props.setLoggedIn(false)} color='white'/>
          <Button title='Change Avatar' onPress={() => this.toggleSelectAvatar()} color='white'/>
          {this.state.selectingAvatar ? <SelectAvatar toggleSelectAvatar={this.toggleSelectAvatar}/> : null}
        </View>
      )
  }
}