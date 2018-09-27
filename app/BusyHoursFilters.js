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

class BusyHoursFilters extends Component {
    constructor(props){
        super(props);
        this.sendFilters = this.sendFilters.bind(this);
        this.state = {
            businessDate:'2018-09-28',
            hourFrom: '09',
            hourTo: '18'
        }
    }
    sendFilters(){
        this.props.navigation.state.params.onNavigateBack(this.state);
        this.props.navigation.navigate("BusyHours", this.state)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",marginTop:60 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>  Date:  </Text>
                    </View>
                    <View style={{flex:2}}>
                        <Picker selectedValue={this.state.businessDate} style={{ height: 30, width: 200,marginTop:10, marginLeft:30 }} onValueChange={(itemValue, itemIndex) => this.setState({businessDate: itemValue})}>
                            <Picker.Item label="2018-09-25" value="2018-09-25" />
                            <Picker.Item label="2018-09-26" value="2018-09-26" />
                            <Picker.Item label="2018-09-27" value="2018-09-27" />
                            <Picker.Item label="2018-09-28" value="2018-09-28" />
                        </Picker>
                    </View>
                </View>

                <View style={{flexDirection:"row",marginTop:10 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}> Hour From:  </Text>
                    </View>
                    <View style={{flex:2}}>
                        <Picker selectedValue={this.state.hourFrom} style={{ height: 30, width: 100,marginTop:10, marginLeft:30 }} onValueChange={(itemValue, itemIndex) => this.setState({hourFrom: itemValue})}>
                            <Picker.Item label="09" value="09" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                            <Picker.Item label="17" value="17" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="20" value="20" />
                            <Picker.Item label="21" value="21" />
                            <Picker.Item label="22" value="22" />
                        </Picker>
                    </View>
                </View>

                <View style={{flexDirection:"row",marginTop:10 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}> Hour To:  </Text>
                    </View>
                    <View style={{flex:2}}>
                        <Picker selectedValue={this.state.hourTo}  style={{ height: 30, width: 100, marginTop:10, marginLeft:30 }} onValueChange={(itemValue, itemIndex) => this.setState({hourTo: itemValue})}>
                            <Picker.Item label="09" value="09" />
                            <Picker.Item label="10" value="10" />
                            <Picker.Item label="11" value="11" />
                            <Picker.Item label="12" value="12" />
                            <Picker.Item label="13" value="13" />
                            <Picker.Item label="14" value="14" />
                            <Picker.Item label="15" value="15" />
                            <Picker.Item label="16" value="16" />
                            <Picker.Item label="17" value="17" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="20" value="20" />
                            <Picker.Item label="21" value="21" />
                            <Picker.Item label="22" value="22" />
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

export default BusyHoursFilters;