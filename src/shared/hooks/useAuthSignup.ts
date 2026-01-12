import { useCallback, useState } from "react";
import { signupUser, type SignupPayload } from "../services/auth.service";
import { useAppToast } from "./useTost";
import type { ToastType } from "react-hot-toast";

export function useAuthSignup() {
  const toast = useAppToast();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const signup = useCallback(
    async (data: SignupPayload) => {
      let message: string = "";
      let type: Extract<ToastType, "success" | "error"> | null = null;
      try {
        setIsLoading(true);
        setIsError(false);
        setError("");
        setIsSuccess(false);
        const response = await signupUser(data);
        type = "success";
        message = response?.message ?? "SignUp successful";
        setIsSuccess(true);
      } catch (err: any) {
        setIsError(true);
        setError(err?.message || "Something went wrong");
        type = "error";
        message = err?.message ?? "SignUp failed ";
      } finally {
        setIsLoading(false);
        type && toast[type](message);
      }
    },
    [toast]
  );

  return { isError, isLoading, isSuccess, signup, error };
}
