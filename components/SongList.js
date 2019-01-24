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
