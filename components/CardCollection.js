import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';
import style from '../assets/Style.js';

class CardCollection extends Component {

    render() {

        const userName = this.props.name;

        return (

            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('IndvUserCard', {
                        userName:userName
                    })}
                    style={style.indvCardContainer}
                    >
                    <FontAwesome style={{ fontSize: 90, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                    <Text style={style.smallText}>{this.props.name}</Text>
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

export default connect(mapStateToProps, null)(CardCollection);