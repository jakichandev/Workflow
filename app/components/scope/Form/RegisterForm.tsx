"use client";
import { formClass } from "@/app/components/scope/Form/style";
import { FormField } from "@/app/components/scope/Form/FormField";
import { FormProps } from "./types";
import { UserCheckIcon, SealWarningIcon } from "@phosphor-icons/react";

const RegisterForm = ({state, isPending, setType}: FormProps) => {
  return (
    <>
      <h2 className={formClass.h}>Registrati</h2>
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
      <FormField
        label="Confirm Password"
        type="password"
        placeholder="Conferma la tua password"
        name="confirmPassword"
      />
      <button className={formClass.button} type="submit" disabled={isPending}>
        Register
      </button>
      <div>
        <span className={formClass.span}>
          Hai già un account?{" "}
          <span
            className="cursor-pointer font-bold"
            onClick={() => setType("login")}
          >
            Accedi
          </span>
        </span>
      </div>
      <div className="text-theme-galaxy-600 dark:text-theme-galaxy-100">
        {state.error && (
          <div className="flex items-center gap-4">
            <SealWarningIcon size={16} />

            <p>Si è verificato un errore durante la registrazione.</p>
          </div>
        )}
        {state.success && (
          <div className="flex items-center gap-3">
            <UserCheckIcon size={16} />
            <p>Registrazione avvenuta con successo!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterForm;
