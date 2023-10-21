import React from 'react'
import ReactPlayer from 'react-player';
import img1 from "../assets/images/Recursos IMG/grafico1.mp4";
import img2 from "../assets/images/Recursos IMG/grafico3.png";
import img3 from "../assets/images/Recursos IMG/grafico2.png";
import { Link } from "react-router-dom";

const Whatsbot = () => {
  
  function expandirOpcion(inputId) {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.type === 'checkbox' && input.id !== inputId) {
        input.checked = false;
      }
    }
  }
  
  return (
    <><div className="mb-[300px]">
      <div className="h-[140px] text-center w-full">
        <p className="font-body1 text-[20px] mt-[30px]">Bots</p>
        <h1 className="font-body1 text-[35px] mt-[10px]">
          Whatsapp + Inteligencia Artificial
        </h1>
      </div>

      <div className="flex h-[500px] text-start px-[156px]">
        <div>
          <h1 className="text-[45px] font-body1 pt-8">
            Consigue más clientes <br />
            con un{" "}
            <span className="text-violet-600 font-semibold tracking-[1px]">
              chatbot
            </span>{" "}
            pensado <br />
            para tu negocio
          </h1>
          <p className="ml-8 lg:ml-0 text-[15px] lg:text-[18px] mt-3 font-body1 mb-8 lg:mb-4">
            ¿Estas buscando una manera efectiva de aumentar las ventas de tu
            negocio? <br /> ¿Quieres brindar a tus clientes una experiencia
            conversacional personalizada y satisfactoria? <br /> Entonces,
            ¡Whatsbot es la solución perfecta para ti
          </p>
          <div>
            <button className="h-[49px] w-[300px] font-semibold mr-[20px] mt-1 bg-violet-600 rounded-full text-white hover:bg-transparent hover:text-black hover:border-2 hover:border-violet-600">
              Chatea con nosotros
            </button>
          </div>
        </div>
        <div className="w-[500px] h-[500px] ml-10">
          <ReactPlayer
            url={img1}
            playing
            className="Video"
            width="100%"
            height="100%" />
        </div>
      </div>
        <div className="h-[240px] text-center w-full mt-[50px]">
          <h1 className="font-body1 text-[35px]">
            ¿Por qué elegir nuestro Whatsbot?
          </h1>
          <p className="font-light text-[20px] mt-[10px] ">
            Mejora la experiencia de tus clientes en WhatsApp y aumenta tus
            conversiones con Whatsbot. Nuestro asistente <br /> virtual responde
            de forma inmediata y personalizada a todas las consultas que lleguen
            a tu WhatsApp, ofreciendo <br />
            respuestas rápidas y precisas. Además, podrás brindar atención al
            cliente de calidad las 24 horas del día, los 7 días <br />
            de la semana. Con Whatsbot, podrás convertir a tus visitantes en
            clientes satisfechos y leales en poco tiempo. <br />
            ¡Prueba Whatsbot y haz crecer tu negocio hoy mismo!
          </p>
        </div>


        <div className='flex'>
          <div className='w-[480px] ml-[200px] h-[280px] ml-[20px]]'>
            <img src={img2} alt="" className='w-full h-full' />
          </div>
          <div className='grid mt-8 ml-[300px] justify-end w-[50%]'>
            <div>
              <div className='relative w-[600px] bg-violet-600 m-[15px]'>
                <input type="checkbox" id='input1' className='absolute peer opacity-0' />
                <label htmlFor="input1" className='font-body1 text-white tracking-[1px] mx-[20px] h-[50px] flex items-center' onClick={() => expandirOpcion('input1')}>Chatbot a la medida de tu negocio</label>
                <div className='rounded-full px-1 absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                  <p className='text-white p-[20px] text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint sit explicabo officiis autem dolores, porro necessitatibus, inventore non laudantium veniam, a ut optio nesciunt itaque iusto animi error vitae.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='relative w-[600px] bg-violet-600 m-[15px]'>
                <input type="checkbox" id='input2' className='absolute peer opacity-0' />
                <label htmlFor="input2" className='font-body1 text-white tracking-[1px] mx-[20px] h-[50px] flex items-center' onClick={() => expandirOpcion('input2')}>Optimiza el tiempo de gestión comercial</label>
                <div className='rounded-full px-1 absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                  <p className='text-white p-[20px] text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint sit explicabo officiis autem dolores, porro necessitatibus, inventore non laudantium veniam, a ut optio nesciunt itaque iusto animi error vitae.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='relative w-[600px] bg-violet-600 m-[15px]'>
                <input type="checkbox" id='input3' className='absolute peer opacity-0' />
                <label htmlFor="input3" className='font-body1 text-white tracking-[1px] mx-[20px] h-[50px] flex items-center' onClick={() => expandirOpcion('input3')}>Atiende a tus clientes dentro y fuera de horario comercial</label>
                <div className='rounded-full px-1 absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                  <p className='text-white p-[20px] text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint sit explicabo officiis autem dolores, porro necessitatibus, inventore non laudantium veniam, a ut optio nesciunt itaque iusto animi error vitae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] text-center w-full mt-[70px]">
          <h1 className="font-body1 text-[35px] mt-[40px]">
            ¿Cómo Whatsbot puede ayudarte <br /> a maximizar tus ventas desde el
            primer día?
          </h1>
        </div>
        <div className="flex justify-end h-[500px] mt-[20px]">
          <div className="bg red-200 mx-20">
            <img src={img3} alt="" className="w-full h-full" />
          </div>
          <div className="grid grid-cols-2  w-[50%]">
            <div className="mr-[40px]">
              <h1 className="font-body1 text-violet-600 text-[25px]">
                Responde las dudas <br />
                de tus clientes
              </h1>
              <p className="text-[17px] mt-[10px] font-light">
                <span className="font-normal">
                  Atiende a tus clientes en el momento{" "}
                </span>{" "}
                <br />
                en que se encuentran visitando tu sitio <br />y manten un
                dialogo amistoso y fluido <br />
                por medio del chat de los asistentes <br />
                virtuales.
              </p>
            </div>
            <div className="mr-[40px]">
              <h1 className="font-body1 text-violet-600 text-[25px]">
                Mejora su experiencia
              </h1>
              <p className="text-[17px] mt-[10px] font-light">
                <span className="font-normal">
                  Perzonaliza el diálogo de tu <br />
                  chatbot
                </span>{" "}
                para brindar a tus <br />
                clientes información relevante
                <br />y respuestas inmediatas.
              </p>
            </div>
            <div className="mr-[40px]">
              <h1 className="font-body1 text-violet-600 text-[25px]">
                Captura sus datos
                <br />
                de contacto 24/7
              </h1>
              <p className="text-[17px] mt-[10px] font-light">
                Obtén los{" "}
                <span className="font-normal">
                  dato e información relevante{" "}
                </span>{" "}
                <br />
                de tus potenciales clientes, sin perder
                <br />
                ninguna oportunidad de venta.
              </p>
            </div>
            <div className="mr-[40px]">
              <h1 className="font-body1 text-violet-600 text-[25px]">
                Conecta las herramientas <br />
                que ya utilizas
              </h1>
              <p className="text-[17px] mt-[10px] font-light">
                El chatbot de Cliengo lo puedes conectar <br />a distintas
                herramientas, ganando así{" "}
                <span className="font-normal">mayor agilidad a tu equipo</span>{" "}
                comercial
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[170px] mx-60 w-[1128px] mb-[50px]">
        <div className="h-[50%]">
          <h1 className="font-body1 text-[45px] py-20 px-[150px]">
            ¿Quieres más?
          </h1>
        </div>
      </div>
      <div className='h-[370px] bg-red-200'>
          <div className=''>

          </div>
        </div>
    </>
  );
};

export default Whatsbot;
