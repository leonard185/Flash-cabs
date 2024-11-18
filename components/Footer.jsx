import { Icon } from "lucide-react";
import Link from "next/link";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

import { solutions, Supportlinks, companyLinks } from "./Index";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8  w-full -z-10" >
      <div className="container mx-auto px-6">
        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-4">Solutions</h4>
            <ul>
              {solutions.map((solution, index) => (

                <li key={index}><a href="#" className="hover:text-gray-400">{solution.name} </a></li>
              ))}

            </ul>
          </div>

          {/* Submit Ticket */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul>
              {Supportlinks.map((support, index) => (

                <li key={index}><a href="#" className="hover:text-gray-400">{support.name} </a></li>
              ))}

            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul>
              {companyLinks.map((company, index) => (

                <li key={index}><a href="#" className="hover:text-gray-400">{company.name} </a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Social Links</h4>
            <div className="flex items-center justify-between  ">
              {SocialLinks.map((link, idx) => (
                <Link key={idx} href={link.link} aria-label={link.name} >< link.Icon /> </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 text-center">
          <h4 className="font-bold text-lg mb-4">Subscribe to our Newsletter</h4>
          <p className="text-gray-400 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 rounded-l-lg border border-gray-300 text-black"
            />
            <button type="submit" className="py-2 px-4 rounded-r-lg bg-gray-500 text-white hover:bg-yellow-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
const SocialLinks = [
  { name: "Facebook", link: "https://www.facebook.com/", Icon: Facebook },
  { name: "Instagram", link: "https://www.instagram.com/", Icon: Instagram },
  { name: "Twitter", link: "https://www.twitter.com/", Icon: Twitter },
  { name: "LinkedIn", link: "https://www.linkedin.com/", Icon: Linkedin },
]

export default Footer;
