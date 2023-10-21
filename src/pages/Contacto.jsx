import React, { useRef } from 'react'
import img1 from "../assets/images/Recursos IMG/wp9073631.jpg"
import emailjs from '@emailjs/browser';


const Contacto = () => {
    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k9myxsl', 'template_5yhgfjk', form.current, 'DLkUUm3Kf9HKYI1ux')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div>
      <div className='flex h-[150px] justify-center'>
        <div className='px-[70px]'>
          <h1 className=' mt-[40px] text-[40px] font-body1'>
            Contacto
            </h1>
        </div>
      </div>
      <div className='flex h-screen'>
        <div className='block bg-slate-50 ml-40 mt-4 p-6 rounded-xl shadow-md shadow-slate-300 w-[550px] h-[720px]'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col px-2 py-1 gap-3'>
          <label htmlFor="name" className=''>Nombre</label>
          <input className='h-8 w-full rounded-md border border-slate-300 mb-3 text-sm pl-2 bg-transparent outline-black-600 shadow-sm' type="text" placeholder='Full Name' name='user_name' required/>
          <label htmlFor="Email">Email</label>
          <input className='h-8 w-full rounded-md border border-slate-300 mb-3 text-sm pl-2 bg-transparent outline-black-600 shadow-sm' type="email" placeholder='Email' name='user_email' required/>
          <label htmlFor="phone">Telefono</label>
          <input className='h-8 w-full rounded-md border border-slate-300 mb-3 text-sm pl-2 bg-transparent outline-black-600 shadow-sm' type="tel" placeholder='Number' name='user_number' required/>
          <label htmlFor="Pais">Pais</label>
          <select className='h-8 w-full rounded-md border border-slate-300 mb-3 text-sm pl-2 bg-transparent outline-black-600 shadow-sm' name='user_pais'>
            <option>Pais</option>
            <option>Argentina</option>
            <option>Bolivia</option>
            <option>Brazil</option>
            <option>Chile</option>
            <option>Otro</option>
          </select>
          <label htmlFor="Type">Tipo de Negocio</label>
          <select className='h-8 w-full rounded-md border border-slate-300 mb-3 text-sm pl-2 bg-transparent outline-black-600 shadow-sm' name='user_negocio'>
            <option>Seleccione</option>
            <option>Fabricante</option>
            <option>Distribuidor</option>
            <option>Franquicias</option>
            <option>Otro</option>
          </select>
          <textarea className='h-[150px] w-full rounded-md border border-slate-300 mb-3 text.sm pl-2 bg transparent outline-blue-600 shadow-sm' name="message" cols="30" rows="10"></textarea>
          <button className='h-8 w-full rounded-md border border-slate-300 mb-3 text.sm pl-2 bg transparent outline-blue-600 shadow-sm' type='submit'>Enviar</button>
        </form>
        </div>
        <div>
      </div>
      <div>
        <div className='flex flex-col ml-[150px] mt-4 '>
          <img src={img1} alt="" className='w-[519px] h-[481px]'/>
          <p className='mt-8 text-2'>correo@gmail.com</p>
          <p className='mt-4 text-2'>+57 300-00000</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto