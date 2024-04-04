import { Link } from "react-router-dom";
import Form from "../components/Form";

import MainHeader from "../components/MainHeader";
import Navigation from "../components/Navigation";
import Budgets from "../components/Budgets";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useStore } from "../hooks/useStore";

const Calculator = () => {
  const { products, preuPressupostat, addPreu} = useStore();
  const handlerInput = (event) => {
    if(event.target.checked){
      addPreu(prev => prev + parseInt(event.target.value))
    }else{
      addPreu(prev => prev - parseInt(event.target.value))
    }
    
  };

  return (
    <>
      <MainHeader />
      <Banner />
      <Navigation>
        <Link className=" p-2 text-xl hover:text-pink-300 " to="/">
          Benvinguda
        </Link>
      </Navigation>
      <section className="max-w-4xl m-auto ">
        <Form name="calculator">
          <header className="flex items-center py-4">
            <h2 className="text-2xl text-stone-200 md:text-3xl text-center md:text-left">
              Genera el teu pressupost
            </h2>
          </header>
          {products.map((product) => (
            <Card key={product.id}>
              <header className=" flex flex-col justify-center md:items-center py-4">
                <h2 className="text-3xl font-bold px-2  text-left">
                  {product.name}
                </h2>
                <span className="px-2 text-sm md:text-xl md:text-center text-pretty">
                  {product.description}
                </span>
              </header>
              <section className="flex items-center justify-center">
                <strong className="text-2xl md:text-3xl">
                  {product.price} $
                </strong>
              </section>
              <aside className="flex items-center justify-center">
                <label htmlFor="seo" className="p-2 flex gap-2">
                  <input id="seo" onInput={handlerInput} name="seo" type="checkbox" value={product.price}/>
                  <span>Afegir</span>
                </label>
              </aside>
            </Card>
          ))}

          <aside className="flex items-center justify-end gap-2 py-4">
            <strong className="text-stone-400">Preu pressuposat:</strong>
            <strong className="text-xl font-extrabold text-white">
            {preuPressupostat} <small className="text-red-500">€</small>
            </strong>
          </aside>
          <footer className="flex flex-col gap-4">
            <section className="p-4 flex flex-col  rounded-md overflow-hidden bg-stone-200">
              <h2 className="text-2xl font-bold  text-stone-700">
                Demanar pressupost
              </h2>
              <article className="flex flex-col md:flex-row justify-between gap-2 md:gap-none py-4">
                <input
                  className="p-2 rounded-md text-stone-400 bg-stone-800 border border-sky-200"
                  type="text"
                  placeholder="Nombre"
                />
                <input
                  className="p-2 rounded-md text-stone-400 bg-stone-800 border border-sky-200"
                  type="tel"
                  placeholder="Telèfon"
                />
                <input
                  className="p-2 rounded-md text-stone-400 bg-stone-800 border border-sky-200"
                  type="email"
                  placeholder="E-mail"
                />
                <button
                  type="submit"
                  className="bg-green-700 p-2 px-4 rounded-md text-stone-200 font-bold border hover:bg-stone-50 hover:text-green-700 hover:border hover:border-green-700"
                >
                  Solicitar pressupost +
                </button>
              </article>
            </section>
          </footer>
        </Form>
        <Budgets />
      </section>
    </>
  );
};

export default Calculator;
