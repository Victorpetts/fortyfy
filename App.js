import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import reducers from './reducers';

export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={createStore(reducers)}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'luckiest-guy-regular': require('./assets/fonts/LuckiestGuy-Regular.ttf'),
        'alergia-condensed-light': require('./assets/fonts/AlergiaCondensed-Light.ttf'),
        'alergia-condensed-regular': require('./assets/fonts/AlergiaCondensed-Regular.ttf'),
        'alergia-condensed-semibold': require('./assets/fonts/AlergiaCondensed-SemiBold.ttf'),
        'alergia-normal-bold': require('./assets/fonts/AlergiaNormal-Bold.ttf'),
        'alergia-normal-light': require('./assets/fonts/AlergiaNormal-Light.ttf'),
        'alergia-normal-regular': require('./assets/fonts/AlergiaNormal-Regular.ttf'),
        'alergia-normal-semibold': require('./assets/fonts/AlergiaNormal-SemiBold.ttf')

        }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
