import { AddToCart } from "../icons/Icons";

export default function ({ id, images, price, title }) {
  return (
    <div key={id} 
      className="flex flex-col items-center gap-y-2 bg-neutral-900 w-max py-4 px-4 rounded-2xl">
      <img width="300px" height="300px" src={images[1]} alt="" 
        className="rounded-xl block aspect-square object-cover"/>
      <div className="flex flex-col items-center gap-3 justify-end">
        <p className="text-white text-lg">
          <strong className="">{title}</strong> - <span>${price}</span>
        </p>
        <button className="bg-zinc-700 hover:bg-zinc-500 fill-white py-2 px-4 rounded-lg">
          <AddToCart width="40px" height="40px"></AddToCart>
        </button>
      </div>
    </div>
  );
}
