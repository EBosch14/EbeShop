export default function ({id, images, category, description, price, title}) {
  return (
    <div key={id}>
      <img src={images[1]} alt="" />
      <p>{title}</p>
      <p>Category: {category.name}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
    </div>
  );
}
