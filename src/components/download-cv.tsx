"use client";

import ButtonGeneric from "./button-generic";

export default function DownloadCV() {
  const handleDownload = () => {
    window.open("/cv.pdf", "_blank");
  };

  return <ButtonGeneric className="mobile:w-full" onClick={handleDownload}>Download CV</ButtonGeneric>;
}

