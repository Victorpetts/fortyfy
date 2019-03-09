import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
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
                    <Image
                    source={require('../assets/images/frame-silver.png')}
                    style={{ height: 180, width: 120 }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default CardCollection;
