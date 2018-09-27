import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  View,
  Container,
  Label,
  Button
} from 'react-native'

class TopProducts extends Component {
    constructor(props){
        super(props);
        this.state = {isLoading: true,data: {results: []}}
    }

    componentDidMount(){
        options = {
        headers:{
            "Authorization":"Basic YWRtaW46S1lMSU4=",
            "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "sql":'SELECT SALESREPORT_INFO.ITEMNAME AS ITEMNAME, SUM(SALESREPORT_INFO.QUANTITY) AS QTY, SUM(SALES) AS SALES FROM SALESREPORT_INFO group by ITEMNAME ORDER BY QTY DESC',
            "offset":0,
            "limit":50000,
            "acceptPartial":false,
            "project":"SALESREPORTINGAPP"
        })
    }

    return fetch('http://153.71.16.34:7070/kylin/api/query',options)
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState({
            isLoading: false,
            data: responseJson
        }, function(){

        });
    })
    .catch((error) =>{
        console.error(error);
    });
}

    renderRow(data,i) {
        return (
            <View style={{flexDirection: "row"}} key={"customer-"+i}>
                <View style={styles.RowText} >
                    <Text style={styles.Text}> {data[0]} </Text>
                </View>
                <View  style={styles.RowText} >
                    <Text style={styles.Text}>   {data[1]} </Text>
                </View>
                <View  style={styles.RowText} >
                    <Text style={styles.Text}>   ${data[2]}  </Text>
                </View>

            </View>
        );
    }

 render() {
    return (

        <View style={{backgroundColor: "#fff"}}>
                <View  style={styles.HeaderParent}>
                    <View  style={styles.HeaderColumn}>
                        <Text>Item </Text>
                    </View>
                    <View style={styles.HeaderColumn}>
                        <Text>Quantity</Text>
                    </View>
                    <View style={styles.HeaderColumn}>
                        <Text>Sales</Text>
                    </View>
                </View>
            {
                this.state.isLoading ?
                <View style={{marginTop: 100}}><ActivityIndicator size="large" color="#0000ff" /></View> :
               <View style={{}}>
                    {this.state.data.results.map((datum,index) => { // This will render a row for each data element.
                        return this.renderRow(datum,index);
                    })}
                </View>
            }
             
        </View>   
    );
}
}

const styles = StyleSheet.create({
    HeaderParent: {
        height: 50,
        flexDirection: "row",
        borderColor: '#82cc5d',
        backgroundColor:'#cfedc0'
    },
    HeaderColumn: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#82cc5d',
        alignItems: "center",
        justifyContent: "center"
    },
    RowText: {
        flex: 1,
        height:50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#82cc5d',
        borderWidth: 1
    },
    Text: {
        marginTop:0
    }
})

export default TopProducts;