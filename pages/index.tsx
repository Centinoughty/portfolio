import Footer from "@/components/Footer/Footer";
import Header from "../components/Header/Header";
import TypingEffect from "@/util/TypingEffect";
import { typingData } from "@/data/content";
import Skill from "@/components/Skills/Skill";
import Button from "@/util/Button";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-6 my-16 items-center text-center text-[#037667]">
        <img
          src="/me1.jpg"
          className="rounded-full justify-self-center h-[250px] w-[250px]"
        />
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-diph font-bold">
          Hi. I'm Nadem
        </h1>
        <p className="text-3xl md:text-4xl font-mont">
          A <TypingEffect data={typingData} />
        </p>
      </main>
      <Skill />
      <Footer />
    </>
  );
}
