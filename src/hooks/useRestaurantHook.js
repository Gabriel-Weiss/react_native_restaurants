import axios from "../api/axios";
import { useState } from "react";

export default () => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const getRestaurant = async (id) => {
    setResult({ data: null, loading: true, error: null });

    try {
      const response = await axios.get(`/${id}`, {});

      setResult({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);
      setResult({ data: null, loading: false, error: "Server error!!!" });
    }
  };

  return [result, getRestaurant];
};
