import Footer from "@/components/Footer/Footer";
import Header from "../components/Header/Header";
import TypingEffect from "@/util/TypingEffect";
import { typingData } from "@/data/content";
import Skill from "@/components/Skills/Skill";
import Framework from "@/components/Frameworks/Framework";
import Layout from "@/components/Layout/Layout";
import ContactCard from "@/components/Cards/ContactCard";
import ConnectCard from "@/components/Cards/ConnectCard";

export default function Home() {
  return (
    <Layout title="Nadeem M Siyam • Home">
      <Header />
      <main className="flex flex-col gap-6 my-16 items-center text-center text-[#037667]">
        <img
          src="/nadeem.jpg"
          className="rounded-full justify-self-center h-[220px] w-[220px] md:h-[250px] md:w-[250px]"
        />
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-diph font-bold">
          Hi. I'm Nadeem.
        </h1>
        <p className="text-3xl md:text-4xl font-mont">
          <TypingEffect data={typingData} />
        </p>
        <p className="text-black font-diph text-xl">
          "The only way to do great work is to love what you do." - Steve Jobs
        </p>
      </main>
      <Skill />
      <Framework />
      <section className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 p-8 font-mont">
        <ContactCard />
        <ConnectCard />
      </section>
      <Footer />
    </Layout>
  );
}
