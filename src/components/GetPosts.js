import React from "react";
import Navbar from "./Navbar";
import useApi from "./useApi";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ProgressedButton from "./ProgressedButton";

function GetPosts({ getPostNum, setGetPostNum }) {
  //its the custom hook and data state, thats been called inside the component
  const { apiCall, data, loading, success } = useApi(
    "get",
    "posts",
    getPostNum
  );

  const handleSubmit = () => {
    apiCall();
  };

  const handleChange = (e) => {
    setGetPostNum(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <h1>Thats the get posts page</h1>
      <ValidatorForm
        onSubmit={handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <TextValidator
          label="ID"
          onChange={handleChange}
          value={getPostNum}
          validators={[
            "required",
            "isNumber",
            "minNumber: 1",
            "maxNumber: 100",
          ]}
          errorMessages={[
            "This field is required",
            "Please enter a valid number!",
            "Entered Number must be between 1 and 100",
            "Entered Number must be between 1 and 100",
          ]}
        />
        <ProgressedButton
          label={"GET POST"}
          loading={loading}
          success={success}
        />
      </ValidatorForm>
      <Divider>
        {data && (
          <div>
            <Chip
              sx={{ fontWeight: "bold", color: "brown", marginRight: "10px" }}
              label="Resonse From Api"
            />
            <Chip sx={{ fontWeight: "bold" }} label={`ID : ${data.data.id}`} />
            <Chip
              label={`STATUS : ${data.status}`}
              sx={{
                margin: "0px 10px",
                fontWeight: "bold",
                color: data.status === 200 ? "green" : "red",
              }}
            />
            <Chip
              sx={{ fontWeight: "bold" }}
              label={`USER ID : ${data.data.userId}`}
            />
          </div>
        )}
      </Divider>
      {data && (
        <div>
          <Typography sx={{ margin: "20px" }} variant="h6">
            <span style={{ fontWeight: "bold", color: "purple" }}>
              TITLE :{" "}
            </span>
            {data.data.title}
          </Typography>
          <Typography sx={{ margin: "20px" }} variant="h6">
            <span style={{ fontWeight: "bold", color: "orange" }}>POST : </span>
            {data.data.body}
          </Typography>
        </div>
      )}
    </div>
  );
}

export default GetPosts;
