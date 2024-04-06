import { useStore } from "../hooks";

const Form = ({ children, name }) => {
  const { resetCheckBox } = useStore();

  const handlerSubmit = (eve) => {
    eve.preventDefault();
  };

  const handlerReset = (eve) => {
    eve.preventDefault();

    const elements = [...eve.target];

    elements.forEach((element) => {
      if (element.type === "checkbox") {
        element.checked = false;
      }
    });

    resetCheckBox();
  };

  return (
    <form
      id={name}
      name={name}
      onSubmit={handlerSubmit}
      onReset={handlerReset}
      className="flex flex-col gap-4 p-4 text-stone-600"
    >
      {children}
    </form>
  );
};
export default Form;
