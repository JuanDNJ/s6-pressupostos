const CardFooter = ({ children }) => {
  return (
    <footer className="col-span-3 grid grid-cols-2 justify-end ">
      {children}
    </footer>
  );
};

export default CardFooter;
