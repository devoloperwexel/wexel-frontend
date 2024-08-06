import React, { ReactNode } from "react";
import { Button, ButtonProps } from "@mui/material";

interface ContainedButtonProps extends ButtonProps {
  children?: ReactNode;
}

const ContainedButton: React.FC<ContainedButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Button
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        bgcolor: "#A51008",
        "&:hover": {
          backgroundColor: "#c9342e",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ContainedButton;
