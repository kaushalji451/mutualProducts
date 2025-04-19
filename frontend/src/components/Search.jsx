import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ allProducts }) {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); 

  // Handle filtering products based on user input
  useEffect(() => {
    if (query.trim() === "") {
      setFilteredProducts([]);
      setDropdownOpen(false);
    } else {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
      setDropdownOpen(filtered.length > 0);
    }
  }, [query, allProducts]);

  // Handle the change in input field
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle click on a product suggestion
  const handleSuggestionClick = (product) => {
    let page = product.id >=1 && product.id<=8 ? "etf" : product.id >=9 && product.id<=16? "riet" :product.id >=17 && product.id<=26? "stock" : "/" ;
    
    navigate(`/${page}`); 
    setQuery(""); 
    setDropdownOpen(false);
  };

  return (
    <div className="relative w-full search-container">
  <input
    type="text"
    placeholder="Search for a product..."
    value={query}
    onChange={handleInputChange}
    className="w-full px-4 py-2 border text-xl  border-[#262140] rounded-md "
  />

  {isDropdownOpen && (
    <div className="absolute top-full left-0 w-full mt-1 bg-[#f5e7e6] border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-50 text-[#262140]">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
          onClick={() => handleSuggestionClick(product)}
        >
          {product.name}
        </div>
      ))}
    </div>
  )}
</div>

  );
}

export default SearchBar;
