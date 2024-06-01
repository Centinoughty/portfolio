export default function AboutPage() {
  return (
    <div className="flex justify-center my-16 font-mont">
      <div className="flex flex-col gap-12 mm:gap-0 mm:flex-row justify-center mm:justify-between w-[90%] md:w-[80%] lg:w-[75%]">
        <div className="order-2 mm:order-1 h-full flex flex-col gap-3 justify-center text-lg text-left">
          <p className="flex items-center gap-4">I am doing my B.Tech in Computer Science from NIT Calicut.</p>
          <p className="flex items-center gap-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="flex items-center gap-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis!</p>
        </div>
        <div className="order-1 mm:order-2 flex flex-col gap-4 text-center items-center justify-center">
          <img className="rounded-full h-[220px] w-[220px] md:h-[250px] md:w-[250px]" src="/me1.jpg" />
          <h2 className="font-medium text-3xl text-[#037667]">Nadeem M Siyam</h2>
        </div>
      </div>
    </div>
  );
}
