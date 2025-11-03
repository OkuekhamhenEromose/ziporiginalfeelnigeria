// hooks/useLogin.ts
import usePostData from "./usePostData";

interface LoginPayload {
  email: string;
  password: string;
}

// ✅ Use full backend login URL instead of a relative one
const useLogin = () =>
  usePostData<LoginPayload>(
    "/api/user/login/"
  );

export default useLogin;
