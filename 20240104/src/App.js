import { useState } from "react";
import emailjs from "emailjs-com";
// import emailjs from "@emailjs/browser";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    if (window.confirm("메세지를 전송하시겠습니까? ")) {
      emailjs
        .send("service_fpoa2qa", "template_2avxn78", form, "Eles7x4Qp12JPCMWa")
        .then(
          (result) => {
            console.log(result.text);
            if (result.text === "ok") {
              window, location.reload(); //처리되면 새로고침
              // window.location.href = "http//www.naver.com"; 처리되면 다음 페이지로 이동
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      {/* 필터적용된 div */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)]" />
      <section className=" z-10 max-w-[1280px] w-full h-[800px] flex ">
        {/* 왼쪽: 타이틀 */}
        <article className="w-1/2 h-full flex flex-col text-white space-y-6">
          <h2 className="font-bold text-xl">Contact Us</h2>
          <h1 className="font-bold text-4xl">
            이승진 변호사가
            <br />
            직접 상담합니다.
          </h1>
          <p>
            채무로 인하여 고민하실 의뢰인을 위해 이승진 변호사가 직접
            <br />
            상담합니다. 인가결정을 받을 때까지 끝까지 함께합니다.
            <br />
            의뢰인의 경제적 재기가 곧, 우리의 목표입니다.
          </p>
        </article>
        {/* 오른쪽: 컨택트 폼 */}
        <article className="w-1/2 h-full ">
          <div className="w-full bg-slate-200 flex flex-col p-16 space-y-8">
            {/* 이름 */}
            <div className="flex flex-col space-y-2">
              <label>성함</label>
              <input
                onChange={inputChange}
                className="border py-4 px-2"
                type="text"
                placeholder="성함을 입력해주세요"
                name="name"
              />
            </div>
            {/* 이메일 */}
            <div className="flex flex-col space-y-2">
              <label>이메일</label>
              <input
                onChange={inputChange}
                className="border py-4 px-2"
                type="text"
                placeholder="이메일을 입력해주세요"
                name="email"
              />
            </div>
            {/* 메시지 */}
            <div className="flex flex-col space-y-2">
              <label>문의사항</label>
              <textarea
                name="message"
                onChange={inputChange}
                className="border py-4 px-2"
                rows={6}
                placeholder="문의사항을 남겨주세요"
              ></textarea>
            </div>
            {/* 버튼 */}
            <button
              onClick={handleSubmit}
              className="bg-[#b29459] py-4 text-white font-bold hover:bg-[#806737]"
            >
              전송하기
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
