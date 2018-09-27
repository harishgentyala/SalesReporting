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
export default class TopCustomerFilters extends Component {
    constructor(props){
        super(props);
        this.sendFilters = this.sendFilters.bind(this);
        this.setMonth = this.setMonth.bind(this);
        this.setYear = this.setYear.bind(this);
        this.state = {month: 'JAN', year:'2018', order:'desc'};

    }

    sendFilters(){
        this.props.navigation.state.params.onNavigateBack(
            this.state.month,
            this.state.year,
            this.state.order);
        this.props.navigation.navigate("TopCustomers");
    }

    setMonth(itemValue){
        this.setState({month: itemValue});
    }

    setYear(itemValue, itemIndex){
        this.setState({year: itemValue});
    }

    setOrder(itemValue){
        this.setState({order: itemValue});
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection:"row",marginTop:40 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>  Month </Text>
                    </View>
                    <View style={{flex:1}}>
                        <Picker selectedValue={this.state.month} style={{ height: 30, width: 150 }} onValueChange={this.setMonth}>
                            <Picker.Item label="January" value="JAN" />
                            <Picker.Item label="February" value="FEB" />
                            <Picker.Item label="March" value="MAR" />
                            <Picker.Item label="April" value="APR" />
                            <Picker.Item label="May" value="MAY" />
                            <Picker.Item label="June" value="JUN" />
                            <Picker.Item label="July" value="JUL" />
                            <Picker.Item label="August" value="AUG" />
                            <Picker.Item label="September" value="SEPT" />
                            <Picker.Item label="October" value="OCT" />
                            <Picker.Item label="November" value="NOV" />
                            <Picker.Item label="December" value="DEC" />

                        </Picker>
                    </View>
                </View>

                <View style={{flexDirection:"row",marginTop:10 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>  Year </Text>
                    </View>
                    <View style={{flex:1}}>
                        <Picker selectedValue={this.state.year} style={{ height: 30, width: 150 }} onValueChange={this.setYear}>
                            <Picker.Item label="2018" value="2018" />
                            <Picker.Item label="2017" value="2017" />
                        </Picker>
                    </View>
                </View>

                <View style={{flexDirection:"row",marginTop:10 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>  Order </Text>
                    </View>
                    <View style={{flex:1}}>
                        <Picker selectedValue={this.state.order} style={{ height: 30, width: 150 }} onValueChange={this.setOrder}>
                            <Picker.Item label="Top" value="desc" />
                            <Picker.Item label="Least" value="asc" />
                        </Picker>
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
        backgroundColor: '#F5FCFF',
    },
    Text: {
        marginTop:10
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