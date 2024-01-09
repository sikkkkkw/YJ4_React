import React, { useState } from "react";

export default function Q2() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length > 5) {
      setError("길이가 5를 초과했습니다.");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex w-full h-full items-center justify-center flex-col">
      <input
        className=" h-[40px] w-[200px] bg-slate-400 m-3"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="입력하세요"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
