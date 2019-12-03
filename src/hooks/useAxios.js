import React from "react";
import _ from "lodash";
import axios from "axios";

function useAxios(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!url) {
      return;
    }

    (async function() {
      try {
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.toString());
        setLoading(false);
      }
    })();
  }, [url]);

  return [loading, error, data];
}
