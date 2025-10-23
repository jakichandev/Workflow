"use client";
import { useState } from "react";

interface FormData {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface FormFieldProps {
  label: string;
  onChange?: (value: string) => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
}

/* interface FormProps {
  onSubmit?: (data: FormData) => void;
} */
const formClass = {
  main: "w-[28rem] dark:bg-theme-moon-700 bg-theme-moon-100 dark:text-theme-galaxy-50 text-theme-galaxy-900 p-6 rounded-lg shadow-md space-y-4",
  h: "text-2xl font-bold mb-4",
  input:
    "dark:bg-theme-moon-800 bg-theme-moon-200 border-theme-galaxy-300 p-2 rounded-md w-full",
  button:
    "bg-theme-galaxy-900 dark:bg-theme-galaxy-500 text-white p-2 rounded-md w-full",
  label:
    "font-semibold text-theme-galaxy-900 dark:text-theme-galaxy-100 mb-1 block",
};

const FormField = ({ label, onChange, type, placeholder }: FormFieldProps) => {
  return (
    <div>
      <label className={formClass.label} htmlFor="">
        {label}
      </label>
      <input
        className={formClass.input}
        name=""
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

const Form = ({
  alignment = "default",
}: {
  alignment?: "default" | "centered";
}) => {
  const [formData, setFormData] = useState<FormData>({});
  const [type, setType] = useState<"login" | "register">("login");

  const login = (data: FormData) => {
    console.log("login", data);
  };

  const register = (data: FormData) => {
    console.log("register", data);
  };

  if (type === "register") {
    return (
      <form
        className={`${formClass.main} ${
          alignment === "centered"
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            : ""
        }`}
        onSubmit={(e) => {
          e.preventDefault();
          register(formData);
        }}
      >
        <h2 className={formClass.h}>Registrati</h2>
        <FormField
          label="Email"
          type="email"
          onChange={(value) => setFormData({ ...formData, email: value })}
          placeholder="Inserisci la tua email"
        />
        <FormField
          label="Password"
          type="password"
          onChange={(value) => setFormData({ ...formData, password: value })}
          placeholder="Inserisci la tua password"
        />
        <FormField
          label="Confirm Password"
          type="password"
          onChange={(value) =>
            setFormData({ ...formData, confirmPassword: value })
          }
        />
        <button className={formClass.button} type="submit">
          Register
        </button>
        <div>
          <span>
            Hai già un account?{" "}
            <span
              className="cursor-pointer font-bold"
              onClick={() => setType("login")}
            >
              Accedi
            </span>
          </span>
        </div>
      </form>
    );
  }

  return (
    <form
      className={`${formClass.main} ${
        alignment === "centered"
          ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          : ""
      }`}
      onSubmit={(e) => {
        e.preventDefault();
        login(formData);
      }}
    >
      <h2 className={formClass.h}>Accedi</h2>
      <FormField
        label="Email"
        type="email"
        onChange={(value) => setFormData({ ...formData, email: value })}
        placeholder="Inserisci la tua email"
      />
      <FormField
        label="Password"
        type="password"
        onChange={(value) => setFormData({ ...formData, password: value })}
        placeholder="Inserisci la tua password"
      />
      <button className={formClass.button} type="submit">
        Login
      </button>
      <div>
        <span>
          Non hai ancora un account?{" "}
          <span
            className="cursor-pointer font-bold"
            onClick={() => setType("register")}
          >
            Registrati
          </span>
        </span>
      </div>
    </form>
  );
};

export default Form;
