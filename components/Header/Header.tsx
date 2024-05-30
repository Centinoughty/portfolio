import { useEffect, useState } from "react";
import { headerContent } from "../../data/content";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrolled, setLastScrolled] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (currentScroll > lastScrolled) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }

    setLastScrolled(currentScroll);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`flex justify-center ${
        isSticky ? "sticky top-0" : "relative"
      } `}
    >
      <header className="py-2">
        <ul
          className={`px-2 py-1 flex gap-2 @screen xs:gap-6 sm:gap-4 rounded-full transition duration-500 ${
            isScrolled ? " bg-white/50 backdrop-blur-[2px]" : " backdrop-blur-0"
          }`}
        >
          {Object.keys(headerContent).map((tab, index) => (
            <Link
              href={headerContent[tab]}
              key={index}
              className="font-mont sm:px-2 text-lg sm:text-xl hover:font-semibold rounded-full"
            >
              {tab}
            </Link>
          ))}
        </ul>
      </header>
    </div>
  );
}
