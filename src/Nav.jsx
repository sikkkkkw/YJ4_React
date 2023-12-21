import { FaSearch } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
export default function Nav() {
  return (
    <div className="w-full h-[80px] flex justify-center border border-b-[1px]">
      {/* 최대 1440px 유지하기 위한 영역 */}
      {/* 메뉴 설정 */}
      <section className="max-w-7xl w-full h-full flex justify-center items-center space-x-20">
        {/* 로고영역 */}
        <div className="font-black ">
          KaKao<b>talk</b>
        </div>
        {/* 메뉴영역 */}
        <div className="flex space-x-4 ">
          <div>안녕캠페인</div>
          <div>운영철학</div>
          <div>안전 도구 및 가이드라인</div>
          <div>운영정책</div>
          <div>자동감지와신고</div>
          <div>서비스 이용제한의종류</div>
        </div>
        <div className="flex justify-space-around space-x-8">
          <div>
            <FaSearch />
          </div>
          <div>
            <FaRegMoon />
          </div>
          <div>
            <IoGlobeOutline />
          </div>
        </div>
      </section>
    </div>
  );
}
