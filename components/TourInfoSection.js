import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    View,
    Text,
    Image
  } from 'react-native';

import style from '../assets/Style.js';

class TourInfoSection extends Component {

    render() {

        return (
            
            <View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={style.itemText}>{this.props.titleName}</Text>
                    <Text style={style.itemText}>
                        {this.props.titleMatches} matches
            </Text>
                </View>
                <View style={style.tourContainer}>
                    <View style={{
                        alignItems: 'center',
                        padding: 15
                    }}>
                        <Text style={style.tourInfoTitle}>Owner</Text>
                        <Image
                            source={require('../assets/images/crown.png')}
                            style={{ width: 25, height: 17 }}
                        />
                        <Text style={style.tourInfoText}>{this.props.owner}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text style={style.tourInfoTitle}>Victory Conditions</Text>
                        <Image
                            source={require('../assets/images/trophy.png')}
                            style={{ width: 17, height: 17 }}
                        />
                        <Text style={style.tourInfoText}>{this.props.tourInfoWincon}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text style={style.tourInfoTitle}>Participants</Text>
                        <Image
                            source={require('../assets/images/group.png')}
                            style={{ width: 24, height: 17 }}
                        />
                        <Text style={style.tourInfoText}>{this.props.tourInfoPartic} / {this.props.tourInfoMaxPartic}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
  };

export default connect(mapStateToProps, null)(TourInfoSection);
