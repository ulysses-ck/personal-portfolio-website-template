"use client";

import BurgerButton from "./burger-button";
import ModalNavbar from "./modal-navbar";

import { useState } from "react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BurgerButton setIsOpen={setIsOpen} />
      {isOpen && <ModalNavbar setIsOpen={setIsOpen} />}
    </>
  );
}
