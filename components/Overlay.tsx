import React, { FC } from "react";

type OverlayProps = {
  children: React.ReactNode;
};

const Overlay: FC<OverlayProps> = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-40 z-50 no-doc-scroll flex justify-center items-center">
      {children}
    </div>
  );
};

export default Overlay;
