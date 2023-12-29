import { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => {
    console.log("유저네임", e.target.value);
    setUsername(e.target.value);
  };
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(username + ":" + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div className="flex justify-center flex-col items-center h-[800px]">
      <h1 className=" border">이벤트연습</h1>
      <input
        type="text"
        name="message"
        placeholder="사용자"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요."
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
