"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Modal from "react-modal";
import { ModalProps } from "@/types";
import { customStyles } from "@/constants/modelstyles";
import { useState } from "react";
import { signup } from "@/services/auth";
import { SignUpFormData } from "@/types";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { authenticate } from "@/reducers/user";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useRouter } from "next/navigation";

export default function SignUpModal({ modalIsOpen, closeModal }: ModalProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.value);

  const [userForm, setUserForm] = useState<SignUpFormData>({
    firstname: "",
    username: "",
    password: "",
  });

  function updateUserData<K extends keyof SignUpFormData>(field: K, value: SignUpFormData[K]) {
    setUserForm({ ...userForm, [field]: value });
  }

  async function handleSubmit() {
    try {
      const apiData = await signup(userForm);
      if (apiData.result) {
        dispatch(authenticate(apiData.user));
        router.push("/");
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
            <div className="font-bold text-3xl">Create your Hackatweet account</div>
          </div>

          <div className="flex flex-col justiy-center items-center w-full gap-10">
            <input
              type="text"
              placeholder="Firstname"
              className="input w-5/12"
              onChange={(e) => updateUserData("firstname", e.target.value)}
              value={userForm.firstname}
            />
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
            <button className="btn btn-primary  w-5/12" onClick={handleSubmit}>
              Sign up
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
