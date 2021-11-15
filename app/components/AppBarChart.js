import React from 'react'
import { View, Text ,useWindowDimensions} from 'react-native'

import {
    BarChart,
  } from "react-native-chart-kit";

const AppBarChart = ({data,labels}) => {
  data.reverse();
  labels.reverse();
    
    const{height,width}=useWindowDimensions();
    return (
        <View>
  {/* <Text>Bezier Line Chart</Text> */}
  <BarChart
    data={{
      labels:labels,
      datasets: [
        {
          data:data
        }
      ]
    }}
    width={width-20} // from react-native
    height={220}
    yAxisLabel="₹"
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#fc1303",
      backgroundGradientFrom: "#999999",
      backgroundGradientTo: "#dedede",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 20, 20, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 20, 20, ${opacity})`,
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

export default AppBarChart;
