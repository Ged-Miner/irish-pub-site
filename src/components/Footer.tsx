import Link from "next/link";
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiTabelog } from "react-icons/si";

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/scealeile.tokyo',
    icon: FaInstagram,
    color: 'hover:text-pink-400',
    bgColor: 'hover:bg-pink-400/25'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Sceal-eile-420005265439791',
    icon: FaFacebook,
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-400/25'
  },
  {
    name: 'Tabélog',
    href: 'https://tabelog.com/tokyo/A1312/A131201/13232795/',
    icon: SiTabelog,
    color: 'hover:text-yellow-400',
    bgColor: 'hover:bg-yellow-400/25'
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-emerald-950 text-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Visit Us</h3>
            <p className="text-slate-100 mb-2">〒130-0026 Tokyo</p>
            <p className="text-slate-100 mb-2">Sumida City, Ryogoku</p>
            <p className="text-slate-100 mb-2">2 Chome−20−12 </p>
            <p className="text-slate-100">ライオンズステーションプラザ両国 106</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Hours</h3>
            <p className="text-slate-100 mb-2">Monday - Thursday: 5:00 PM - 1:00 AM</p>
            <p className="text-slate-100 mb-2">Friday - Saturday: 5:00 PM - 2:00 AM</p>
            <p className="text-slate-100">Closed Sundays</p>
          </div>

          {/* Social/About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-400">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, href, icon: Icon, color, bgColor }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-emerald-900 text-slate-100 transition-all duration-300 hover:scale-110 ${color} ${bgColor}`}
                  aria-label={`Follow us on ${name}`}
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Scéal eile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
