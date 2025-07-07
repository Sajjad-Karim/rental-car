import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-secondary-foreground text-background pt-20 pb-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Column 1 - Vehicles Type */}
        <div>
          <h4 className="text-xl font-bold mb-4">Vehicles Type</h4>
          <ul className="space-y-2 text-muted">
            <li>
              <Link to="/cars" className="hover:text-primary transition">
                Our Cars
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-muted">
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="hover:text-primary transition">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info & Email */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Info</h4>
          <div className="space-y-3 text-muted">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              +96871171186
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>
                info
                <span className="text-primary">@alshamelrentalcar.com</span>
              </span>
            </p>
          </div>

          {/* Email input and send button */}
          <form className="flex mt-5">
            <input
              type="email"
              placeholder="Enter You Email Here"
              className="px-4 py-2 rounded-l-md bg-background border-none text-foreground w-full outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-white px-5 py-2 rounded-r-md hover:bg-primary/90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="text-center text-sm text-muted mt-10">
        Copyright © 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
