import { SignUpFormData, SignInFormData } from "@/types";
import { apiUrl } from "@/constants/modelstyles";
async function signup(userInfo: SignUpFormData) {
  try {
    const response = await fetch(`${apiUrl}/users/signup`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
async function signin(userInfo: SignInFormData) {
  try {
    const response = await fetch(`${apiUrl}/users/signin`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { signup, signin };
