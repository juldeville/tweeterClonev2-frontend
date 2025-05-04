"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Modal from "react-modal";
import { ModalProps } from "@/types";

export default function SignInModal({ modalIsOpen, closeModal }: ModalProps) {
  const customStyles = {
    overlay: {
      backgroundColor: "transparent",
    },
    content: {
      top: "45%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "60vw",
      height: "85vh",
      backgroundColor: "var(--color-base-100)",
    },
  };

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
            <input type="text" placeholder="Username" className="input w-5/12" />
            <input type="text" placeholder="Password" className="input w-5/12" />
            <button className="btn btn-primary  w-5/12">Sign in</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
