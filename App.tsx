import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Home from './src/pages/Home';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import * as Sentry from '@sentry/react-native';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

Sentry.init({
  dsn: 'https://d3e411974d9f4495a1cf80fd8be6760f@o1034182.ingest.sentry.io/6000750',
});

const App = () => {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });

    SplashScreen.hide();
    // throw new Error('My first Sentry error!');
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
};

export default codePush(codePushOptions)(App);
