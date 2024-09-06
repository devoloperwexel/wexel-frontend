"use client";

import GoogleSvg from "@/components/icons/GoogleSvg";
import AppleIcon from "@mui/icons-material/Apple";
import {
  Box,
  Button,
  Divider,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import MicrosoftSvg from "@/components/icons/MicrosoftSvg";
import Link from "next/link";
import PasswordFelid from "@/components/ui/PasswordField";
import ContainedButton from "@/components/ui/ContainedButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  email: yup.string().email("Enter valid email").required("Enter your email"),
  password: yup.string().required("Enter your password"),
});

const SigninPageView = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, touched, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        const response = await signIn("credentials", {
          username: values.email,
          password: values.password,
          redirect: false,
        });
        //
        if (response?.ok) {
          router.push("/dashboard");
          return;
        } else if (response?.status === 401) {
          let message = "Email or password is incorrect";
          if (
            response.error === "User is not confirmed."
          ) {
            message = `Email not verified. A verification email has been sent to '${values.email}'. Please verify it before logging in!`;
          }
          toast.error(message);
          return;
        }
        //
        toast.error("Something went to wrong!");
        setSubmitting(false);
        resetForm({});
      },
    });
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        paddingX={16}
        alignItems="center"
        borderBottom="solid 1.5px #B9CAD0"
        paddingY={1.6}
      >
        <Link href="/">
          <Image src={`/images/logo.png`} alt="logo" width={90} height={56} />
        </Link>

        <div>
          <Button sx={{ textTransform: "none", color: "#000000" }}>Help</Button>
          <ContainedButton onClick={() => router.push("/signup")}>
            Register
          </ContainedButton>
        </div>
      </Box>
      <Box
        width="36%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingTop={12}
      >
        <Typography component="h5" fontSize="30px" fontWeight="700">
          Login to your account
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
          />
          <Box
            width="100%"
            display="flex"
            justifyContent="end"
            paddingRight={0.2}
            marginY={1.8}
          >
            <Link href="#">Forgot Password?</Link>
          </Box>
          <ContainedButton
            fullWidth
            type="submit"
            disabled={isSubmitting}
            sx={{ height: "42px", fontWeight: 600 }}
          >
            Login and Continue
          </ContainedButton>
        </form>

        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          paddingRight={0.2}
          marginTop={1.8}
        >
          <div style={{ color: "#6C6C6C" }}>Don&apos;t have an account? </div>
          <Link
            href="/signup"
            style={{ color: "#A51008", textDecoration: "underline" }}
          >
            Sign Up Now
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default SigninPageView;
