import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { SearchBar } from 'react-native-elements';

import { TourButton } from '../components/TourButton.js';
import FriendsList from '../components/FriendsList.js';
import style from '../assets/Style.js';


class SearchPlayer extends Component {

    state = {
        toggle: false,
        search: ''
    };

    static navigationOptions = {
        title: 'Friends',
        headerStyle: {
            backgroundColor: 'black',
            height: 90,
            borderBottomWidth: 4,
            borderColor: 'yellow'
        },
        headerTitleStyle: {
            color: 'yellow',
            fontSize: 34,
            fontFamily: 'sans-serif'
        }
    };

    updateSearch = search => {
        this.setState({ search });
    };

    enterSearch = () => {
        this.props.buttonFunc()
    };

    render() {
    
        let filteredPlayers = this.props.users.filter(
            (player) => {
                return player.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <ScrollView style={style.mainContainer}>
                <View>
                    <SearchBar
                        placeholder="Search..."
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                        containerStyle={{
                            backgroundColor: 'transparent'
                        }}
                    />
                    {filteredPlayers.map((player) => {
                        return (
                            <View
                             key={player.name}
                             style={{
                                 flex: 1,
                                 flexDirection: 'row',
                                 justifyContent: 'space-between',
                                 padding: 5
                             }}
                             >
                             <View style={{
                                 flexDirection: 'column'
                             }}>
                                <Text style={style.playerText}>
                                    {player.name}
                                </Text>
                                <Text style={style.playerText}>
                                    level: {player.level}
                                </Text>
                            </View>
                                <TourButton
                                buttonTitle={'ADD FRIEND'}
                                />
                            </View>
                        )
                    })}
                    <View style={style.buttonContainer}>
                        <TourButton
                            buttonTitle={'SEARCH PLAYER'}
                            buttonFunc={this.enterSearch}
                        />
                    </View>
                </View>
            </ScrollView>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        tours: state.tours,
        users: state.users
    };
};

export default connect(mapStateToProps, null)(SearchPlayer);
