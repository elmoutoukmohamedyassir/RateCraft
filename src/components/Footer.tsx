import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Mail, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-white mb-6">
              <div className="p-1.5 bg-brand-600 rounded-lg">
                <Calculator className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">RateCraft</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Empowering freelancers and independent professionals with the tools 
              they need to build sustainable, profitable businesses.
            </p>
            <div className="flex gap-4">
              <a href="mailto:hello@ratecraft.io" className="p-2 rounded-full bg-slate-800 hover:bg-brand-600 hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/calculator" className="hover:text-brand-400 transition-colors">Calculator</Link></li>
              <li><Link to="/blog" className="hover:text-brand-400 transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-brand-400 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500">
            © {currentYear} RateCraft. Built for the freelance community.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Mail className="w-4 h-4" />
            hello@ratecraft.io
          </div>
        </div>
      </div>
    </footer>
  );
}
