import React from 'react';
import SideMenu from 'react-native-side-menu';
import Menu from 'react-native-side-menu';
import { StyleSheet, Text, View } from 'react-native';

class ContentView extends React.Component {
  render() {
    return (
      <View >
        <Text >
          Welcome to React Native!
        </Text>
        <Text >
          To get started, edit index.ios.js
        </Text>
        <Text >
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}

export default class SideBar extends React.Component {
  render() {
    const menu = <Menu navigator={navigator}/>;

    return (
      <SideMenu menu={menu}>
        <ContentView/>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'  },
});
