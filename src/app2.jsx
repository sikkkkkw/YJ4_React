import Navigation from "./Nav";
import { FaArrowRight } from "react-icons/fa";

export default function App2() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* 메뉴바 */}
      <Navigation />
      <div className="w-full h-full flex justify-center py-16">
        <div className="w-full h-[600px] max-w-5xl flex rounded-3xl overflow-hidden">
          {/* 왼쪽 */}
          <div className="w-1/2 h-full flex flex-col bg-gray-100 justify-center px-20 space-y-16 font-bold text-3xl">
            <div>
              간편해진 일상만큼
              <br /> 보안도 걱정없이
            </div>
            <div>
              모두가 자유롭게
              <br />
              소통할 수 있도록
              <br />
              더욱 안전을 생각해요
            </div>
            <div>
              <div className="flex items-center space-x-1 bg-gray-300 px-8 py-2 rounded-2xl w-52 text-center ">
                <span className="text-xl">자세히 보기</span>{" "}
                <FaArrowRight size="14" />
              </div>
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="w-1/2 h-full bg-blue-400"></div>
        </div>
      </div>
    </div>
  );
}
