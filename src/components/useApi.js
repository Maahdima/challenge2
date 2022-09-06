import React, { useState } from "react";
import axios from "axios";

//method : GET, POST, PUT, DELETE
//type : psots, comments
//id : the ID of each request to be made (pagination)
function useApi(method, type, id) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const apiCall = (title, body, userId, dataId) => {
    console.log("apiCall called");
    setLoading(true);
    axios({
      method: method,
      url: `https://jsonplaceholder.typicode.com/${type}/${id}`,
      data: (method === "post" || method === "put") && {
        id: method === "put" && dataId,
        title: title,
        body: body,
        userId: userId,
      },
      responseType: "json",
    }).then((response) => {
      console.log(response.status);
      console.log(response);
      setData(response);
      setLoading(false);
      setSuccess(true);
    });
  };
  return { apiCall, data, loading, success };
}

export default useApi;
