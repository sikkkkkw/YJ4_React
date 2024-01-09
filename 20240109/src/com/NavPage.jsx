import Logo from "../assets/logo.png";
import { FaPlus } from "react-icons/fa";
export default function NavPage() {
  return (
    <div className="w-full h-[60px] bg-[#032541] flex justify-center">
      {/* 중앙정렬된 네비게이션 컨테이너 */}
      <div className="max-w-[1300px] h-full w-full flex justify-between">
        {/* 왼쪽:로고+메뉴 */}
        <div className="h-full flex space-x-8">
          {/* 로고 */}
          <div className="h-full w-[200px] flex items-center">
            <img src={Logo} alt="main-LoGo" />
          </div>
          <div className="h-full flex text-white font-bold items-center space-x-6">
            <p>Movies</p>
            <p>TV Shows</p>
            <p>Peolee</p>
            <p> more</p>
            {/* 메뉴 */}
          </div>
        </div>
        {/* 오른쪽:아이콘 영역 */}
        <div className="flex h-full items-center space-x-6">
          {/* 플러스 버튼 */}
          <div className="text-white">
            <FaPlus />
          </div>
          {/* 랭귀지 선택 */}
          <div className="border border-white text-white px-2 text-xs p-1 hover:bg-white hover:text-[#032541] ">
            EN
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
