import { SignUpFormData, FieldErrors } from "@/types";

function validateFields(form: SignUpFormData) {
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const numberRegex = /[0-9]/;
  const isPasswordInvalid =
    form.password.length < 6 || !specialCharRegex.test(form.password) || !numberRegex.test(form.password);
  const errors: FieldErrors = {
    firstname: form.firstname.trim().length < 2,
    username: form.username.trim().length < 3,
    password: isPasswordInvalid,
  };

  return { errors, isPasswordInvalid };
}

export { validateFields };
