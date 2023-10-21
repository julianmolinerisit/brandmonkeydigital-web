import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-auto flex md:flex-row flex-col justify-center py-2 bg-gray-200 bottom-0 w-full">
        <div className="flex flex-col text-center">
          <Link className="mb-4">Acerca de nosotros</Link>
          <Link className="mb-4">Nuestros trabajos</Link>
          <Link className="mb-4">Contactanos</Link>
        </div>
        <div className="flex flex-col px-28 text-center items-center">
          <h1 className="mb-4 text-center">Seguinos!!!</h1>
          <div className="flex flex-row justify-around w-36 mb-4">
            <Link>
              <IoLogoWhatsapp className="text-2xl" />
            </Link>
            <Link>
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link>
              <BsFacebook className="text-2xl" />
            </Link>
            <Link>
              <BsLinkedin className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <Link className="mb-4">Terminos y condiciones</Link>
          <Link className="mb-4">Politica de privacidad</Link>
          <Link>Blog</Link>
        </div>
    </div>
  );
};

export default Footer;
