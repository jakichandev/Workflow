"use server";

export async function handleRegister(formData: FormData) {
  console.log("Form submitted:", formData);
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (!email || !password || !confirmPassword) {
   console.log("Missing fields in the form data.");
    return;
  }

  if (password !== confirmPassword) {
    console.log("Passwords do not match.");
    return;
  }

  console.log("Registration successful:", { email, password });
  // Proceed with registration logic
}




export async function handleLogin(formData: FormData) {
  console.log("Form submitted:", formData);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    console.log("Missing fields in the form data.");
    return;
  }

  console.log("Login successful:", { email, password });
  // Proceed with login logic
}