import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Footer Text */}
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; Ekondo Staff Portal 2024
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <Link
              href="https://www.facebook.com/ekondomfb/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://x.com/ekondomfb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ekondo-bank-40a666155"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://www.instagram.com/ekondomfb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </footer>
   )
}


export default Footer;