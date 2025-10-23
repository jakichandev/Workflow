"use server";

import { FormState } from "@/app/components/scope/Form/types";


/* Registration Logic */
export async function handleRegister(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  console.log("Form submitted:", formData);
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!email) {
    console.log("Missing fields in the form data.");
    return { ...prevState, success: false, error: true };
  }

  if (password !== confirmPassword) {
    console.log("Passwords do not match.");
    return { ...prevState, success: false, error: true };
  }

  console.log("Registration successful:", { email, password });
  // Proceed with registration logic

  return { email, password, confirmPassword, success: true, error: false };
}



/* Login Logic */
export async function handleLogin(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  console.log("Form submitted:", formData);
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    console.log("Missing fields in the form data.");
    return { ...prevState, success: false, error: true };
  }

  console.log("Login successful:", { email, password });
  // Proceed with login logic
  return { email, password, success: true, error: false };
}
