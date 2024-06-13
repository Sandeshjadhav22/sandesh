import Link from "next/link"
import { Button } from "../ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu"

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-gray-900">
    <Link className="flex items-center gap-2" href="#">
      <span className="text-xl font-bold text-gray-50">sandesh Jadhav</span>
    </Link>
    <div className="flex items-center gap-4 md:hidden">
      <Button
        className="rounded-full text-gray-50"
        size="icon"
        variant="ghost"
      >
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
  )
}

export default Navbar