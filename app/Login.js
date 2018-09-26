import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  Picker,
  View,
  Container,
  Label,
  Button
} from 'react-native'

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.TextViewCenter}>
                    <Text style={styles.TextCenter} >  Sales Reporting  </Text> 
            </View>
            <View style={styles.TextViewCenter}>
                    <Text style={styles.TextLoginCenter} > Login  </Text> 
            </View>

            <View style={{flexDirection:"row",marginTop:50,  justifyContent:'center', alignContent: 'center',alignItems:'center' }}>
                <View>
                    <TextInput style={styles.inputBox}  placeholder="Username" onChangeText={(text) => this.setState({text})}/>
                </View>
            </View>    
            <View style={{flexDirection:"row",marginTop:20, justifyContent:'center', alignContent: 'center',alignItems:'center' }}>
                <View>
                    <TextInput style={styles.inputBox}  placeholder="Password" onChangeText={(text) => this.setState({text})}/>
                </View>
            </View>   
            <View style={{ justifyContent:'center',alignContent: 'center',alignItems:'center',marginTop:50  }}>
                <View>
                    <View style={{width:80}}>
                        <Button  style={{width:50}} title="Login" color="#841584" />
                    </View>
                </View>   
            </View>
         </View>
    );
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
    borderColor: '#000000',
    height: 30,
    justifyContent: 'flex-end',
    width:150,
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
  TextLoginCenter: {
     fontSize: 15,
    fontWeight: 'bold',
  },
   TextCenter: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Login;
