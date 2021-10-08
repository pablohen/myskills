import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Home from './src/pages/Home';
import SplashScreen from 'react-native-splash-screen';

interface Props {}

const App = (props: Props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
};

export default App;
