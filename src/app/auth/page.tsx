import React from "react";
import AuthHero from "@/components/auth/AuthHero";
import AuthForm from "@/components/auth/AuthForm";
import ThemeWrapper from "@/components/ui/ThemeWrapper";

export default function AuthPage() {
  return (
    <ThemeWrapper>
      <div className=" w-full flex bg-base-300">
        <AuthHero />
        <AuthForm />
      </div>
    </ThemeWrapper>
  );
}
