export default function productCard({ product }) {
  return (
    <li key={product.id} className="flex gap-2 items-center">
      <strong>{product.name}</strong>
      {product.type === 101 && (
        <span>
          (
          {product.pages >= 1 &&
            `${
              product.pages === 1
                ? `${product.pages} pàgina`
                : `${product.pages} pàginas`
            }`}
          {product.pages >= 1 && product.languages >= 1 && ","}
          {product.languages >= 1 &&
            `${
              product.languages === 1
                ? `${product.languages} llenguatge`
                : `${product.languages} llenguatges`
            }`}
          )
        </span>
      )}
    </li>
  );
}
