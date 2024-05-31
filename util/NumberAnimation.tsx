import { useSpring, animated } from "react-spring";

interface NumberProps {
  n: number;
  delay: number;
}

export default function NmberAnimation({ n, delay }: NumberProps) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: delay,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
