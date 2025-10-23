"use client";
import { formClass } from "@/app/components/scope/Form/style";

interface FormFieldProps {
  label: string;
  onChange?: (value: string) => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
  name: string;
}

export const FormField = ({
  label,
  onChange,
  type,
  placeholder,
  name,
}: FormFieldProps) => {
  return (
    <div>
      <label className={formClass.label}>{label}</label>
      <input
        className={formClass.input}
        name={name}
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
