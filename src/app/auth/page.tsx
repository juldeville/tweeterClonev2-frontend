import React from "react";
import AuthHero from "@/components/auth/AuthHero";
import AuthForm from "@/components/auth/AuthForm";

export default function AuthPage() {
  return (
    <div className=" w-full flex bg-base-300">
      <AuthHero />
      <AuthForm />
    </div>
  );
}
