import React from "react";
import farm_banner from "../../../../src/assets/product/banner/farm_banner.jpg"
export const ProductBanner = ({ filteredBanners }) => {
  return (
    <>
      {1 ? (
        <div className="relative flex items-center justify-end pt-28 md:pt-14">
          {/* <h1 className="absolute mr-6 font-urbanist text-lg font-bold uppercase text-primary sm:mr-5 sm:text-3xl md:mr-6 md:text-4xl lg:mr-52 lg:text-5xl">
            {filteredBanners.name}
          </h1> */}

          <img src={farm_banner} alt="banner" className="" />
        </div>
      ) : (
        filteredBanners.map((item) => (
          <div>
            <img src={farm_banner} alt="banner" />
          </div>
        ))
      )}
    </>
  );
};
