const Navigation = ({ children }) => {
  return (
    <nav className="max-w-7xl m-auto flex bg-transparent md:bg-transparent justify-end p-4 sticky top-0 z-10">
      {children}
    </nav>
  );
};

export default Navigation;
