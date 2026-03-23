import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-10 sm:py-12 border-t border-slate-200/20 tonal-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="font-headline font-bold text-lg text-slate-900 mb-4 sm:mb-6">Editorial ERP</div>
            <p className="font-body text-xs text-slate-500 max-w-xs mb-6 sm:mb-8">
              Redefining enterprise resource planning with architectural precision and editorial clarity.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-teal-600">public</span>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-teal-600">hub</span>
              <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-teal-600">share</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h5 className="font-headline font-bold text-slate-900 text-sm mb-4 sm:mb-6">Product</h5>
            <ul className="space-y-3 sm:space-y-4 font-body text-xs text-slate-500">
              <li><a className="hover:underline hover:text-teal-600" href="#features">Features</a></li>
              <li><a className="hover:underline hover:text-teal-600" href="#">Integrations</a></li>
              <li><a className="hover:underline hover:text-teal-600" href="#">Security</a></li>
              <li><Link className="hover:underline hover:text-teal-600" to="/pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-headline font-bold text-slate-900 text-sm mb-4 sm:mb-6">Company</h5>
            <ul className="space-y-3 sm:space-y-4 font-body text-xs text-slate-500">
              <li><Link className="hover:underline hover:text-teal-600" to="/about">About Us</Link></li>
              <li><a className="hover:underline hover:text-teal-600" href="#">Careers</a></li>
              <li><a className="hover:underline hover:text-teal-600" href="#">Newsroom</a></li>
              <li><Link className="hover:underline hover:text-teal-600" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-headline font-bold text-slate-900 text-sm mb-4 sm:mb-6">Legal</h5>
            <ul className="space-y-3 sm:space-y-4 font-body text-xs text-slate-500">
              <li><a className="hover:underline hover:text-teal-600" href="#">Privacy Policy</a></li>
              <li><a className="hover:underline hover:text-teal-600" href="#">Terms of Service</a></li>
              <li><a className="hover:underline hover:text-teal-600" href="#">API Documentation</a></li>
              <li><a className="hover:underline hover:text-teal-600" href="#">Enterprise Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200/10 text-center">
          <p className="font-body text-xs text-slate-500">
            © 2024 Editorial ERP Excellence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
