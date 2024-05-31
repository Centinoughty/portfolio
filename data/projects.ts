interface ProjectsProps {
  id: number;
  image: string;
  name: string;
  description: string;
  url: string;
  gitHub: string;
}

export const projects: { [key: string]: ProjectsProps } = {
  Portfolio: {
    id: 85907,
    image: "/projects/portfolio-webiste.png",
    name: "Porfolio Website",
    description: "My portfolio website, showcasing my skills",
    url: "https://nadeemsiyam.vercel.app",
    gitHub: "https://github.com/Centinoughty/portfolio",
  },
};
