"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export function Dashboard() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-gray-900">
        <Link className="flex items-center gap-2" href="#">
          <BriefcaseIcon className="h-6 w-6 text-gray-50" />
          <span className="text-xl font-bold text-gray-50">sandesh Jadhav</span>
        </Link>
        <div className="flex items-center gap-4 md:hidden">
          <Button
            className="rounded-full text-gray-50"
            size="icon"
            variant="ghost"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 rounded-md hover:bg-gray-800"
                href="#"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 rounded-md hover:bg-gray-800"
                href="#"
              >
                Experience
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 rounded-md hover:bg-gray-800"
                href="#"
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 rounded-md hover:bg-gray-800"
                href="#"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="flex-1 bg-gray-950 text-gray-50">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Hi, I&apos;m Sandesh Jadhav</h1>
              <p className="text-gray-400 text-lg">
                I&apos;m a full-stack developer with a passion for building beautiful
                and functional web applications.
              </p>
              <div className="flex gap-4">
                <Button>View Resume</Button>
                <Button variant="secondary">Contact Me</Button>
              </div>
            </div>
            <Image
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
              height="550"
              src="/hero.jpg"
              width="550"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Work Experience</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Software Engineer</h3>
                    <p className="text-gray-400">Acme Inc, 2019 - Present</p>
                  </div>
                  <Badge>Current</Badge>
                </div>
                <p className="text-gray-400">
                  Developed and maintained web applications using React,
                  Node.js, and PostgreSQL. Collaborated with cross-functional
                  teams to deliver high-quality software.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Intern</h3>
                    <p className="text-gray-400">Widgets Inc, 2018 - 2019</p>
                  </div>
                  <Badge variant="secondary">Past</Badge>
                </div>
                <p className="text-gray-400">
                  Assisted in the development of web applications using
                  JavaScript and Ruby on Rails. Gained experience in front-end
                  and back-end development.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Education</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-gray-400">
                      University of Example, 2015 - 2019
                    </p>
                  </div>
                  <Badge>Completed</Badge>
                </div>
                <p className="text-gray-400">
                  Graduated with a 3.8 GPA and received the Deans List award for
                  academic excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">My Projects</h2>
              <p className="text-gray-400 max-w-[700px] mx-auto">
                Check out some of the projects Ive worked on. Each project
                showcases my skills in web development, design, and problem
                solving.
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
                  <h3 className="text-lg font-bold">Project 1</h3>
                  <p className="text-gray-400">
                    A web application that allows users to manage their tasks
                    and projects.
                  </p>
                  <div className="flex gap-2">
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 text-gray-50">
                <Image
                  alt="Project 2"
                  className="aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Project 2</h3>
                  <p className="text-gray-400">
                    A mobile app that helps users track their fitness activities
                    and progress.
                  </p>
                  <div className="flex gap-2">
                    <Badge>React Native</Badge>
                    <Badge>Firebase</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 text-gray-50">
                <Image
                  alt="Project 3"
                  className="aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Project 3</h3>
                  <p className="text-gray-400">
                    A web-based dashboard that visualizes data from various
                    sources.
                  </p>
                  <div className="flex gap-2">
                    <Badge>React</Badge>
                    <Badge>D3.js</Badge>
                    <Badge>Python</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 max-w-2xl mx-auto">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="text-gray-400">
                Have a project in mind or just want to say hello? Fill out the
                form below and Il get back to you as soon as possible.
              </p>
            </div>
            <form className="mt-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  className="w-full bg-gray-900 text-gray-50"
                  placeholder="Name"
                  type="text"
                />
                <Input
                  className="w-full bg-gray-900 text-gray-50"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <Input
                className="w-full bg-gray-900 text-gray-50"
                placeholder="Subject"
                type="text"
              />
              <Textarea
                className="w-full bg-gray-900 text-gray-50"
                placeholder="Message"
                rows={5}
              />
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 p-6 md:py-12 w-full text-gray-50">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              About Me
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Resume
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Skills
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Projects</h3>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Web Apps
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Mobile Apps
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Data Visualizations
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Email
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              LinkedIn
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              GitHub
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Privacy Policy
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Terms of Service
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Follow</h3>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Twitter
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Instagram
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              YouTube
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
