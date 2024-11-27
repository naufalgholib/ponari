import Back from "@/components/Back";
import Badge from "@/components/Badge";
import Each from "@/utils/Each";
import React, { FC } from "react";
import MessageItem from "./MessageItem";

const Message: FC = () => {
  return (
    <section className="max-w-[1310px] mx-auto py-6">
      <Back href="/dashboard-as-receptionist/contact-doctor" />
      <div className="h-[1034px] w-full border-[2px] border-[#b3b3b1] rounded-[40px] px-14 py-6 mt-8">
        <div>
          <h2 className="text-[45px] font-bold">dr. Adam H.</h2>
          <p className="text-[35px] font-bold text-[#b3b3b1]">
            General Practitioner
          </p>
          <Badge color="success" title="Available" />

          <div className="flex items-center gap-4 mt-4">
            <div>
              <svg
                width="25"
                height="30"
                viewBox="0 0 25 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.917 21.1501V24.9001C22.9182 25.2482 22.8587 25.5928 22.7425 25.9118C22.6263 26.2308 22.4558 26.5171 22.2421 26.7525C22.0283 26.9878 21.7759 27.167 21.5011 27.2785C21.2263 27.39 20.9351 27.4315 20.6461 27.4001C17.4408 26.9822 14.3618 25.6678 11.6566 23.5626C9.13972 21.6435 7.00588 19.0828 5.40657 16.0626C3.64613 12.8016 2.55057 9.08886 2.20865 5.22512C2.18262 4.87945 2.21685 4.53107 2.30917 4.20215C2.40149 3.87323 2.54987 3.57098 2.74486 3.31465C2.93986 3.05831 3.1772 2.85351 3.44177 2.71327C3.70633 2.57304 3.99234 2.50045 4.28157 2.50012H7.40657C7.91209 2.49415 8.40218 2.70897 8.78549 3.10454C9.16879 3.5001 9.41915 4.04943 9.4899 4.65012C9.6218 5.8502 9.86641 7.02853 10.2191 8.16262C10.3592 8.61003 10.3895 9.09626 10.3065 9.56372C10.2234 10.0312 10.0304 10.4603 9.75032 10.8001L8.4274 12.3876C9.91027 15.5171 12.0695 18.1082 14.6774 19.8876L16.0003 18.3001C16.2835 17.964 16.6411 17.7324 17.0306 17.6327C17.4202 17.533 17.8254 17.5694 18.1982 17.7376C19.1433 18.1608 20.1252 18.4543 21.1253 18.6126C21.6313 18.6983 22.0934 19.0041 22.4238 19.472C22.7541 19.9398 22.9297 20.5371 22.917 21.1501Z"
                  stroke="#B3B3B1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="text-[25px] font-bold text-[#a49797]">
              <p>adamdoctor@ponari.med</p>
              <p>a0812-3456-7890</p>
              <p>Monday - Friday, 08.00 - 16.00</p>
            </div>
          </div>
        </div>

        <div className="h-[600px">
          <h2 className="text-[40px] font-bold">Messages</h2>

          <div className="px-4 mt-4 w-full h-[445px] flex flex-col-reverse overflow-y-scroll">
            <Each
              of={[1, 2, 3, 4]}
              render={(item) => {
                if (item === 1 || item === 2 || item === 3)
                  return (
                    <MessageItem
                      message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptatem tempore perferendis a sit numquam illo ex doloribus
                unde necessitatibus, alias tenetur architecto labore, fugiat
                nostrum accusantium ad quas reiciendis ea. Amet, error
                architecto repellat esse dolore, itaque dolorem excepturi quos
                mollitia fugit voluptatem vero, debitis quasi ab vel blanditiis."
                      position="left"
                    />
                  );

                return (
                  <MessageItem
                    message="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, at!"
                    position="right"
                  />
                );
              }}
            />
            {/* <div className="">
              <div className="text-[24px] border-[2px] border-[#b3b3b1] rounded-[20px] w-[48%] p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, at!
              </div>
            </div>

            <div className="flex justify-end">
              <div className="text-[24px] border-[2px] border-[#b3b3b1] rounded-[20px] w-[48%] p-4 bg-black text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, at!
              </div>
            </div>

            <div className="">
              <div className="text-[24px] border-[2px] border-[#b3b3b1] rounded-[20px] w-[48%] p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                voluptatem tempore perferendis a sit numquam illo ex doloribus
                unde necessitatibus, alias tenetur architecto labore, fugiat
                nostrum accusantium ad quas reiciendis ea. Amet, error
                architecto repellat esse dolore, itaque dolorem excepturi quos
                mollitia fugit voluptatem vero, debitis quasi ab vel blanditiis.
              </div>
            </div>
            <div className="">
              <div className="text-[24px] border-[2px] border-[#b3b3b1] rounded-[20px] w-[48%] p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, at!
              </div>
            </div>

            <div className="">
              <div className="text-[24px] border-[2px] border-[#b3b3b1] rounded-[20px] w-[48%] p-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
                eaque ipsum corrupti aut impedit harum nostrum accusantium,
                perspiciatis aperiam aliquam!
              </div>
            </div> */}
          </div>

          <div className="flex justify-between items-center mt-8">
            <input
              type="text"
              className="w-[1054px] h-[88px] border border-[#a49797] p-4 placeholder:text-[40px] text-[40px] rounded-[20px]"
              placeholder="Type your message..."
            />

            <button className="bg-black h-[88px] w-[113px] rounded-[20px] text-white">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;