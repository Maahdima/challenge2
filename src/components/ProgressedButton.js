import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";

function ProgressedButton({ label, loading, success }) {
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  return (
    <div>
      <Box sx={{ m: 1, position: "relative", margin: "20px" }}>
        <Button
          type="submit"
          variant="contained"
          sx={buttonSx}
          disabled={loading}
        >
          {label}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </div>
  );
}

export default ProgressedButton;
