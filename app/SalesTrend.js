import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'

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
        "sql":"SELECT transactionmonth,transactionyear,sum(sales) as sales from SALESREPORT_INFO group by transactionmonth,transactionyear",
        "offset":0,
        "limit":50000,
        "acceptPartial":false,
        "project":"SALESREPORTINGAPP"
    })
};

    return fetch('http://153.71.16.34:7070/kylin/api/query',options)
.then((response) => response.json())
.then((responseJson) => {

    this.setState({
    data: responseJson
    }, function(){

});

})
.catch((error) =>{
    console.error(error);
});
}

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];

        const resultantData = this.state.data.results.map((element,index) => parseFloat(element[2]));
        
        return (
            <LineChart
                style={{ height: 200 }}
                data={ resultantData }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
        )
    }
}

export default SalesTrend;