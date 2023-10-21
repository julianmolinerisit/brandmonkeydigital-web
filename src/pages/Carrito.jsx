import React from 'react'
import img2 from "../assets/images/Recursos IMG/grafico3.png";

const Carrito = () => {
  return (
    <div className='bg-slate-200'>
      <div>
        <div className='absolute right-[53%]'>
          <p className='text-[20px] font-body1'>Escoge tu paquete</p>
        </div>
      <div className='flex h-[130px] justify-center'>
        <div className='px-[70px]'>
            <h1 className=' mt-[35px] text-[40px] font-body1'>
              Precios
              </h1>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='bg-white w-[400px] h-[1173px] ml-[160px] rounded-lg'>
          <div className='mt-[10%]'>
            <h1 className='text-center font-body1 text-[30px]'>Starter</h1>
            <p className='ml-[10%] font-body1 text-[20px] mt-[20px]'>Ideal para Start-Ups y <br /> nuevos profesionales.</p>
          </div>
          <div className='w-[167px] h-[191px] mt-[20%] mb-[20%] ml-[30%] shadow-2xl'>
            <img src={img2} alt="" className='w-full h-full '/>
          </div>
          <div>
            <p className='ml-[10%] font-body1 text-[20px] mt-[20px]'>Incluye: </p>
            <p className='ml-[12%] font-body1 text-[20px] mt-[5px]'><br /><span>- Manejo de 2 redes sociales a tu elección <br />- Creacion de logotipo personalizado <br />- Landing Page</span></p>
          </div>
          <div className='mt-[45%] text-center'>
            <h1 className='font-semibold  text-[50px]'>$24,99</h1>
          </div>
          <div className='mt-[20%] text-center'>
            <button className='h-[49px] w-[300px] font-semibold mr-[20px] mt-1 bg-violet-600 rounded-full text-white hover:bg-transparent hover:text-black hover:border-2 hover:border-violet-600'>Elige plan Starter</button>
          </div>
        </div>
        <div className='bg-white w-[400px] h-[1173px] ml-[80px] rounded-lg'>
          <div className='mt-[10%]'>
            <h1 className='text-center font-body1 text-[30px]'>Business</h1>
            <p className='ml-[10%] font-body1 text-[20px] mt-[20px]'>Ideal para PYMES</p>
          </div>
          <div className='w-[167px] h-[191px] mt-[20%] mb-[20%] ml-[30%] shadow-2xl'>
            <img src={img2} alt="" className='w-full h-full '/>
          </div>
          <div>
            <p className='ml-[10%] font-body1 text-[20px] mt-[20px]'>Incluye: </p>
            <p className='ml-[12%] font-body1 text-[20px] mt-[5px]'><br /><span>- Manejo de 3 redes sociales a tu elección <br />- Creacion de marca <br />- Pagina web de hasta 5 pantallas <br />- Chatbot básico</span></p>
          </div>
          <div className='mt-[45%] text-center'>
            <h1 className='font-semibold  text-[50px]'>$44,99</h1>
          </div>
          <div className='mt-[20%] text-center'>
            <button className='h-[49px] w-[300px] font-semibold mr-[20px] mt-1 bg-violet-600 rounded-full text-white hover:bg-transparent hover:text-black hover:border-2 hover:border-violet-600'>Elige plan Business</button>
          </div>
        </div>
        <div className='bg-white w-[400px] h-[1173px] ml-[80px] rounded-lg mb-[80px]'>
          <div className='mt-[10%]'>
            <h1 className='text-center font-body1 text-[30px]'>Epic</h1>
            <p className='ml-[10%] font-body1 text-[20px] mt-[20px]'>Manejamos todo el <br />marketing y tiendas <br />autamatizado</p>
          </div>
          <div className='w-[167px] h-[191px] mt-[20%] mb-[20%] ml-[30%] shadow-2xl'>
            <img src={img2} alt="" className='w-full h-full '/>
          </div>
          <div>
            <p className='ml-[10%] font-body1 text-[20px] mt-[20px]'>Incluye: </p>
            <p className='ml-[12%] font-body1 text-[20px] mt-[5px]'><br /><span>- Manejo de 3 redes sociales a tu elección <br />- Creacion de Tienda E- <br />Commerce <br />- Plataforma web con sesiones <br />- Chatbot personalizado con gestión de clientes y productos</span></p>
          </div>
          <div className='mt-[15%] text-center'>
            <h1 className='font-semibold  text-[50px]'>$59,99</h1>
          </div>
          <div className='mt-[20%] text-center'>
            <button className='h-[49px] w-[300px] font-semibold mr-[20px] mt-1 bg-violet-600 rounded-full text-white hover:bg-transparent hover:text-black hover:border-2 hover:border-violet-600'>Elige plan Epic</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Carrito