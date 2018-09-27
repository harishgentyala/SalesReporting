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
    Button,
    Image
} from 'react-native'
export default class Profile extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginTop:15, alignItems: "center" }}>
                    <Image source={require('../Images/profile.png')} />
                    <Text>{this.props.navigation.getParam("username","user")}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    inputBox: {
        height: 30,
        justifyContent: 'flex-end',
        width:200,
        paddingLeft:5,
        fontSize: 15
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
    TextLoginCenter: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    TextCenter: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})