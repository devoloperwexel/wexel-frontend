import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const StyledDiv = styled("div")({
  width: "40%",
  height: "100%",
  background: `url(/images/signup.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position:"relative"
});
const SignupBanner = () => {
  return (
    <StyledDiv>
      <div style={{ position: "absolute", bottom:100, left:80 }}>
        <Typography
          fontWeight={700}
          fontSize={40}
          color="#ffffff"
          letterSpacing={2}
          marginBottom={2}
        >
          Discover services <br />
          run your business.
        </Typography>
        <Typography fontWeight={400} fontSize={20} color="#ffffff">
          Wexelcode is the largest <br />
          MSK platform worldwide
        </Typography>
      </div>
    </StyledDiv>
  );
};

export default SignupBanner;
