import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Ollama-GPT",
    description:
      "Developed a chat LLM (Gemma:2b), enabling message streaming, chat management, and persistent storage.",
    githubLink: "https://github.com/Sandeshjadhav22/Ollama-chat-client",
    deployLink: "https://github.com/Sandeshjadhav22/Ollama-chat-client",
    image: "/ollama-client.png",
    tech: ["Typescript", "Nodejs", "Ollama:2b", "postgreSql"],
  },

  {
    id: 2,
    name: "ControlHub.AI",
    description:
      "Developed a TypeScript-based smart light control server using Model Context Protocol (MCP) for seamless interaction",
    githubLink: "https://github.com/Sandeshjadhav22/ControlHub-Ai",
    deployLink: "https://github.com/Sandeshjadhav22/ControlHub-Ai",
    image: "/controlhub.png",
    tech: ["Typescript", "Nodejs", "MCP"],
  },
   {
    id: 3,
    name: "ApiVault",
    description: "Secure API Key Management for Developers.",
    githubLink: "https://github.com/Sandeshjadhav22/apivalut",
    deployLink: "https://apivalut.vercel.app/",
    image: "/ApiVault.jpg",
    tech: ["Nextjs", "ShadCn", "Typescript", "Zod", "JWT"],
  },
  {
    id: 4,
    name: "Movix",
    description:
      "A web application that allows users to discover millions of Tvs and shows.",
    githubLink: "https://github.com/Sandeshjadhav22/Movix",
    deployLink: "https://movix-eight-weld.vercel.app/",
    image: "/movix.jpg",
    tech: ["React", "Axios", "React-redux"],
  },

  {
    id: 5,
    name: "Elib",
    description:
      "A Fullstack web-based dashboard that manage & store Books like a library.",
    githubLink: "https://github.com/Sandeshjadhav22/elib-client",
    deployLink: "https://github.com/Sandeshjadhav22/elib-client",
    image: "/elib.jpg",
    tech: ["Nextjs", "Node", "Typescript", "JWT", "Router"],
  },
  {
    id: 6,
    name: "Zscrum",
    description: "A Fullstack project management solution.",
    githubLink: "https://github.com/Sandeshjadhav22/scrum",
    deployLink: "https://scrum-henna.vercel.app/",
    image: "/zscrum.jpg",
    tech: ["Nextjs", "ShadCn", "Javascript", "Zod"],
  },
 

  {
    id: 7,
    name: "CareHub",
    description:
      "A Fullstack web app that helps users to get appoinments for consultaions and progress.",
    githubLink: "https://github.com/Sandeshjadhav22/Hospital-management",
    deployLink: "https://hospital-management-frontend-ashy.vercel.app/",
    image: "/hospital.jpg",
    tech: ["React", "Node", "Express", "Axios", "JWT", "Express"],
  },
];

const Projects = () => {
  return (
    <section
      id="Projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="text-gray-400 max-w-[700px] mx-auto">
            Check out some of the projects Ive worked on. Each project showcases
            my skills in web development, design, and problem solving.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mt-8">
          {projects.map((project) => {
            return (
              <Card
                key={project.id}
                className="bg-gray-900 text-gray-50  transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-105 duration-300 "
              >
                <Image
                  alt={project.name}
                  className="aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  height="310"
                  src={project.image}
                  width="550"
                />
                <CardContent className="p-4 space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-lg font-bold">{project.name}</h1>
                    </div>
                    <div className="flex gap-3">
                      <div>
                        {" "}
                        <Link href={project.githubLink} target="_blank">
                          <Github className="hover:text-gray-500" />
                        </Link>
                      </div>
                      <div>
                        {" "}
                        <Link href={project.deployLink} target="_blank">
                          <SquareArrowOutUpRight className="hover:text-gray-500" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex gap-2 overflow-auto">
                    {project.tech.map((tech, index) => {
                      return (
                        <Badge className="bg-slate-800" key={index}>
                          {tech}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
