import React, { Component } from 'react';
import {ActivityIndicator, View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit'

const window = Dimensions.get('window');
const screenWidth = window.width
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43 ]
  }]
}

class BusyHours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {

  }

  getData = () => {
    options = {
        headers:{
            "Authorization":"Basic YWRtaW46S1lMSU4=",
            "Content-Type":"application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "sql":"SELECT \"HOUR\", COUNT(DISTINCT(SALESREPORT_INFO.CUSTOMERID)) FROM  SALESREPORT_INFO WHERE SALESREPORT_INFO.BUSINESSDATE IN('2018-09-26') GROUP BY \"HOUR\" ORDER BY \"HOUR\"",
            "offset":0,
            "limit":50000,
            "acceptPartial":false,
            "project":"SALESREPORTINGAPP"
        })
    }

    return fetch('http://153.71.16.34:7070/kylin/api/query',options)
    .then((response) => response.json())
    .then((responseJson) => {
        if(!responseJson.exception) {
            this.setState({
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

    //const resultCustomers = this.state.data.results.map((element,index) => parseInt(element[1]));
     //   const resultantHours = this.state.data.results.map((element,index) => element[0]);
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            data: [ 20, 45, 28, 80, 99, 43 ]
        }]
    }

    return (
        <View>
        {data.datasets[0].data.length > 0 ? 
            <View style={{flexDirection: 'row', backgroundColor: '#F5FCFF'}}>
                <BarChart
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#fdfdfd',
                        backgroundGradientFrom: '#adadad',
                        backgroundGradientTo: '#efefef',
                        color: (opacity = 1) => `rgba(0, 0, 0, 1)`,
                        style: {
                            borderRadius: 5
                        }
                    }}/>
            </View> :
            <Text>No data to display</Text>}
        </View>);
  }
}

export default BusyHours;