import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 md:py-12 w-full text-gray-50">
        <div className="container  max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">About</h3>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              About Me
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Resume
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#Skills">
              Skills
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Projects</h3>
            <Link className="text-gray-400 hover:text-gray-50" href="#Projects">
              Movix
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#Projects">
            SandyCare
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#Projects">
            Elib
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link className="text-gray-400 hover:text-gray-50" href="mailto:sandeshjadhav2002@gmail.com" target="_blank">
              Email
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="https://www.linkedin.com/in/sandesh-jadhav-183b60218/" target="_blank">
              LinkedIn
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="https://github.com/Sandeshjadhav22" target="_blank">
              GitHub
            </Link>
          </div>
          {/* <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Privacy Policy
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="#">
              Terms of Service
            </Link>
          </div> */}
          <div className="grid gap-1">
            <h3 className="font-semibold">Follow</h3>
            <Link className="text-gray-400 hover:text-gray-50" href="https://twitter.com/SandeshSanjayj2" target="_blank">
              Twitter
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="https://instagram.com/sandeshhh.17" target="_blank">
              Instagram
            </Link>
            <Link className="text-gray-400 hover:text-gray-50" href="https://www.youtube.com/channel/UCzIz4N9aRlz5_rkXuCLV52Q" target="_blank">
              YouTube
            </Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer