import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Colors from '../constants/Colors';

export class NewsArticle extends React.Component {
  render() {
    return (
      <View style={{
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: '5%',
        padding: '5%',
        justifyContent: 'space-between'

      }}
      >
        <Image
          source={{ uri: this.props.img }}
          style={{
            height: 275,
            width: 300,
            alignSelf: 'center'
          }}
          resizeMode='cover'
        />
        <View style={{
          paddingTop: 20,
          paddingHorizontal: 5
        }}>
          <Text style={{
            fontSize: 20,
            color: Colors.appBlackColor
          }}>{
              this.props.title}
          </Text>
          <Text style={{
              fontSize: 10,
              color: Colors.appBlackColor
            }}>
              {this.props.date}
            </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(this.props.link)}
            style={{
              paddingVertical: 5,
              alignSelf: 'flex-end'
            }}
          >
            <Text style={{
              textAlign: 'center',
              color: Colors.appBlackColor,
              fontSize: 10,
              borderBottomWidth: 1.2,
              width: 55,
              borderColor: Colors.appBlackColor
            }}>Read article</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
