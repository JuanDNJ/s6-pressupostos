import { useStore } from "../hooks";
import FormCardFooter from "./FormCardFooter";
import BudgetWebOptions from "./BudgetWebOptions";
import { calculateDiscount, discount } from "../utils";

const FormCard = ({ service }) => {
  const {
    addProduct,
    removeProduct,
    checkWeb,
    handlerInputWeb,
    resetCount,
    checkedDiscount,
  } = useStore();

  const handlerInput = (event, product) => {
    if (event.target.checked) {
      addProduct(product);
    } else {
      removeProduct(product);

      if (Number(event.target.dataset.type) === 101) {
        resetCount();
      }
    }
    if (Number(event.target.dataset.type) === 101) {
      handlerInputWeb();
    }
  };

  return (
    <article className="md:min-h-56 grid grid-cols-3 bg-white rounded-md overflow-hidden">
      <header className=" flex flex-col justify-center md:items-center py-4">
        <h2 className="text-3xl font-bold px-2  text-left">{service.name}</h2>
        <p className="px-2 text-sm md:text-xl md:text-center text-pretty">
          {service.description}
        </p>
      </header>
      <section className="flex flex-col items-center justify-center relative">
        {checkedDiscount && (
          <span className="text-sm md:text-xl font-bold text-orange-500 absolute top-4 md:top-16">
            Ahorra un 20%
          </span>
        )}
        <strong className="text-2xl md:text-3xl">
          {checkedDiscount
            ? service.price - calculateDiscount(service.price, discount)
            : service.price}
          <small>€</small>
        </strong>
      </section>
      <aside className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          <input
            id={service.name}
            data-type={service.type}
            onInput={(eve) => handlerInput(eve, service)}
            name={service.name}
            value={service.price}
            type="checkbox"
          />
          <label htmlFor={service.name}>
            <i className="cursor-pointer cart">🛒</i>
          </label>
        </div>
      </aside>
      {service.type === 101 && checkWeb && (
        <FormCardFooter>
          <BudgetWebOptions />
        </FormCardFooter>
      )}
    </article>
  );
};
export default FormCard;
