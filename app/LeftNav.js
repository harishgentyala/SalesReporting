import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { createStackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import BusyHours from "./BusyHours";
import SalesTrend from "./SalesTrend";
import TopCustomers from "./TopCustomers";
import TopProducts from "./TopProducts";
import SalesTrendFilters from "./SalesTrendFilters";

const LeftNav = createStackNavigator({
  Main : {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: "Home",
      headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                    <IOSIcon name="ios-menu" size={30} />
                  </TouchableOpacity>
      ),
      headerStyle: {}
    })
  },
  BusyHours: {
    screen: BusyHours,
    navigationOptions: ({navigation}) => ({
      title: "Busy Hours",
    })
  },
  SalesTrend: {
    screen: SalesTrend,

  },
  TopCustomers: {
    screen: TopCustomers,
    navigationOptions: ({navigation}) => ({
      title: "Top Customers",
    })
  },

  SalesTrendFilters: {
    screen: SalesTrendFilters,
    navigationOptions: ({navigation}) => ({
      title: "Sales Trend Filters",

    })
  },
  TopProducts: {
    screen: TopProducts,
    navigationOptions: ({navigation}) => ({
      title: "Top Products",
    })
  }
});

export default LeftNav;
