"use client";

import GoogleSvg from "@/components/icons/GoogleSvg";
import AppleIcon from "@mui/icons-material/Apple";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import MicrosoftSvg from "@/components/icons/MicrosoftSvg";
import Link from "next/link";
import PasswordFelid from "@/components/ui/PasswordField";
import ContainedButton from "@/components/ui/ContainedButton";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useFormik } from "formik";
import SignupBanner from "./SignupBanner";
import axios from "axios";
import ENVIRONMENT from "@/config/environment";

const validationSchema = yup.object({
  name: yup.string().required("Enter your name"),
  email: yup.string().email("Enter valid email").required("Enter your email"),
  password: yup.string().required("Enter your password"),

  confirmPassword: yup
    .string()
    .required("Re-type your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const SignupPageView = () => {
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAgree: false,
  };

  const { values, touched, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        const { isAgree, email, password, name } = values;
        if (isAgree) {
          try {
            await axios.post(`${ENVIRONMENT.BASE_URL}/auth/signup`, {
              email,
              password,
              name,
            });
            router.push("/signin");
          } catch (error) {
            resetForm({});
          }
        }
        setSubmitting(false);
      },
    });
  return (
    <Box height="100vh" display="flex" alignItems="center">
      <SignupBanner />
      <div
        style={{
          height: "100%",
          width: "60%",
          paddingTop: "16px",
          paddingLeft: "140px",
        }}
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="end"
          paddingX={16}
          //paddingY={1.6}
        >
          <Button sx={{ textTransform: "none", color: "#000000" }}>Help</Button>
          <ContainedButton onClick={() => router.push("/signin")}>
            Login
          </ContainedButton>
        </Box>
        <Box
          width="60%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingTop={12}
        >
          <Typography component="h5" fontSize="30px" fontWeight="700">
            Sign Up on WexelCode
          </Typography>
          <Box display="flex" gap={1.5} marginTop={3} justifyContent="center">
            <Tooltip title="Login with Google">
              <Button
                variant="outlined"
                sx={{ width: "40px", height: "50px", borderColor: "grey.500" }}
              >
                <GoogleSvg />
              </Button>
            </Tooltip>
            <Tooltip title="Login with Apple">
              <Button
                variant="outlined"
                sx={{ width: "40px", height: "50px", borderColor: "grey.500" }}
              >
                <AppleIcon sx={{ color: "#555555", fontSize: "32px" }} />
              </Button>
            </Tooltip>
            <Tooltip title="Login with Microsoft">
              <Button
                variant="outlined"
                sx={{ width: "40px", height: "50px", borderColor: "grey.500" }}
              >
                <MicrosoftSvg />
              </Button>
            </Tooltip>
          </Box>
          <Divider textAlign="center" flexItem sx={{ marginY: 2.5 }}>
            OR
          </Divider>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              fullWidth
              onChange={handleChange}
              name="name"
              label="Name"
              variant="outlined"
              type="text"
              value={values.name}
              helperText={touched.name && errors.name}
              error={touched.name && Boolean(errors.name)}
              sx={{ marginBottom: 3 }}
            />
            <TextField
              fullWidth
              onChange={handleChange}
              name="email"
              label="Email"
              variant="outlined"
              type="text"
              value={values.email}
              helperText={touched.email && errors.email}
              error={touched.email && Boolean(errors.email)}
              sx={{ marginBottom: 3 }}
            />
            <PasswordFelid
              onChange={handleChange}
              name="password"
              value={values.password}
              helperText={touched.password && errors.password}
              error={touched.password && Boolean(errors.password)}
              sx={{ marginBottom: 3 }}
            />
            <PasswordFelid
              onChange={handleChange}
              name="confirmPassword"
              value={values.confirmPassword}
              helperText={touched.confirmPassword && errors.confirmPassword}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            />
            <FormControlLabel
              label={
                <Box display="flex" fontSize={14}>
                  <div>I agree to the Wexelcode</div>
                  <Link href={"#"} style={{ textDecoration: "underline" }}>
                     Terms of Service 
                  </Link>
                  and 
                  <Link href={"#"} style={{ textDecoration: "underline" }}>
                    Privacy Policy
                  </Link>
                </Box>
              }
              control={
                <Checkbox
                  name="isAgree"
                  checked={values.isAgree}
                  size="small"
                />
              }
              onChange={handleChange}
              sx={{ marginY: 1.8 }}
            />

            <ContainedButton
              fullWidth
              type="submit"
              disabled={isSubmitting}
              sx={{ height: "42px", fontWeight: 600 }}
            >
              Sign Up
            </ContainedButton>
          </form>

          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            paddingRight={0.2}
            marginTop={1.8}
          >
            <div style={{ color: "#6C6C6C" }}>Already have an account? </div>
            <Link
              href="/signin"
              style={{ color: "#A51008", textDecoration: "underline" }}
            >
              Login here
            </Link>
          </Box>
        </Box>
      </div>
    </Box>
  );
};
export default SignupPageView;
