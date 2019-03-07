import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';

import { NewsArticle } from '../components/NewsArticle';
import output from '../output.json';
import style from '../assets/Style.js';
import Colors from '../constants/Colors';

let data = output;

// const scraper = 'https://evening-taiga-62440.herokuapp.com/';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'News',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      backgroundColor: Colors.appBlackColor,
      height: 60,
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
      textAlign: 'center',
      width: '90%',
      fontFamily: 'luckiest-guy-regular',
      fontWeight: '200'
    }
  };

  render() {
    return (
        <ScrollView
          style={style.mainContainer}
        >
          <View style={{ padding: '2%' }} />
          <View style={{
            alignItems: 'center',
            width: '90%',
            marginLeft: '5%',
            marginRight: '5%'
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
          <View style={{ padding: '2%' }} />
        </ScrollView>
      )
  }
}

