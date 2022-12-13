import axios from "../api/axios";
import { useState } from "react";
import useExpoLocationHook from "./useExpoLocationHook";

export default () => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const [{ latitude, longitude }] = useExpoLocationHook();
  console.log(latitude + "-" + longitude);

  const getRestaurants = async (term) => {
    setResult({ data: null, loading: true, error: null });

    try {
      const response = await axios.get("/search", {
        params: {
          term,
          latitude,
          longitude,
          limit: 15,
        },
      });
      setResult({
        data: response.data.businesses,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResult({ data: null, loading: false, error: "Server error!!!" });
    }
  };

  return [result, getRestaurants];
};
