import { useId } from "react"

export default function() {

  const PRICE_ID = useId(); 
  const CATEGORY_ID = useId();

  return (
    <div>
      <div>
        <label htmlFor="">Price: </label>
        <input type="range" name="setPrice" id={PRICE_ID} />
      </div>
      <div>
        <label htmlFor="">Category: </label>
        <select name="" id={CATEGORY_ID}>
          <option value="Shoe">Shoe</option>
          <option value="Laptop">Laptop</option>
          <option value="Phone">Phone</option>
          <option value="Key">Key</option>
        </select>
      </div>
    </div>
  )
}