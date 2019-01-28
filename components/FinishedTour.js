import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import { connect } from 'react-redux';

import style from '../assets/Style.js';
import FontAwesome, { Icons } from 'react-native-fontawesome';

class FinishedTour extends Component {

    render() {
        return (
            <View style={style.mainContainer}>
                <View style={style.titleContainer}>
                    <Text style={style.yellowHeaderText}>{this.props.tourName}</Text>
                </View>
                <ScrollView>
                    <View style={{
                        alignSelf: 'center',
                        padding: '5%'
                    }}>
                        <Text style={style.yellowHeaderText}>00</Text>
                        <FontAwesome style={{ fontSize: 75, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        padding: '5%'
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Text style={style.yellowHeaderText}>00</Text>
                            <FontAwesome style={{ fontSize: 75, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Text style={style.yellowHeaderText}>00</Text>
                            <FontAwesome style={{ fontSize: 75, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        padding: '5%'
                    }}>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Text style={style.yellowHeaderText}>00</Text>
                            <FontAwesome style={{ fontSize: 75, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Text style={style.yellowHeaderText}>00</Text>
                            <FontAwesome style={{ fontSize: 75, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Text style={style.yellowHeaderText}>00</Text>
                            <FontAwesome style={{ fontSize: 75, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        partic: state.partic,
        tours: state.tours
    };
};

export default connect(mapStateToProps, null)(FinishedTour);
