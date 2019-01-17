import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

import tournaments from '../tournaments.json';
import {MyTours} from '../components/MyTours.js';
import style from '../assets/Style.js';

export default class TournamentsScreen extends React.Component {

  state = {
    tours: tournaments,
    bla: 0
  }


  static navigationOptions = {
    title: 'Tournaments',
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

  addTour = () => {
    this.setState(prevState => ({
      bla: (++prevState.bla)
    }))
  }

  render() {

    return (
      <ScrollView style={style.mainContainer}>
        <View style={{
            paddingBottom: 10,
            alignItems: 'center'
         }}>

         <MyTours
          bla={this.state.bla}
          tours={this.state.tours}/>
         

         <View style={style.buttonContainer}>
         <TouchableOpacity
           onPress={this.addTour}
           accessibilityLabel="Learn more about this purple button"
           style={style.buttonClass}
         >
           <Text style={style.buttonText}>SKAPA TURNERING</Text>
         </TouchableOpacity>

         <TouchableOpacity
           onPress={this.func}
           accessibilityLabel="Learn more about this purple button"
           style={style.buttonClass}
         >
           <Text style={style.buttonText}>HITTA TURNERING</Text>
         </TouchableOpacity>
         </View>

       </View>
     </ScrollView>
    )
  }
}
