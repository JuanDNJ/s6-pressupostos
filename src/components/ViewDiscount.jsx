import { discount } from "../utils";

export default function ViewDiscount({ checkView }) {
  return (
    checkView && (
      <i
        title="20% de descompte pel pagament anual"
        className="flex items-center justify-center font-bold text-sm text-stone-800 border-2 border-stone-500 p-2 bg-yellow-300 rounded-full w-10 h-10 cursor-help"
      >
        {discount}%
      </i>
    )
  );
}
