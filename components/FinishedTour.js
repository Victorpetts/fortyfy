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
        const tourArray = this.props.partic
        tourArray.sort((a, b) => a.points - b.points);

        const reverseArray = tourArray.reverse()

        const thisToursName = this.props.tourName;
        const filter = this.props.tours.find( thisTour => thisTour.name === thisToursName );
        let winconText;

        switch(filter.wincon) {
          case '1':
            winconText = 'Överlevt flest minuter';
            break
          case '2':
            winconText = 'Flest sammanlagda kills';
            break
          case '3':
            winconText = 'Flest placeringar i top 5';
            break
          default:
            winconText = '';
            break
        }

        return (
            <View style={style.mainContainer}>
                <View style={style.titleContainer}>
                    <Text style={style.yellowHeaderText}>{this.props.tourName}</Text>
                    <Text style={style.headerText}>Seger villkor:</Text>
              <Text style={style.paragraphText}>{winconText}</Text>
                </View>
                <ScrollView>
                    <View style={{
                        alignSelf: 'center',
                        padding: '5%'
                    }}>
                        <Text style={style.yellowHeaderText}>{reverseArray[0].points}</Text>
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
                            <Text style={style.yellowHeaderText}>{reverseArray[1].points}</Text>
                            <FontAwesome style={{ fontSize: 75, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Text style={style.yellowHeaderText}>{reverseArray[2].points}</Text>
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
                            <Text style={style.yellowHeaderText}>{reverseArray[3].points}</Text>
                            <FontAwesome style={{ fontSize: 75, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Text style={style.yellowHeaderText}>{reverseArray[4].points}</Text>
                            <FontAwesome style={{ fontSize: 75, color: 'white' }}>{Icons.fileImage}</FontAwesome>
                        </View>
                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Text style={style.yellowHeaderText}>{reverseArray[5].points}</Text>
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
