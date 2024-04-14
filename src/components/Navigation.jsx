const Navigation = ({ children }) => {
  return (
    <nav className="max-w-7xl m-auto flex md:bg-transparent justify-end p-4 sticky top-0 z-20">
      {children}
    </nav>
  );
};

export default Navigation;
