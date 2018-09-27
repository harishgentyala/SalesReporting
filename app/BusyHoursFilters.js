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
        this.setFilters = this.setFilters.bind(this);
        this.state = {businessdate: '2018-09-27'}
    }
    sendFilters(){
        this.props.navigation.state.params.onNavigateBack(this.state.businessdate);
        this.props.navigation.navigate("BusyHours", {
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
                        <Text style={styles.Text}>  Date:  </Text>
                    </View>
                    <View style={{flex:1.5}}>
                        <Picker style={{ height: 30, width: 100 }} onValueChange={this.setFilters}>
                            <Picker.Item label="Select" value="Select" />
                            <Picker.Item label="2018-09-25" value="2018-01-11" />
                            <Picker.Item label="2018-09-26" value="2018-09-26" />
                            <Picker.Item label="2018-07-27" value="2018-07-26" />
                        </Picker>
                    </View>
                </View>

                <View style={{flexDirection:"row",marginTop:10 }}>
                    <View style={{flex:1}}>
                        <Text style={styles.Text}> Hour From:  </Text>
                    </View>
                    <View style={{flex:1.5}}>
                        <Picker style={{ height: 30, width: 100 }} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
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
                    <View style={{flex:1.5}}>
                        <Picker style={{ height: 30, width: 100 }} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
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
                    title="Apply"
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

export default BusyHoursFilters;