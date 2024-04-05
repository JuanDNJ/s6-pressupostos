import { Link } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { Fragment } from "react";
import MainHeader from "../components/MainHeader";
import Navigation from "../components/Navigation";
import Budgets from "../components/Budgets";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Form from "../components/Form";
import ViewTotalPrice from "../components/ViewTotalPrice";
import FormHeader from "../components/FormHeader";
import FormFooter from "../components/FormFooter";

const Calculator = () => {
  const { services } = useStore();
  return (
    <Fragment>
      <MainHeader />
      <Banner />
      <Navigation>
        <Link className=" p-2 text-xl hover:text-pink-300 " to="/">
          Benvinguda
        </Link>
      </Navigation>
      <section className="max-w-4xl m-auto ">
        <Form name="calculator">
          <FormHeader />
          {services.map((service) => (
            <Card key={service.id} service={service}></Card>
          ))}
          <ViewTotalPrice />
          <FormFooter />
        </Form>
        <Budgets />
      </section>
    </Fragment>
  );
};

export default Calculator;
