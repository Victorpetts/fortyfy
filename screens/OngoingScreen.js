import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {
    View,
    Text,
    ScrollView
} from 'react-native';


import { Overlay } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import { selectPlayer, confirmPlayer, endTournament } from '../actions/index.js';
import style from '../assets/Style.js';
import { TourButton } from '../components/TourButton.js';
import Participant from '../components/Participant.js';

class OngoingScreen extends Component {

    state = {
        isVisible: false,
        buttonToggle: false,

    }

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('tourName'),
        headerTintColor: 'white',
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: 'black',
            height: 90
        },
        headerTitleStyle: {
            color: 'yellow',
            fontSize: 28
        }
    });

    mapPartic(totalMatches) {
        return this.props.partic.map((player) => {
            return (
                <Participant
                    key={player.name}
                    name={player.name}
                    playedMatches={player.playedMatches}
                    totalMatches={totalMatches}
                    checkBox={player.checkBox}

                />
            );
        });
    };

    toggleManage = () => {
        this.setState({
            isVisible: true
        })
    };

    selectPlayer = (partic) => {
        this.props.selectPlayer(partic);
        this.setState({
            isVisible: false,
            buttonToggle: true
        })
    };

    deletePlayer = (partic) => {
        console.log('clicked!');
        selectPlayer(partic);
        this.props.deletePlayer(partic);
    }

    confirmPlayer = (partic) => {
        this.props.confirmPlayer(partic);
        this.setState({
            buttonToggle: false
        })



    };

    endTournament = (tour) => {
        this.props.endTournament(tour);
        this.props.navigation.navigate('Tournaments');
    };


    render() {

        const thisToursName = this.props.navigation.getParam('tourName');
        const filter = this.props.tours.find(thisTour => thisTour.name === thisToursName);
        const totalMatches = filter.totalMatches;
        let partic = this.props.navigation.getParam('partic');
        let tours
        let winconText;

        switch (filter.wincon) {
            case '1':
                winconText = 'Survived most minutes';
                break
            case '2':
                winconText = 'Most accumulated kills';
                break
            case '3':
                winconText = 'Most placements in top 5';
                break
            default:
                winconText = '';
                break
        };

        return (
            <View style={style.mainContainer}>
                <Text style={style.headerText}>Win condition:</Text>
                <Text style={style.paragraphText}>{winconText}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        paddingLeft: '2%',
                    }}>
                        <FontAwesome name="user-circle" size={16} color="yellow" style={{ paddingTop: 5, marginRight: '5%' }} />
                        <Text style={style.smallText}>Players</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={style.smallText}>Matches</Text>
                        <FontAwesome name="gamepad" size={16} color="yellow" style={{ paddingTop: 5, marginLeft: '5%' }} />
                    </View>
                </View>
                <ScrollView style={{ height: '100%', marginBottom: '5%' }}>
                    {this.mapPartic(totalMatches)}
                </ScrollView>
                {this.state.buttonToggle === true ?
                    <View style={style.buttonContainer}>
                        <TourButton
                            buttonTitle={'CANCEL'}
                            buttonFunc={() => this.confirmPlayer(partic)}
                        />
                        <TourButton buttonTitle={'CONFIRM'}
                            buttonFunc={() => this.confirmPlayer(partic)}
                        />
                    </View>
                    :
                    <View style={style.buttonContainer}>
                        <TourButton
                            buttonTitle={'MANAGE TOURNAMENT'}
                            buttonFunc={this.toggleManage} />
                        <TourButton buttonTitle={'INVITE FRIENDS'} />
                    </View>
                }
                {this.state.isVisible && (
                    <Overlay
                        height='auto'
                        isVisible={this.state.isVisible == true}
                        onBackdropPress={() => this.setState({ isVisible: false })}
                        overlayBackgroundColor={'black'}
                        overlayStyle={{
                            borderColor: 'yellow',
                            borderWidth: 2
                        }}
                    >
                        <View>
                            <ScrollView
                                contentContainerStyle={{
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                                style={{
                                    padding: 5
                                }}
                            >
                                <View style={style.buttonContainerCol}>
                                    <TourButton
                                        buttonTitle={'END TOURNAMENT'}
                                        buttonFunc={() => this.endTournament(thisToursName)}
                                    />
                                    <TourButton
                                        buttonTitle={'DELETE PLAYER'}
                                        buttonFunc={() => this.selectPlayer(partic)}
                                        />
                                    <TourButton
                                        buttonTitle={'PERMISSIONS'}
                                        buttonFunc={() => this.selectPlayer(partic)}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    </Overlay>
                )}
            </View>
        )

    };
};

const mapStateToProps = (state) => {
    return {
        tours: state.tours,
        partic: state.partic
    };
};

export default connect(mapStateToProps, { selectPlayer, confirmPlayer, endTournament })(OngoingScreen);
