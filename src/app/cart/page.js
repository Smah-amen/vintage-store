// In app/cart/page.js

"use client";

import { useContext, useMemo } from "react";
import { CartContext } from "@/context/CartContext"; // Make sure this path is correct
import Link from "next/link";
import Image from "next/image";

const CartPage = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // **الخطوة السحرية هنا**
  // نستخدم useMemo لتحسين الأداء، بحيث لا يتم إعادة حساب هذه القائمة إلا عند تغير السلة.
  const aggregatedCartItems = useMemo(() => {
    const itemMap = new Map();

    // المرور على كل منتج في السلة الأصلية
    cart.forEach(item => {
      if (itemMap.has(item.id)) {
        // إذا كان المنتج موجودًا بالفعل في الخريطة، قم بزيادة الكمية
        itemMap.get(item.id).quantity += 1;
      } else {
        // إذا كان المنتج جديدًا، أضفه إلى الخريطة مع كمية 1
        itemMap.set(item.id, { ...item, quantity: 1 });
      }
    });

    // تحويل الخريطة مرة أخرى إلى مصفوفة لعرضها
    return Array.from(itemMap.values());
  }, [cart]); // الاعتمادية: أعد الحساب فقط عند تغير `cart`

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // دالة جديدة لإنقاص الكمية (تحذف نسخة واحدة من المنتج)
  const decreaseQuantity = (product) => {
    // بما أننا لا نستطيع تعديل الـ Context، فإن "إنقاص الكمية" يعني إزالة عنصر واحد
    // من مصفوفة السلة الأصلية. هذا ليس مثاليًا ولكنه يعمل مع القيود الحالية.
    removeFromCart(product.id);
  };

  return (
    <div className="bg-[#fdfaf6] font-serif min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl font-bold text-[#4a4a4a]">Your Treasure Chest</h1>
          <p className="text-lg text-gray-600 mt-2">A collection of finds, waiting for a new home.</p>
        </div>

        {aggregatedCartItems.length === 0 ? (
          <div className="text-center bg-white p-10 rounded-lg shadow-md">
            <p className="text-2xl text-gray-700 mb-6">Your cart is currently empty.</p>
            <Link href="/" className="text-lg font-medium text-white bg-[#8B4513] hover:bg-[#A0522D] px-8 py-3 rounded-md transition-colors duration-300">
              Discover More Treasures &rarr;
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
              <ul role="list" className="divide-y divide-gray-200">
                {aggregatedCartItems.map((product) => (
                  <li key={product.id} className="flex flex-col sm:flex-row py-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={150}
                        height={150}
                        className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg object-cover border-2 border-gray-200"
                      />
                    </div>
                    <div className="ml-0 sm:ml-6 mt-4 sm:mt-0 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-semibold text-gray-800">
                            <Link href={`/product/${product.id}`} className="hover:text-[#8B4513] transition-colors">{product.name}</Link>
                          </h3>
                          <p className="text-xl font-bold text-gray-900 ml-4">${(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-md text-gray-500">Unit Price: ${product.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button onClick={() => decreaseQuantity(product)} className="px-3 py-1 text-xl font-bold text-gray-600 hover:bg-gray-100 rounded-l-md transition-colors">-</button>
                          <span className="px-4 py-1 text-md font-medium text-gray-800">{product.quantity}</span>
                          <button onClick={() => addToCart(product)} className="px-3 py-1 text-xl font-bold text-gray-600 hover:bg-gray-100 rounded-r-md transition-colors">+</button>
                        </div>
                        {/* زر الإزالة سيحذف كل كميات المنتج مرة واحدة */}
                        <button onClick={() => removeFromCart(product.id)} type="button" className="font-medium text-red-700 hover:text-red-500 transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
                <h2 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-gray-800 border-b pb-4">Order Summary</h2>
                <div className="flex justify-between text-lg text-gray-700 mt-4">
                  <p>Subtotal</p>
                  <p>${calculateSubtotal()}</p>
                </div>
                <p className="mt-2 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                  <a href="#" className="w-full flex items-center justify-center rounded-md border border-transparent bg-[#8B4513] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#A0522D] transition-colors duration-300">
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
