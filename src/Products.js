import React from "react";

export default function Products({
  items,
  setCart,
  cart,
  total,
  setTotal,
  all,
  setAllt,
}) {
  // Function to manage the cart when the "Add to cart" button is clicked
  function manageCart(i) {
    // Check if the product is already in the cart
    if (cart.filter((e) => e.id === i.id).length > 0) {
      // If the product is already in the cart, update its count
      setCart((current) =>
        current.map((item) => {
          if (item.id === i.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          } else {
            return item;
          }
        }),
      );
      // Update the total price and the total count of items in the cart
      setTotal(total + i.price);
      setAllt(all + 1);
    } else {
      // If the product is not in the cart, add it to the cart
      setTotal(total + i.price * i.count);
      setCart((current) => [...current, i]);
      setAllt(all + 1);
    }
  }

  // Render the list of products
  return (
    <main className="allprod">
      {items.map((i) => {
        return (
          <div className="cont" key={i.id}>
            <div className="items">
              <img className="prodimg" src={i.src} alt="img" />
              <div className="prodname">
                <h2>{i.name}</h2>
                <h2>{i.price}$</h2>
              </div>
              <button className="addtocart" onClick={() => manageCart(i)}>
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
