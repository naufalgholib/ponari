import React, { FC } from "react";

type MessageItemProps = {
  message: string;
  position: "right" | "left";
};

const MessageItem: FC<MessageItemProps> = ({ message, position }) => {
  const baseStyle =
    "text-[24px] border-[2px] border-[#b3b3b1] rounded-[20px] w-[48%] p-4 mb-4";

  return (
    <div className={position === "right" ? "flex justify-end" : ""}>
      <div
        className={`${baseStyle} ${
          position === "right" ? "bg-black text-white" : ""
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageItem;