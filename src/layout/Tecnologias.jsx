import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../assets/images/Recursos IMG/9.png";
import img2 from "../assets/images/Recursos IMG/8.png";
import img3 from "../assets/images/Recursos IMG/6.png";
import img4 from "../assets/images/Recursos IMG/16.png";
import img5 from "../assets/images/Recursos IMG/17.png";
import img6 from "../assets/images/Recursos IMG/18.png";
import img7 from "../assets/images/Recursos IMG/19.png";
import img8 from "../assets/images/Recursos IMG/20.png";
import img9 from "../assets/images/Recursos IMG/21.png";

import { useState } from "react";
export default function Tecnologias() {
  const [index, setIndex] = useState(0);

  const array = [
    { nombre: "Inteligencia Artificial", imagen: img1 },
    { nombre: "Pagina Web", imagen: img2 },
    { nombre: "Chat-Bot", imagen: img3 },
    { nombre: "Ventas", imagen: img4 },
    { nombre: "Inteligencia Artificial", imagen: img5 },
    { nombre: "Pagina Web", imagen: img6 },
    { nombre: "Chat-Bot", imagen: img7 },
    { nombre: "Ventas", imagen: img8 },
    { nombre: "Inteligencia Artificial", imagen: img9 },
  ];
  const next = () => {
    if (index !== array.length - 5) {
      setIndex(index + 1);
    }
  };
  const previus = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const slice = array.slice(index, index + 5);

  return (
    <div>
      <div className="flex justify-center my-10">
        <span className="text-3xl">Tecnologias</span>
      </div>
      <div className="flex flex-row justify-center items-center pb-20 mx-20">
        {slice &&
          slice.map((el) => {
            return (
              <div className="flex flex-col justify-center items-center w-64">
                <div>
                  <img src={el.imagen} alt="" className="w-40" />
                </div>
                <div>
                  <h1 className="bottom-0">{el.nombre}</h1>
                </div>
              </div>
            );
          })}
        <button
          className=" left-0 ml-10 absolute flex items-center justify-center w-10 h-10 cursor-pointer"
          onClick={previus}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          className=" right-0 mr-10 absolute flex items-center justify-center w-10 h-10 cursor-pointer"
          onClick={next}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
