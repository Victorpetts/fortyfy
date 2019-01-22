import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import style from '../assets/Style.js';
import { Tour } from './Tour.js';

export class FinishedTour extends React.Component {

    render() {
        return (
            <View style={style.container}>
                <Text style={style.headerText}>Finished Tournament</Text>
            </View>
        )
    }
}
