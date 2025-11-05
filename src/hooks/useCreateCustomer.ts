// hooks/useCreateCustomer.ts
import usePostData from "./usePostData";

interface CreateCustomerPayload {
  full_name: string;
  phone: string;
  email: string;
  nationality: string;
  preferred_destination: string;
  password: string;
  password1: string;
  username: string;
  agreed_to_terms: boolean;
}

const useCreateCustomer = () =>
  usePostData<CreateCustomerPayload>("/api/user/register/");

export default useCreateCustomer;