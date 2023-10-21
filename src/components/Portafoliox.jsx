import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Portafoliox() {
  return (
    <div className="flex-grow">
      <div className="flex justify-center text-center text-3xl mb-6 mt-[100px] mb-[100px] ">
      <div className="bg-blue-950 w-20 h-0.5 mt-10 rounded-xl"></div>
        <h1 className="text-[40px] font-semibold ">Proyectos y <br /> Casos de Estudio</h1> 
        <div className="bg-blue-950 w-20 h-0.5 mt-10 rounded-xl"></div>       
      </div>
      <div className="justify-center text-center text-3xl mb-6 mt-10 mb-[100px]">
      <p className="text-[25px] ">Trabajamos con diferentes marcas y negocios para asegurar el <br /> exito desde el lanzamiento</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#D9D9D9] w-[550px] h-[550px] mb-[200px] rounded-[20px] mr-[20px] ">
          <div className="h-[250px] ">
          
          </div>
          <div className="ml-[60px]">
            <h1 className="text-[25px] font-semibold mb-[15px] ">Branding</h1>
            <p className="text-[30px] ">Brand Monkey</p>
            <p className="text-[18px] ">Creacion de marca, pagina web y chatbot para <br />   Brand Monkey. <br />
               Compañia especialista en servicios para <br /> pequeñas empresas y nuevos profecionales  
            </p>
          </div>
          <div className="ml-[400px] ">
            <Link>
            Ver mas
            </Link>
          </div>
        </div>
        <div className="bg-[#D9D9D9] w-[550px] h-[550px] mb-[200px] rounded-[20px] ">
          <div className="h-[250px] ">
          
          </div>
          <div className="ml-[60px]">
            <h1 className="text-[25px] font-semibold mb-[15px] ">E-Commerce</h1>
            <p className="text-[30px] ">Empresa Patito</p>
            <p className="text-[18px]">Creacion de la marca, pagina web y<br /> E-Commerce para Empresa Patito
            </p>
          </div>
          <div className="ml-[400px] ">
            <Link>
            Ver mas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
