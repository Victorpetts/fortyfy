import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import style from '../assets/Style.js';

export class Participants extends React.Component {



    render() {
        return (
            <View style={style.itemContainer}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                {this.props.owner ?
                <Text style={style.itemText}>
                    {this.props.username} {' '}
                    <FontAwesome style={{ fontSize: 14 }}>
                        {Icons.crown}
                    </FontAwesome>
                </Text>
                :
                <Text style={style.itemText}>{this.props.username}</Text>
                }
            </View>
                <Text style={style.itemNumber}>
                    {this.props.matches} / 8
                </Text>
                <FontAwesome style={{ fontSize: 20, paddingTop: 12 }}>{Icons.gamepad}</FontAwesome>
            </View>
        )
    }
}
