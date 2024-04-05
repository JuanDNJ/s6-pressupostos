const Form = ({ children, name }) => {
  const handlerSubmit = (eve) => {
    eve.preventDefault();
  };
  return (
    <form
      id={name}
      name={name}
      onSubmit={handlerSubmit}
      className="flex flex-col gap-4 p-4 text-stone-600"
    >
      {children}
    </form>
  );
};
export default Form;
