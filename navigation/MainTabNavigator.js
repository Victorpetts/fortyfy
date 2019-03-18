import React from 'react';
import {
  Text,
  View,
  Image

} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import style from '../assets/Style.js';

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
  News: NewsScreen
});

NewsStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'News',
    tabBarOnPress: () => {
      // Scroll to top
      if (navigation.state.index === 0) {
        const navigationInRoute = navigation.getChildNavigation(navigation.state.routes[0].key);

        if (!!navigationInRoute && navigationInRoute.isFocused() && !!navigationInRoute.state.params && !!navigationInRoute.state.params.scrollToTop) {
          navigationInRoute.state.params.scrollToTop();
        }
        else {
          navigation.navigate(navigation.state.key)
        }
      }
    },
    tabBarIcon: ({ focused }) => (
      <View style={{
        paddingTop: 10
      }}>
        <Image
          focused={focused}
          style={{ height: 25, width: 29 }}
          resizeMode={'contain'}
          source={require("../assets/images/tabicons/news.png")}
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

TournamentsStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Tournaments',
    tabBarOnPress: () => {
      // Scroll to top
      if (navigation.state.index === 0) {
        const navigationInRoute = navigation.getChildNavigation(navigation.state.routes[0].key);

        if (!!navigationInRoute && navigationInRoute.isFocused() && !!navigationInRoute.state.params && !!navigationInRoute.state.params.scrollToTop) {
          navigationInRoute.state.params.scrollToTop();
        }
        else {
          navigation.navigate(navigation.state.key)
        }
      }
    },
    tabBarIcon: ({ focused }) => (
      focused ?
        <View style={{
          paddingTop: 10
        }}>
          <Image
            focused={focused}
            style={{ height: 25, width: 29 }}
            resizeMode={'contain'}
            source={require("../assets/images/tabicons/tournament.png")}
          />
        </View>
        :
        <View style={{
          paddingTop: 10
        }}>
          <View style={style.notificationCircle}>
            <Text style={style.notificationText}>1</Text>
          </View>
          <Image
            focused={focused}
            style={{ height: 25, width: 29 }}
            resizeMode={'contain'}
            source={require("../assets/images/tabicons/tournament.png")}
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
        source={require("../assets/images/tabicons/friends.png")}
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
        source={require("../assets/images/tabicons/profile.png")}
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
