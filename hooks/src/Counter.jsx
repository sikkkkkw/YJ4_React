import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <strong>{value}</strong>입니다.
      </p>
      <button
        className="border-2 border-black"
        onClick={() => setValue(value + 1)}
      >
        +1
      </button>
      <button
        className="border-2 border-black"
        onClick={() => setValue(value - 1)}
      >
        -1
      </button>
    </div>
  );
}
