import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {NewsArticle} from '../components/NewsArticle';
import output from '../output.json';

let data = output;

// const scraper = 'https://evening-taiga-62440.herokuapp.com/';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'News',
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

  render() {

    return (
      <ScrollView style={{
        width: '100%',
        height: '100%',
        display: 'flex'
      }}>
      <View style={{
          paddingBottom: 10,
          alignItems: 'center'
       }}>

       {data.slice(0, 10).map(item =>
          <NewsArticle
            key={item.title}
            title={item.title}
            date={item.date}
            img={item.img}
            link={item.link}
          />
        )
      }

      </View>
      </ScrollView>
    )
  }
}

// <NewsArticle title={data.titles[2].value} />
