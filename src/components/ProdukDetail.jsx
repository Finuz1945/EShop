/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);
  if (!product) return <p className="text-center text-slate-500 font-bold text-2xl mt-80">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mt-40 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-lg font-semibold text-gray-900 mt-4">Harga: ${product.price}</p>
          <div className="mt-6">
            <button onClick={() => navigate("/products")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Kembali ke Daftar Produk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
