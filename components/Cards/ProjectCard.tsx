import Button from "@/util/Button";

interface ProjectCardProps {
  project: {
    id: number;
    image: string;
    name: string;
    url: string;
    gitHub: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="font-mont flex flex-col gap-2 justify-center p-2 m-2">
      <img
        src={project.image}
        alt={project.name}
        className="mx-auto h-[300px] rounded-t-2xl"
      />

      <p className="text-xl">{project.name}</p>
      <div className="flex gap-2 justify-center">
        <Button
          label="READ MORE"
          url={project.url}
          onNewPage={false}
          download={false}
          className="px-2 py-1 rounded-md border-black border-2 text-stone-200 bg-yellow-800"
        />
        <Button
          label="OPEN IN GITHUB"
          url={project.gitHub}
          download={false}
          onNewPage
          className="px-2 py-1 rounded-md border-black border-2 bg-yellow-500"
        />
      </div>
    </div>
  );
}
