import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}${opts}`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false)
      }
    }
    fetchData(url, opts);

    return () => setData(null);
  }, [url, opts]);

  return { data, error, loading };
}