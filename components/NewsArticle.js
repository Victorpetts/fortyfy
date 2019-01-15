import React from 'react';
import {
  Text,
  View,
  Image
 } from 'react-native';
 import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
 } from 'react-native-responsive-screen';

export class NewsArticle extends React.Component {
  render() {
    return (
      <View style={{
          width: '100%'
         }}
       >
        <Image
          style={{ height: hp('30%') }}
          resizeMode='cover'
          source={{uri: 'https://cdn2.unrealengine.com/Fortnite%2Fblog%2Ftake-to-the-skies-in-season-7%2FBR07_News_Featured_16_9-1920x1080-c8c58d82b2986bf9615c839d53bb7763c06895c5.jpg'}}
         />
       <View style={{
           padding: 10
         }}>
         <Text style={{
             fontSize: 30,
             fontWeight: 'bold'
           }}>{this.props.title}</Text>
         <Text style={{
             fontSize: 12,
             color: 'grey'
           }}>{this.props.date}</Text>
         <Text style={{
             paddingVertical: 10,
             paddingRight: 25
           }}>Innehåll aaaaaaaaaaaaaaaaaaaaaa aaaaaaaa a aaaaaaaaaaaa aa aaaaaaaaa aaaaaaaaa aaaaaaa aaa</Text>
       </View>
      </View>
    )
  }
}
