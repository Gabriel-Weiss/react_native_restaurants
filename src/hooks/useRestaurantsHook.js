import axios from "../api/axios";
import { useState } from "react";

export default () => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const getRestaurants = async (term) => {
    setResult({ data: null, loading: true, error: null });

    try {
      const response = await axios.get("/search", {
        params: {
          limit: 15,
          term,
          location: "Toronto",
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
