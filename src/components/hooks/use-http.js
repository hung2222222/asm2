import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requesCofig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requesCofig.url, {
        method: requesCofig.method ? requesCofig.method : "GET",
        Headers: requesCofig.Headers ? requesCofig.Headers : {},
        body: JSON.stringify(requesCofig.body)
          ? JSON.stringify(requesCofig.body)
          : null,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }
      //chuyển đỏi file json
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    //cập nhật lại
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
