import { useEffect } from "react";
import Typed from "typed.js";

interface TypingEffectProps {
  data: string[];
}

export default function TypingEffect({ data }: TypingEffectProps) {
  useEffect(() => {
    const typingEffect = new Typed(".typing", {
      strings: data,
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    return () => {
      typingEffect.destroy();
    }
  }, []);

  return <span className="typing"></span>;
}
