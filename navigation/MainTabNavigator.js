import React from 'react';
import {
  Platform,
  View,
  Text

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
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
    />
  ),
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: Colors.activeBackgroundColor,
    style: {
      backgroundColor: Colors.tabBarbackgroundColor,
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
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-flag' : 'md-flag'}
      />
      :
      <View>
        <View style={{
          borderRadius: 9,
          width: 10,
          height: 10,
          backgroundColor: 'red',
          position: 'absolute',
          top: 0,
          right: 10,
          zIndex: 1000
        }}>
        </View>
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-flag' : 'md-flag'} />
      </View>
  ),
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: Colors.activeBackgroundColor,
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
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
    />
  ),
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: Colors.activeBackgroundColor,
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
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: Colors.activeBackgroundColor,
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
