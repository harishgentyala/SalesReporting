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

class TopCustomers extends Component {
 renderRow(data, i) {
        return (
           <View style={{flexDirection: "row"}}>
                <View style={{ flex: 1,   height:50,  alignItems: "center", justifyContent: "center" }} >
                   <Text style={styles.Text}> {i+1} </Text>
                  </View>
                <View style={{ flex: 1,   height:50,  alignItems: "center", justifyContent: "center" }} >
                 <Text style={styles.Text}>   {data[1]} </Text> 
                </View>
              <View style={{ flex: 1,   height:50,  alignItems: "center", justifyContent: "center" }} >
                 <Text style={styles.Text}>${data[2]}</Text> 
                </View>
            </View>
        );
    }

 render() {
    const data = {"columnMetas": [
                      {"key":1, "one": 11},
                      {"key":2},
                      {"key":3}]};
     const data1 = {"results": [
        [
            "1",
            "JOSEPH",
            "10.23"
        ],
        [
            "2",
            "HARRY",
            "15.5"
        ],
        [
            "3",
            "TOM",
            "80.0"
        ],
        [
            "4",
            "Lucy",
            "30.23"
        ],
        [
            "5",
            "LARRY",
            "18.92"
        ],
        [
            "6",
            "FRANKLIN",
            "18.92"
        ]
    ]};
 
    return (
        <View>
            <View
                style={{
                    height: 50,
                    flexDirection: "row",
                }}
            >
                <View
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text>S.No </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text>Customer</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text>Sales</Text>
                </View>
            </View>
        
             <View
                style={{}}>
                {
                data1.results.map((datum,index) => { // This will render a row for each data element.
                    return this.renderRow(datum,index);
                })
            }
            </View>
        </View>   
    );
}
}

const styles = StyleSheet.create({
    Text: {
        marginTop:0
    }
});

export default TopCustomers;