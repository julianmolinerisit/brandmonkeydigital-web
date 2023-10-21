import LogoBrandMonkey from "../assets/images/LOGO2.png";

const Header = () => {
  return (
    <div className="h-[600px] flex flex-col-reverse lg:flex-row items-center text-start lg:text-start gap-6 lg:gap-60 px-[40px] lg:px-[156px]">
      <div>
        <h1 className="mt-3 lg:mt-0 ml-8 lg:ml-0 text-[25px] lg:text-[45px] font-body1 leading">
          Transforma tu presencia en linea con <span className='text-violet-600 font-semibold tracking-[1px]'>nuestro equipo</span> de expertos.
        </h1>
        <p className="ml-8 lg:ml-0 text-[15px] lg:text-[18px] mt-3 font-body1 mb-8 lg:mb-4">
          Con nosotros, tu marca llegará hasta lo mas alto. <br />¡Así es! Hasta las estrellas
        </p>
        <div>
          <button className="h-[49px] w-[300px] font-semibold mr-[20px] mt-1 bg-violet-600 rounded-full text-white hover:bg-transparent hover:text-black hover:border-2 hover:border-violet-600">Chatea con nosotros</button>
        </div>
      </div>
      <div className="mb-10 lg:mb-0 ml-4 w-[213px] lg:w-[520px] h-[199px] lg:h-[330px]">
        <img src={LogoBrandMonkey} alt="Logo" className="w-full h-full"/>
      </div>
    </div>
  );
};

export default Header;
