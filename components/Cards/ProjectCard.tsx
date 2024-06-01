import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    id: number;
    open: boolean;
    image: string;
    name: string;
    description: string;
    url: string;
    gitHub: string;
  };
}

const buttonClasses =
  "flex gap-2 px-2 py-1 items-center border-2 rounded-md border-black text-lg bg-black text-[#ede7de]";

export default function ProjectCard({ project }: ProjectCardProps) {
  function handleOpen(url: string, target: string) {
    if (url) {
      window.open(url, target);
    }
  }

  return (
    <div className="max-w-[350px] xs:max-w-[450px] xs:min-w-[400px] w-full py-4 font-mont flex flex-col gap-4 m-2 mx-auto border-2 border-black duration-300 hover:scale-[1.01] hover:shadow-md">
      <button>
        <img
          src={project.image}
          alt={project.name}
          className="mx-auto w-[350px] h-[205px] rounded-t-2xl"
        />
      </button>
      <p className="text-xl font-medium">{project.name}</p>
      <p className="mx-1 my-1">{project.description}</p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => handleOpen(project.gitHub, "_blank")}
          className={buttonClasses}
        >
          <FaGithub size={25} className="text-[#ede7de]" />
          GitHub
        </button>
        <button
          onClick={() => handleOpen(project.url, "_self")}
          className={`${buttonClasses} ${
            project.open ? "visible" : "hidden"
          }`}
        >
          <FaExternalLinkSquareAlt size={20} />
          Open
        </button>
      </div>
    </div>
  );
}
