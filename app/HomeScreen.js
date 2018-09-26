import React,{ Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.viewBackground}>
                <Text>Hi John. Welcome</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    red:{
        color: 'orange'
    },
    blackblue:{
        color: 'blue'
    },
    viewBackground:{
        backgroundColor: 'orange',
        flex: 2
    },
    view1:{
        backgroundColor: 'transparent'
    },
    view2:{
        backgroundColor: 'transparent'
    }
})

export default HomeScreen;