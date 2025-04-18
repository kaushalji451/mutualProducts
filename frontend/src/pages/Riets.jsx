import React from "react";
import reits from "../mutrualSymbolsArray/riets";
import { useState, useEffect } from "react";
import Allitems from "../components/Allitems";
const Riets = () => {
  const [data, setdata] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          reits.map(async (reit) => {
            try {
              const response = await fetch(
                `http://localhost:8080/mutual_details?name=${reit.name}`
              );
              if (!response.ok) throw new Error(`Failed to fetch ${reit.name}`);
              const json = await response.json();
              return { name: reit.name, data: json };
            } catch (err) {
              console.error(`Error fetching ${reit.name}:`, err);
              return { name: reit.name, data: null };
            }
          })
        );

        const result = {};
        responses.forEach((res) => {
          result[res.name] = res.data;
        });
        setdata(result);
      } catch (error) {
        console.log("Error fetching multiple reit data", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" h-screen w-full flex justify-center overflow-auto items-center text-[#362f5a] bg-[#f5e7e6] ">
    <div className=" min-lg:w-[70%] w-[90%] h-screen   ">
      <h1 className="font-bold text-3xl text-center min-md:py-10 min-md:px-10 py-4">Indias Top 8 RIETs</h1>
       {reits.map((reit) => {
          const reitData = data?.[reit.name];
          return (
           
            <Allitems item={reit} itemData={reitData}></Allitems>
          );
        })}
      </div>
    </div>
  );
};

export default Riets;
