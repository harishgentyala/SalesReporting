import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
           <View style={styles.navSectionStyle}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('HomeScreen')}>
                  <View style={styles.ButtonView} >
                    <Text style={styles.ButtonText} > Home </Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('BusyHours')}>
                  <View style={styles.ButtonView} >
                    <Text style={styles.ButtonText} > Busy Hours </Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('SalesTrend')}>
                  <View style={styles.ButtonView} >
                    <Text style={styles.ButtonText}> Sales Trend </Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('TopCustomers')}>
                  <View style={styles.ButtonView} >
                    <Text style={styles.ButtonText} > Top Customers </Text>
                  </View>
                </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('TopProducts')}>
                <View style={styles.ButtonView} >
                  <Text style={styles.ButtonText}> Top Products </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('Main')}>
                <View style={{backgroundColor: '#fff'}}>
                  <Text style={styles.ButtonLogout}> Logout </Text>
                </View>
              </TouchableOpacity>
           </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   paddingTop: 20,
   flex: 1
 },
 navItemStyle: {
   padding: 10
 },
 navSectionStyle: {
   backgroundColor: 'lightgrey',
   marginTop: 50
 },
 sectionHeadingStyle: {
   paddingVertical: 10,
   paddingHorizontal: 5
 },
 footerContainer: {
   padding: 20,
   backgroundColor: 'lightgrey'
 },
 ButtonView: {
   flexDirection: 'row',
   backgroundColor: '#fff',
   marginBottom:1,
   paddingTop:5,
   paddingBottom:5
 },
  ButtonText: {
   backgroundColor: '#fff',
   marginTop:1,
   paddingTop:7,
   paddingLeft:5,
   paddingBottom:7,
   color: '#0e0e0e'
 },
 ButtonLogout: {
   backgroundColor: '#fff',
   marginTop: 50,
   marginRight: 20,
   color: 'red',
   textAlign: 'right',
   fontSize: 16
 }
});
SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;