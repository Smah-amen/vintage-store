'use client';

import { productData } from '@/components/commone/data/data';
import React, { useEffect, useState, use } from 'react';

function ProductDetails({ params }) {
  const { productId } = use(params);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setData(productData);
    const found = productData.find(item => item.id === parseInt(productId));
    setProduct(found);
    setLoading(false);
  }, [productId]);

  if (loading) {
    return <div className="p-10 text-red-600 text-xl">loading...</div>;
  }



  return (
    <section className="min-h-screen bg-[#f6f1eb] p-10">
      <div className="max-w-4xl mx-auto bg-[#fdf8f2] border border-[#d8cbb3] rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-cover"
        />
        <div className="p-6 md:w-1/2 space-y-4">
          <h1 className="text-3xl text-[#762342] font-vintage">
            {product.name}
          </h1>
          <div className="flex justify-between space-x-2">
            <p className="text-[#762342] text-lg font-semibold">{product.category}</p>
            <p className="text-[#895f4c] text-2xl font-semibold">${product.price}</p>
          </div>
          <p className="text-[#5c4438] p-2.5 text-lg">{product.description}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
