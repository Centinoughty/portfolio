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
      <section className="p-4 flex justify-center font-mont">
        <p className="w-[90%] sm:w-[80%] md:[70%] lg:w-[60%] text-lg text-center md:text-justify">
          Passionate about coding with expertise in Python, C++, JavaScript, and
          other programming languages. I have worked on full-stack projects for
          startup companies, bringing innovative solutions to life. Always eager
          to learn and tackle new challenges, I enjoy working in dynamic
          environments where I can contribute to the success of the team and the
          project. I bring a versatile skill set and a dedication to excellence
          to every project I undertake. Let's connect and explore opportunities
          to create something amazing together!
        </p>
      </section>
      <section className="my-16 flex justify-center">
        <p className="w-[90%] sm:w-[80%] md:[70%] lg:w-[60%] text-center font-diph font-bold text-xl md:text-2xl text-[#037667]">
          Besides technology, I enjoy drinking coffee. Maybe we should grab a
          cup sometime!
        </p>
      </section>
      <Footer />
    </Layout>
  );
}
