import React from "react";
import axios from "axios";

const useAxios = url => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    axios
      .get(url)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.toString());
        setLoading(false);
      });
  }, [url]);

  return [loading, error, data];
};

export default useAxios;
