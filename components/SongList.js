import React, { Component } from 'react';
import { connect} from 'react-redux';
import { selectSong } from '../actions';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import style from '../assets/Style.js';


class SongList extends Component {

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <View key={song.title}>
            <TouchableOpacity
              style={style.buttonClass}
              onPress={() => this.props.selectSong(song)}
            >
              <Text style={style.buttonText}>Select</Text>
            </TouchableOpacity>
          <Text style={style.headerText}>{song.title}</Text>
        </View>
      );
    });
  }

  render() {
    return <View>{this.renderList()}</View>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTour } from '../actions';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import style from '../assets/Style.js';

class MyTours extends Component {

  renderList() {
    return this.props.tours.map((tour) => {
      return (
        <View key={tour.name}>
          <Text style={style.headerText}>{tour.name}</Text>
        </View>
      );
    });
  }

  render() {
    return(
      <View style={style.container}>
        <Text style={style.headerText}> Mina Turneringar </Text>
        <ScrollView style={{ height: '100%' }}>
          {this.renderList()}
        </ScrollView>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return { tours: state.tours };
};

export default connect(mapStateToProps, { createTour })(MyTours);
