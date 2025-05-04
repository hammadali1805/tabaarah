import { useState } from "react";
import { useCart } from "./CartContext";

export const ProductType = ({ type, category }) => {
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();

  const increment = (index) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));
  };

  const decrement = (index) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max((prev[index] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = (product, index) => {
    const quantity = quantities[index] || 0;
    if (quantity > 0) {
      addToCart({
        ...product, 
        type, // Add product type for better identification
      }, quantity);
      
      // Reset quantity after adding to cart
      setQuantities((prev) => ({
        ...prev,
        [index]: 0,
      }));
    }
  };

  return (
    <div className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-green">{type}</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max">
          {category.map((product, index) => (
            <div
              key={index}
              className="min-w-[240px] bg-white shadow-md rounded-lg p-4 flex flex-col justify-between hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <div className="mt-3">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-green-700 font-bold mt-1">
                  {typeof product.price === "object"
                    ? <>Empty: ₹{product.price.empty} | Filled: ₹{product.price.filled}</>
                    : <>₹{product.price}</>}
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center justify-between border border-green-500 rounded-full px-3 py-1 w-full">
                  <button
                    onClick={() => decrement(index)}
                    className="text-green-700 font-bold text-xl hover:bg-gray-50 px-2.5 pb-1 rounded-full"
                  >
                    –
                  </button>
                  <span className="text-green-700 font-semibold">
                    {quantities[index] || 0}
                  </span>
                  <button
                    onClick={() => increment(index)}
                    className="text-green-700 font-bold text-xl hover:bg-gray-50 px-2.5 pb-1 rounded-full"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleAddToCart(product, index)}
                  disabled={!quantities[index] || quantities[index] === 0}
                  className={`w-full py-2 rounded-full ${
                    !quantities[index] || quantities[index] === 0
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  } transition`}
                >
                  Add to Box
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};