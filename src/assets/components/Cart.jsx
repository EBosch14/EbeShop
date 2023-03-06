import { useId } from "react";
import { useCart } from "../hooks/useCart";
import { CartIcon, MinusIcon, PlusIcon, XmarkIcon } from "../icons/Icons";
import "./Cart.css";

function CartItem({ addToCart, removeProduct, title, image, quantity }) {
  return (
    <li className="pb-4 border-b border-[#444] border-solid flex flex-col gap-2">
      <img src={image} alt={title} className="aspect-video w-full" />
      <div className="flex justify-center">
        <strong className=" text-sm ">{title}</strong>
      </div>
      <footer className="flex gap-2 justify-center items-center">
        <button
          onClick={removeProduct}
          className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700"
        >
          <MinusIcon />
        </button>
        <small className="w-8 text-center border-b px-1 py-1">{quantity}</small>
        <button
          onClick={addToCart}
          className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700"
        >
          <PlusIcon />
        </button>
      </footer>
    </li>
  );
}

export default function Cart() {
  const CART_ID = useId();
  const { cart, clearAllCart, removeProduct, addToCart } = useCart();

  return (
    <>
      <input type="checkbox" id={CART_ID} hidden />
      <label
        className=" hover:scale-125 flex justify-center items-center bg-[#09f] rounded-full cursor-pointer w-10 h-10 z-50 p-1 absolute right-4 top-4 transition-all ease-linear delay-100"
        htmlFor={CART_ID}
      >
        <CartIcon />
      </label>
      <aside className="text-center hidden bg-zinc-900 py-12 px-8 z-40 fixed right-0 top-0 w-64 text-yellow-50">
        <ul>
          {cart.map((product, index) => {
            return (
              <CartItem
                key={product.id + product.price}
                product={product}
                index={index}
                addToCart={() => addToCart(product)}
                removeProduct={() => removeProduct(product)}
                {...product}
              />
            );
          })}
        </ul>
        <button
          onClick={() => clearAllCart()}
          className="mt-4 p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700"
        >
          <XmarkIcon height="24px" width="24px" />
        </button>
      </aside>
    </>
  );
}
