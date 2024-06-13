import Link from "next/link"

const Footer = () => {
  return (
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
  )
}

export default Footer