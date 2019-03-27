import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import style from '../assets/Style.js';

export class TourButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        accessibilityLabel="Button"
        style={style.buttonClass}
      >
        <Text style={style.buttonText}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    )
  }
}

export class TourButtonGold extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        accessibilityLabel="Button"
        style={style.buttonClassGold}
      >
        <Text style={style.buttonText}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    )
  }
}

export class TourButtonMedium extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        accessibilityLabel="Button"
        style={style.buttonMedium}
      >
        <Text style={style.buttonText}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    )
  }
}

export class TourButtonMediumRed extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        accessibilityLabel="Button"
        style={style.buttonMediumRed}
      >
        <Text style={style.buttonText}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    )
  }
}

export class TourButtonFullWidth extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        accessibilityLabel="Button"
        style={style.buttonFullWidth}
      >
        <Text style={style.buttonText}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    )
  }
}

export class TourButtonFullWidthRed extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        accessibilityLabel="Button"
        style={style.buttonFullWidthRed}
      >
        <Text style={style.buttonText}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    )
  }
}

export class TourButtonSmall extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        accessibilityLabel="Button"
        style={style.buttonSmallBlue}
      >
        <Text style={style.buttonSmallText}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    )
  }
}

export class TourButtonSmallRed extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        accessibilityLabel="Button"
        style={style.buttonSmallRed}
      >
        <Text style={style.buttonSmallText}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    )
  }
}

export class DisabledButton extends React.Component {
  render() {
    return (
      <View
        accessibilityLabel="Disabled Button"
        style={style.buttonDisabled}
      >
        <Text style={style.buttonTextDisabled}>{this.props.buttonTitle}</Text>
      </View>
    )
  }
}

export class DisabledButtonSmall extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonFunc}
        accessibilityLabel="Button"
        style={style.buttonSmallDisabled}
      >
        <Text style={style.buttonSmallText}>{this.props.buttonTitle}</Text>
      </TouchableOpacity>
    )
  }
}

export class RoundButton extends React.Component {

  state = {
    show: false
  }

  render() {

    return (
      <View>

        <TouchableOpacity
          onPress={this.props.buttonFunc}
          accessibilityLabel="A button"
          style={style.roundButtonLarge}
        >

          {this.props.showing === true
            ? <Image
              source={require('../assets/images/menuicons/cross.png')}
              style={{ height: 20, width: 20, alignSelf: 'center', marginTop: '30%' }}
              resizeMode={'contain'}
            />
            : <Image
              source={require('../assets/images/menuicons/plus.png')}
              style={{ height: 25, width: 25, alignSelf: 'center', marginTop: '25%' }}
              resizeMode={'contain'}
            />
          }
        </TouchableOpacity>
      </View>
    )
  }
}

export class RoundButtonSmall extends React.Component {

  render() {

    return (

      <View>
        <TouchableOpacity
          onPress={this.props.buttonFunc}
          accessibilityLabel="A button"
          style={style.roundButtonSmall}
        >
          <Image
            source={this.props.buttonImg}
            style={{ height: 17.5, width: 18, alignSelf: 'center', marginTop: '25%' }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
