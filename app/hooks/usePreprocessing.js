import { useState } from "react";
const usePreProcessing = (data) => {
  const years = [];
  const values = [];
  const meta=data["meta"];
  
  // const [loading,setLoading]=useState(false);

  let dataArr = data["data"];
  let currYear = dataArr[0].date.substring(6);
  let currYearVal = 0;
  let count = 0;

  years.push(currYear);
  // console.log(years);
  dataArr.forEach((element) => {
    if (element.date.substring(6) != currYear) {
      //  console.log(element,currYearVal,count);
      // console.log("currYearVal-->",count);

      values.push(currYearVal / count);
      currYear = element.date.substring(6);
      years.push(currYear);
      currYearVal = Number(element.nav);
      count = 1;
    } else {
      // console.log(element);
      currYearVal += Number(element.nav);
      count += 1;
    }
  });

  return { years, values,meta};
};
export default usePreProcessing;
