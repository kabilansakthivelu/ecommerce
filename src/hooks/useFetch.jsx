import { useState, useEffect } from "react";

export const useFetch = (url, cb) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        const updatedResults = cb(result);
        setData(updatedResults);
        setError('');
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchData();
  }, [url]);

  return { data, loading, error };
};
