import React from 'react'

const Allitems = ({item,itemData}) => {
  return (
    <>
      <div key={item.name} className="border-t border-b border-slate-400 min-lg:px-10 py-4 ">
          <h1 className="min-md:text-3xl text-2xl font-semibold">{itemData?.longName ? itemData.longName :   "Loading..." }</h1>
          <p className="text-xl py-4">Current Market Price <span className="ps-4">₹ {itemData?.regularMarketPrice ? itemData?.regularMarketPrice : "Loading..."  }</span></p>
          <div className="flex max-sm:flex-col justify-between ps-4 border border-slate-400 rounded-xl py-2">
          <div className="min-sm:w-1/2">
            <h1 className="text-xl font-semibold">52 Week High & Low</h1>
            <div className="flex gap-5 py-4">
              <p>Low - {itemData?.fiftyTwoWeekLow ? itemData?.fiftyTwoWeekLow : "Loading..."  }</p>
              <p>High - {itemData?.fiftyTwoWeekHigh ? itemData?.fiftyTwoWeekHigh : "Loading..."  }</p>
            </div>
          </div>
          <div className="min-sm:w-1/2">
            <h1  className="text-xl font-semibold">Day High & Low</h1>
            <div className="flex gap-5 py-4">
              <p>Low - {itemData?.regularMarketDayLow ? itemData?.regularMarketDayLow : "Loading..."  }</p>
              <p>High - {itemData?.regularMarketDayHigh ? itemData?.regularMarketDayHigh : "Loading..."  }</p>
            </div>
          </div>
          </div>
          <div className="flex border justify-around py-2 ps-4 border-slate-400 rounded-xl my-6">
          <div className="min-sm:w-1/3">
          <p>Opening Price</p>
          <p> {itemData?.regularMarketOpen ? itemData?.regularMarketOpen : "Loading..."  }</p>
          </div>
          <div className="min-sm:w-1/3">
          <p>Previous Close</p>
          <p> {itemData?.regularMarketPreviousClose ? itemData?.regularMarketPreviousClose : "Loading..."  }</p>
          </div>
          <div className="min-sm:w-1/3 pe-2">
          <p>Volume</p>
          <p> {itemData?.regularMarketVolume ? itemData?.regularMarketVolume : "Loading..."  }</p>
          </div>
          </div>
        </div>
    </>
  )
}

export default Allitems
