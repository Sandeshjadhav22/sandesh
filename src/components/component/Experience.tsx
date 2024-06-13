import { Badge } from "../ui/badge"

const Experience = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Work Experience</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Tech Team member</h3>
                    <p className="text-gray-400">
                      Google Developer Student Club (GDSC), 2025 - Present
                    </p>
                  </div>
                  <Badge>Current</Badge>
                </div>
                <p className="text-gray-400">
                  Developed and maintained web applications using React for
                  GDSC-Cloud Event
                </p>
              </div>
              {/* <div className="space-y-2">
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
              </div> */}
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Education</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">
                      Bachelor of Engineering in Computer Engineering
                    </h3>
                    <p className="text-gray-400">
                      University of Mumbai, 2021 - 2025
                    </p>
                  </div>
                  <Badge>Current</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">HSC (Class XII)</h3>
                    <p className="text-gray-400">
                      M.H. High School & Junior College, Thane, India., 2019 -
                      2020
                    </p>
                  </div>
                  <Badge>Completed</Badge>
                </div>
              </div>
            </div>
            {/* <div className="space-y-4">
              <h2 className="text-3xl font-bold">Achievements</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">
                    Hackoverflow 2.0
                    </h3>
                    <p className="text-gray-400">
                    Selected for 36-hour offline Hackoverflow 2.0 hackathon at PHCET, outperforming 700+ teams from across India.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
  )
}

export default Experience