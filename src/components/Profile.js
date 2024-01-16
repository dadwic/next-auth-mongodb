"use client";

import * as React from "react";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Input from "@/components/Input";

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

export default function Profile() {
  const [loading, setLoading] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (form) => {
    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const { message } = await res.json();

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        enqueueSnackbar(res.status.toString(), {
          variant: "error",
        });
      }

      setLoading(false);
      enqueueSnackbar(message, {
        variant: "success",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h5">
          My profile
        </Typography>
        <Box
          noValidate
          component="form"
          onSubmit={methods.handleSubmit(onSubmit)}
          sx={{ mt: 1 }}
        >
          <Input
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Input
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={loading}
          >
            Update
          </LoadingButton>
        </Box>
      </Container>
    </FormProvider>
  );
}
