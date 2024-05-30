interface ProjectsProps {
  id: number;
  image: string;
  name: string;
  url: string;
  gitHub: string;
}

export const projects: { [key: string]: ProjectsProps } = {
  Portfolio: {
    id: 85907,
    image: "/projects/portfolio-webiste.png",
    name: "Porfolio Website",
    url: "nadeemsiyam.vercel.app",
    gitHub: "https://github.com/Centinoughty/portfolio",
  },
};
