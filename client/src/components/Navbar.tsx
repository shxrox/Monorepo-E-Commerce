import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="" >
      {/* Left  */}
        <Link href="/" className=""> 
          <Image src="/logo.png" alt="TRENDLAMA-LOGO" width={36} height={36} className="w-6 md:w-9 md:h-9" />
          <p className="text-md font-medium">
            TRENDLAMA
          </p>
        </Link>
      {/* Right  */}
    </nav>
  )
}

export default Navbar