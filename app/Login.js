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
    
} from 'react-native'
export default class Login extends Component {
    constructor(props){
        super(props);
        this.navigateToHomeScreen = this.navigateToHomeScreen.bind(this);
        this.state = {username: '', password: ''}
    }
    setUsername(itemValue){
        this.setState({username: itemValue});
    }
    setPassword(itemValue){
        this.setState({password: itemValue});
    }
    navigateToHomeScreen(){
        this.setState({username: '', password: ''});
        this.props.navigation.navigate("HomeScreen", {
            username: this.state.username
        });
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.TextViewCenter}>
                    <Text style={styles.TextLoginCenter} > Login  </Text>
                </View>

                <View style={{flexDirection:"row",marginTop:100,  justifyContent:'center', alignContent: 'center',alignItems:'center' }}>
                    <View >
                        <TextInput value={this.state.username} style={styles.inputBox}  placeholder="Username" onChangeText={(text) => this.setUsername(text)}/>
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:20, justifyContent:'center', alignContent: 'center',alignItems:'center' }}>
                    <View >
                        <TextInput value={this.state.password} secureTextEntry={true} style={styles.inputBox}  placeholder="Password" onChangeText={(text) => this.setPassword(text)}/>
                    </View>
                </View>
                <View style={{ justifyContent:'center',alignContent: 'center',alignItems:'center',marginTop:60  }}>
                    <View >
                        <View style={{width:100}}>
                            <Button  style={{width:200}} title="Login" color="#841584" onPress={this.navigateToHomeScreen}/>
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