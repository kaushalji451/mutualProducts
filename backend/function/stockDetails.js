const yahooFinance = require("yahoo-finance2").default;

const getStock = async ({name}) => {
  try {
    const result = await yahooFinance.quote(name);
    return result;
  } catch (error) {
    return null;
  }
  
};
module.exports = { getStock };
