/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <section className="max-w-7xl m-auto">
        <article className="flex flex-col gap-2">
          <div className="py-4">
            <h1 className="text-5xl text-center p-4">
              Benvingut a Web three B
            </h1>
            <p className="p-4 text-xl md:text-2xl text-center md:text-pretty">
              Som una empresa especialitzada en proporcionar solucions integrals
              per a l'èxit en línia de negocis de tots els tamanys. Ens dediquem
              a oferir serveis d'alta qualitat en SEO (Optimització de Motors de
              Recerca), ADS (Publicitat en Línia) i Disseny de Pàgines Web. El
              nostre enfocament es centra en comprendre les necessitats úniques
              de cada client i desenvolupar estratègies personalitzades per
              maximitzar la seva visibilitat en línia i augmentar la seva
              presència digital.
            </p>
            <Navigation>
              <Link
                className="border-2 border-stone-300 rounded-lg p-2  hover:text-pink-300 hover:border-pink-200"
                to="/calculadora"
              >
                Generar pressupost
              </Link>
            </Navigation>
          </div>
          <div className="py-4">
            <h2 className="text-4xl font-semibold text-center pb-16 ">
              Serveis Oferts
            </h2>
            <ul className="flex flex-col md:flex-row gap-2">
              <li className="gap-2 flex flex-col items-center justify-around min-h-64">
                <h3 className="text-3xl text-center font-semibold">
                  SEO (Optimització de Motors de Recerca)
                </h3>
                <p className="flex-1 p-4 text-xl text-center md:text-pretty">
                  El nostre equip d'experts en SEO s'encarrega de millorar el
                  posicionament orgànic dels llocs web dels nostres clients en
                  els motors de cerca més importants com Google, Bing i Yahoo.
                  Realitzem anàlisis exhaustius de paraules clau, optimització
                  de contingut, construcció de enllaços i altres tècniques
                  avançades per augmentar el trànsit orgànic i la visibilitat en
                  línia.
                </p>
              </li>
              <li className="flex flex-col items-center justify-around min-h-64">
                <h3 className="text-3xl text-center font-semibold">
                  ADS (Publicitat en Línia)
                </h3>
                <p className="flex-1 p-4 text-xl text-center md:text-pretty">
                  Oferim serveis de publicitat en línia altament efectius per
                  ajudar els nostres clients a arribar a la seva audiència
                  objectiu de manera ràpida i eficient. Utilitzem plataformes
                  publicitàries com Google Ads, Facebook Ads i LinkedIn Ads per
                  crear campanyes publicitàries estratègiques que generin
                  conversions i maximitzin el retorn de la inversió.
                </p>
              </li>
              <li className="flex flex-col items-center justify-around min-h-64">
                <h3 className="text-3xl text-center font-semibold">
                  Disseny de Pàgines Web
                </h3>
                <p className="flex-1 p-4 text-xl text-center md:text-pretty">
                  El nostre equip de dissenyadors web talentosos i creatius
                  especialitzats en crear llocs web atractius, funcionals i
                  totalment optimitzats per oferir una experiència excepcional a
                  l'usuari. Ens assegurem que cada lloc web que desenvolupem
                  sigui responsive, fàcil de navegar i estigui alineat amb la
                  identitat de marca i els objectius comercials dels nostres
                  clients.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};
export default Home;
