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

const ProfileStack = createStackNavigator({
  Home: ProfileScreen,
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
  tabBarLabel: 'Users',
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
  TourIndv: TourIndvScreen
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
