import Each from "@/utils/Each";
import React, { FC } from "react";

const LastPatient: FC = () => {
  return (
    <div className="py-6 px-8 space-y-8 h-full overflow-y-scroll overflow-x-hidden">
      <Each
        of={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        render={(item) => (
          <div
            key={item}
            className="flex justify-around items-center bg-white w-[961px] h-[128px] py-4 px-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-[32px]">26 Nov 2023</h2>
              <p className="text-[12px]">09.00 - 10.00</p>
            </div>

            <div className="w-[1px] h-[65px] bg-[#BFBFBF]"></div>

            <div>
              <p className="text-[12px] text-[#A0A0A0]">Treatment</p>
              <p className="text-[20px] font-bold">Open Access</p>
            </div>

            <div className="w-[1px] h-[65px] bg-[#BFBFBF]"></div>

            <div>
              <p className="text-[12px] text-[#A0A0A0]">patient</p>
              <p className="text-[20px] font-bold">John</p>
            </div>

            <div>
              <button className="h-[40px] w-[130px] border border-black hover:bg-slate-50 transition-all">
                Visit
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default LastPatient;
