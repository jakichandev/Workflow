"use client";
import { useState } from "react";
import { handleRegister, handleLogin } from "@/app/actions/handleForm";
import { useActionState } from "react";
import RegisterForm from "../scope/Form/RegisterForm";
import LoginForm from "../scope/Form/LoginForm";
import { FormState } from "../scope/Form/types";
import { formClass } from "../scope/Form/style";

const Form = ({
  alignment = "default",
}: {
  alignment?: "default" | "centered";
}) => {
  const [type, setType] = useState<"login" | "register">("login");

  const initialRegisterState: FormState = {
    email: "",
    password: "",
    confirmPassword: "",
    success: false,
    error: false,
  };

  const initialLoginState: FormState = {
    email: "",
    password: "",
    success: false,
    error: false,
  };

  const [state, formAction, isPending] = useActionState(
    handleRegister,
    initialRegisterState
  );

  const [stateLogin, formActionLogin, isPendingLogin] = useActionState(
    handleLogin,
    initialLoginState
  );

  return (
    <form
      action={type === "register" ? formAction : formActionLogin}
      className={`${formClass.main} ${
        alignment === "centered"
          ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          : ""
      }`}
    >
      {type === "register" ? (
        <RegisterForm state={state} isPending={isPending} setType={setType} />
      ) : (
        <LoginForm
          state={stateLogin}
          isPending={isPendingLogin}
          setType={setType}
        />
      )}
    </form>
  );
};

export default Form;
