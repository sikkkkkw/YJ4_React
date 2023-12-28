// 한 컴포넌트에서 useState 여러 번 사용하기
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요.");
  const onClickLeave = () => setMessage("안녕히 가세요");

  const [color, setColor] = useState("black");
  return (
    <div>
      <button className="btn-custom" onClick={onClickEnter}>
        입장
      </button>
      <button className="btn-red" onClick={onClickLeave}>
        퇴장
      </button>
      <h1 style={{ color: color }}>{message}</h1>
      <button className="text-red-700" onClick={() => setColor("red")}>
        빨간색
      </button>
      <button className="text-green-700" onClick={() => setColor("green")}>
        파란색
      </button>
      <button className="text-blue-700" onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
}

export default App;
