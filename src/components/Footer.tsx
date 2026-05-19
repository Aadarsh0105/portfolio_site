import {
  // TwitterIcon,
  // GithubIcon,
  // LinkedinIcon,
  // InstagramIcon,
  RocketIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center text-white">
                <RocketIcon className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Launch<span className="text-gradient">Fast</span>
              </span>
            </a>
            <p className="text-text-secondary text-sm mb-6">
              Building the future of the web, one startup at a time. Fast,
              affordable, and stunning.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:border-accent-start text-sm" />
              
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-text-primary text-background text-sm font-medium hover:opacity-90 transition-opacity">
                
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <a
                  href="#home"
                  className="hover:text-accent-start transition-colors">
                  
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent-start transition-colors">
                  
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-accent-start transition-colors">
                  
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-accent-start transition-colors">
                  
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <a
                  href="#"
                  className="hover:text-accent-start transition-colors">
                  
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-start transition-colors">
                  
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-start transition-colors">
                  
                  E-commerce
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent-start transition-colors">
                  
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>hello@launchfast.io</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Innovation Drive
                <br />
                San Francisco, CA 94103
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} LaunchFast. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-text-secondary">
            <a href="#" className="hover:text-text-primary transition-colors">
              {/* <TwitterIcon className="w-5 h-5" /> */}
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              {/* <GithubIcon className="w-5 h-5" /> */}
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              {/* <LinkedinIcon className="w-5 h-5" /> */}
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              {/* <InstagramIcon className="w-5 h-5" /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>);

}