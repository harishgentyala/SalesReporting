import React, { Component } from 'react'
import {
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  View,
  Container,
  Label,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const window = Dimensions.get('window');

class TopProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: {results: []},
            filters: {
                year:'2018',
                month: 'SEPT',
                order: 'DESC'
            }
        };
        this.props.navigation.setParams({
            handleOnNavigateBack: this.handleOnNavigateBack,
        });
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Busy Hours",
            headerRight: (
                <TouchableOpacity onPress= {() => navigation.navigate("TopProductsFilters",{
                onNavigateBack: navigation.getParam("handleOnNavigateBack")
                })}>
                    <Feather name="filter" size={25} style={{marginRight: 10}} />
                </TouchableOpacity>),
            headerLeft: (<TouchableOpacity onPress= {() => navigation.openDrawer()}>
                <IOSIcon name="ios-menu" size={30} style={{marginLeft: 10}} />
            </TouchableOpacity>)
        };
    };
    handleOnNavigateBack = (filters) => {
        this.getData(filters);
    };
    componentDidMount(){
        this.getData(this.state.filters);
    }

    getData = (filters) => {
    options = {
        headers:{
            "Authorization":"Basic YWRtaW46S1lMSU4=",
            "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "sql":"SELECT SALESREPORT_INFO.ITEMNAME AS ITEMNAME, DEPTNAME, SUM(SALESREPORT_INFO.QUANTITY) AS QTY, SUM(SALES) AS SALES FROM SALESREPORT_INFO WHERE SALESREPORT_INFO.TRANSACTIONMONTH IN('"+filters.month+"') AND SALESREPORT_INFO.TRANSACTIONYEAR IN('"+filters.year+"') AND ITEMNAME NOT IN('PEANUT BUTTER') group by ITEMNAME, DEPTNAME ORDER BY QTY "+filters.order,
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
            data: responseJson,
            filters: filters
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
                    <Text style={styles.Text}>{data[0]}</Text>
                </View>
                <View  style={styles.RowText} >
                    <Text style={styles.Text}>{data[1]}</Text>
                </View>
                <View  style={styles.RowText2} >
                    <Text style={styles.Text}>{data[2]}</Text>
                </View>
                <View  style={styles.RowText2} >
                    <Text style={styles.Text}>${data[3]}</Text>
                </View>
            </View>
        );
    }

 render() {
    return (

        <View style={{backgroundColor: "#fff"}} height={window.height}>
            <View style={{flexDirection:"row",marginTop:10 }}>
                <View style={{flex:1}}>
                    <Text style={styles.Text2}>  Store:  </Text>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.Text2}>Brooklyn</Text>
                </View>
            </View>
            <View style={{flexDirection:"row",marginTop:10 }}>
                <View style={{flex:1}}>
                    <Text style={styles.Text2}>  Year:  </Text>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.Text2}>{this.state.filters.year}</Text>
                </View>
            </View>
            <View style={{flexDirection:"row",marginTop:10,marginBottom:20 }}>
                <View style={{flex:1}}>
                    <Text style={styles.Text2}>  Month:  </Text>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.Text2}>{this.state.filters.month}</Text>
                </View>
            </View>
            <ScrollView>
                <View  style={styles.HeaderParent}>
                    <View  style={styles.HeaderColumn}>
                        <Text style={styles.HeaderText}>Item </Text>
                    </View>
                    <View  style={styles.HeaderColumn}>
                        <Text style={styles.HeaderText}>Department </Text>
                    </View>
                    <View style={styles.HeaderColumn2}>
                        <Text style={styles.HeaderText}>Qty</Text>
                    </View>
                    <View style={styles.HeaderColumn2}>
                        <Text style={styles.HeaderText}>Sales</Text>
                    </View>
                </View>
            {
                this.state.isLoading ?
                <View style={{marginTop: 100}}><ActivityIndicator size="large" color="#0000ff" /></View> :  (this.state.data.results.length > 0 ? 
               <View style={{}}>
                    {this.state.data.results.map((datum,index) => { // This will render a row for each data element.
                        return this.renderRow(datum,index);
                    })}
                </View> :
                <View style={{ justifyContent:'center',alignContent: 'center',alignItems:'center',marginTop:60  }}><Text style={styles.Text2}>No data to display</Text></View>)
            }
             </ScrollView>
        </View>   
    );
}
}

const styles = StyleSheet.create({
    HeaderParent: {
        height: 50,
        flexDirection: "row",
        borderColor: '#0e0e0e',
        backgroundColor:'#FFF'
    },
    HeaderColumn: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#0e0e0e',
        alignItems: "center",
        justifyContent: "center"
    },
    HeaderText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    HeaderColumn2: {
        flex: 0.5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#0e0e0e',
        alignItems: "center",
        justifyContent: "center"
    },
    RowText: {
        flex: 1,
        borderBottomWidth: 1,
        height:50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#0e0e0e'
    },
     RowText2: {
        flex: 0.5,
        borderBottomWidth: 1,
        height:50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: '#0e0e0e'
    },
    Text: {
        marginTop:0
    },
    Text2: {
        marginTop:0,
         marginLeft:20,
        fontSize: 18
    }
})

export default TopProducts;