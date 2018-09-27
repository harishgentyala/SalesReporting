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
        this.setFilters = this.setFilters.bind(this);
        this.state = {businessdate: 'dsdasd'}
    }
    sendFilters(){
        this.props.navigation.state.params.onNavigateBack(this.state.businessdate);
        this.props.navigation.navigate("SalesTrend", {
            businessdate: this.state.businessdate
        })
    }

    setFilters(itemValue, itemIndex){
        this.setState({businessdate: itemValue});
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.TextViewCenter}>
                    <Text style={styles.TextCenter} >  Filters  </Text>
                </View>
                <View style={{flexDirection:"row",marginTop:40 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>  Show by  </Text>
                    </View>
                    <View style={{flex:1.5}}>
                        <Picker style={{ height: 30, width: 100 }} onValueChange={this.setFilters}>
                            <Picker.Item label="Select" value="Select" />
                            <Picker.Item label="2018-09-21" value="2018-09-21" />
                            <Picker.Item label="2018-01-11" value="2018-01-11" />
                            <Picker.Item label="2018-09-26" value="2018-09-26" />
                            <Picker.Item label="2018-07-26" value="2018-07-26" />
                        </Picker>
                    </View>
                </View>

                <View style={{flexDirection:"row",marginTop:10 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>  Year by  </Text>
                    </View>
                    <View style={{flex:1.5}}>
                        <Picker style={{ height: 30, width: 100 }} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                            <Picker.Item label="2018" value="2018" />
                            <Picker.Item label="2017" value="2017" />
                        </Picker>
                    </View>
                </View>


                <View style={{flexDirection:"row",marginTop:10 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>  Min Sale </Text>
                    </View>
                    <View style={{flex:1.5}}>
                        <TextInput style={styles.inputBox}  placeholder="Type here!" onChangeText={(text) => this.setState({text})}/>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}>  Max Sale </Text>
                    </View>
                    <View style={{flex:1.5}}>
                        <TextInput style={styles.inputBox}  placeholder="Type here!" onChangeText={(text) => this.setState({text})}/>
                    </View>
                </View>
                <View style={{position: "absolute", bottom: 0,left: 0 , right:0  }}>
                    <View style={{flexDirection:"row",marginTop:10,marginBottom:10 }}>
                        <View style={{width:80,marginLeft:5}}>
                            <Button  style={{width:50}} title="Cancel" color="#841584" />
                        </View>
                        <View style={{width:80,marginRight:5,right:0,position: "absolute"}} >
                            <Button   title="Apply" color="#841584"
                            onPress={this.sendFilters}/>
                        </View>
                    </View>
                </View>
                <Button
                    onPress={this.sendFilters}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="click"
                />
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
        width:100,
        paddingLeft:5
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

export default SalesTrendFilters;