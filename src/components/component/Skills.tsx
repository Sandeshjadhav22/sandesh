import { Badge } from "../ui/badge"

const Skills = () => {
  return (
    <section id="Skills" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Skills</h2>
              <p className="text-gray-400 max-w-[700px] mx-auto">
                Here are some of the key skills I have developed over the years:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                <h3 className="text-lg font-bold">Language</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>C++</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Typescript</Badge>
                </div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                <h3 className="text-lg font-bold">Front-end</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Nextjs</Badge>
                  <Badge>HTML/CSS</Badge>
                  <Badge>Tailwind Css</Badge>
                  <Badge>ShadCn</Badge>
                  <Badge>Redux Toolkit</Badge>
                </div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                <h3 className="text-lg font-bold">Back-end</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MongoDb</Badge>
                  <Badge>mongoose</Badge>
                  <Badge>PostgreSQL</Badge>
                </div>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg space-y-2">
                <h3 className="text-lg font-bold">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Vs Code</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Skills