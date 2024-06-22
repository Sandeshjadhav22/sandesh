import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const Contact = () => {
  return (
    <section id="Contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
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
  )
}

export default Contact