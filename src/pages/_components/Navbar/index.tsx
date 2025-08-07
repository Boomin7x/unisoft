const Navbar = () => {
  return (
    <header className="w-full bg-white sticky top-0 z-90">
      {/* Top bar */}
      <div className=" container mx-auto w-full bg-[#000B1C]  text-white text-sm flex justify-between items-center px-20 py-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <span className="text-[#377dff]">✉️</span>
            contact@univ-soft.com
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#377dff]">📍</span>
            Cameroun, Yaoundé
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span>Notre Expertise</span>
          <span>/</span>
          <span>Valeurs</span>
          <span>/</span>
          <span>Contact</span>
          <a
            href="https://www.facebook.com"
            className="hover:text-[#377dff] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f">f</i>
          </a>
          <a
            href="https://www.linkedin.com/company/univsoft"
            className="hover:text-[#377dff] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            alt="Logo Univsoft"
            className="w-[10rem] h-auto rounded-full bg-white object-contain"
          />
        </div>
        {/* Menu */}
        <ul className="flex items-center gap-8  font-semibold text-lg">
          <li className="relative group cursor-pointer">Accueil</li>
          <li>À propos</li>
          <li>Expertise</li>
          <li>Réalisations</li>
          <li>Valeurs</li>
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
              <span className="text-xs text-white">Appelez-nous</span>
              <span className="text-base font-bold text-white">
                +237-696-458-382
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
