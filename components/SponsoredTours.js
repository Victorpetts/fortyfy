import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Image,
  ImageBackground
} from 'react-native';

import { TourButton, TourButtonGold } from './Buttons.js';

import style from '../assets/Style.js';
import TourInfoSection from './TourInfoSection.js';

class SponsoredTours extends Component {

  state = {
    pressed: false
  }

  render() {

    const tourId = this.props.id;
    const thisTour = this.props.tours.find(tour => tour.id === tourId);
    const ownersId = thisTour.owner;
    const ownerObj = this.props.users.find(user => user.id === ownersId);
    const owner = ownerObj.name;

    return (

      <View style={style.itemContainerGoldBorder}>
          <Image
            source={require('../assets/images/redbullcom-logo.png')}
            style={{ 
              height: 30, 
              width: 150, 
              position: 'absolute', 
              top: 10, 
              left: 20
          }}/>
          <TourInfoSection
            tourId={tourId}
          />
          <View style={style.singleButtonContainer}>
            {this.state.pressed === false ?
              <TourButtonGold
                buttonTitle={'Join tournament'}
                buttonFunc={() => this.setState({ pressed: true })}
              />
              :
              <TourButton buttonTitle={'View tournament'} />
            }
          </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    tours: state.tours,
    users: state.users
   };
};

export default connect(mapStateToProps, null)(SponsoredTours);
