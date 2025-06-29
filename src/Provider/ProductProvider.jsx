import { useEffect, useState } from "react";
import productContext from "../Context/ProductContext";

import {
  fetchProducts as getProducts,
} from "../APIs/product";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      setProducts(res.data.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <productContext.Provider
      value={{
        products,
        fetchProducts,
        loading,
        error,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
