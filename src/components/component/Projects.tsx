import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

const Projects = () => {
  return (
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
  )
}

export default Projects