import { FaAngular, FaNode, FaReact, FaVuejs } from "react-icons/fa";

export default function Framework() {
  return (
    <>
      <p className="font-diph font-bold text-4xl text-center text-[#037667] mt-16">Frameworks & Libraries</p>
      <div className="flex justify-center mt-16 mb-24">
        <div className="flex gap-6 xs:gap-10">
          <FaReact size={50} />
          <FaNode size={50} />
          <FaAngular size={50} />
          <FaVuejs size={50} />
          <img src="/next-js.svg" className="h-[50px] w-[50px]" />
        </div>
      </div>
    </>
  );
}
