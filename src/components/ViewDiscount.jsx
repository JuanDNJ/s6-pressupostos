import { discount } from "../utils";

export default function ViewDiscount({ checkView }) {
  return (
    checkView && (
      <i
        title="20% de descompte pel pagament anual"
        className="flex items-center justify-center font-bold text-sm text-white border-2 border-stone-500 p-2 bg-red-500 rounded-full w-9 h-9 cursor-help"
      >
        {discount}%
      </i>
    )
  );
}
