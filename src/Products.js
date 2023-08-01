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
  function manageCart(i) {
    if (cart.filter((e) => e.id === i.id).length > 0) {
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
      setTotal(total + i.price);
      setAllt(all + 1);
    } else {
      setTotal(total + i.price * i.count);
      setCart((current) => [...current, i]);
      setAllt(all + 1);
    }
  }

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
