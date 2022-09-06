import React from "react";
import Navbar from "./Navbar";
import useApi from "./useApi";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ProgressedButton from "./ProgressedButton";

function DeletePosts({ deletePostNum, setDeletePostNum }) {
  const { apiCall, data, loading, success } = useApi(
    "delete",
    "posts",
    deletePostNum
  );

  const handleSubmit = () => {
    apiCall();
  };

  return (
    <div>
      <Navbar />
      <h1>Thats the delete posts page</h1>
      <ValidatorForm
        onSubmit={handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <TextValidator
          label="ID"
          onChange={(e) => setDeletePostNum(e.target.value)}
          value={deletePostNum}
          validators={["required", "isNumber", "isPositive"]}
          errorMessages={[
            "This field is required",
            "Please enter a valid number!",
            "Please enter a positive number",
          ]}
        />
        <ProgressedButton
          label={"DELETE"}
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
            <span style={{ fontWeight: "bold", color: "brown" }}>Deleted</span>
            {data.data.title}
          </Typography>
        </div>
      )}
    </div>
  );
}

export default DeletePosts;
