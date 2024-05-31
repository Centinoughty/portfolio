import Chat from "@/components/AboutMe/Chat";
import AboutPage from "@/components/AboutMe/AboutPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useState } from "react";
import LeetCode from "@/components/Cards/LeetCodeCard";
import CodeForcesCard from "@/components/Cards/CodeForcesCard";

export default function About() {
  const [isChatType, setIsChatType] = useState(false);

  function toggleView() {
    setIsChatType((prev) => !prev);
  }

  return (
    <>
      <Header />
      <button onClick={toggleView}>Toggle</button>
      {isChatType ? <Chat /> : <AboutPage />}
      <section className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-4 justify-center my-16">
          <LeetCode />
          <CodeForcesCard />
        </div>
      </section>
      <Footer />
    </>
  );
}
