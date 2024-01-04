import { useState } from "react";
export default function Marvel() {
  const [lists, setLists] = useState([]);
  fetch(
    "https://gateway.marvel.com:443/v1/public/comics?apikey=e4e2caf51f74aae0352ca05fb6f4d979"
  )
    .then((res) => res.json())
    .then((data) => {
      setLists(data?.data?.results);
    });

  return (
    <div className="w-full  flex justify-center">
      {/* 중앙 정렬된 컨테이너 */}
      <section className="max-w-7xl w-full h-full flex flex-wrap gap-4 bg-red-300 justify-center py-32">
        {lists?.map((item, index) => (
          <div
            className="w-[240px] h-[360px]  bg-white border border-gray-300 rounded-xl flex-col"
            key={index}
          >
            {/* 이미지 */}
            <div className="w-full h-[280px] bg-blue-500">
              <img
                className="object-cover object-center w-full h-full"
                src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                alt="이미지"
              />
            </div>
            {/* 타이틀 */}
            <div>{item.title}</div>

            {/* 설명 */}
          </div>
        ))}
      </section>
    </div>
  );
}
