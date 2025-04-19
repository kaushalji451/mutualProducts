import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Allproduct from "../components/Allproduct";
import SearchBar from "../components/Search";
import allProducts from "../mutrualSymbolsArray/AllProductArray";
const MutualProduct = () => {
  return (
    <>
      <div className="h-full">
        <div className="bg-[#f5e7e6] h-full min-xl:h-screen  w-full min-lg:p-20 p-6 pt-10 max-sm:p-2">
          
          <div className="text-center flex justify-around font-bold text-4xl pb-6  text-[#995c56]">
           <h1 >Mutual product</h1>
           <div className="flex gap-3">
            {/* <input type="text" placeholder="Search your mutual product" className="py-2 text-lg px-2 font-light text-[#262140] border rounded-xl w-full" />
            <button className="text-xl bg-[#262140] rounded-xl px-4 text-[#f8b3ac]">Search</button> */}
            <SearchBar allProducts={allProducts}/>
           </div>
          </div>
          <Allproduct
            id="1"
            name="/stock"
            title="India's Leading Stocks"
            description="Investing in stocks allows you to own a piece of a company, with potential for growth as the company performs well. Stock investments offer the opportunity for high returns but come with higher risk. Grow your wealth by strategically investing in stocks and holding them for the long term."
          ></Allproduct>
          <Allproduct
            id="2"
            name="/etf"
            title="Exchange-Traded Fund | ETFs"
            description="ETFs are investment funds that trade on the stock exchange, offering diversification and lower risk compared to individual stocks. By investing in ETFs, you can gain exposure to a wide range of assets, from stocks to bonds, while growing your wealth with a balanced approach."
          ></Allproduct>
          <Allproduct
            id="3"
            name="/riet"
            title=" Real Estate Investment Trusts | REITs"
            description="REITs provide an opportunity to invest in real estate without having to buy property. These trusts pool funds from investors to invest in income-producing real estate. With REITs, you can earn regular income through dividends while diversifying your portfolio with property-based investments."
          ></Allproduct>
        </div>
      </div>
    </>
  );
};

export default MutualProduct;
