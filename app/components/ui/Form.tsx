import { useState } from "react";
import { handleRegister, handleLogin } from "@/app/actions/handleForm";

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
  main: "w-[22rem] sm:w-[32rem] dark:bg-theme-moon-700 bg-theme-moon-100 dark:text-theme-galaxy-50 text-theme-galaxy-900 p-6 rounded-lg shadow-md space-y-4",
  h: "text-big font-bold mb-4 text-theme-galaxy-500 dark:text-theme-moon-200",
  input:
    "dark:bg-theme-moon-800 bg-theme-moon-200 border-theme-galaxy-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-theme-galaxy-200 focus:border-transparent mb-2",
  button:
    "bg-theme-galaxy-500 dark:bg-theme-galaxy-400 hover:bg-theme-galaxy-600 text-white p-2 rounded-md w-full font-semibold transition-colors duration-300 cursor-pointer",
  label:
    "font-semibold text-theme-galaxy-500 dark:text-theme-moon-200 mb-1 block text-small",
  span: "text-theme-moon-500 dark:text-theme-moon-100",
};

const FormField = ({ label, onChange, type, placeholder }: FormFieldProps) => {
  return (
    <div>
      <label className={formClass.label}>{label}</label>
      <input
        className={formClass.input}
        name=""
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

const Form = ({
  alignment = "default",
}: {
  alignment?: "default" | "centered";
}) => {
 
 const [type, setType] = useState<"login" | "register">("login");

  if (type === "register") {
    return (
      <form
        action={handleRegister}
        className={`${formClass.main} ${
          alignment === "centered"
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            : ""
        }`}
      >
        <h2 className={formClass.h}>Registrati</h2>
        <FormField
          label="Email"
          type="email"
          placeholder="Inserisci la tua email"
        />
        <FormField
          label="Password"
          type="password"
          placeholder="Inserisci la tua password"
        />
        <FormField
          label="Confirm Password"
          type="password"
          placeholder="Conferma la tua password"
        />
        <button className={formClass.button} type="submit">
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
      </form>
    );
  }

  return (
    <form
      action={handleLogin}
      className={`${formClass.main} ${
        alignment === "centered"
          ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          : ""
      }`}
    >
      <h2 className={formClass.h}>Accedi</h2>
      <FormField
        label="Email"
        type="email"
        placeholder="Inserisci la tua email"
      />
      <FormField
        label="Password"
        type="password"
        placeholder="Inserisci la tua password"
      />
      <button className={formClass.button} type="submit">
        Login
      </button>
      <div>
        <span className={formClass.span}>
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
