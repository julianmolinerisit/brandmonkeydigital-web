import React from "react";
import img1 from "../assets/images/Recursos IMG/wp9073631.jpg";

const Blog = () => {
  function expandirOpcion(inputId) {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.type === "checkbox" && input.id !== inputId) {
        input.checked = false;
      }
    }
  }
  return (
    <div>
      <div className="flex h-[150px] justify-center">
        <div className="px-[70px]">
          <h1 className=" mt-[40px] text-[40px] font-body1">
            Aplicaciones web
          </h1>
        </div>
      </div>
      <div className=" h-[500px] items-center justify-center flex flex-cols">
        <div className="w-[50%] flex-col mr-[80px]">
          <img src={img1} alt="" className="shadow-2xl w-[750px] h-[420px]" />
        </div>
        <div className="bg-slate-50 h-[420px] rounded-xl shadow-md shadow-slate-300 w-[320px]">
          <div>
            <div className="relative  w-[300px] m-[15px]">
              <input
                type="checkbox"
                id="input1"
                className="absolute peer opacity-0"
              />
              <label
                htmlFor="input1"
                className="font-body1 tracking-[1px] mx-[40px] h-[50px] flex items-center"
                onClick={() => expandirOpcion('input1')}
             >
                Eccomerce
              </label>
              <div className="rounded-full px-1 absolute top-[15px] left-[10px] rotate-0 peer-checked:rotate-90 duration-200">
                <ion-icon name="chevron-forward-sharp"></ion-icon>
              </div>
              <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="font-body1 p-[20px] text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  sint sit explicabo officiis autem dolores, porro
                  necessitatibus, inventore non laudantium veniam, a ut optio
                  nesciunt itaque iusto animi error vitae.
                </p>
              </div>
            </div>
            <div className="relative  w-[300px] m-[15px]">
              <input
                type="checkbox"
                id="input2"
                className="absolute peer opacity-0"
              />
              <label
                htmlFor="input2"
                className="font-body1 tracking-[1px] mx-[40px] h-[50px] flex items-center"
                onClick={() => expandirOpcion('input2')}
            >
                Chats Bots
              </label>
              <div className="rounded-full px-1 absolute top-[15px] left-[10px] rotate-0 peer-checked:rotate-90 duration-200">
                <ion-icon name="chevron-forward-sharp"></ion-icon>
              </div>
              <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="font-body1 p-[20px] text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  sint sit explicabo officiis autem dolores, porro
                  necessitatibus, inventore non laudantium veniam, a ut optio
                  nesciunt itaque iusto animi error vitae.
                </p>
              </div>
            </div>
            <div className="relative  w-[300px] m-[15px]">
              <input
                type="checkbox"
                id="input3"
                className="absolute peer opacity-0"
              />
              <label
                htmlFor="input3"
                className="font-body1 tracking-[1px] mx-[40px] h-[50px] flex items-center"
                onClick={() => expandirOpcion('input3')}
             >
                Marketing e identidad de marca
              </label>
              <div className="rounded-full px-1 absolute top-[15px] left-[10px] rotate-0 peer-checked:rotate-90 duration-200">
                <ion-icon name="chevron-forward-sharp"></ion-icon>
              </div>
              <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="font-body1 p-[20px] text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  sint sit explicabo officiis autem dolores, porro
                  necessitatibus, inventore non laudantium veniam, a ut optio
                  nesciunt itaque iusto animi error vitae.
                </p>
              </div>
            </div>
            <div className="relative  w-[300px] m-[15px]">
              <input
                type="checkbox"
                id="input4"
                className="absolute peer opacity-0"
              />
              <label
                htmlFor="input4"
                className="font-body1 tracking-[1px] mx-[40px] h-[50px] flex items-center"
                onClick={() => expandirOpcion('input4')}
             >
                Optimización de sitios web
              </label>
              <div className="rounded-full px-1 absolute top-[15px] left-[10px] rotate-0 peer-checked:rotate-90 duration-200">
                <ion-icon name="chevron-forward-sharp"></ion-icon>
              </div>
              <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                <p className="font-body1 p-[20px] text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  sint sit explicabo officiis autem dolores, porro
                  necessitatibus, inventore non laudantium veniam, a ut optio
                  nesciunt itaque iusto animi error vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[300px] text-start px-[185px] mb-[30px]">
          <div>
            <h1 className="text-[30px] font-body1 pt-8">Titulo</h1>
            <p className="ml-8 lg:ml-0 text-[15px] lg:text-[18px] mt-3 font-body1 mb-8 lg:mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, quos. Nihil amet, consequuntur deserunt repellat ea
              maiores dignissimos dicta error facere doloremque eaque ipsum qui
              esse delectus repellendus sapiente exercitationem. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Magnam in nostrum
              minima quos cum repellat quasi! <br /> Omnis earum aspernatur
              voluptatum quis, quae delectus quidem provident. Velit distinctio
              esse ab totam! <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quisquam, et ipsum minus blanditiis ex quia incidunt
              sit, inventore, dolor obcaecati distinctio iste deserunt ut atque
              sed corrupti earum eligendi. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Dolorum sint voluptatibus fuga natus
              facere provident eaque suscipit, rem, dignissimos obcaecati nisi
              iure voluptatum tempore omnis repellendus deleniti consequuntur!
              Repellat, dolore.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 mb-[50px] px-[185px]">
          <div className="">
            <select
              className="h-[43px] w-[552px] rounded-md border border-slate-300 mb-3 text-sm pl-2 bg-transparent outline-black-600 shadow-sm"
              name="user_pais"
            >
              <option>Descripcion</option>
            </select>
          </div>
          <div className="">
            <select
              className="h-[43px] w-[552px] rounded-md border border-slate-300 mb-3 text-sm pl-2 bg-transparent outline-black-600 shadow-sm"
              name="user_pais"
            >
              <option>Descripcion</option>
            </select>
          </div>
          <div className="">
            <select
              className="h-[43px] w-[552px] rounded-md border border-slate-300 mb-3 text-sm pl-2 bg-transparent outline-black-600 shadow-sm"
              name="user_pais"
            >
              <option>Descripcion</option>
            </select>
          </div>
          <div className="">
            <select
              className="h-[43px] w-[552px] rounded-md border border-slate-300 mb-3 text-sm pl-2 bg-transparent outline-black-600 shadow-sm"
              name="user_pais"
            >
              <option>Descripcion</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
