import { useState } from "react";
import { useStore } from "../hooks/useStore";
import CardFooter from "./CardFooter";
import BudgetWebOptions from "./BudgetWebOptions";

const Card = ({ service }) => {
  const { addProduct, removeProduct } = useStore();
  const [checked, setCheked] = useState(false);

  const handlerInput = (event, product) => {
    const isServiceWebCheked = service.type === 101 && event.target.checked;
    const isInputCheked = event.target.checked;

    if (isInputCheked) {
      addProduct(product);
    } else {
      removeProduct(product);
    }
    setCheked(isServiceWebCheked);
  };

  return (
    <article className="md:min-h-56 grid grid-cols-3 bg-stone-200 rounded-md overflow-hidden">
      <header className=" flex flex-col justify-center md:items-center py-4">
        <h2 className="text-3xl font-bold px-2  text-left">{service.name}</h2>
        <p className="px-2 text-sm md:text-xl md:text-center text-pretty">
          {service.description}
        </p>
      </header>
      <section className="flex items-center justify-center">
        <strong className="text-2xl md:text-3xl">{service.price} $</strong>
      </section>
      <aside className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          <input
            id={service.name}
            onInput={(eve) => handlerInput(eve, service)}
            name={service.name}
            value=""
            type="checkbox"
          />
          <label htmlFor={service.name}>Afegir</label>
        </div>
      </aside>
      {checked && (
        <CardFooter>
          <BudgetWebOptions />
        </CardFooter>
      )}
    </article>
  );
};
export default Card;
