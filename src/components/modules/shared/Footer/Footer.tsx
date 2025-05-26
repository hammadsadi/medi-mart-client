// components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <h2 className="text-white text-xl font-semibold">MediMart</h2>
            <p className="mt-2 text-sm text-gray-400">
              Trusted online platform to buy genuine medicine with fast delivery
              and great support.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/health-support" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-2">Shop</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/medicines" className="hover:text-white">
                  Medicines
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-2">Contact Info</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@medimart.com"
                  className="hover:text-white"
                >
                  support@medimart.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+880123456789" className="hover:text-white">
                  +880 1234-56789
                </a>
              </li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-white"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MediMart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
