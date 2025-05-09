"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Modal from "react-modal";
import { ModalProps } from "@/types";
import { customStyles } from "@/constants/modelstyles";
import { useState } from "react";
import { signup } from "@/services/auth";
import { SignUpFormData, FieldErrors } from "@/types";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { authenticate } from "@/reducers/user";
import { useRouter } from "next/navigation";
import { validateFields } from "@/utils/validateSignup";

export default function SignUpModal({ modalIsOpen, closeModal }: ModalProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    firstname: false,
    username: false,
    password: false,
  });
  const [userForm, setUserForm] = useState<SignUpFormData>({
    firstname: "",
    username: "",
    password: "",
  });
  const [passwordFormatError, setPasswordFormatError] = useState(false);

  function updateUserData<K extends keyof SignUpFormData>(field: K, value: SignUpFormData[K]) {
    setUserForm({ ...userForm, [field]: value });
  }

  async function handleSubmit() {
    try {
      const { errors, isPasswordInvalid } = validateFields(userForm);
      setFieldErrors(errors);
      setPasswordFormatError(isPasswordInvalid);
      if (Object.values(errors).some((val) => val === true)) {
        return;
      }
      const apiData = await signup(userForm);
      if (apiData.result) {
        dispatch(authenticate(apiData.user));
        router.push("/");
      } else {
        throw new Error("auth failed");
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
              className={`input w-5/12 ${fieldErrors.firstname ? "input-error" : ""}`}
              onChange={(e) => updateUserData("firstname", e.target.value)}
              value={userForm.firstname}
            />
            <input
              type="text"
              placeholder="Username"
              className={`input w-5/12 ${fieldErrors.username ? "input-error" : ""}`}
              onChange={(e) => updateUserData("username", e.target.value)}
              value={userForm.username}
            />
            <input
              type="password"
              placeholder="Password"
              className={`input w-5/12 ${fieldErrors.password ? "input-error" : ""}`}
              onChange={(e) => updateUserData("password", e.target.value)}
              value={userForm.password}
            />
            <button className="btn btn-primary  w-5/12" onClick={handleSubmit}>
              Sign up
            </button>
            {passwordFormatError && (
              <div className="text-error text-sm font-semibold w-5/12">
                <div>Password requires at least :</div>
                <div>* 1 special character</div>
                <div>* 1 number</div>
                <div>* 6 characters</div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
