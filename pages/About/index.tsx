import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import LeetCode from "@/components/Cards/LeetCodeCard";
import CodeForcesCard from "@/components/Cards/CodeForcesCard";
import Layout from "@/components/Layout/Layout";
import Education from "@/components/AboutMe/Education";

export default function About() {
  return (
    <Layout title="Nadeem M Siyam • About">
      <Header />
      <section className="flex flex-col gap-4 justify-center items-center my-16">
        <img
          src="/nadeem.jpg"
          className="rounded-full h-[220px] w-[220px] md:h-[250px] md:w-[250px]"
        />
        <h2 className="font-medium font-mont text-3xl text-[#037667]">
          Nadeem M Siyam
        </h2>
      </section>
      <section className="flex justify-center">
        <div className="flex flex-col xm:flex-row my-6">
          <div className="xm:order-1 flex justify-center items-center xm:ml-16">
            <h2 className="text-3xl xm:text-6xl font-diph font-bold text-[#037667]">
              EDUCATION
            </h2>
          </div>
          <Education />
        </div>
      </section>
      <section className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-4 justify-center my-16">
          <LeetCode />
          <CodeForcesCard />
        </div>
      </section>
      <section className="my-16">
        <p className="text-center font-diph font-bold text-xl md:text-2xl text-[#037667]">
          Besides technology, I enjoy drinking coffee. Maybe we should grab a
          cup sometime!
        </p>
      </section>
      <Footer />
    </Layout>
  );
}
