const Navbar = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-90">
      {/* Top bar */}
      <div className=" container mx-auto w-full bg-[#000B1C]  text-white text-sm flex justify-between items-center px-20 py-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <span className="text-[#377dff]">✉️</span>
            needhelp@sotech.com
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#377dff]">📍</span>
            88 Broklyn Golden Street, New York
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span>Help</span>
          <span>/</span>
          <span>Support</span>
          <span>/</span>
          <span>Contact</span>
          <a href="#" className="hover:text-[#377dff] transition">
            <i className="fab fa-facebook-f">f</i>
          </a>
          <a href="#" className="hover:text-[#377dff] transition">
            <i className="fab fa-vimeo-v">v</i>
          </a>
          <a href="#" className="hover:text-[#377dff] transition">
            <i className="fab fa-instagram">i</i>
          </a>
          <a href="#" className="hover:text-[#377dff] transition">
            <i className="fab fa-linkedin-in">in</i>
          </a>
        </div>
      </div>
      {/* Main nav */}
      <nav className="w-full flex items-center  container mx-auto justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="w-[10rem] h-auto rounded-full bg-white object-contain"
          />
        </div>
        {/* Menu */}
        <ul className="flex items-center gap-8  font-semibold text-lg">
          <li className="relative group cursor-pointer">
            Home
            {/* Dropdown can be added here if needed */}
          </li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        {/* Right icons and call info */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <button className="text-white text-xl hover:text-[#377dff] transition">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <circle cx="10" cy="10" r="8" stroke="#fff" strokeWidth="2" />
              <path
                d="M16 16l4 4"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {/* Cart */}
          <button className="relative text-white text-xl hover:text-[#377dff] transition">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="2" />
              <path
                d="M7 11.5l3 3 5-5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-[#377dff] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          {/* Call info */}
          <div className="flex items-center gap-2 bg-[#222b3a] px-4 py-2 rounded-full">
            <span className="bg-white text-[#377dff] rounded-full p-2">
              <svg width="20" height="20" fill="none">
                <circle cx="10" cy="10" r="10" fill="#377dff" />
                <path
                  d="M10 5v6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="15" r="1.5" fill="#fff" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-xs text-white">Call Anytime</span>
              <span className="text-base font-bold text-white">
                + 88 (9800) 6802
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
