import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demo Ponari",
  description: "testing demo Ponari app",
};

const sidebarNav = (
  <div className="flex gap-[16px] items-center">
    <h2 className="text-[24px] font-bold">dr. Iqbal A.</h2>

    <div className="cursor-pointer">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="32" fill="#DBDBDB" />
        <rect
          width="24"
          height="24"
          transform="translate(20 20)"
          fill="#DBDBDB"
        />
        <path
          d="M32 34C33.3845 34 34.7378 33.5895 35.889 32.8203C37.0401 32.0511 37.9373 30.9579 38.4672 29.6788C38.997 28.3997 39.1356 26.9922 38.8655 25.6344C38.5954 24.2765 37.9287 23.0292 36.9497 22.0503C35.9708 21.0713 34.7235 20.4046 33.3656 20.1345C32.0078 19.8644 30.6003 20.003 29.3212 20.5328C28.0421 21.0627 26.9489 21.9599 26.1797 23.111C25.4105 24.2622 25 25.6155 25 27C25 28.8565 25.7375 30.637 27.0503 31.9497C28.363 33.2625 30.1435 34 32 34ZM32 22C32.9889 22 33.9556 22.2932 34.7779 22.8427C35.6001 23.3921 36.241 24.173 36.6194 25.0866C36.9978 26.0002 37.0969 27.0055 36.9039 27.9755C36.711 28.9454 36.2348 29.8363 35.5355 30.5355C34.8363 31.2348 33.9454 31.711 32.9755 31.9039C32.0055 32.0969 31.0002 31.9978 30.0866 31.6194C29.173 31.241 28.3921 30.6001 27.8427 29.7779C27.2932 28.9556 27 27.9889 27 27C27 25.6739 27.5268 24.4022 28.4645 23.4645C29.4021 22.5268 30.6739 22 32 22Z"
          fill="black"
        />
        <path
          d="M33 36H31C28.0826 36 25.2847 37.1589 23.2218 39.2218C21.1589 41.2847 20 44.0826 20 47C20 47.2652 20.1054 47.5196 20.2929 47.7071C20.4804 47.8946 20.7348 48 21 48H43C43.2652 48 43.5196 47.8946 43.7071 47.7071C43.8946 47.5196 44 47.2652 44 47C44 44.0826 42.8411 41.2847 40.7782 39.2218C38.7153 37.1589 35.9174 36 33 36ZM22.06 46C22.3059 43.8006 23.3535 41.769 25.0027 40.2932C26.6518 38.8175 28.7869 38.0011 31 38H33C35.2131 38.0011 37.3482 38.8175 38.9973 40.2932C40.6465 41.769 41.6941 43.8006 41.94 46H22.06Z"
          fill="black"
        />
      </svg>
    </div>
  </div>
);

export default function DashboardReceptionistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}} antialiased`}>
        <Navbar rightSide={sidebarNav} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
