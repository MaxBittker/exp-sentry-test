import Expo from 'expo';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ExpoSentryClient from '@expo/sentry-utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    const packageJSON = require('./package.json');
    this.sentryClient = ExpoSentryClient.setupSentry(
      `https://9fee4c468cb74690afc41d5d38a8973b@sentry.io/147101`,
      packageJSON.version,
      packageJSON.main,
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ backgroundColor: '#aaa', padding: 5 }}
          onPress={this._doIt}>
          <Text>hello, world!</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _doIt = () => {
    ExpoSentryClient.logWarning(`warning!!!!`);
    throw new Error(`error!!!`);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
