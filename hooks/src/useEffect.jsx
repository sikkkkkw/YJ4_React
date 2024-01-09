import { useState, useEffect } from "react";

export default function TestUseEffect() {
  const [name, setName] = useState("");
  const [nicKname, setNickname] = useState(""); // 변수명 수정: nicKname

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({
      name,
      nicKname, // 변수명 수정: nicKname
    });
  }, [name, nicKname]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value); // 변수명 수정: setNickname
  };

  return (
    <div>
      <p>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={onChangeName}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="닉네임"
          value={nicKname}
          onChange={onChangeNickname}
        />
      </p>
      <p>이름 : {name}</p>
      <p>닉네임 : {nicKname}</p> {/* 변수명 수정: nicKname */}
    </div>
  );
}
