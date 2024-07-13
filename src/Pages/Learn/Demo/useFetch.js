import { useState, useEffect } from "react";

const useFetch = (url) => {
  const myserverURL = "https://jsonplaceholder.typicode.com/";
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(myserverURL + url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;