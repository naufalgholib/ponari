import React, { FC } from "react";

type BadgeProps = {
  title: string;
  color: "warning" | "success" | "gray";
};

const Badge: FC<BadgeProps> = ({ title, color }) => {
  return (
    <span
      className={`flex justify-center items-center w-[130px] h-[40px] ${
        color === "warning"
          ? "bg-[#FFFDBE]"
          : color === "success"
          ? "bg-[#d1ffe4]"
          : "bg-[#d9d9d9]"
      } rounded-[20px]`}
    >
      {title}
    </span>
  );
};

export default Badge;