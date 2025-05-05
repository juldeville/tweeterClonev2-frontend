"use client";
import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Modal from "react-modal";
import { ModalProps } from "@/types";
import { customStyles } from "@/constants/modelstyles";
import { useRouter } from "next/navigation";
import { SignInFormData } from "@/types";
import { signin } from "@/services/auth";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { authenticate } from "@/reducers/user";

export default function SignInModal({ modalIsOpen, closeModal }: ModalProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userForm, setUserForm] = useState<SignInFormData>({
    username: "",
    password: "",
  });
  function updateUserData<K extends keyof SignInFormData>(field: K, value: SignInFormData[K]) {
    setUserForm({ ...userForm, [field]: value });
  }
  async function handleSubmit() {
    try {
      const apiData = await signin(userForm);
      if (apiData.result) {
        dispatch(authenticate(apiData.user));
        router.push("/");
      } else {
        console.log("auth failed, apiData: ", apiData);
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="flex justify-center  flex-col items-center gap-20 p-10 py-24 ">
          <div className="flex flex-col gap-4">
            <FontAwesomeIcon icon={faTwitter} className="text-8xl rotate-180" />
            <div className="font-bold text-3xl">Connect to Hackatweet</div>
          </div>

          <div className="flex flex-col justiy-center items-center w-full gap-8">
            <input
              type="text"
              placeholder="Username"
              className="input w-5/12"
              onChange={(e) => updateUserData("username", e.target.value)}
              value={userForm.username}
            />
            <input
              type="password"
              placeholder="Password"
              className="input w-5/12"
              onChange={(e) => updateUserData("password", e.target.value)}
              value={userForm.password}
            />
            <button className="btn btn-primary  w-5/12" onClick={() => handleSubmit()}>
              Sign in
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
