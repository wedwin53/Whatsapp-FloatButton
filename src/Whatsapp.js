import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp({ cellphoneNumber }) {
  return (
    <div>
      <a
        style={{ color: "white" }}
        href="https://api.whatsapp.com/send?phone=PHONENUMBERHERE&text=Hi,%your%20en%20su%20web%20y%20necesito%20consultar%20sobre..."
        className="float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="my-float ml-4" />
      </a>
    </div>
  );
}
