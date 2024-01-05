import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import useLocalStorage from "use-local-storage";

export default function IterationSample() {
  const [names, setNames] = useLocalStorage("names", [
    { id: 1, text: "눈사람", timestamp: new Date() },
    { id: 2, text: "얼음", timestamp: new Date() },
    { id: 3, text: "눈", timestamp: new Date() },
    { id: 4, text: "바람", timestamp: new Date() },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // 1초마다 현재 시간을 갱신
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // 컴포넌트 언마운트 시 clearInterval을 호출하여 메모리 누수 방지
    return () => clearInterval(intervalId);
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 설정

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
      timestamp: new Date(),
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  // 시간 띄우기
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
      // hour12: false,
    };
    // 엔터 누르면 추가
    const onKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // Enter 키의 기본 동작(예: 폼 제출)을 방지합니다.
        onClick();
      }
    };
    return new Date(timestamp).toLocaleString(undefined, options);
  };

  return (
    <>
      <div className="w-full h-full flex justify-center flex-col bg-red-300 items-center ">
        <div className="w-[1200px] h-[800px]">
          <div className="flex justify-center">
            현재 날짜 및 시간: {currentDateTime.toLocaleString()}
          </div>
          <div className="flex  justify-center mt-20 ">
            <div className="relative">
              <input
                className="h-[50px] w-[900px] border-l-2 border-t-2 border-b-2 border-r-2 border-black bg-white pl-3 mr-0 focus:outline-none focus:border-black"
                value={inputText}
                onChange={onChange}
              />
              <button
                className="absolute top-0 right-0 h-[50px] w-[50px] border-t-2 border-r-2 border-b-2 border-black bg-white"
                onClick={onClick}
              >
                추가
              </button>
            </div>
          </div>
          <div>
            <ul>
              <ReactSortable list={names} setList={setNames}>
                {names.map((name) => (
                  <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
                    {name.text} - {formatTimestamp(name.timestamp)}
                  </li>
                ))}
              </ReactSortable>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
