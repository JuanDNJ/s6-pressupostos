import { Link } from "react-router-dom";
import Form from "../components/Form";

import MainHeader from "../components/MainHeader";
import Navigation from "../components/Navigation";
import Budgets from "../components/Budgets";
import Banner from "../components/Banner";

const Calculator = () => {
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
          <article className="md:min-h-56 grid grid-cols-3 bg-stone-200 rounded-md overflow-hidden">
            <header className=" flex flex-col justify-center md:items-center py-4">
              <h2 className="text-3xl font-bold px-2  text-left">Seo</h2>
              <span className="px-2 text-sm md:text-xl md:text-center text-pretty">
                Fer una campanya SEO
              </span>
            </header>
            <section className="flex items-center justify-center">
              <strong className="text-2xl md:text-3xl">300 $</strong>
            </section>
            <aside className="flex items-center justify-center">
              <label htmlFor="seo" className="p-2 flex gap-2">
                <input id="seo" name="seo" type="checkbox" />
                <span>Afegir</span>
              </label>
            </aside>
          </article>
          <article className="md:min-h-56 grid  grid-cols-3  bg-stone-200 rounded-md overflow-hidden">
            <header className="flex flex-col justify-center md:items-center py-4">
              <h2 className="text-3xl font-bold px-2">Ads</h2>
              <span className="px-2 text-sm md:text-xl md:text-center text-pretty">
                Fer una campanya de publicitat
              </span>
            </header>
            <section className="flex items-center justify-center">
              <strong className="text-2xl md:text-3xl">400 $</strong>
            </section>
            <aside className="flex items-center justify-center">
              <label htmlFor="seo" className="p-2 flex gap-2">
                <input id="seo" name="seo" type="checkbox" />
                <span>Afegir</span>
              </label>
            </aside>
          </article>
          <article className="md:min-h-56 grid grid-cols-3 bg-stone-200 rounded-md overflow-hidden">
            <header className="flex flex-col justify-center md:items-center py-4">
              <h2 className="text-3xl font-bold px-2">Web</h2>
              <span className="px-2 text-sm md:text-xl md:text-center text-pretty">
                Fer una pàgina web
              </span>
            </header>
            <section className="flex items-center justify-center">
              <strong className="text-2xl md:text-3xl">500 $</strong>
            </section>
            <aside className=" flex items-center justify-center">
              <label htmlFor="seo" className="p-2 flex  gap-2">
                <input id="seo" name="seo" type="checkbox" />
                <span>Afegir</span>
              </label>
            </aside>
            <footer className="col-span-3 grid grid-cols-6 justify-end">
              <article className="col-start-3 md:col-start-5 col-end-7 flex items-center gap-2">
                <small className="flex-1 p-2 text-right">
                  Nombre de pàgines
                </small>
                <div className="grid grid-cols-3 items-center justify-between p-2">
                  <button className="text-center bg-blue-300 rounded-full size-8">
                    +
                  </button>
                  <span className="text-center ">0</span>
                  <button className="text-center bg-red-300 rounded-full size-8">
                    -
                  </button>
                </div>
              </article>
              <article className="col-start-2 md:col-start-3 col-end-7 flex items-center  gap-2">
                <small className="flex-1 p-2 justify-end text-right">
                  Nombre de llenguatges
                </small>
                <div className="grid grid-cols-3 items-center justify-between p-2">
                  <button className="text-center bg-blue-300 rounded-full size-8">
                    +
                  </button>
                  <span className="text-center">0</span>
                  <button className="text-center bg-red-300 rounded-full size-8">
                    -
                  </button>
                </div>
              </article>
            </footer>
          </article>
          <aside className="flex items-center justify-end gap-2 py-4">
            <strong className="text-stone-400">Preu pressuposat:</strong>{" "}
            <strong className="text-xl font-extrabold text-white">
              620 <small className="text-red-500">€</small>
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
