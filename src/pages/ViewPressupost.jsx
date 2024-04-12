import { Link, useSearchParams } from "react-router-dom";
import { urlShared } from "../utils";
import { useStore } from "../hooks";
import { useEffect } from "react";
import MainHeader from "../components/MainHeader";
import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import Budget from "../components/Budget";
import AnnualBudget from "../components/AnnualBudget";
import ViewBudgetAmount from "../components/ViewBudgetAmount";
import BudgetHeader from "../components/BudgetHeader";
import ViewDiscount from "../components/ViewDiscount";

const ViewPressupost = () => {
  const [searchParams] = useSearchParams();
  const { services, addProduct, products } = useStore();

  const viewUrlShared = {
    web: Boolean(
      (searchParams.get("web") && services.find((rec) => rec.name === "Web")) ||
        urlShared.web
    ),
    seo: searchParams.get("seo") === "true" || urlShared.seo,
    ads: searchParams.get("ads") === "true" || urlShared.ads,
    pages: Number(searchParams.get("pages")) || urlShared.pages,
    languages: Number(searchParams.get("languages")) || urlShared.languages,
    discount: searchParams.get("discount") === "true" || urlShared.discount,
  };

  const updateProducts = () => {
    viewUrlShared.web &&
      addProduct(
        services.find((rec) => {
          if (rec.name === "Web") {
            rec.pages = viewUrlShared.pages;
            rec.languages = viewUrlShared.languages;
            return rec;
          }
        })
      );
    viewUrlShared.ads && addProduct(services.find((rec) => rec.name === "Ads"));
    viewUrlShared.seo && addProduct(services.find((rec) => rec.name === "Seo"));
  };

  useEffect(updateProducts);

  return (
    <section className="flex flex-col gap-4 ">
      <MainHeader />
      <Navigation>
        <Link className=" p-2 text-xl hover:text-pink-300 " to="/calculadora">
          Calculadora
        </Link>
      </Navigation>
      <AnnualBudget checked={viewUrlShared.discount ? true : false} />
      <section className="max-w-4xl m-auto">
        <Budget>
          <BudgetHeader>
            <ViewDiscount checkView={viewUrlShared.discount} />
          </BudgetHeader>

          <div className="flex flex-col items-center justify-center p-4 text-stone-900">
            <form>
              <strong className="text-xl">
                <input
                  type="text"
                  placeholder="Ingresa el nobre de tu presupuesto"
                />
              </strong>
              <small className="font-bold">
                <input type="email" placeholder="E-mail" />
              </small>
              <small className="text-lg">
                <input type="tel" placeholder="Phone Number" />
              </small>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-stone-900">
            <strong className="w-60">Servies contractats:</strong>
            <ul className="w-60 list-disc list-inside flexflex-col items-stajustify-center font-bold text-sm">
              {products.map((rec) => (
                <ProductCard key={rec.id} product={rec} />
              ))}
            </ul>
          </div>
          <ViewBudgetAmount price={500} />
        </Budget>
      </section>
    </section>
  );
};

export default ViewPressupost;
