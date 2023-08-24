import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Star from "./starRating.jpeg"
import tick from "./Green_tick.jpeg"

export const ProductGrid = ({ products, handleAddToCart }) => {
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
    <div className="grid grid-cols-2 gap-5 md:px-3 lg:grid-cols-1 ">
      {products.productsData?.map((item) => (
        // start
        <div key={item._id} className="space-y-2 text-center mb-4 grid grid-col-10">
          {/* <div className="relative max-w-10 min-w-10 col-start-1 col-end-3"> */}
          {/* first */}
          <div className="relative grid grid-cols-[200px_minmax(200px)] col-start-1 col-end-5">  
            <div className="group relative flex h-30 justify-center md:h-60 ">
              <Link
                to={`/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                state={{ item }}
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-in-out group-hover:opacity-0 "
                  src={item.imgOne.url}
                  alt={item.name}
                />

                <img
                  className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-0 shadow-xl transition duration-500 ease-in-out group-hover:opacity-100 "
                  src={item.imgTwo.url}
                  alt={item.name}
                />
              </Link>

              <button
                className="absolute bottom-2 hidden translate-y-3 transform rounded-sm bg-gray-700 py-3 px-12 font-urbanist text-xs font-extrabold text-bgcolor opacity-0 transition duration-300 ease-in-out hover:bg-gray-800 group-hover:translate-y-0 group-hover:opacity-100 md:block"
                onClick={() =>
                  handleAddToCart(
                    item._id,
                    item.category,
                    item.name,
                    item.price,
                    item.imgOne,
                    item.imgTwo
                  )
                }
              >
                + CONNECT
              </button>
            </div>

            <div className="absolute bottom-2 right-2 md:hidden">
              <HiOutlineShoppingBag
                onClick={() =>
                  handleAddToCart(
                    item._id,
                    item.category,
                    item.name,
                    item.price,
                    item.imgOne,
                    item.imgTwo
                  )
                }
                className="h-6 w-6 cursor-pointer rounded bg-gray-700 p-1 text-bgcolor transition-all duration-100 ease-in-out hover:bg-gray-800 active:scale-90 active:bg-gray-800"
              />
             </div>
          </div>
      {/* <div className="col-start-3 col-span-4"> */}
      {/* second */}
      <div className=" col-start-5 col-end-10">
          <div className="flex h-14 items-center pl-10 ">
            <p className="font-urbanist text-base text-secondary md:text-lg lg:text-xl">
              Farmer Name : {item.name}
            </p>
          </div>
          <div className="flex h-14 items-center pl-10 ">
            <p className="font-urbanist text-base text-secondary md:text-lg lg:text-xl">
              Crops : {item.category}
            </p>
          </div>
          <div>
             {item.description.map((desc, index) => {
            return (
             <div key={index} className="flex h-14 items-center pl-10 " >
              <h1 className="font-urbanist text-base text-secondary md:text-lg lg:text-xl">Rating : </h1> <img  className="w-1/5" src={Star} alt="" />
              {/* <p> {desc.detailOne} <br/>
              {desc.detailTwo}</p>  */}
            </div>
           );
           
          })}
          </div>
          <div className="flex h-14 items-center pl-10 ">
            {/* <p className="font-urbanist text-base text-secondary md:text-lg lg:text-xl">
               <p>Certified Member <img  className="w-1/5" src={tick} alt="" /></p>
            </p> */}
            <h1 className="font-urbanist text-base text-secondary md:text-lg lg:text-xl">Certified Member : </h1> <img  className="w-10" src={tick} alt="" />

          </div>
     </div>
        </div>
        
      ))}
    </div>
  );
};
