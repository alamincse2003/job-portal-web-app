const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Section 1 - About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <p className="text-sm">
            Job Portal Web App helps you find your dream job easily and quickly.
          </p>
        </div>

        {/* Section 2 - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 - Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4 - Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@jobportal.com</p>
          <p className="text-sm">Phone: +880 1234 567 890</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm border-t border-gray-300 dark:border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Job Portal Web App. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
