import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ScrollView,
    View,
    Text
} from 'react-native';

import { Overlay } from 'react-native-elements';

import { FontAwesome } from '@expo/vector-icons';
import style from '../assets/Style.js';

class ManageTour extends Component {

    state = {
        isVisible: false
    }

    render() {

        return (
            <View>
                
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, null)(ManageTour);