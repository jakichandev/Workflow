export interface FormState {
  email: string;
  password: string;
  confirmPassword?: string;
  success: boolean;
  error: boolean;
}

export interface FormProps {
  state: FormState;
  isPending: boolean;
  setType: (type: "login" | "register") => void;
}
