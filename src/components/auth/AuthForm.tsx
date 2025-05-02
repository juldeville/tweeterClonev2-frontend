"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import SignUpModal from "./Modals/SignUpModal";
import { useModal } from "@/hooks/useModal";
import SignInModal from "./Modals/SignInModal";
export default function AuthForm() {
  const signUpModal = useModal();
  const signInModal = useModal();
  return (
    <div className="bg-base flex-1 min-h-screen p-14 flex flex-col gap-9 items-start">
      <FontAwesomeIcon icon={faTwitter} className="text-8xl rotate-180" />
      <div className="text-8xl font-bold w-3/4 leading-tight  ">See whats happening</div>
      <div className="flex flex-col gap-4">
        <div className="text-4xl font-bold mb-4">Join Hackatweet today.</div>
        <button
          className="btn btn-active btn-primary btn-xl px-18 "
          onClick={() => signUpModal.openModal()}
        >
          Sign up
        </button>
        <SignUpModal {...signUpModal} />
        <div className="text-2xl font-bold">Already have an account ?</div>
        <button
          className="btn btn-outline btn-primary btn-xl px-18"
          onClick={() => signInModal.openModal()}
        >
          Sign in
        </button>
        <SignInModal {...signInModal} />
      </div>
    </div>
  );
}
