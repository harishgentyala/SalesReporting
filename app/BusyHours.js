import React, { Component } from 'react';
import {ActivityIndicator, View, Dimensions, Text, TouchableOpacity} from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";
import {BarChart} from 'react-native-chart-kit'

const window = Dimensions.get('window');
const screenWidth = window.width

class BusyHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: {results:[]},
    };
  }
 
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    options = {
        headers:{
            "Authorization":"Basic YWRtaW46S1lMSU4=",
            "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "sql":"SELECT \"HOUR\", COUNT(SALESREPORT_INFO.CUSTOMERID) FROM  SALESREPORT_INFO WHERE SALESREPORT_INFO.BUSINESSDATE IN('2018-09-26') GROUP BY \"HOUR\" ORDER BY \"HOUR\"",
            "offset":0,
            "limit":9,
            "acceptPartial":false,
            "project":"SALESREPORTINGAPP"
        })
    }

    return fetch('http://153.71.16.34:7070/kylin/api/query',options)
    .then((response) => response.json())
    .then((responseJson) => {
        if(!responseJson.exception) {
            this.setState({
                isLoading: false,
                data: responseJson
            }, function () {

            });
        }
    })
    .catch((error) =>{
        console.error(error);
    });

  }

  render() {
    const barStyles = {
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5
    };

    const resultCustomers = this.state.data.results.map((element,index) => parseInt(element[1]));
    const resultantHours = this.state.data.results.map((element,index) => element[0]);
    const data = {
        labels: resultantHours,
        datasets: [{
            data: resultCustomers
        }]
    };

    return (
        <View>
            <TouchableOpacity onPress= {() => this.props.navigation.navigate("SalesTrendFilters",{
                onNavigateBack: this.handleOnNavigateBack.bind(this)
            })}>
                <IOSIcon name="ios-menu" size={30} />
            </TouchableOpacity>
        {this.state.isLoading ? <View style={{marginTop: 100}}><ActivityIndicator size="large" color="#0000ff" /></View> : (data.datasets[0].data.length > 0 ? 
            <View style={{flexDirection: 'row'}}>
                <BarChart
                    style={{
                        marginVertical: 1,
                        borderRadius: 2
                    }}
                    data={data}
                    width={screenWidth}
                    height={300}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#ffffff',
                        backgroundGradientTo: '#ffff',
                        color: (opacity = 1) => `rgba(20, 99, 9, 1)`,
                        style: {
                            borderRadius: 1
                        }
                    }}/>
            </View> :
            <Text>No data to display</Text>)}
        </View>);
  }
}

export default BusyHours;