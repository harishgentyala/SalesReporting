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
} from 'react-native'
class SalesTrendFilters extends Component {
    constructor(props){
        super(props);
        this.sendFilters = this.sendFilters.bind(this);
        this.setBusinessDateFrom = this.setBusinessDateFrom.bind(this);
        this.setBusinessDateTo = this.setBusinessDateTo.bind(this);
        this.state = {businessdateFrom: '2018-09-26', businessdateTo:'2018-09-26', minSales: 1, maxSales: 100};

    }
    sendFilters(){
        this.props.navigation.state.params.onNavigateBack(
            this.state.businessdateFrom,
            this.state.businessdateTo,
            this.state.minSales,
            this.state.maxSales);
        this.props.navigation.navigate("SalesTrend");
    }

    setBusinessDateFrom(itemValue){
        this.setState({businessdateFrom: itemValue});
    }

    setBusinessDateTo(itemValue, itemIndex){
        this.setState({businessdateTo: itemValue});
    }

    setMinSales(itemValue){
        console.log('min sakles',itemValue.text);
        this.setState({minSales: parseInt(itemValue.text)});
    }

    setMaxSales(itemValue){
        this.setState({maxSales: parseInt(itemValue.text)});
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:"row",marginTop:15 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}> Business Date  </Text>
                    </View>
                    <View style={{flex:1}}>
                        <Picker selectedValue={this.state.businessdateFrom} style={{ height: 30, width: 150 }} onValueChange={this.setBusinessDateFrom}>
                            <Picker.Item label="Select" value="Select" />
                            <Picker.Item label="2018-09-27" value="2018-09-27" />
                            <Picker.Item label="2018-01-11" value="2018-01-11" />
                            <Picker.Item label="2018-09-26" value="2018-09-26" />
                            <Picker.Item label="2018-07-26" value="2018-07-26" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.TextViewCenter}>
                    <Text style={styles.TextCenter}> Compared With </Text>
                </View>
                <View style={{flexDirection:"row",marginTop:15 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}> Business Date </Text>
                    </View>
                    <View style={{flex:1}}>
                        <Picker selectedValue={this.state.businessdateTo} style={{ height: 30, width: 150 }} onValueChange={this.setBusinessDateTo}>
                            <Picker.Item label="Select" value="Select" />
                            <Picker.Item label="2018-09-27" value="2018-09-27" />
                            <Picker.Item label="2018-01-11" value="2018-01-11" />
                            <Picker.Item label="2018-09-26" value="2018-09-26" />
                            <Picker.Item label="2018-07-26" value="2018-07-26" />
                        </Picker>
                    </View>
                </View>

                <View style={{flexDirection:"row",marginTop:15 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>  Min Sale </Text>
                    </View>
                    <View style={{flex:1}}>
                        <TextInput style={styles.inputBox}  placeholder="ex:1" onChangeText={(text) => this.setMinSales({text})}/>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:15 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>  Max Sale </Text>
                    </View>
                    <View style={{flex:1}}>
                        <TextInput style={styles.inputBox}  placeholder="ex:100" onChangeText={(text) => this.setMaxSales({text})}/>
                    </View>
                </View>
                <View style={{ justifyContent:'center',alignContent: 'center',alignItems:'center',marginTop:60  }}>
                    <View >
                        <View style={{width:200}}>
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
        backgroundColor: '#fff',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    inputBox: {
        height: 30,
        justifyContent: 'flex-end',
        marginRight:20,
        marginLeft:2,
        paddingLeft:5
    },
    Text: {

        fontSize: 15,
        marginLeft: 10
    },
    TextViewCenter: {

        marginLeft: 10,
        marginTop: 15
    },
    TextCenter: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default SalesTrendFilters;