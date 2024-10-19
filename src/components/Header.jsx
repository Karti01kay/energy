const Header = () => {
  return (
    <header className="bg-green-600 p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">PM Sur Yojana</h1>
        <ul className="hidden md:flex space-x-4">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/about" className="text-white">About</a></li>
          <li><a href="/programs" className="text-white">Programs</a></li>
          <li><a href="/contact" className="text-white">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-white">Menu</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
