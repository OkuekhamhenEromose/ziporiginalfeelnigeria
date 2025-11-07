// hooks/useLogin.ts
import usePostData from "./usePostData";

interface LoginPayload {
  email: string;
  password: string;
}

const useLogin = () =>
  usePostData<LoginPayload>("/api/user/login/");

export default useLogin;