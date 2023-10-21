// import React from 'react'
import img1 from "../assets/images/Recursos IMG/wp9073631.jpg";

// const Acerca = () => {
//   return (
//     <div className='mt-[30px] flex h-[450px]'>
//         <div className='h-full w-[50%] text-center px-[30px]'>
//           <h1 className='text-[25px] pt-[25%] text-[45px] font-body1'>
//             -- ¿Quiénes somos? --
//             </h1>
//           <p className='text-[20px] mt-1 font-body1 mb-4'>
//             Subtitulo
//             </p>
//         </div>
//         <div className='w-[50%] '>
//             <img src={img1} alt="" className='shadow-2xl mt-[10%] w-[620px] h-[300px]'/>
//         </div>
//     </div>
//   )
// }

// export default Acerca
import img from "../img/aa42e95a8fa0f42502590c4cc437e837.jpg";
export default function Acerca() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-10">
      <div className="px-6 flex flex-col">
        <div className="flex flex-row my-10">
          <div className="bg-blue-950 w-20 h-0.5 mt-5 rounded-xl"></div>
          <h1 className="text-3xl">¿ Quienes Somos ?</h1>
          <div className="bg-blue-950 w-20 h-0.5 mt-5 rounded-xl"></div>
        </div>
        <div className="flex items-center justify-center">
          <span>Un equipo de jovenes talentosos con la <br /> aspiracion de ayudar a pequeños y <br /> personas que 
            empiezan su viaje como <br /> profesionales a tomar un rumbo y abrirse camino <br /> en nuestra sociedad
            con cada vez tecnologias <br /> vanguardistas y avanzadas, y usarlas a favor <br /> de mejorar la presencia
            en linea y el <br /> posicionamiento de nuestros clientes.
          </span>
        </div>
      </div>
      <div className="flex">
        <img
          src={img1}
          alt=""
          className="shadow-2xl mt-[10%] w-[620px] h-[300px]"
        />
        {/* <img className="w-72 h-40 rounded-xl object-cover" src={img} alt="" /> */}
      </div>
    </div>
  );
}
