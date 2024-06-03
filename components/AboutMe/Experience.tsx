import { experience } from "@/data/about";

interface ExperienceItem {
  title: string;
  from: number;
  to: number | null;
}

export default function Experience() {
  return (
    <div className="flex flex-col-reverse gap-4 space-y-6 p-3 m-3 rounded-lg shadow-sm">
      {experience.map((item: ExperienceItem, index: number) => (
        <div
          key={index}
          className="p-4 rounded-lg font-mont bg-white/20 hover:bg-white/30"
        >
          <h3 className="text-xl font-semibold text-black">{item.title}</h3>
          <p className="text-gray-400">
            {item.from} - {item.to ? item.to : "Present"}
          </p>
        </div>
      ))}
    </div>
  );
}
