import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";

const slap = {
  initial: {
    opacity: 0,
    scale: 1.1,
  },
  whileInView: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
  viewport: { once: true },
};
const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 , ease:"easeInOut"}}
                className="text-4xl font-bold"
              >
                Hi, I&apos;m Sandesh Jadhav
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400 text-lg"
              >
                I&apos;m a full-stack developer with a passion for building
                beautiful and functional web applications.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4"
              >
                <Button>View Resume</Button>
                <Button variant="secondary">Contact Me</Button>
              </motion.div>
            </div>
            <motion.div
               {...{
                ...slap,
                transition: { ...slap.transition, delay: 0.35 },
              }}
            >
              <Image
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
                height="550"
                src="/hero.jpg"
                width="550"
              />
            </motion.div>
          </div>
        </section>
  )
}

export default Hero