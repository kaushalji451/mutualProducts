import React from 'react'
import { useState ,useEffect} from 'react';
import topStocks from '../mutrualSymbolsArray/stocks';
import Allitems from '../components/Allitems';
const stocks = () => {
  const [data, setdata] = useState({});
 
   useEffect(() => {
     const fetchData = async () => {
       try {
         const responses = await Promise.all(
           topStocks.map(async (stock) => {
             try {
               const response = await fetch(
                 `http://localhost:8080/mutual_details?name=${stock.name}`
               );
               if (!response.ok) throw new Error(`Failed to fetch ${stock.name}`);
               const json = await response.json();
               return { name: stock.name, data: json };
             } catch (err) {
               console.error(`Error fetching ${stock.name}:`, err);
               return { name: stock.name, data: null };
             }
           })
         );
 
         const result = {};
         responses.forEach((res) => {
           result[res.name] = res.data;
         });
 
         setdata(result);
       } catch (error) {
         console.log("Error fetching multiple stock data", error);
       }
     };
 
     fetchData();
     const interval = setInterval(fetchData, 5000);
     return () => clearInterval(interval);
   }, []);
 
   return (
    <div className=" h-screen w-full flex justify-center overflow-auto items-center text-[#362f5a] bg-[#f5e7e6] ">
    <div className=" min-lg:w-[70%] w-[90%] h-screen   ">
      <h1 className="font-bold text-3xl text-center min-md:py-10 min-md:px-10 py-4">Indias Top 10 Stocks</h1>
        {topStocks.map((stock) => {
               const stockData = data?.[stock.name];
               return (
              <Allitems item={stock} itemData={stockData}></Allitems>
               );
             })}
         
       </div>
     </div>
   );
}

export default stocks
