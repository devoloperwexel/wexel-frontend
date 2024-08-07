import { Box, Typography } from "@mui/material";
import React from "react";

type RowProps = {
  column1: string;
  column2: string;
  color: string;
};
const Row = ({ column1, column2, color }: RowProps) => {
  return (
    <Box
      display="flex"
      width="200px"
      justifyContent="space-between"
      color={color}
    >
      <Typography fontSize={13}>{column1}</Typography>
      <Typography fontSize={13}>{column2}</Typography>
    </Box>
  );
};
export default Row;
