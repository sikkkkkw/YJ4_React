import React from "react";

export default function InputBox({ ph, iconImg, onChange, name, value }) {
  return (
    <div className="w-80 h-10 border border-gray-300 flex">
      {/* 아이콘 */}
      <div className="w-10 h-full flex justify-center items-center border-r border-gray-300 bg-gray-100 text-gray-400">
        {iconImg}
        {/* <HiOutlineMail /> */}
      </div>
      {/* 인풋 */}
      <input
        onChange={onChange}
        className="w-full px-2  border-b-2 focus:border-red-600 outline-none"
        type="text"
        placeholder={ph}
        name={name}
        value={value}
      />
    </div>
  );
}
