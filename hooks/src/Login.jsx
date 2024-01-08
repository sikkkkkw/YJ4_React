import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleFalseClick = () => {
    setLoggedIn(false);
  };

  const handleTrueClick = () => {
    setEmail("c5434@naver.com");
    setLoggedIn(true);
  };

  return (
    <>
      <div>
        <p>{loggedIn ? email : "로그인 해 주세요."}</p>
        <button onClick={handleFalseClick}>false</button>
        <button onClick={handleTrueClick}>true</button>
      </div>
    </>
  );
}
