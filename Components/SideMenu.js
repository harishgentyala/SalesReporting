import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
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
      <Text style={styles.sectionHeadingStyle}>
                   Menu
      </Text>
        <ScrollView>
          <View>
            <View style={styles.navSectionStyle}>
              <Button
                onPress={this.navigateToScreen('BusyHours')}
                title="Busy Hours"
                color="#841584"
                accessibilityLabel=""
              />
              <Button
                onPress={this.navigateToScreen('SalesTrend')}
                title="Sales Trend"
                color="#841584"
                accessibilityLabel=""
              />
              <Button
                onPress={this.navigateToScreen('TopCustomers')}
                title="Top Customers"
                color="#841584"
                accessibilityLabel=""
              />
              <Button
                onPress={this.navigateToScreen('TopProducts')}
                title="Top Products"
                color="#841584"
                accessibilityLabel=""
              />
            </View>
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
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
});

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;