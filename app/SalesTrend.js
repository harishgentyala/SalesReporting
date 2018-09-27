import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit';
import { Dimensions, Text, View, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import IOSIcon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
const screenWidth = Dimensions.get('window').width;

class SalesTrend extends React.PureComponent {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Sales Trend",
            headerRight: (<TouchableOpacity onPress= {() => navigation.navigate("SalesTrendFilters",{
            onNavigateBack: navigation.getParam("handleOnNavigateBack")
})}>
                <Feather name="filter" size={25} style={{marginRight: 10}} />
            </TouchableOpacity>),
            headerLeft: (<TouchableOpacity onPress= {() => navigation.openDrawer()}>
                <IOSIcon name="ios-menu" size={30} style={{marginLeft: 10}} />
            </TouchableOpacity>)

        };
    };

//        this.props.navigation.openDrawer();

    constructor(props){
        super(props);
        this.state = {isLoading: true, data: {results: []}, businessdateFrom:'2018-09-26',businessdateTo:'2018-09-26',minSales:1,maxSales:100};
        this.props.navigation.setParams({
            handleOnNavigateBack: this.handleOnNavigateBack
        });
    }
    handleOnNavigateBack = (businessdateFrom, businessdateTo, minSales, maxSales) => {
        this.setState({
            businessdateFrom: businessdateFrom,
            businessdateTo: businessdateTo,
            minSales: minSales,
            maxSales: maxSales,
            isLoading: true
        });
        this.getData(businessdateFrom, businessdateTo,minSales,maxSales);
    };
    componentDidMount(){
        this.getData(this.state.businessdateFrom, this.state.businessdateTo, this.state.minSales, this.state.maxSales);
    }

    getData = (businessdateFrom, businessdateTo, minSales, maxSales) => {
        let businessdateFilter = "businessdate";
        let hourFilter = "\"Hour\"";
        let finalQuery;
        if(businessdateFrom == businessdateTo){
            finalQuery = 'with sample as(SELECT "HOUR",sum(sales) as sales from SALESREPORT_INFO where businessdate in (\''+businessdateFrom+'\') group by "HOUR" order by "HOUR" desc) select * from sample where sales between '+minSales+' and '+maxSales+'';
        }
        else{
            finalQuery = 'with sample as(SELECT businessdate,sum(sales) as sales from SALESREPORT_INFO where businessdate in (\''+businessdateFrom+'\',\''+businessdateTo+'\') group by businessdate order by businessdate desc) select * from sample where sales between '+minSales+' and '+maxSales+'';
        }
console.log(finalQuery);
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
        };

        return fetch('http://153.71.16.34:7070/kylin/api/query',options)
            .then((response) => response.json())
            .then((responseJson) => {

                if(!responseJson.exception) {
                    this.setState({
                        data: responseJson,
                        isLoading: false
                    }, function () {

                    });
                }

            })
            .catch((error) =>{
                console.error(error);
            });
    }

    render() {
        const resultantSales = this.state.data.results.map((element,index) => parseInt(element[1]));
        const resultantHours = this.state.data.results.map((element,index) => element[0]);
        console.log("business date",this.state.businessdateFrom);
        const data = {
            labels: resultantHours,
            datasets: [{
                data: resultantSales//[ 20, 45, 28, 80, 99, 43 ]
            }]
        };

        return (
            <View style={{backgroundColor: '#ffffff', flex:1}}>
            <View style={{marginTop:15, alignItems: "center" }}>
                <Text>Comparing {this.state.businessdateFrom} with {this.state.businessdateTo}</Text>
            </View>
            <View style={{marginTop:15, alignItems: "center" }}>
                <Text>Min. Sales: {this.state.minSales}</Text>
            </View>
            <View style={{marginTop:15, alignItems: "center" }}>
                <Text>Max. Sales: {this.state.maxSales}</Text>
            </View>
        {data.datasets[0].data.length > 0 ? (
            <View style={{marginTop: 10}}>
                <LineChart
                    data={data}
                    bezier = {true}
                    width={screenWidth}
                    height={220}
                    chartConfig={{
                  backgroundColor: '#fff',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  color: (opacity = 1) => `rgba(17, 127, 2, ${opacity})`,
                  style: {
                    borderRadius: 16
                  }
                }}
                />
            </View>
        ) : (
            this.state.isLoading == false ? (  <View style={styles.NoAvailableData}>
                <Text style={styles.TextLoginCenter} > No Available Data  </Text>
            </View>) :
                (<View style={{marginTop: 100}}><ActivityIndicator size="large" color="#0000ff" /></View>)
        )}
                </View>
        );
    }
}


const styles = StyleSheet.create({

    TextViewCenter: {
        justifyContent:'center',
        alignContent: 'center',
        alignItems:'center',
        marginTop:20
    },
    NoAvailableData: {
        justifyContent:'center',
        alignContent: 'center',
        alignItems:'center',
        flex: 1,
        marginTop:20
    },
    TextLoginCenter: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    TextCenter: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default SalesTrend;