import React,{ Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';


class HomeScreen extends Component {
    render() {
        return (
        <View style={styles.viewBackground}>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
      }}>
                <View style={styles.BusyHours} >
                    <Image source={require('../Images/bar.png')} />
                    <Text>Busy Hours</Text>
                    </View>
                <View style={styles.SalesTrend} >
                    <Image source={require('../Images/line.png')} />
                    <Text>Sales Trend</Text>
                </View>
            </View>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
      }}>
                <View style={styles.TopCustomers} >
                    <Image source={require('../Images/customers.png')} />
                    <Text>Top Customers</Text>
                </View>
                <View style={styles.TopProducts} >
                    <Image source={require('../Images/cart.png')} />
                    <Text>Top Products</Text>
                </View>

            </View>
            <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
      }}>
                <View style={styles.Profile} >
                    <Image source={require('../Images/profile.png')} />
                    <Text>Profile</Text>
                </View>
                <View style={styles.Settings} >
                    <Image source={require('../Images/settings.png')} />
                    <Text>Settings</Text>
                </View>

            </View>

        </View>

    )
    }
}
const styles = StyleSheet.create({
    viewBackground:{
        backgroundColor: '#fff',
        flex: 1
    },
    BusyHours: { flex: 1,justifyContent: 'center', alignItems: 'center', flex: 0.5, backgroundColor: 'powderblue', marginLeft:20, marginRight:10, marginTop: 10, marginBottom: 10},
    SalesTrend: {justifyContent: 'center', alignItems: 'center',flex: 0.5, backgroundColor: 'skyblue', marginLeft:10, marginRight:20, marginTop: 10, marginBottom: 10},
    TopCustomers: {justifyContent: 'center', alignItems: 'center',flex: 0.5, backgroundColor: 'powderblue', marginLeft:20, marginRight:10, marginTop: 10, marginBottom: 10},
    TopProducts: {justifyContent: 'center', alignItems: 'center',flex: 0.5, backgroundColor: 'skyblue', marginLeft:10, marginRight:20, marginTop: 10, marginBottom: 10},
    Profile: {justifyContent: 'center', alignItems: 'center',flex: 0.5, backgroundColor: 'powderblue', marginLeft:20, marginRight:10, marginTop: 10, marginBottom: 10},
    Settings: {justifyContent: 'center', alignItems: 'center',flex: 0.5, backgroundColor: 'skyblue', marginLeft:10, marginRight:20, marginTop: 10, marginBottom: 10}
})
export default HomeScreen;