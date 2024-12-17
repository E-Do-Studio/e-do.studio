import { useEffect, useState } from "react";

const useGalerieData = (category = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `${process.env.REACT_APP_STRAPI_URL}/api/galeries?populate=*`;
        if (category && category !== "all") {
          url += `&filters[category][$eq]=${category}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        if (!json.data) {
          throw new Error("No data received from API");
        }

        setData(json.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return { data, loading, error };
};

export default useGalerieData;
