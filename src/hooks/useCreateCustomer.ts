// hooks/useCreateCustomer.ts
import usePostData from "./usePostData";

interface CreateCustomerPayload {
  name: string;
  phone_number: string;
  email: string;
  nationality: string;
  preferred_destination: string;
  password: string;
  travel_date: string;
  username: string;
}

const useCreateCustomer = () =>
  usePostData<CreateCustomerPayload>(
    "api/user/register/" // ✅ updated to correct backend endpoint
  );

export default useCreateCustomer;
