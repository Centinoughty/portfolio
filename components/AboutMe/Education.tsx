import { education } from "@/data/about";

interface EducationItem {
  title: string;
  name: string;
  from: number;
  to: number | null;
}

export default function Education() {
  return (
    <div className="flex flex-col-reverse gap-4 space-y-6 p-3 m-3 rounded-lg shadow-sm">
      {education.map((item: EducationItem, index: number) => (
        <div
          key={index}
          className="p-4 rounded-lg font-mont bg-white/20 hover:bg-white/30"
        >
          <h2 className="text-xl font-semibold text-black">{item.title}</h2>
          <h3 className="text-base font-semibold text-black/60">{item.name}</h3>
          <p className="text-gray-400">
            {item.from} - {item.to ? item.to : "Present"}
          </p>
        </div>
      ))}
    </div>
  );
}
