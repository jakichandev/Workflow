"use client";

import { formClass } from "@/app/components/scope/Form/style";
import { FormField } from "@/app/components/scope/Form/FormField";
import { FormProps } from "./types";
import { UserCheckIcon, SealWarningIcon } from "@phosphor-icons/react";


const LoginForm = ({state, isPending, setType}: FormProps) => {
  return (
    <>
      <h2 className={formClass.h}>Accedi</h2>
      <FormField
        label="Email"
        type="email"
        placeholder="Inserisci la tua email"
        name="email"
      />
      <FormField
        label="Password"
        type="password"
        placeholder="Inserisci la tua password"
        name="password"
      />
      <button className={formClass.button} type="submit" disabled={isPending}>
        Login
      </button>
      <div>
        <span className={formClass.span}>
          Non hai un account?{" "}
          <span
            className="cursor-pointer font-bold"
            onClick={() => setType("register")}
          >
            Registrati
          </span>
        </span>
      </div>
      <div className="text-theme-galaxy-600 dark:text-theme-galaxy-100">
        {state.error && (
          <div className="flex items-center gap-4">
            <SealWarningIcon size={16} />

            <p>Si è verificato un errore durante il login.</p>
          </div>
        )}
        {state.success && (
          <div className="flex items-center">
            <UserCheckIcon size={16} />
            <p>Login avvenuto con successo!</p>
          </div>
        )}
      </div>
    </>
  );
};



export default LoginForm;
