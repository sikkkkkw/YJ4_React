import React, { useState } from "react";

export default function Q() {
  const [gg, setGg] = useState("");
  return (
    <>
      <input type="text" placeholder="5이상x" onChange={() => setGg()} />
    </>
  );
}
