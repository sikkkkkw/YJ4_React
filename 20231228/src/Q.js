import { useState } from "react";

const Q = () => {
  const [message, setMessage] = useState(0);
  return (
    <div className="w-full h-[800px] flex justify-center items-center ">
      <div className="flex-col">
        <div className=" bg-black text-white h-[50px] w-[800px] rounded-xl flex items-center justify-center text-center">
          useState를 활용한 숫자 증감 퀴즈
        </div>
        <h1 className="flex justify-center text-4xl">{message}</h1>
        <div className="flex justify-center ">
          <button
            className=" border border-black h-[50px] w-[100px] mx-5 rounded-xl"
            onClick={() => setMessage(message + 1)}
          >
            +1
          </button>
          <button
            className=" border border-black h-[50px] w-[100px] mx-5  rounded-xl"
            onClick={() => setMessage(message - 1)}
          >
            -1
          </button>
          <button
            className=" border border-black h-[50px] w-[100px] mx-5  rounded-xl"
            onClick={() => setMessage(message * 2)}
          >
            *
          </button>
          <button
            className=" border border-black h-[50px] w-[100px] mx-5  rounded-xl"
            onClick={() => setMessage(message / 2)}
          >
            /
          </button>
          <button
            className=" text-red-800 border border-black h-[50px] w-[100px] mx-5  rounded-xl"
            onClick={() => setMessage(message * 0)}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Q;
