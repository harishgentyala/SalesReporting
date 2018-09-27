import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    Picker,
    View,
    Container,
    Label,
    Button
} from 'react-native';

class TopProductsFilters extends Component {
    constructor(props){
        super(props);
        this.sendFilters = this.sendFilters.bind(this);
        this.state = {
            year:'2018',
            month: 'SEPT',
            order: 'DESC'
        }
    }
    sendFilters(){
        this.props.navigation.state.params.onNavigateBack(this.state);
        this.props.navigation.navigate("TopProducts", this.state)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",marginTop:60 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>Year:  </Text>
                    </View>
                    <View style={{flex:2}}>
                        <Picker selectedValue={this.state.year} style={{ height: 30, width: 200,marginTop:10, marginLeft:30 }} onValueChange={(itemValue, itemIndex) => this.setState({year: itemValue})}>
                            <Picker.Item label="2017" value="2017" />
                            <Picker.Item label="2018" value="2018" />
                        </Picker>
                    </View>
                </View>

                <View style={{flexDirection:"row",marginTop:10 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>Month:  </Text>
                    </View>
                    <View style={{flex:2}}>
                        <Picker selectedValue={this.state.month} style={{ height: 30, width: 100,marginTop:10, marginLeft:30 }} onValueChange={(itemValue, itemIndex) => this.setState({month: itemValue})}>
                            <Picker.Item label="JAN" value="JAN" />
                            <Picker.Item label="FEB" value="FEB" />
                            <Picker.Item label="MAR" value="MAR" />
                            <Picker.Item label="APR" value="APR" />
                            <Picker.Item label="SEPT" value="SEPT" />
                            <Picker.Item label="OCT" value="OCT" />
                        </Picker>
                    </View>
                </View>

                <View style={{flexDirection:"row",marginTop:10 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>Order:  </Text>
                    </View>
                    <View style={{flex:2}}>
                        <Picker selectedValue={this.state.order}  style={{ height: 30, width: 100, marginTop:10, marginLeft:30 }} onValueChange={(itemValue, itemIndex) => this.setState({order: itemValue})}>
                            <Picker.Item label="Top" value="DESC" />
                            <Picker.Item label="Least" value="ASC" />
                        </Picker>
                    </View>
                </View>
                <View style={{ justifyContent:'center',alignContent: 'center',alignItems:'center',marginTop:60  }}>
                    <View >
                        <View style={{width:250}}>
                            <Button  style={{width:200}} title="Apply" color="#841584" onPress={this.sendFilters}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    inputBox: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000',
        height: 30,
        justifyContent: 'flex-end',
        marginRight:20,
        marginLeft:2,
        width:200,
        paddingLeft:5
    },
    Text: {
        marginTop:10,
        marginLeft:10,
        fontSize: 20
    },
    TextViewCenter: {
        justifyContent:'center',
        alignContent: 'center',
        alignItems:'center',
        marginTop:20
    },
    TextCenter: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default TopProductsFilters;