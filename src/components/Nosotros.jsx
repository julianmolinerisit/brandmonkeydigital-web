import img from "../img/aa42e95a8fa0f42502590c4cc437e837.jpg";
export function Nosotros() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-10">
      <div className="px-6 flex flex-col">
        <div className="flex flex-row">
          <div className="bg-blue-950 w-20 h-0.5 mt-5 rounded-xl"></div>
          <h1 className="text-3xl">¿ Quienes Somos ?</h1>
          <div className="bg-blue-950 w-20 h-0.5 mt-5 rounded-xl"></div>
        </div>
        <div className="flex items-center justify-center">
          <span>Subtitulos</span>
        </div>
      </div>
      <div className="flex">
        <img className="w-72 h-40 rounded-xl object-cover" src={img} alt="" />
      </div>
    </div>
  );
}
