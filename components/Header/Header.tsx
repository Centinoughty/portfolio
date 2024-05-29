import { headerContent } from "../../data/content";

export default function Header() {
  return (
    <div className="flex justify-center">
      <header className="py-1">
        <ul className="px-2 py-1 flex gap-4">
          {Object.keys(headerContent).map((tab, index) => (
            <a href={headerContent[tab]} key={index} className="font-mont text-xl hover:font-semibold">
              {tab}
            </a>
          ))}
        </ul>
      </header>
    </div>
  );
}
