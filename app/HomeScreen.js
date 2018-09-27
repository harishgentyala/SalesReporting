import React,{ Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Welcome " + navigation.getParam('username', 'user'),
        };
    };

    constructor(props){
        super(props);
    }
    render() {
        return (
        <View style={styles.viewBackground}>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
      }}>
                <TouchableOpacity style={styles.BusyHours} onPress={() => this.props.navigation.navigate('BusyHours')}>
                    <View  >
                        <Image source={require('../Images/bar.png')} />
                        <Text>Busy Hours</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SalesTrend} onPress={() => this.props.navigation.navigate('SalesTrend')}>
                <View>
                    <Image source={require('../Images/line.png')} />
                    <Text>Sales Trend</Text>
                </View>
                    </TouchableOpacity>
            </View>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
      }}>
                <TouchableOpacity style={styles.TopCustomers} onPress={() => this.props.navigation.navigate('TopCustomers')}>
                    <View >
                        <Image source={require('../Images/customers.png')} />
                        <Text>Top Customers</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TopProducts} onPress={() => this.props.navigation.navigate('TopProducts')}>
                <View>
                    <Image source={require('../Images/cart.png')} />
                    <Text>Top Products</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
      }}>
                <TouchableOpacity style={styles.Profile} onPress={() => this.props.navigation.navigate('SalesTrend')}>
                <View >
                    <Image source={require('../Images/profile.png')} />
                    <Text>Profile</Text>
                </View>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.Settings} onPress={() => this.props.navigation.navigate('SalesTrend')}>

                <View >
                    <Image source={require('../Images/settings.png')} />
                    <Text>Settings</Text>
                </View>
                    </TouchableOpacity>

            </View>

        </View>

    )
    }
}
const styles = StyleSheet.create({
    viewBackground:{
        backgroundColor: '#cecece',
        flex: 1
    },
    BusyHours: { borderRadius: 10,flex: 1,justifyContent: 'center', alignItems: 'center', flex: 0.5, backgroundColor: '#fff', marginLeft:20, marginRight:10, marginTop: 10, marginBottom: 10},
    SalesTrend: {borderRadius: 10,justifyContent: 'center', alignItems: 'center',flex: 0.5, backgroundColor: '#fff', marginLeft:10, marginRight:20, marginTop: 10, marginBottom: 10},
    TopCustomers: {borderRadius: 10,justifyContent: 'center', alignItems: 'center',flex: 0.5, backgroundColor: '#fff', marginLeft:20, marginRight:10, marginTop: 10, marginBottom: 10},
    TopProducts: {borderRadius: 10,justifyContent: 'center', alignItems: 'center',flex: 0.5, backgroundColor: '#fff', marginLeft:10, marginRight:20, marginTop: 10, marginBottom: 10},
    Profile: {borderRadius: 10,justifyContent: 'center', alignItems: 'center',flex: 0.5, backgroundColor: '#fff', marginLeft:20, marginRight:10, marginTop: 10, marginBottom: 10},
    Settings: {borderRadius: 10,justifyContent: 'center', alignItems: 'center',flex: 0.5, backgroundColor: '#fff', marginLeft:10, marginRight:20, marginTop: 10, marginBottom: 10}
})
export default HomeScreen;