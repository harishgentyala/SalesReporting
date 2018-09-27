import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit';
import { Dimensions, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";

const screenWidth = Dimensions.get('window').width;

class SalesTrend extends React.PureComponent {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Sales Trend",
            headerRight: (<TouchableOpacity onPress= {() => navigation.navigate("SalesTrendFilters",{
    onNavigateBack: handleOnNavigateBack.bind(this)
})}>
                <IOSIcon name="ios-menu" size={30} />
            </TouchableOpacity>)
        };
    };

    constructor(props){
        super(props);
        this.state = {data: {results: []}, businessdate:'2018-09-26'}
    }
    handleOnNavigateBack = (bd) => {
        this.setState({
            businessdate: bd
        });
        this.getData(bd);
    };
    componentDidMount(){
        this.getData(this.state.businessdate);
}
    getData = (bd) => {
        options = {
            headers:{
                "Authorization":"Basic YWRtaW46S1lMSU4=",
                "Content-Type":"application/json"
            },
            method: "POST",
            body: JSON.stringify({
                "sql":'SELECT transactionmonth,transactionyear,"HOUR",sum(sales) as sales from SALESREPORT_INFO where businessdate in (\''+bd+'\') group by transactionmonth,transactionyear,"HOUR" order by "HOUR" asc',
                "offset":0,
                "limit":50000,
                "acceptPartial":false,
                "project":"SALESREPORTINGAPP"
            })
        };
        console.log('SELECT transactionmonth,transactionyear,"HOUR",sum(sales) as sales from SALESREPORT_INFO where businessdate in (\''+bd+'\') group by transactionmonth,transactionyear,"HOUR" order by "HOUR" asc');

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
        const resultantSales = this.state.data.results.map((element,index) => parseInt(element[3]));
        const resultantHours = this.state.data.results.map((element,index) => element[2]);
        const data = {
            labels: resultantHours,
            datasets: [{
                data: resultantSales//[ 20, 45, 28, 80, 99, 43 ]
            }]
        };

        return (
            <View>

        {data.datasets[0].data.length > 0 ? (
            <LineChart
                data={data}
                bezier = {true}
                width={screenWidth}
                height={220}
                chartConfig={{
                  backgroundColor: '#e26a00',
                  backgroundGradientFrom: '#fb8c00',
                  backgroundGradientTo: '#ffa726',
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16
                  }
                }}
            />
        ) : (
            <View style={{marginTop: 100}}><ActivityIndicator size="large" color="#0000ff" /></View>
        )}
                </View>
        );
    }
}

export default SalesTrend;