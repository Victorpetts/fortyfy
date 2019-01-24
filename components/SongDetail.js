import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import style from '../assets/Style.js';

const SongDetail = ({ song }) => {
  if (!song) {
    return <Text style={style.headerText}>Pick a song!</Text>
  }

  return <Text style={style.headerText}>{song.title}</Text>;
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);
