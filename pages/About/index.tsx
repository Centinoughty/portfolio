import AboutPage from "@/components/AboutMe/AboutPage";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LeetCode from "@/components/Cards/LeetCodeCard";
import CodeForcesCard from "@/components/Cards/CodeForcesCard";

export default function About() {
  return (
    <>
      <Header />
      <AboutPage />
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
