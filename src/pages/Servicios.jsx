import { Header, Layout } from "@/layout"
import React from 'react'
import img1 from "../assets/images/Recursos IMG/01 DISEÑO DESARROLLO WEB1.png";
import img2 from "../assets/images/Recursos IMG/02 CRECIMIENTO SOCIAL MEDIA.png";
import img3 from "../assets/images/Recursos IMG/03 DISEÑO IDENTIDAD + PUBLICITARIO.png"
import img4 from "../assets/images/Recursos IMG/04 CREAMOS CAMPAÑAS PUBLICITARIAS.png"
import img5 from "../assets/images/Recursos IMG/05 ADMINISTRAMOS REDES SOCIALES.png"
import img6 from "../assets/images/Recursos IMG/06 AUTOMATIZAMOS CON AI.png"
import { Link } from "react-router-dom";

const Servicios = () => {
  return (
    <div className="mb-[5%]">
      <div className='flex h-[200px] items-center justify-center lg:justify-center'>
        <div className='h-full text-center lg:text-center px-[30px]'>
          <h1 className='text-[25px] mt-[70px] lg:mt-[30px] lg:text-[45px] font-body1'>
            -- Nuestros Servicios --
            </h1>
          <p className='text-[15px] lg:text-[20px] mt-7 lg:mt-4 font-body1 lg:mb-4'>
            creamos, consolidamos, y posicionamos, marcas y productos
            </p>
        </div>
      </div>
      <div className='max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative text-start lg:text-start'>
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <h2 className='font-body1 text-[25px] lg:text-2xl ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]'>Desarrollo</h2>
            <h1 className='font-body1 text-[35px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]'>Web + Apps + Eccomerce</h1>
            <a href="#" className='font-body1 text-1xl px-[25%] pt-4'>Ver mas</a>
          </div>
          <img 
          className='max-h-[250px] lg:max-h-[300px]' 
          src={img1} 
          alt="/" />
      </div>
      <div className='rounded-xl relative'>
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <h2 className='font-body1 text-[25px] lg:text-2xl  ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]'>Crecimiento</h2>
            <h1 className='font-body1 text-[35px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]'>Social Media</h1>
            <a href="#" className='font-body1 text-1xl px-[25%] pt-4'>Ver mas</a>
          </div>
          <img 
          className='max-h-[250px] lg:max-h-[300px]' 
          src={img2} 
          alt="/" />
      </div>
      <div className='rounded-xl relative'>
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <h2 className='font-body1 text-[25px] lg:text-2xl ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]'>Diseño</h2>
            <h1 className='font-body1 text-[35px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]'>Identidad + Publicitario</h1>
            <a href="#" className='font-body1 text-1xl px-[25%] pt-4'>Ver mas</a>
          </div>
          <img 
          className='max-h-[250px] lg:max-h-[300px]' 
          src={img3} 
          alt="/" />
      </div>
      <div className='rounded-xl relative'>
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <h2 className='font-body1 text-[25px] lg:text-2xl ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]'>Creamos</h2>
            <h1 className='font-body1 text-[35px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]'>Campañas Publicitarias</h1>
            <a href="#" className='font-body1 text-1xl px-[25%] pt-4'>Ver mas</a>
          </div>
          <img 
          className='max-h-[250px] lg:max-h-[300px]' 
          src={img4} 
          alt="/" />
      </div>
      <div className='rounded-xl relative'>
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <h2 className='font-body1 text-[25px] lg:text-2xl ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]'>Administramos</h2>
            <h1 className='font-body1 text-[35px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]'>Redes Sociales</h1>
            <a href="#" className='font-body1 text-1xl px-[25%] pt-4'>Ver mas</a>
          </div>
          <img 
          className='max-h-[250px] lg:max-h-[300px]' 
          src={img5} 
          alt="/" />
      </div>
      <div className='rounded-xl relative'>
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <h2 className='font-body1 text-[25px] lg:text-2xl ml-[12%] lg:ml-[25%] mt-[10%] lg:mt-[20%]'>Automatizamos</h2>
            <h1 className='font-body1 text-[30px] lg:text-3xl ml-[12%] lg:ml-[25%] mt-[2px] lg:mt-[5px]'>Con inteligencia artificial y <br/> realidad aumentada</h1>
            <Link to="/whatsbot" className='font-body1 text-1xl px-[25%] pt-4'>
              Ver mas
              </Link>
          </div>
          <img 
          className='max-h-[250px] lg:max-h-[300px]' 
          src={img6} 
          alt="/" />
      </div>
    </div>
    </div>
  )
}

export default Servicios