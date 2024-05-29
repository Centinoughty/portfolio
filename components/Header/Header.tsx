import { useEffect, useState } from "react";
import { headerContent } from "../../data/content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll () {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="flex justify-center sticky top-0">
      <header className="py-2">
        <ul className={`px-2 py-1 flex gap-2 sm:gap-4 rounded-full transition duration-500 ${isScrolled ? ' bg-white/50 backdrop-blur-[2px]' : ' backdrop-blur-0'}`}>
          {Object.keys(headerContent).map((tab, index) => (
            <a
              href={headerContent[tab]}
              key={index}
              className="font-mont sm:px-2 text-lg sm:text-xl hover:font-semibold rounded-full"
            >
              {tab}
            </a>
          ))}
        </ul>
      </header>
    </div>
  );
}
