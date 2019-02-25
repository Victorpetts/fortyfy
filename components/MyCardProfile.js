import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    Image,
    ScrollView,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import { FontAwesome } from '@expo/vector-icons';
import style from '../assets/Style.js';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

class MyCardProfile extends Component {

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
                    onPress={() => this.props.navigation.navigate('IndvUserCard')}
                >
                    <ImageBackground
                        source={require('../assets/images/playercard-gold-frame.png')}
                        resizeMode={'contain'}
                        style={{ height: '90%' }}
                    >
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, null)(MyCardProfile);