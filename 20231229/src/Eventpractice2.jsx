import { useState } from "react";

export default function Eventpractice2() {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      onClick();
    }
  };
  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: "",
    });
  };
  return (
    <div>
      <h1>이베트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={message}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
}
