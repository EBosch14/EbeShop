import { useCart } from "../hooks/useCart";
import { AddToCart } from "../icons/Icons";

export default function ({ id, image, price, title, product }) {
  const defaultImage = "../../../public/DefaultImage.png";

  const { addToCart } = useCart();

  return (
    <div
      key={id}
      className="flex flex-col gap-4 bg-slate-800 w-full py-4 px-4 rounded-xl shadow-lg"
    >
      <img
        src={image}
        onError={(e) => {
          e.target.src = defaultImage;
        }}
        alt=""
        className="rounded-xl w-full block aspect-square object-cover bg-white"
      />
      <div className="flex flex-col items-center gap-3 justify-end">
        <h3 className="text-white text-md m-0">
          <strong className="">{title}</strong> -{" "}
          <span className="opacity-80 text-base">${price}</span>
        </h3>
        <button
          onClick={() => addToCart(product)}
          className="flex items-center justify-center bg-slate-700 hover:bg-slate-600 fill-white py-2 px-3 rounded"
        >
          <AddToCart width="24px" height="24px"></AddToCart>
        </button>
      </div>
    </div>
  );
}
