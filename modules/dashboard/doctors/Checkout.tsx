"use client";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ContainedButton from "@/components/ui/ContainedButton";
import LoadingButton from "@/components/ui/LoadingButton";

type Props = {
  amount: number;
};
const Checkout = ({ amount }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <Box width="50%" paddingX={8} paddingBottom={6}>
      <Typography component="h2" fontWeight="600" fontSize={20}>
        Payment
      </Typography>
      <Divider
        flexItem
        sx={{ backgroundColor: "#000000", marginBottom: 4, marginTop: 1 }}
      />
      {clientSecret ? (
        <form onSubmit={handleFormSubmit}>
          <PaymentElement />
          {errorMessage && (
            <Typography color="red" marginTop={1.5}>
              {errorMessage}
            </Typography>
          )}
          <LoadingButton
            fullWidth
            type="submit"
            disabled={loading || !stripe}
            loading={loading}
            sx={{
              marginTop: 5,
              backgroundColor: "#000000",
              height: "48px",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#000000",
                opacity: 0.7,
              },
            }}
          >
            {loading ? "Processing" : "Confirm Payment"}
          </LoadingButton>
        </form>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Checkout;
