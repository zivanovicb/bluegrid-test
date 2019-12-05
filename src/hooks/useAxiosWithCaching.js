import React from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

const useAxiosWithCaching = (url, key) => {
  const [data, setData] = useLocalStorage(key, null);
  const [loading, setLoading] = React.useState(data === null ? true : false);
  const [error, setError] = React.useState(null);

  const memoizedSetData = React.useCallback(setData, []);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    async function fetch() {
      try {
        const res = await axios.get(url);
        memoizedSetData(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.toString());
        setLoading(false);
      }
    }

    fetch();
  }, [url, memoizedSetData]);

  return [loading, error, data];
};

export default useAxiosWithCaching;
