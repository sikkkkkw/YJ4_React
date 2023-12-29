import { useState } from "react";

export default function Q() {
  const [useremail, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userpasswd, setPasswd] = useState("");
  const [confirmPasswd, setConfirmPasswd] = useState("");
  const [usephone, setPhone] = useState("");
  const [showUserData, setShowUserData] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangePasswd = (e) => setPasswd(e.target.value);
  const onChangeConfirmPasswd = (e) => setConfirmPasswd(e.target.value);
  const onChangephone = (e) => {
    const phoneValue = e.target.value;
    // 숫자만 입력되도록 체크
    if (!/^[0-9]*$/.test(phoneValue)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
      // 휴대폰 번호를 11자로 제한
      setPhone(phoneValue.slice(0, 11));
    }
  };

  const onClick = () => {
    if (
      userpasswd === confirmPasswd &&
      !phoneError &&
      usephone.length === 11 &&
      !emailError
    ) {
      setRegistrationSuccess(true);
      setShowUserData(true);
      setPasswordMismatch(false);
    } else {
      setRegistrationSuccess(false);
      setShowUserData(false);
      setPasswordMismatch(true);
    }
  };

  const onBlurEmail = () => {
    // 이메일 형식 체크
    if (!/\S+@\S+\.\S+/.test(useremail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex-col items-center flex">
        <h1 className="flex text-5xl">coupang</h1>
        <p className="mt-5">회원정보를 입력해주세요</p>
        <input
          className={`border w-[300px] h-[40px] mt-5 ${
            emailError ? "border-red-500" : ""
          }`}
          type="text"
          name="email"
          placeholder="아이디(이메일)"
          value={useremail}
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
        />
        {emailError && (
          <p style={{ color: "red" }}>올바른 이메일 형식이 아닙니다.</p>
        )}

        <input
          className=" border w-[300px] h-[40px] mt-5"
          type="password"
          name="passwd"
          placeholder="비밀번호"
          value={userpasswd}
          onChange={onChangePasswd}
        />
        <input
          className=" border w-[300px] h-[40px] mt-5"
          type="password"
          name="confirmPasswd"
          placeholder="비밀번호 확인"
          value={confirmPasswd}
          onChange={onChangeConfirmPasswd}
        />
        <input
          className=" border w-[300px] h-[40px] mt-5"
          type="text"
          name="username"
          placeholder="이름"
          value={username}
          onChange={onChangeUsername}
        />
        <input
          className={`border w-[300px] h-[40px] mt-5 ${
            phoneError ? "border-red-500" : ""
          }`}
          type="text"
          name="pd"
          placeholder="휴대폰 번호"
          value={usephone}
          onChange={onChangephone}
        />

        <button
          className=" w-[300px] h-[40px] bg-blue-800 text-white mt-5"
          onClick={onClick}
        >
          동의하고 가입하기
        </button>
        {phoneError && <p style={{ color: "red" }}>숫자만 입력하세요.</p>}
        {usephone.length !== 11 && (
          <p style={{ color: "red" }}>휴대폰 번호는 11자여야 합니다.</p>
        )}
        {passwordMismatch && (
          <p style={{ color: "red" }}>
            비밀번호가 일치하지 않거나 휴대폰 번호가 올바르지 않습니다.
          </p>
        )}
        {showUserData && (
          <div>
            <p>Email: {useremail}</p>
            <p>Password: {userpasswd}</p>
            <p>Username: {username}</p>
            <p>Phone: {usephone}</p>
          </div>
        )}
        {registrationSuccess && (
          <p style={{ color: "green" }}>회원가입을 성공했습니다.</p>
        )}
      </div>
    </div>
  );
}
