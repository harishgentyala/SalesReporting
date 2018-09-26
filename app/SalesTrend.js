import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit';
import { Dimensions, Text, View } from 'react-native';
const screenWidth = Dimensions.get('window').width

class SalesTrend extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = {data: {results: []}}
    }

    componentDidMount(){
        options = {
    headers:{
        "Authorization":"Basic YWRtaW46S1lMSU4=",
        "Content-Type":"application/json"
    },
    method: "POST",
    body: JSON.stringify({
        "sql":'SELECT transactionmonth,transactionyear,"HOUR",sum(sales) as sales from SALESREPORT_INFO group by transactionmonth,transactionyear,"HOUR"',
        "offset":0,
        "limit":50000,
        "acceptPartial":false,
        "project":"SALESREPORTINGAPP"
    })
};

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
        console.log("resultant data",this.state.data.results);
        const resultantData = this.state.data.results.map((element,index) => parseInt(element[3]));
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                data: resultantData//[ 20, 45, 28, 80, 99, 43 ]
            }]
        };
        console.log("final data",data.datasets[0].data);

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
            <Text>No data to display</Text>
        )}
                </View>
        );
    }
}

export default SalesTrend;