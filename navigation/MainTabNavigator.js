import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import NewsScreen from '../screens/NewsScreen';
import TournamentsScreen from '../screens/TournamentsScreen';
import TourIndvScreen from '../screens/TourIndvScreen';
import UsersScreen from '../screens/UsersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UserCardScreen from '../screens/UserCardScreen';
import ProfileSettingScreen from '../screens/ProfileSettingScreen';
import CreateTourScreen from '../screens/CreateTourScreen';
import FinishedScreen from '../screens/FinishedScreen';
import OngoingScreen from '../screens/OngoingScreen';

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
    activeTintColor: 'yellow',
    style: {
      backgroundColor: 'black',
    },
  }
};

const UsersStack = createStackNavigator({
  Links: UsersScreen,
  UserCard: UserCardScreen
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
    activeTintColor: 'yellow',
    style: {
      backgroundColor: 'black',
    },
  }
};

const TournamentsStack = createStackNavigator({
  Tournaments: TournamentsScreen,
  TourIndv: TourIndvScreen,
  TourCreate: CreateTourScreen,
  Ongoing: OngoingScreen,
  Finished: FinishedScreen
});

TournamentsStack.navigationOptions = {
  tabBarLabel: 'Tournaments',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-flag' : 'md-flag'}
    />
  ),
  tabBarOptions: {
    activeTintColor: 'yellow',
    style: {
      backgroundColor: 'black',
    }
  }
};

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
    activeTintColor: 'yellow',
    style: {
      backgroundColor: 'black',
    },
  }
};

export default createBottomTabNavigator({
  NewsStack,
  TournamentsStack,
  UsersStack,
  ProfileStack
});
