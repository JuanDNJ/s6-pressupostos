const Navigation = ({ children }) => {
  return (
    <nav className="flex bg-transparent md:bg-transparent justify-end p-4 sticky top-0 z-10">
      {children}
    </nav>
  );
};

export default Navigation;
