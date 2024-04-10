import AnnualBudget from "./AnnualBudget";

const FormHeader = () => {
  return (
    <section className="flex flex-col gap-4">
      <AnnualBudget />
      <header className="flex items-center justify-between py-4">
        <h2 className="text-2xl text-stone-200 md:text-3xl text-center md:text-left">
          Genera el teu pressupost
        </h2>
      </header>
    </section>
  );
};

export default FormHeader;
