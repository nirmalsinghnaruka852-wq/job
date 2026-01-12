import { requestWithTimeout } from "./../utils/axios/axiosRequest";
export type SignupPayload = {
  name: string;
  email: string;
  password: string;
};

export type LoginPayload = Omit<SignupPayload, "name">;


export const loginUser = (data: LoginPayload) => {
  return requestWithTimeout(
    {
      url: "/auth/login",
      method: "POST",
      data,
    },
    1000
  );
};
export const signupUser = (data: SignupPayload) => {
  return requestWithTimeout(
    {
      url: "/auth/signup",
      method: "POST",
      data,
    },
    1000
  );
};
