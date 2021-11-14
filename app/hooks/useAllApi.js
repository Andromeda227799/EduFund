import useApi from "./useApi";
import { useState } from "react";

const useAllApi = (getData, endpoint) => {
    const [data, setdata] = useState([]);
    const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
    const request=()=>{
  //  = useApi(funds.getFund,["/100350","/100121","/120248","/141305","/145357"]);
  async () => {
    const { data: data1, request: loadListings1 } = useApi(
      getData(endpoint[0])
    );
    loadListings1();
    setdata(prev=>[...prev,data1]);
  };
  async () => {
    const { data: data2, request: loadListings2 } = useApi(
      getData(endpoint[1])
    );
    loadListings2();
    data.push(data2);
  };
  async () => {
    const { data: data3, request: loadListings3 } = useApi(
      getData(endpoint[2])
    );
    loadListings3();
    data.push(data3);
  };
  async () => {
    const { data: data4, request: loadListings4 } = useApi(
      getData(endpoint[3])
    );
    loadListings4();
    data.push(data4);
  };
  async () => {
    const { data: data5, request: loadListings5 } = useApi(
      getData(endpoint[4])
    );
    loadListings5();
    data.push(data5);
  };
}
  return { request, data, error, loading };
};
export default useAllApi;
