import { Link, useSearchParams } from "react-router-dom";
import {
  calculateDiscount,
  calculateTotalBudget,
  discount,
  urlShared,
  priceAddOptWebType,
} from "../utils";
import { useStore } from "../hooks";
import { useEffect } from "react";
import MainHeader from "../components/MainHeader";
import Navigation from "../components/Navigation";
import ProductCard from "../components/ProductCard";
import Budget from "../components/Budget";
import ViewBudgetAmount from "../components/ViewBudgetAmount";
import BudgetHeader from "../components/BudgetHeader";
import ViewDiscount from "../components/ViewDiscount";

const ViewBudgetShared = () => {
  const [searchParams] = useSearchParams();
  const { services, addSharedProduct, sharedProducts } = useStore();

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
      addSharedProduct(
        services.find((rec) => {
          if (rec.name === "Web") {
            rec.pages = viewUrlShared.pages;
            rec.languages = viewUrlShared.languages;
            return rec;
          }
        })
      );
    viewUrlShared.ads &&
      addSharedProduct(services.find((rec) => rec.name === "Ads"));
    viewUrlShared.seo &&
      addSharedProduct(services.find((rec) => rec.name === "Seo"));
  };

  const calculatePrice = () => {
    const totalProducts = calculateTotalBudget(
      sharedProducts,
      priceAddOptWebType
    );
    return viewUrlShared.discount
      ? Math.round(totalProducts - calculateDiscount(totalProducts, discount))
      : Math.round(totalProducts);
  };

  useEffect(updateProducts, []);

  return (
    <>
      <MainHeader />
      <Navigation>
        <Link className="p-2 text-xl hover:text-pink-300" to="/">
          Benvinguda
        </Link>
        <Link className="p-2 text-xl hover:text-pink-300 " to="/calculadora">
          Calculadora
        </Link>
      </Navigation>
      <section className="md:max-w-[25vw] m-auto p-4">
        <Budget>
          <BudgetHeader>
            <ViewDiscount checkView={viewUrlShared.discount} />
          </BudgetHeader>

          <div className="flex flex-col md:flex-row col-span-3 items-center justify-center gap-2 text-stone-900">
            <div className="flex flex-col gap-1 p-4">
              <strong>Servies contractats:</strong>
              <ul className="list-disc list-inside flex flex-col items-stajustify-center font-bold text-sm">
                {sharedProducts.map((rec) => (
                  <ProductCard key={rec.id} product={rec} />
                ))}
              </ul>
            </div>
            <ViewBudgetAmount price={calculatePrice()} />
          </div>
        </Budget>
      </section>
    </>
  );
};

export default ViewBudgetShared;
