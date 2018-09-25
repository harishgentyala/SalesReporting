import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
      <Text style={styles.sectionHeadingStyle}>
                   Menu
      </Text>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              ---
            </Text>
            <View style={styles.navSectionStyle}>
            <Button
              onPress={this.navigateToScreen('Detail')}
              title="Busy Hours"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />

            </View>
          </View>

          <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 2
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page2')}>
                Page2
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page3')}>
                Page3
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 3
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Page4')}>
              Page4
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;