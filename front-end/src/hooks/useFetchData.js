import React, { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          Array.isArray(data) ? setData(data) : setData([data]);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setError(e);
          setIsLoading(false);
        });
    };
    getData();
  }, [url]);

  return [data, isLoading, setData, error];
};

export default useFetchData;
