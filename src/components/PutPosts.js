import React from "react";
import Navbar from "./Navbar";
import useApi from "./useApi";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ProgressedButton from "./ProgressedButton";

function PutPosts({
  putTitle,
  setPutTitle,
  putBody,
  setPutBody,
  putUserId,
  setPutUserId,
  putPostNum,
  setPutPostNum,
}) {
  const { apiCall, data, loading, success } = useApi(
    "put",
    "posts",
    putPostNum
  );

  const handleSubmit = () => {
    apiCall(putTitle, putBody, putUserId, putPostNum);
  };

  return (
    <div>
      <Navbar />
      <h1>Thats the put posts page</h1>
      <ValidatorForm
        onSubmit={handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <TextValidator
          style={{ margin: "15px 0px" }}
          label="ID"
          onChange={(e) => setPutPostNum(e.target.value)}
          value={putPostNum}
          validators={["required"]}
          errorMessages={["This field is required"]}
        />
        <TextValidator
          label="Title"
          onChange={(e) => setPutTitle(e.target.value)}
          value={putTitle}
          validators={["required"]}
          errorMessages={["This field is required"]}
        />
        <TextValidator
          style={{ margin: "15px 0px" }}
          label="Body"
          onChange={(e) => setPutBody(e.target.value)}
          value={putBody}
          validators={["required"]}
          errorMessages={["This field is required"]}
        />
        <TextValidator
          label="User ID"
          onChange={(e) => setPutUserId(e.target.value)}
          value={putUserId}
          validators={["required", "isNumber", "isPositive"]}
          errorMessages={[
            "This field is required",
            "Please enter a valid number!",
            "Please enter a positive number",
          ]}
        />
        <ProgressedButton label={"PUT"} loading={loading} success={success} />
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
            <span style={{ fontWeight: "bold", color: "orange" }}>BODY : </span>
            {data.data.body}
          </Typography>
          <Typography sx={{ margin: "20px" }} variant="h6">
            <span style={{ fontWeight: "bold", color: "brown" }}>
              USER ID :{" "}
            </span>
            {data.data.userId}
          </Typography>
        </div>
      )}
    </div>
  );
}

export default PutPosts;
