import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import style from '../assets/Style.js';

class MyCard extends Component {

    render() {

        return (

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '5%'
            }}>
                <FontAwesome name="file-photo-o" size={300} color="white" />
                <Text style={style.yellowHeaderText}>Miranda's card</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, null)(MyCard);