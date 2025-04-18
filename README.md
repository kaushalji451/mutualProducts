# Stocks , ETFs, Rites Api

this is a microserive where user can she the live prices of Stocks, ETFs, Rites also some of the other details like max price in the day ,volume and etc.

# Table of Content

Api Endpoint
Mututal Produts Logic to get the price
Backend Setup
FrontEnd Setup
Taech Stack

# Api Endpoint

post - /mutual_details  
 Description - Getting the name of stock, etf,rites form the query string and return the details after calling the Details funtion in this funtion he calling to an api named yahoofinance2 that give the live price of this thinks. 
Request Query -

    {
        "name" : "TCS.NS"
    }

Response -
   {
    "language": "en-US",
    "region": "US",
    "quoteType": "EQUITY",
    "typeDisp": "Equity",
    "quoteSourceName": "Delayed Quote",
    "triggerable": true,
    "customPriceAlertConfidence": "HIGH",
    "exchange": "NSI",
    "messageBoardId": "finmb_6411769",
    "exchangeTimezoneName": "Asia/Kolkata",
    "exchangeTimezoneShortName": "IST",
    "gmtOffSetMilliseconds": 19800000,
    "market": "in_market",
    "esgPopulated": false,
    "corporateActions": [],
    "regularMarketTime": "2025-04-17T10:00:00.000Z",
    "currency": "INR",
    "shortName": "TATA CONSULTANCY SERV LT",
    "longName": "Tata Consultancy Services Limited",
    "averageAnalystRating": "2.0 - Buy",
    "tradeable": false,
    "cryptoTradeable": false,
    "regularMarketChangePercent": 0.76668864,
    "regularMarketPrice": 3298.9,
    "marketState": "CLOSED",
    "bid": 0,
    "ask": 0,
    "bidSize": 0,
    "askSize": 0,
    "fullExchangeName": "NSE",
    "financialCurrency": "INR",
    "regularMarketOpen": 3245.5,
    "averageDailyVolume3Month": 2652723,
    "averageDailyVolume10Day": 4553375,
    "fiftyTwoWeekLowChange": 242.84985,
    "fiftyTwoWeekLowChangePercent": 0.07946527,
    "fiftyTwoWeekRange": {
        "low": 3056.05,
        "high": 4592.25
    },
    "fiftyTwoWeekHighChange": -1293.3501,
    "fiftyTwoWeekHighChangePercent": -0.28163755,
    "fiftyTwoWeekLow": 3056.05,
    "fiftyTwoWeekHigh": 4592.25,
    "fiftyTwoWeekChangePercent": -13.781298,
    "earningsTimestamp": "2025-04-10T10:30:00.000Z",
    "earningsTimestampStart": "2025-07-09T10:30:00.000Z",
    "earningsTimestampEnd": "2025-07-14T10:30:00.000Z",
    "earningsCallTimestampStart": 1744291800,
    "earningsCallTimestampEnd": 1744291800,
    "isEarningsDateEstimate": true,
    "trailingAnnualDividendRate": 60,
    "trailingPE": 24.56915,
    "dividendRate": 58,
    "trailingAnnualDividendYield": 0.018327326,
    "dividendYield": 1.76,
    "epsTrailingTwelveMonths": 134.27,
    "epsForward": 154.68,
    "epsCurrentYear": 143.00159,
    "priceEpsCurrentYear": 23.068974,
    "sharesOutstanding": 3618089984,
    "bookValue": 261.895,
    "fiftyDayAverage": 3580.442,
    "fiftyDayAverageChange": -281.542,
    "fiftyDayAverageChangePercent": -0.07863331,
    "twoHundredDayAverage": 4080.6853,
    "twoHundredDayAverageChange": -781.7854,
    "twoHundredDayAverageChangePercent": -0.19158189,
    "marketCap": 11935716212736,
    "forwardPE": 21.327257,
    "priceToBook": 12.59627,
    "sourceInterval": 15,
    "exchangeDataDelayedBy": 15,
    "hasPrePostMarketData": false,
    "firstTradeDateMilliseconds": "2002-08-12T03:45:00.000Z",
    "priceHint": 2,
    "regularMarketChange": 25.099854,
    "regularMarketDayHigh": 3303.6,
    "regularMarketDayRange": {
        "low": 3218,
        "high": 3303.6
    },
    "regularMarketDayLow": 3218,
    "regularMarketVolume": 2931850,
    "regularMarketPreviousClose": 3273.8,
    "symbol": "TCS.NS"
}
 
# Mutual Detials find Logic

    to get the live price of stocks ,etfs,riets just make an api call to yahooFinance with the name of stock or eits. and it give you the complete details about the price and other thinks.

# Backend Setup

1.  Clone the Repo.
    git clone 
    cd backend

2.  Install dependencies.
    npm install

4.  Run the Server
    node app.js

5.  Server is running on port:- http://localhost:8080

# Frontend Setup

1. Navigate to frontend Folder
   cd ../frontend

2. Install dependencies
   npm install

3. Start React Server
   npm run dev

4. Frontend running on prt : http://localhost:5173

# Tech Stack
Frontend - React.js , Tailwind Css  
 Backend - Node.js , Express.js ,
