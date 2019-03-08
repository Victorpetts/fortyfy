import React from 'react';
import {
  Platform,
  View,
  Image

} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import NewsScreen from '../screens/NewsScreen';
import TournamentsScreen from '../screens/TournamentsScreen';
import TourIndvScreen from '../screens/TourIndvScreen';
import UsersScreen from '../screens/UsersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import UserCardScreen from '../screens/UserCardScreen';
import ProfileSettingScreen from '../screens/ProfileSettingScreen';
import CreateTourScreen from '../screens/CreateTourScreen';
import FinishedScreen from '../screens/FinishedScreen';
import OngoingScreen from '../screens/OngoingScreen';

const NewsStack = createStackNavigator({
  News: NewsScreen,
});

NewsStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <View style={{
      paddingTop: 10
    }}>
      <Image
        focused={focused}
        style={{ height: 25, width: 29 }}
        resizeMode={'contain'}
        source={require("../assets/images/news.png")} 
      />
    </View>
  ),
  tabBarOptions: {
    labelStyle: 'alergia-condensed-regular',
    activeTintColor: 'white',
    activeBackgroundColor: Colors.appBlueColor,
    style: {
      backgroundColor: Colors.tabBarbackgroundColor
    },
  }
};

const TournamentsStack = createStackNavigator({
  Tournaments: TournamentsScreen,
  TourIndv: TourIndvScreen,
  TourCreate: CreateTourScreen,
  Ongoing: OngoingScreen,
  Finished: FinishedScreen,
  TopUserCard: UserCardScreen
});

TournamentsStack.navigationOptions = {
  tabBarLabel: 'Tournaments',
  tabBarIcon: ({ focused }) => (
    focused ?
    <View style={{
      paddingTop: 10
    }}>
    <Image
    focused={focused}
    style={{ height: 25, width: 29 }}
    resizeMode={'contain'}
    source={require("../assets/images/tournament.png")} 
  />
  </View>
      :
      <View style={{
        paddingTop: 10
      }}>
        <View style={{
          borderRadius: 9,
          width: 10,
          height: 10,
          backgroundColor: '#b10606',
          position: 'absolute',
          top: 5,
          right: -10,
          zIndex: 1000,
          borderWidth: .5,
          borderColor: 'white'
        }}>
        </View>
        <Image
      focused={focused}
      style={{ height: 25, width: 29 }}
      resizeMode={'contain'}
      source={require("../assets/images/tournament.png")} 
    />
      </View>
  ),
  tabBarOptions: {
    labelStyle: 'alergia-condensed-regular',
    activeTintColor: 'white',
    activeBackgroundColor: Colors.appBlueColor,
    style: {
      backgroundColor: Colors.tabBarbackgroundColor,
    },
  }
};

const UsersStack = createStackNavigator({
  Links: UsersScreen,
  UserCard: UserCardScreen,
  UserProfile: UserProfileScreen
});

UsersStack.navigationOptions = {
  tabBarLabel: 'Friends',
  tabBarIcon: ({ focused }) => (
    <View style={{
      paddingTop: 10
    }}>
      <Image
        focused={focused}
        style={{ height: 25, width: 29 }}
        resizeMode={'contain'}
        source={require("../assets/images/friends.png")} 
      />
    </View>
  ),
  tabBarOptions: {    
    labelStyle: 'alergia-condensed-regular',
    activeTintColor: 'white',
    activeBackgroundColor: Colors.appBlueColor,
    style: {
      backgroundColor: Colors.tabBarbackgroundColor,
    },
  }
};

const ProfileStack = createStackNavigator({
  Home: ProfileScreen,
  IndvUserCard: UserCardScreen,
  ProfileSettings: ProfileSettingScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <View style={{
      paddingTop: 10
    }}>
      <Image
        focused={focused}
        style={{ height: 25, width: 29 }}
        resizeMode={'contain'}
        source={require("../assets/images/profile.png")} 
      />
    </View>
  ),
  tabBarOptions: {
    labelStyle: 'alergia-condensed-regular',
    activeTintColor: 'white',
    activeBackgroundColor: Colors.appBlueColor,
    style: {
      backgroundColor: Colors.tabBarbackgroundColor,
    },
  }
};

export default createBottomTabNavigator({
  NewsStack,
  TournamentsStack,
  UsersStack,
  ProfileStack
});
