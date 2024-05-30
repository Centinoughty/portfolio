import Chat from "@/components/AboutMe/Chat";
import AboutPage from "@/components/AboutMe/AboutPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

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
      <Footer />
    </>
  );
}
