import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요.");
  const onClickLeave = () => setMessage("안녕히 가세요");
  return (
    <div>
      <button className="btn-custom" onClick={onClickEnter}>
        입장
      </button>
      <button className="btn-red" onClick={onClickLeave}>
        퇴장
      </button>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
