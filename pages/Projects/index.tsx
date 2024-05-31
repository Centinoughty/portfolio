import ProjectCard from "@/components/Cards/ProjectCard";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      <Header />
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-diph font-bold text-center text-[#037667] my-16">
        Projects
      </h1>
      <section className="my-16 mx-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
        {Object.keys(projects).length > 0 ? Object.keys(projects).map((project) => (
          <ProjectCard key={projects[project].id} project={projects[project]} />
        )) : <p>No Project</p>}
      </section>
      <Footer />
    </>
  );
}
