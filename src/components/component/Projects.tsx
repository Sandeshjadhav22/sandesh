import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="Projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="text-gray-400 max-w-[700px] mx-auto">
            Check out some of the projects Ive worked on. Each project showcases
            my skills in web development, design, and problem solving.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="bg-gray-900 text-gray-50">
            <Image
              alt="Project 1"
              className="aspect-video overflow-hidden rounded-t-xl object-cover object-center"
              height="310"
              src="/movix.jpg"
              width="550"
            />
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-lg font-bold">Movix</h1>
                </div>
                <div className="flex gap-3">
                  <div>
                    {" "}
                    <Link
                      href={"https://github.com/Sandeshjadhav22/Movix"}
                      target="_blank"
                    >
                      <Github />
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <Link
                      href={"https://movix-eight-weld.vercel.app/"}
                      target="_blank"
                    >
                      <SquareArrowOutUpRight />
                    </Link>
                  </div>
                </div>
              </div>
              <p className="text-gray-400">
                A web application that allows users to discover millions of Tvs
                and shows.
              </p>
              <div className="flex gap-2">
                <Badge>React</Badge>
                <Badge>Axios</Badge>
                <Badge>React-Redux</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 text-gray-50">
            <Image
              alt="hospital"
              className="aspect-video overflow-hidden rounded-t-xl object-cover object-center"
              height="310"
              src="/hospital.jpg"
              width="550"
            />
            <CardContent className="p-4 space-y-2">
            <div className="flex justify-between">
                <div>
                  <h1 className="text-lg font-bold">SandyCare</h1>
                </div>
                <div className="flex gap-3">
                  <div>
                    {" "}
                    <Link
                      href={"https://github.com/Sandeshjadhav22/Hospital-management"}
                      target="_blank"
                    >
                      <Github />
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <Link
                      href={"https://hospital-management-frontend-ashy.vercel.app/"}
                      target="_blank"
                    >
                      <SquareArrowOutUpRight />
                    </Link>
                  </div>
                </div>
              </div>
              <p className="text-gray-400">
                A <span className="font-bold">Fullstack</span> web app that helps users to get appoinments for consultaions and
                progress.
              </p>
              <div className="flex gap-2">
                <Badge>React</Badge>
                <Badge>Node</Badge>
                <Badge>Express</Badge>
                <Badge>Axios</Badge>
                <Badge>JWT</Badge>
                <Badge>Cloudinary</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 text-gray-50">
            <Image
              alt="elib"
              className="aspect-video overflow-hidden rounded-t-xl object-cover object-center"
              height="310"
              src="/elib.jpg"
              width="550"
            />
            <CardContent className="p-4 space-y-2">
            <div className="flex justify-between">
                <div>
                  <h1 className="text-lg font-bold">Elib</h1>
                </div>
                <div className="flex gap-3">
                  <div>
                    {" "}
                    <Link
                      href={"https://github.com/Sandeshjadhav22/elib-client"}
                      target="_blank"
                    >
                      <Github />
                    </Link>
                  </div>
                  <div>
                    {" "}
                    <Link
                      href={"https://github.com/Sandeshjadhav22/elib-client"}
                      target="_blank"
                    >
                      <SquareArrowOutUpRight />
                    </Link>
                  </div>
                </div>
              </div>
              <p className="text-gray-400">
                A Fullstack web-based dashboard that manage & store Books like a library.
              </p>
              <div className="flex gap-2">
                <Badge>Nextjs 14</Badge>
                <Badge>Typescript</Badge>
                <Badge>node</Badge>
                <Badge>express</Badge>
                <Badge>JWT</Badge>
                <Badge>App-Router</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
