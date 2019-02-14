import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';
import style from '../assets/Style.js';

class MyCard extends Component {

    render() {

        return (

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '5%'
            }}>
                <FontAwesome style={{ fontSize: 300, color: 'white' }}>{Icons.fileImage}</FontAwesome>
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