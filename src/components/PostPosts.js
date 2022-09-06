import React from "react";
import Navbar from "./Navbar";
import useApi from "./useApi";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ProgressedButton from "./ProgressedButton";

function PostPosts({ title, setTitle, body, setBody, userId, setUserId }) {
  const { apiCall, data, loading, success } = useApi("post", "posts", "");

  const handleSubmit = () => {
    apiCall(title, body, userId);
  };

  return (
    <div>
      <Navbar />
      <h1>Thats the post posts page</h1>
      <ValidatorForm
        onSubmit={handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <TextValidator
          label="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          validators={["required"]}
          errorMessages={["This field is required"]}
        />
        <TextValidator
          style={{ margin: "15px 0px" }}
          label="Body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          validators={["required"]}
          errorMessages={["This field is required"]}
        />
        <TextValidator
          label="User ID"
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
          validators={["required", "isNumber", "isPositive"]}
          errorMessages={[
            "This field is required",
            "Please enter a valid number!",
            "Please enter a positive number",
          ]}
        />
        <ProgressedButton label={"POST"} loading={loading} success={success} />
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
                color: data.status === 201 ? "green" : "red",
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

export default PostPosts;
