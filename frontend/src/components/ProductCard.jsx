import React from 'react'

const ProductCard = ({title, price, imgUrl}) => {
  return (
    <div class="bg-white shadow rounded overflow-hidden group">
    <div class="relative">
        <img src={imgUrl} alt="product image" class="w-full  h-52"/>
        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
        </div>
    </div>
    <div class="pt-4 pb-3 px-4">
        <a href="#">
            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{title}</h4>
        </a>
        <div class="flex items-baseline mb-1 space-x-2">
            <p class="text-xl text-orange-700 text-primary font-semibold">Rs {price}/-</p>
        </div>
    </div>
    <a href="#"
        class="block w-full bg-orange-700 py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-yellow-300 hover:text-primary transition">Add
        to cart</a>
</div>
)
}

export default ProductCard