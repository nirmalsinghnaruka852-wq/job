import { useState, useCallback } from "react";
import { loginUser } from "../services/auth.service";
import type { LoginPayload } from "./../services/auth.service";
import { useAppToast } from "./useTost";
import type { ToastType } from "react-hot-toast";

export function useAuthLogin() {
  const toast = useAppToast();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const login = useCallback(
    async (data: LoginPayload) => {
      let type: Extract<ToastType, "error" | "success"> | null = null;
      let message: string = "";

      try {
        setIsLoading(true);
        setIsError(false);
        setError("");
        setIsSuccess(false);

        const response = await loginUser(data);
        setIsSuccess(true);
        type = "success";
        message = response.message ?? "Login successful";
      } catch (err: any) {
        setIsError(true);
        setError(err?.message || "Something went wrong");
        type = "error";
        message = err.message ?? "Login failed";
      } finally {
        setIsLoading(false);
        type && toast[type](message);
      }
    },
    [toast]
  );

  return {
    isLoading,
    isError,
    error,
    isSuccess,
    login,
  };
}
