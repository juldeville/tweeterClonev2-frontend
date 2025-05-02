"use client";

import { useState } from "react";

export function useModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return { modalIsOpen, openModal, closeModal };
}
