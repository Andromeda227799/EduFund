import React from 'react'
import { View, Text ,useWindowDimensions} from 'react-native'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

const AppChart = ({data,labels}) => {
  // console.log(data);
    const{width}=useWindowDimensions();
    return (
        <View>
  {/* <Text>Bezier Line Chart</Text> */}
  <ProgressChart
    data={{
      labels:labels,
      
          data:data
        
    }}
    width={width-20} // from react-native
    height={220}
    strokeWidth={16}
  radius={32}
  hideLegend={false}
    // yAxisLabel="₹"
    // yAxisSuffix=""
    // yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#0053e2",
      backgroundGradientFrom: "#0053e2",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
    )
}

export default AppChart
