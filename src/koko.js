import "./App.css";
import Nav from "./Nav";
import SnowPic from "./asset/phone.jpg";
function App() {
  return (
    //중앙 정렬을 시키기 위한 div
    <div className="w-full flex flex-col justify-center">
      {/* 메뉴 컴포넌트 */}
      <Nav />
      <div className="w-full h-[100vh] flex justify-center items-center space-x-32">
        {/* 왼쪽 */}
        <div className="flex flex-col space-x-8">
          {/* 타이틀 */}
          <div className="font-bold text-[40px]">실험실</div>
          {/* 내용 */}
          <div className="w-[300px]">
            새로운 기능이 추가되기 전 실험실을 통해 반응을 살펴보고 있어요.
            정식으로 술시된 기능은아니지만, 다양한 시도를 하고 있는 카카오팀을
            지켜봐 주세요.
          </div>
        </div>
        {/* 오른쪽 이미지 */}
        <div className="w-[200px] h-[400px] border-4 border-blue-500 rounded-2xl">
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
