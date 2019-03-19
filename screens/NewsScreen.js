import React from 'react';
import {
  ScrollView,
  View,
  FlatList,
  ActivityIndicator,
  StatusBar
} from 'react-native';

import { NewsArticle } from '../components/NewsArticle';
import output from '../output.json';
import style from '../assets/Style.js';
import Colors from '../constants/Colors';

let data = output;

// const scraper = 'https://evening-taiga-62440.herokuapp.com/';

export default class NewsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
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
      },
    }
  };

  componentDidMount() {
    StatusBar.setHidden(false);

    this.props.navigation.setParams({
      scrollToTop: () => {
        this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
      }
    })
  };

  render() {
    return (
      <View style={style.mainContainer}>
        <FlatList
          ref={(ref) => { this.flatListRef = ref; }}
          data={data.slice(0, 10)}
          renderItem={({ item }) => (
            <NewsArticle
              title={item.title}
              date={item.date}
              img={item.img}
              link={item.link}
            />
          )}
          contentContainerStyle={{ alignItems: 'center' }}
          style={{
            width: '100%',
            paddingVertical: 10
          }}
          keyExtractor={item => item.title}
          ListHeaderComponent={<View style={{ padding: 5 }} />}
          ListFooterComponent={<View style={{ height: 690 }} />}
        />
      </View>
    )
  }
}
