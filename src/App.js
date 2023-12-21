import "./App.css";
import Nav from "./Nav";
import SnowPic from "./asset/phone.jpg";
function App() {
  return (
    //중앙 정렬을 시키기 위한 div
    <div className="w-full flex flex-col justify-center">
      {/* 메뉴 컴포넌트 */}
      <Nav />
      <div className="w-full h-[100vh] flex justify-center items-center space-x-0">
        {/* 왼쪽 */}
        <div className="flex flex-col space-x-8">
          {/* 타이틀 */}
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="font-bold text-4xl  bg-gray-200  h-[500px] p-5">
              간편해진 일상만큼
              <br />
              보안도 걱정없이
              <br />
              <br />
              모두가 자유롭게
              <br /> 소통할 수 있도록
              <br />
              더욱 안전을 생각해요
              <br />
              <br />
              <button className=" text-sm w-[100px] h-[40px] bg-slate-500 rounded-3xl">
                자세히 보기
              </button>
            </div>
          </div>
        </div>
        {/* 오른쪽 이미지 */}
        <div className="w-[400px] h-[500px] border-4 border-blue-500 rounded-2xl">
          <img
            className="w-full h-full object-cover"
            src={SnowPic}
            alt="snow"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
