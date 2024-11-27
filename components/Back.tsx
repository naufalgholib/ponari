import Link from "next/link";
import React, { FC } from "react";

type BackProps = {
  href: string;
};

const Back: FC<BackProps> = ({ href }) => {
  return (
    <Link href={href} className="flex items-center gap-3">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.65 18L18.85 29.2L16 32L0 16L16 0L18.85 2.8L7.65 14H32V18H7.65Z"
          fill="#B3B3B1"
        />
      </svg>

      <span className="text-[36px] font-bold text-[#b3b3b1]"> Back</span>
    </Link>
  );
};

export default Back;