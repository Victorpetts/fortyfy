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

            <View style={style.indvCardContainer}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('IndvUserCard', {
                        userName:userName
                    })}
                    >
                    <Image
                    source={require('../assets/images/playercards/playercard-silver-frame.png')}
                    style={{ height: 150, width: 100 }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default CardCollection;
