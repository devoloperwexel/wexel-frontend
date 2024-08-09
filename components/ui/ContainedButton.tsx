import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@mui/material";

interface ContainedButtonProps extends ButtonProps {
  children?: ReactNode;
  backgroundColor?: string;
}

const ContainedButton: React.FC<ContainedButtonProps> = ({
  children,
  backgroundColor = "#A51008",
  ...props
}) => {
  return (
    <Button
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        backgroundColor,
        "&:hover": {
          backgroundColor,
          opacity: 0.7,
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ContainedButton;
