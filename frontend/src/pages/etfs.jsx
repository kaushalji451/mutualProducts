import React, { useEffect, useState } from "react";
import etfs from "../mutrualSymbolsArray/etfs";
import Allitems from "../components/Allitems";
const Etfs = () => {
  const [data, setdata] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          etfs.map(async (etf) => {
            try {
              const response = await fetch(
                `http://localhost:8080/mutual_details/?name=${etf.name}`
              );
              if (!response.ok) throw new Error(`Failed to fetch ${etf.name}`);
              const json = await response.json();
              return { name: etf.name, data: json };
            } catch (err) {
              console.error(`Error fetching ${etf.name}:`, err);
              return { name: etf.name, data: null };
            }
          })
        );

        const result = {};
        responses.forEach((res) => {
          result[res.name] = res.data;
        });

        setdata(result);
      } catch (error) {
        console.log("Error fetching multiple ETF data", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" h-screen w-full flex justify-center overflow-auto items-center text-[#362f5a] bg-[#f5e7e6] ">
      <div className=" min-lg:w-[70%] w-[90%] h-screen   ">
        <h1 className="font-bold text-3xl text-center min-md:py-10 min-md:px-10 py-4">Indias Top 8 ETFs</h1>
        {etfs.map((etf) => {
              const etfData = data?.[etf.name];
              return (
              <Allitems item={etf} itemData={etfData}></Allitems>
              );
            })}
        
      </div>
    </div>
  );
};

export default Etfs;
