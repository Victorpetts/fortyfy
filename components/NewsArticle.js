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

export class NewsArticle extends React.Component {
  render() {
    return (
      <View style={{
          width: '100%',
          backgroundColor: 'black'
         }}
       >
        <Image
          style={{ height: hp('50%') }}
          resizeMode='cover'
          source={{uri: this.props.img }}
         />
         <TouchableOpacity
           onPress={() => Linking.openURL(this.props.link)}
           >
       <View style={{
           padding: 10
         }}>
         <Text style={{
             fontSize: 30,
             fontWeight: 'bold',
             color: 'yellow'
           }}>{this.props.title}</Text>
         <Text style={{
             fontSize: 12,
             color: 'white',
             fontWeight: 'bold'
           }}>{this.props.date}</Text>
         <View style={{
           paddingTop: 20,
           paddingBottom: 30
         }}
         >
         <Text style={{
           color: 'white',
           fontWeight: 'bold',
           fontSize: 20
         }}>Read more...</Text>
       </View>
       </View>
       </TouchableOpacity>
      </View>
    )
  }
}
