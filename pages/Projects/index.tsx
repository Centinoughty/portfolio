import ProjectCard from "@/components/Cards/ProjectCard";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Layout title="Nadeem M Siyam • Projects">
      <Header />
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-diph font-bold text-center text-[#037667] my-8">
        Projects
      </h1>
      <section className="my-16 grid gap-x-0 gap-4 grid-cols-1 justify-center mx-auto md:grid-cols-2 lm:grid-cols-3 text-center">
        {Object.keys(projects).length > 0 ? Object.keys(projects).map((project) => (
          <ProjectCard key={projects[project].id} project={projects[project]} />
        )) : <p>No Project</p>}
      </section>
      <Footer />
    </Layout>
  );
}
