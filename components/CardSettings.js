import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Overlay } from 'react-native-elements';

import { RoundButtonSmall, TourButtonFullWidth } from './Buttons.js';

import style from '../assets/Style.js';
import Colors from '../constants/Colors';


class CardSettings extends Component {

  state = {
    isImg: false,
    title: '',
    isFrame: false
  }

  showImg = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      title: 'Change image',
      isImg: true,
      isFrame: false,
      isBg: false,
    })
  };

  showFrame = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      title: 'Change Frame',
      isImg: false,
      isFrame: true,
      isBg: false,
    })
  };

  showBg = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      title: 'Change Background',
      isImg: false,
      isFrame: false,
      isBg: true
    })
  };

  render() {

    return (
      <View style={{
        position: 'absolute',
        top: 0,
        right: 5,
        justifyContent: 'space-evenly',
        height: '80%'
      }}>
        <RoundButtonSmall
          buttonImg={require('../assets/images/menuicons/plus.png')}
          buttonFunc={this.showImg}
        />

        <RoundButtonSmall
          buttonImg={require('../assets/images/menuicons/plus.png')}
          buttonFunc={this.showFrame}
        />

        <RoundButtonSmall
          buttonImg={require('../assets/images/menuicons/plus.png')}
          buttonFunc={this.showBg}
        />

        {this.state.isVisible === true &&
          <Overlay
            height='auto'
            width='90%'
            isVisible={this.state.isVisible == true}
            onBackdropPress={() => this.setState({ isVisible: false })}
            overlayBackgroundColor={'black'}
            overlayStyle={{
              borderColor: Colors.appBlueColor,
              borderWidth: 2.5,
              borderRadius: 2.5,
              backgroundColor: Colors.appBackgroundColor
            }}>
            <View>
              <View style={{ alignSelf: 'center' }}>
                <Text style={style.overlayTitle}>{this.state.title}</Text>
              </View>
              {this.state.isImg === true &&
                <View style={{
                  flexDirection: 'column',
                  height: 110,
                  justifyContent: 'space-between',
                  marginTop: 10,
                  padding: 5,
                  alignItems: 'center'
                }}>
                  <TourButtonFullWidth
                    buttonTitle={'Take photo...'}
                  />
                  <TourButtonFullWidth
                    buttonTitle={'Choose from library..'}
                  />
                </View>
              }

              {this.state.isFrame === true &&
                <ScrollView
                  horizontal={true}
                  style={{ width: '100%' }}
                >
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/images/playercards/playercard-blue-frame.png')}
                      style={{ height: 250, width: 170, margin: 5 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/images/playercards/playercard-bronze-frame.png')}
                      style={{ height: 250, width: 170, margin: 5 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/images/playercards/playercard-gold-frame.png')}
                      style={{ height: 250, width: 170, margin: 5 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/images/playercards/playercard-purple-frame.png')}
                      style={{ height: 250, width: 170, margin: 5 }}
                    />
                  </TouchableOpacity>
                </ScrollView>
              }

              {this.state.isBg === true &&
                <ScrollView
                  horizontal={true}
                  style={{ width: '100%' }}
                >
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/images/playercards/playercard-special-unicorns-rainbows.png')}
                      style={{ height: 250, width: 170, margin: 5 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/images/playercards/playercard-special-magic.png')}
                      style={{ height: 250, width: 170, margin: 5 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/images/playercards/playercard-special-pirate.png')}
                      style={{ height: 250, width: 170, margin: 5 }}
                    />
                  </TouchableOpacity>
                  <Image
                    source={require('../assets/images/playercards/playercard-special-mr-roboto.png')}
                    style={{ height: 250, width: 170, margin: 5, opacity: .3 }}
                  />
                  <Image
                    source={require('../assets/images/playercards/playercard-special-ufo.png')}
                    style={{ height: 250, width: 170, margin: 5, opacity: .3 }}
                  />
                  <Image
                    source={require('../assets/images/playercards/playercard-special-cheeta.png')}
                    style={{ height: 250, width: 170, margin: 5, opacity: .3 }}
                  />
                </ScrollView>
              }
            </View>
          </Overlay>
        }
      </View>
    )
  }
}

export default CardSettings;