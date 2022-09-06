import React from "react";
import Navbar from "./Navbar";
import useApi from "./useApi";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ProgressedButton from "./ProgressedButton";

function GetComments({ getCommentNum, setGetCommentNum }) {
  const { apiCall, data, loading, success } = useApi(
    "get",
    "comments",
    getCommentNum
  );

  const handleSubmit = () => {
    apiCall();
  };

  const handleChange = (e) => {
    setGetCommentNum(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <h1>Thats the get comments page</h1>
      <ValidatorForm
        onSubmit={handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <TextValidator
          label="ID"
          onChange={handleChange}
          value={getCommentNum}
          validators={[
            "required",
            "isNumber",
            "minNumber: 1",
            "maxNumber: 500",
          ]}
          errorMessages={[
            "This field is required",
            "Please enter a valid number!",
            "Entered Number must be between 1 and 500",
            "Entered Number must be between 1 and 500",
          ]}
        />
        <ProgressedButton
          label={"GET COMMENT"}
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
              label={`EMAIL : ${data.data.email}`}
            />
          </div>
        )}
      </Divider>
      {data && (
        <div>
          <Typography sx={{ margin: "20px" }} variant="h6">
            <span style={{ fontWeight: "bold", color: "purple" }}>NAME : </span>
            {data.data.name}
          </Typography>
          <Typography sx={{ margin: "20px" }} variant="h6">
            <span style={{ fontWeight: "bold", color: "orange" }}>
              COMMENT :{" "}
            </span>
            {data.data.body}
          </Typography>
        </div>
      )}
    </div>
  );
}

export default GetComments;
