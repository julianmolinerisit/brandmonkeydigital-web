import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import LogoBrandMonkey from "../assets/images/LOGO2.1.png";



export default function NavBar() {
  const [showHoverContent, setShowHoverContent] = useState(false);
  const openMenu = () => {
    let menu = document.getElementById("menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };
  

  
  return (
    <div>
      <nav className="py-0 top-0 w-full bg-[#ffff] ">
        <div className="container mx-auto flex px-8 xl:px-0">
          <div className="flex flex-grow items-center pl-10">
            <Link to="/">
              <img
                className="h-20"
                src={LogoBrandMonkey}
                alt="not image"
              />
            </Link>
          </div>
          <button onClick={openMenu}>
            <BiMenu className="flex lg:hidden items-center" />
          </button>

          <div
            id="menu"
            className=" lg:flex lg:relative lg:top-0 w-full flex-grow  hidden justify-end absolute top-14 left-0  items-center py-14 lg-py-0 px-8 rounded-2xl "
          >
            <div className="flex flex-col lg:flex-row mb-8 lg:mb-0 items-center">
              <Link to="/" className="font-body1 lg:mr-7 mb-8 lg:mb-0">
                INICIO
              </Link>
              <Link to="Servicios" className="font-body1 lg:mr-7 mb-8 lg:mb-0">
                SERVICIOS
              </Link>

              <Link to="/blog" className="font-body1 lg:mr-7 mb-8 lg:mb-0">
                BLOG
              </Link>
              <Link to="/portafolio" className="font-body1 lg:mr-7 mb-8 lg:mb-0">
                PORTAFOLIO
              </Link>
              <Link to="/contacto" className="font-body1">CONTACTO</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}