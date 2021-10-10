import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Home from './src/pages/Home';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

const App = () => {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });

    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
};

export default codePush(codePushOptions)(App);
