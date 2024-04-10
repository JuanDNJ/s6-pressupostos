import { useStore } from "../hooks";

const AnnualBudget = () => {
  const { handlerInputDiscount } = useStore();
  return (
    <label
      htmlFor="toggle"
      className="flex  items-center justify-center cursor-pointer "
    >
      <div className="mr-3 text-stone-200 font-medium">Pagament mensual</div>
      <div className="relative ">
        <input
          id="toggle"
          type="checkbox"
          className="hidden peer/toggle"
          onClick={handlerInputDiscount}
        />
        <div className="w-10 h-6 bg-green-400 rounded-full shadow-inner shadow-stone-900"></div>
        <div className="transition-all duration-200 absolute w-5 h-5 bg-white translate-y-[2px] rounded-full shadow inset-y-0 left-[2px] peer-checked/toggle:left-[18px] "></div>
      </div>
      <div className="ml-3 text-stone-200 font-medium">Pagament anual</div>
    </label>
  );
};

export default AnnualBudget;
