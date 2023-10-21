import React from 'react'
import img1 from "../assets/images/Recursos IMG/129.png"
import LogoBrandMonkey from "../assets/images/Recursos IMG/119.png";

const Brandbot = () => {

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
    <div>
        <h1 className="mt-3 lg:mt-9 text-center ml-8 lg:ml-0 text-[25px] lg:text-[35px] font-bold leading">
            AUTOMATIZA TU NEGOCIO
        </h1>
      <div className="flex items-center justify-center h-[500px]">
        
        <p className="bg-[#FA96DE] text-[23px] font-bold px-[30px] py-[20px] mx-[30px] rounded-lg">
                    ¿Buscando una forma eficiente y <br /> automatizada de gestionar
                    consultas <br /> de tus usuarios en tu página web? Nuestro <br /> bot es
                    la solución perfecta. Con el podrás <br /> brindar respuestas instantáneas
                    a <br /> prefuntas frecuentes, ofrecer soporte <br /> técnico 24/7 y proporcionar 
                    información <br /> precisa sobre tus productos y servicios.</p>
      
        <div className="w-[500px] h-[300px]">
          <img src={LogoBrandMonkey} alt="Logo" className="w-full h-full"/>
        </div>
      </div>
      
      <div className='mb-[50px] '>
        <h1 className='mt-3 lg:mt-9 text-center ml-8 lg:ml-0 text-[25px] lg:text-[35px] font-bold leading'>Chatbot-Brandbot</h1>
      </div>

      <div className='flex mb-9'>
          <div className='w-[480px] mt-8 ml-[250px] h-[280px] ml-[20px]]'>
            <img src={img1} alt="" className='w-full h-full' />
          </div>
          <div className='grid mt-8 ml-[20px] mr-[200px] justify-end w-[50%]'>
            <div>
              <div className='relative w-[600px] bg-[#FA96DE] m-[15px] rounded-lg'>
                <input type="checkbox" id='input1' className='absolute peer opacity-0' />
                <label htmlFor="input1" className='font-body1 text-white tracking-[1px] mx-[20px] h-[50px] flex items-center' onClick={() => expandirOpcion('input1')}>¿Que es exactamente este bot? </label>
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
              <div className='relative w-[600px] bg-[#FA96DE] m-[15px] rounded-lg'>
                <input type="checkbox" id='input2' className='absolute peer opacity-0' />
                <label htmlFor="input2" className='font-body1 text-white tracking-[1px] mx-[20px] h-[50px] flex items-center' onClick={() => expandirOpcion('input2')}>¿Como puedo integrar este bot en mi pagina web?</label>
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
              <div className='relative w-[600px] bg-[#FA96DE] m-[15px] rounded-lg'>
                <input type="checkbox" id='input3' className='absolute peer opacity-0' />
                <label htmlFor="input3" className='font-body1 text-white tracking-[1px] mx-[20px] h-[50px] flex items-center' onClick={() => expandirOpcion('input3')}>¿Que tipo de consultas puede manejar este bot?</label>
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
              <div className='relative w-[600px] bg-[#FA96DE] m-[15px] rounded-lg'>
                <input type="checkbox" id='input4' className='absolute peer opacity-0' />
                <label htmlFor="input4" className='font-body1 text-white tracking-[1px] mx-[20px] h-[50px] flex items-center' onClick={() => expandirOpcion('input4')}>¿Es necesario tener conocimientos en programacion <br /> para utilizar este bot?</label>
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
    </div>
  )
}

export default Brandbot