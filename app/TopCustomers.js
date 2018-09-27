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
  Button,
  TouchableOpacity,
  Dimensions,
    ScrollView
} from 'react-native'
import IOSIcon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
const screenWidth = Dimensions.get('window').width;

class TopCustomers extends Component {
    constructor(props){
        super(props);
        this.state = {isLoading: true, data: {results: []},month: 'JAN', year: 2018, order: 'desc', size: 5}
        this.props.navigation.setParams({
            handleOnNavigateBack: this.handleOnNavigateBack
        });
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Top Customers",
            headerRight: (<TouchableOpacity onPress= {() => navigation.navigate("TopCustomerFilters",{
            onNavigateBack: navigation.getParam("handleOnNavigateBack")
})}>
                <Feather name="filter" size={25} style={{marginRight: 10}} />
            </TouchableOpacity>),
            headerLeft: (<TouchableOpacity onPress= {() => navigation.openDrawer()}>
                <IOSIcon name="ios-menu" size={30} style={{marginLeft: 10}} />
            </TouchableOpacity>)

        };
    };

    handleOnNavigateBack = (monthly, yearly, order,size) => {
        this.setState({month: monthly, year: yearly, order: order, size: size});
        this.getData(monthly,yearly,order,size);
    };
    componentDidMount(){
        this.getData(this.state.month, this.state.year, this.state.order, this.state.size);
    }

    getData = (month, year, order, size) => {
        let finalQuery;
        finalQuery = 'select customername,sum(sales) as sales from SALESREPORT_INFO where transactionmonth = \''+month+'\' and transactionyear = '+year+' group by customername order by sales '+order+' limit '+size;
        options = {
            headers:{
                "Authorization":"Basic YWRtaW46S1lMSU4=",
                "Content-Type":"application/json"
            },
            method: "POST",
            body: JSON.stringify({
                "sql":finalQuery,
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
                    <Text style={styles.Text}> {i+1} </Text>

                </View>
                <View  style={styles.RowText} >
                    <Text style={styles.Text}>   {data[0]}  </Text>
                </View>
                <View  style={styles.RowText} >
                    <Text style={styles.Text}>   ${data[1]}  </Text>
                </View>

            </View>
        );
    }

 render() {
    return (
        <View>
            <View style={{marginTop:15,marginBottom:10, alignItems: "center" }}>
                <Text>{this.state.order == "asc" ? "Least" : "Top"} {this.state.size} in {this.state.month},{this.state.year}</Text>
            </View>
            <View>
                <View  style={styles.HeaderParent}>
                    <View  style={styles.HeaderColumn}>
                        <Text>S.No </Text>
                    </View>
                    <View style={styles.HeaderColumn}>
                        <Text>Customer</Text>
                    </View>
                    <View style={styles.HeaderColumn}>
                        <Text>Sales</Text>
                    </View>
                </View>

            </View>
            {
                this.state.isLoading ?
                <View style={{marginTop: 100}}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View> :
                    <ScrollView>
                <View>
                    {
                        this.state.data.results.length > 0 ? (
                    this.state.data.results.map((datum,index) => { // This will render a row for each data element.
                        return this.renderRow(datum,index);
                    })) : (<View style={{flexDirection: "row"}} ><View style={styles.RowText} >
                                <Text style={styles.Text}> No Available Data </Text>
                        </View>
                            </View>)
                }
                </View>
                   </ScrollView>
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

export default TopCustomers;