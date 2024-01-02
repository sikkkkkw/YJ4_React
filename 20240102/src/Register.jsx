import InputBox from "./InputBox";
import Logo from "./assets/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { useState } from "react";

export default function Register() {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    mobile: "",
  });
  const { email, password, password2, name, mobile } = form;
  const onClick = () => {
    setChecked(!checked);
  };
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClickBtn = () => {
    console.log("버튼 클릭");
    setShow(true);
  };
  return (
    <div className="w-full py-16 flex flex-col items-center justify-center space-y-16">
      {/* 인풋박스 컨테이너  */}
      <div className="max-w-sm w-full flex-col space-y-8">
        {/* 로고 */}
        <div className="h-16">
          <img className="w-full h-full object-contain" src={Logo} alt="로고" />
        </div>
        {/* 도움말 */}
        <div className="">회원 정보를 입력해주세요</div>
        {/* 인풋박스 */}
        <div className="w-full flex flex-col space-y-4 ">
          <InputBox
            ph="아이디(이메일)"
            iconImg={<HiOutlineMail />}
            onChange={onChange}
            name="email"
            value={email}
          />
          <InputBox
            ph="비밀번호"
            iconImg={<RiLockPasswordLine />}
            onChange={onChange}
            name="password"
            value={password}
          />
          <InputBox
            ph="비밀번호(확인)"
            iconImg={<RiLockPasswordLine />}
            onChange={onChange}
            name="password2"
            value={password2}
          />
          <InputBox
            ph="이름"
            iconImg={<IoPersonOutline />}
            onChange={onChange}
            name="name"
            value={name}
          />
          <InputBox
            ph="휴대폰 번호"
            iconImg={<FaMobileAlt />}
            onChange={onChange}
            name="mobile"
            value={mobile}
          />
        </div>
        {/* 체크박스 */}
        <div className="w-fullspace-x-2">
          <input type="checkbox" id="checkbox" onClick={onClick} />
          <label htmlFor="checkbox">모두 확인하였으며 동의합니다.</label>
        </div>
        {/* 버튼 */}
        <div>
          <button
            onClick={onClickBtn}
            disabled={checked ? false : true}
            className={`${
              checked ? "bg-blue-500 " : "bg-blue-200"
            } w-full py-3 text-white font-bold`}
          >
            동의하고 가입하기
          </button>
        </div>
      </div>
      {/* 버튼 클릭시 결과화면 */}
      {show && (
        <div className="max-w-sm w-full h-40 shadow-lg">
          <ul>
            <li>{email}</li>
            <li>{password}</li>
            <li>{password2}</li>
            <li>{name}</li>
            <li>{mobile}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
