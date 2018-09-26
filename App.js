
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import SideMenu from './Components/SideMenu'
import LeftNav from './app/LeftNav';

const App = createDrawerNavigator({
  Item1: {
      screen: LeftNav,
    }
  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});

export default App;