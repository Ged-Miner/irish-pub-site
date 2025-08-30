export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-600">Visit Us</h3>
            <p className="text-slate-100 mb-2">〒130-0026 Tokyo</p>
            <p className="text-slate-100 mb-2">Sumida City, Ryogoku</p>
            <p className="text-slate-100 mb-2">2 Chome−20−12 </p>
            <p className="text-slate-100">ライオンズステーションプラザ両国 106</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-600">Hours</h3>
            <p className="text-slate-100 mb-2">Monday - Thursday: 4:00 PM - 12:00 AM</p>
            <p className="text-slate-100 mb-2">Friday - Saturday: 2:00 PM - 2:00 AM</p>
            <p className="text-slate-100">Sunday: 2:00 PM - 11:00 PM</p>
          </div>

          {/* Social/About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-emerald-600">Follow Us</h3>
            <p className="text-slate-100 mb-4">
              Join us for traditional Irish music every Friday and Saturday night!
            </p>
            <p className="text-slate-100 text-sm">
              Family-owned since 2013
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Scéal eile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
