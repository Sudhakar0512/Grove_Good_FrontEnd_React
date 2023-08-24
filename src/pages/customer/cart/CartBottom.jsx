import React from "react";
import { useSelector } from "react-redux";

const CartBottom = () => {
  const { cartTotalAmount } = useSelector((store) => store.cart);

  function formatPrice(price) {
    // Get the user's locale from the browser
    const userLocale = navigator.language || "en-US";

    // Format the price value using the user's locale and currency
    const formattedPrice = Number(price).toLocaleString(userLocale, {
      style: "currency",
      currency: "USD",
    });

    return formattedPrice;
  }

  return (
    <div className="space-y-2 border-t-2 bg-bgcolor p-4 font-urbanist">
      {/* <div className="flex items-center justify-between">
        <h1 className="font-bold text-primary">SUBTOTAL</h1>
        <span className="rounded bg-primary py-1 px-2 text-sm text-white md:text-base">
          {formatPrice(cartTotalAmount)}
        </span>
      </div> */}
    </div>
  );
};

export default CartBottom;
