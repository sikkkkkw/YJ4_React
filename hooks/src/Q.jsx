import React, { useState } from "react";

export default function Password() {
  const [showPassword, setPassword] = useState(false);

  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-col justify-center w-[300px] h-[200px] items-center  bg-slate-300 rounded-r-full rounded-l-full">
        <input
          className=" h-[40px] w-[200px] bg-slate-400 m-3 "
          type="text"
          placeholder="아이디"
        />
        <input
          className=" h-[40px] w-[200px] bg-slate-400 m-3"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호"
        />
        <input type="checkbox" onClick={() => setPassword(!showPassword)} />
      </div>
    </div>
  );
}
