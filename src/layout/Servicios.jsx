import React, { useState } from 'react'
import { BiCaretRight, BiCaretLeft } from "react-icons/bi";
import img1 from "../assets/images/Recursos IMG/01 DISEÑO DESARROLLO WEB1.png";
import img2 from "../assets/images/Recursos IMG/02 CRECIMIENTO SOCIAL MEDIA.png";
import img3 from "../assets/images/Recursos IMG/03 DISEÑO IDENTIDAD + PUBLICITARIO.png";
import img4 from "../assets/images/Recursos IMG/04 CREAMOS CAMPAÑAS PUBLICITARIAS.png";
import img5 from "../assets/images/Recursos IMG/05 ADMINISTRAMOS REDES SOCIALES.png";
import img6 from "../assets/images/Recursos IMG/06 AUTOMATIZAMOS CON AI.png";
import img7 from "../assets/images/Recursos IMG/88.png";
import img8 from "../assets/images/Recursos IMG/99.png";
import img9 from "../assets/images/Recursos IMG/109.png";
import { Link } from "react-router-dom";

export default function Servicios () {

  const [index, setIndex] = useState(0);

  const array = [
    { nombre: "BRAND-BOT", segundonombre: "Asistente automatizado" ,  imagen: img7, ruta:"/brandbot", },
    { nombre: "BRAND-BOT + IA", segundonombre: "Asistente robot inteligente" ,  imagen: img8, ruta:"/webbot", },
    { nombre: "WHATSBOT", segundonombre: "Asistente de Whatsapp" ,  imagen: img9, ruta:"/whatsbot", },
  ];

  const next = () => {
    if (index !== array.length - 1) {
      setIndex(index + 1);
    }
  };
  const previus = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const slice = array.slice(index, index + 1);

  return (
    <div>
      <div className="flex h-[200px] items-center justify-center lg:justify-center">
        <div className="px-6 flex flex-col">
          <div className="flex flex-row">
            <div className="bg-blue-950 w-20 h-0.5 mt-7 rounded-xl"></div>
            <h1 className="text-[35px]"> Nuestros Servicios</h1>
            <div className="bg-blue-950 w-20 h-0.5 mt-7 rounded-xl"></div>
          </div>
          <div className="flex items-center justify-center">
            <span>
              Creamos, consolidamos, y posicionamos, marcas y productos
            </span>
          </div>
        </div>
      </div>
  	
 {/* Despliegues */}
    <div className='h-[450px] flex items-center justify-center mb-[40px]'>
    <div className='flex items-center justify-centers'>
        <button className='' onClick={previus}>
          <BiCaretLeft fontSize={85}/>
        </button>
      </div>
      <div className='flex justify-center h-[500px] w-[600px] flex text-center'>
      {slice &&
          slice.map((el) => {
            return (
              <div className='h-[300px] mt-[35px]'>
                  <div className=''>
                  <h1 className='text-[30px] font-semibold mb-[15px]'>{el.nombre}</h1>
                </div>
              <div className=''>
                <div className='h-[320px] w-[600px] mb-[10px]'>
                    <img src={el.imagen} alt="" className='w-full h-full'/>
                </div>
              </div>
                <div className=''>
                  <div className='flex justify-center'>
                    <h1 className='font-semibold text-[30px] mb-[10px] '>{el.segundonombre}</h1>
                  </div>
                  <div className='bg-violet-400 flex mx-[230px] rounded-full h-[30px]'>
                  <Link to={el.ruta} className='pl-[36px] pr-[36px] font-bold text-[18px] text-white'>
                      Ver más
                    </Link>
                    </div>
                </div>
              </div>
            );
          })}
    </div>
    <div className='flex items-center justify-centers'>
        <button className=''>
          <BiCaretRight fontSize={85} onClick={next}/>
        </button>
      </div>
  </div>


      <div className="max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl relative text-start lg:text-start">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <h2 className="font-body1 text-[25px] lg:text-2xl ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]">
              Desarrollo
            </h2>
            <h1 className="font-body1 text-[35px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]">
              Web + Apps + Eccomerce
            </h1>
            <a href="#" className="font-body1 text-1xl px-[25%] pt-4">
              Ver mas
            </a>
          </div>
          <img className="max-h-[250px] ml-[25%] lg:max-h-[300px]" src={img1} alt="/" />
        </div>
        <div className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <h2 className="font-body1 text-[25px] lg:text-2xl  ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]">
              Crecimiento
            </h2>
            <h1 className="font-body1 text-[35px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]">
              Social Media
            </h1>
            <a href="#" className="font-body1 text-1xl px-[25%] pt-4">
              Ver mas
            </a>
          </div>
          <img className="max-h-[250px] ml-[25%] lg:max-h-[300px]" src={img2} alt="/" />
        </div>
        <div className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <h2 className="font-body1 text-[25px] lg:text-2xl ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]">
              Diseño
            </h2>
            <h1 className="font-body1 text-[35px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]">
              Identidad + Publicitario
            </h1>
            <a href="#" className="font-body1 text-1xl px-[25%] pt-4">
              Ver mas
            </a>
          </div>
          <img className="max-h-[250px] ml-[25%] lg:max-h-[300px]" src={img3} alt="/" />
        </div>
        <div className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <h2 className="font-body1 text-[25px] lg:text-2xl ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]">
              Creamos
            </h2>
            <h1 className="font-body1 text-[35px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]">
              Campañas Publicitarias
            </h1>
            <a href="#" className="font-body1 text-1xl px-[25%] pt-4">
              Ver mas
            </a>
          </div>
          <img className="max-h-[250px] ml-[20%] lg:max-h-[300px]" src={img4} alt="/" />
        </div>
        <div className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <h2 className="font-body1 text-[25px] lg:text-2xl ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]">
              Administramos
            </h2>
            <h1 className="font-body1 text-[35px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]">
              Redes Sociales
            </h1>
            <a href="#" className="font-body1 text-1xl px-[25%] pt-4">
              Ver mas
            </a>
          </div>
          <img className="max-h-[250px] ml-[25%] lg:max-h-[300px]" src={img5} alt="/" />
        </div>
        <div className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <h2 className="font-body1 text-[25px] lg:text-2xl ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]">
              Automatizamos
            </h2>
            <h1 className="font-body1 text-[30px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]">
              Con inteligencia artificial
            </h1>
            <Link to="/whatsbot" className="font-body1 text-1xl px-[25%] pt-4">
              Ver mas
            </Link>
          </div>
          <img className="max-h-[250px] ml-[20%] lg:max-h-[300px]" src={img6} alt="/" />
        </div>
      </div>
    </div>
  );
};

