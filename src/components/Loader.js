import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { TailSpin } from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent="center"
      alignItems={"center"}
      width="100%"
    >
        <TailSpin color='gray' />
    </Stack>
  );
};

export default LoaderComponent;
