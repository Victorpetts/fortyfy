import React, { Component } from 'react';

import {
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

class PlayerCardProfile extends Component {

  state = {
    image: this.props.card
  }

  render() {
    return (

      <View
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
        style={{
          height: '100%',
          width: '100%',
          padding: '5%'
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('UserCard')}
        >
          <ImageBackground
            source={this.state.image}
            resizeMode={'contain'}
            style={{ height: '90%' }}
          >
          </ImageBackground>
        </TouchableOpacity>
      </View>
    )
  }
}

export default PlayerCardProfile;
