import { AddToCart } from "../icons/Icons";

export default function ({ id, images, price, title }) {
  return (
    <div key={id} 
      className="flex flex-col gap-4 bg-slate-800 w-full py-4 px-4 rounded-xl shadow-lg">
      <img src={images[0]} alt="" 
        className="rounded-xl w-full block aspect-square object-cover bg-white"/>
      <div className="flex flex-col items-center gap-3 justify-end">
        <h3 className="text-white text-md m-0">
          <strong className="">{title}</strong> - <span className="opacity-80 text-base">${price}</span>
        </h3>
        <button className="flex items-center justify-center bg-slate-700 hover:bg-slate-600 fill-white py-2 px-3 rounded">
          <AddToCart width="24px" height="24px"></AddToCart>
        </button>
      </div>
    </div>
  );
}
