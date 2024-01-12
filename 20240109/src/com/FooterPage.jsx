import React from "react";
import { DiGithubBadge } from "react-icons/di";

export default function FooterPage() {
  return (
    <div className="w-full h-[100px] flex justify-center items-center  bg-red-500">
      <div>
        <div className=" text-[40px]">
          <DiGithubBadge />
        </div>
      </div>
    </div>
  );
}
