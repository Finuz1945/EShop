/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProdukLists = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    };
    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Daftar Produk</h2>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-60">
        {currentProducts.map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-lg font-semibold text-gray-900">Harga: ${product.price}</p>
              <div className="mt-4">
                <Link to={`/products/${product.id}`} className="text-blue-500 hover:text-blue-700">
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-60">
        <button onClick={goToPreviousPage} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Previous
        </button>
        <div>
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <button onClick={goToNextPage} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProdukLists;
