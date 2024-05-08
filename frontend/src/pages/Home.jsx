import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div class="  flex flex-col  justify-center mt-0 md:flex-row">
    <div class="md:w-2/5  mx-2 flex flex-col  justify-center items-center text-center">
      <h2 class="font-serif text-6xl text-gray-600 mb-4 align-middle text-center md:self-start md:text-left"> Explore World of Bags</h2>
      <p class="uppercase text-3xl text-gray-600 ml-6 tracking-wide text-center md:self-start md:text-left">Find your anytime companion.</p>
      <p class="uppercase text-3xl text-gray-600 align-middle ml-8 tracking-wide text-center md:self-start md:text-left">So <span className=" text-yellow-500 text-5xl  drop-shadow-2xl font-extrabold italic">Let's</span><span className="text-orange-700  drop-shadow-2xl text-5xl font-extrabold italic"> Pack</span>.</p>
      <a class="bg-gradient-to-r from-orange-700 to-yellow-500 rounded-full py-4 px-8 ml-8 text-gray-50 uppercase text-xl md:self-start my-5"><Link to="/Shop">Shop Now</Link></a>
    </div>
    <img src="./jj.jpg" />      
  </div> 
  <div class="container  content-center ml-20  align-middle py-16">
        <h2 class="text-6xl mb-12 mt-2 bg-gradient-to-r from-orange-800 from-30% via-yellow-600 via-50% to-yellow-300 to-90% text-transparent font-extrabold bg-clip-text text-center  uppercase">shop by category</h2>
        <div class="grid content-center grid-cols-3 gap-3">
            <div class="relative rounded-xl overflow-hidden group">
                <img src="./purse.jpg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-3xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Purse</a>
            </div>
            <div class="relative rounded-xl overflow-hidden group">
                <img src="./sling.jpeg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-3xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Sling</a>
            </div>
            <div class="relative rounded-xl overflow-hidden group">
                <img src="./handbag.jpg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-3xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Handbag
                </a>
            </div>
            <div class="relative rounded-xl overflow-hidden group">
                <img src="./backpack.jpg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-3xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Backpack</a>
            </div>
            <div class="relative rounded-xl overflow-hidden group">
                <img src="./tote.jpeg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-3xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Tote
                  </a>
            </div>
            <div class="relative rounded-xl overflow-hidden group">
                <img src="./botua.jpg" alt="category 1" class="w-full"/>
                <a href="#"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-3xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Batua</a>
            </div>
        </div>
    </div>
    
    <div class="container ml-20 pb-16">
    <h2 class="text-6xl mb-12 mt-2 bg-gradient-to-r from-orange-800 from-30% via-yellow-600 via-50% to-yellow-300 to-90% text-transparent font-extrabold bg-clip-text text-center  uppercase">New arrivals</h2>
        <div class="grid grid-cols-1 md:grid-cols-4  content-center gap-6">
            <div class="bg-white shadow rounded overflow-hidden group">
                <div class="relative">
                    <img src="./sling.jpeg" alt="product 1" class="w-full"/>
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    </div>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Sling Bag</h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2">
                        <p class="text-xl text-orange-700 text-primary font-semibold">Rs 450/-</p>
                        <p class="text-sm text-gray-400 line-through">Rs 600/-</p>
                    </div>
                </div>
                <a href="#"
                    class="block w-full bg-red-500 py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
            <div class="bg-white shadow rounded overflow-hidden group">
                <div class="relative">
                    <img src="./handbag.jpg" alt="product 1" class="w-full"/>
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="#"
                            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="view product">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <a href="#"
                            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="add to wishlist">
                            <i class="fa-solid fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Handbag</h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2">
                        <p class="text-xl  text-orange-700 text-primary font-semibold">Rs 650/-</p>
                        <p class="text-sm text-gray-400 line-through">Rs 800/-</p>
                    </div>
                </div>
                <a href="#"
                    class="block w-full bg-red-500 py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
            <div class="bg-white shadow rounded overflow-hidden group">
                <div class="relative">
                    <img src="./purse.jpg" alt="product 1" class="w-full"/>
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="#"
                            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="view product">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <a href="#"
                            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="add to wishlist">
                            <i class="fa-solid fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                            Party Clutch</h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2">
                        <p class="text-xl text-orange-700 text-primary font-semibold">Rs 750/-</p>
                        <p class="text-sm text-gray-400 line-through">Rs 900/-</p>
                    </div>
                </div>
                <a href="#"
                    class="block w-full bg-red-500 py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
            <div class="bg-white shadow rounded overflow-hidden group">
                <div class="relative">
                    <img src="./botua.jpg" alt="product 1" class="w-full"/>
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <a href="#"
                            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="view product">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                        <a href="#"
                            class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                            title="add to wishlist">
                            <i class="fa-solid fa-heart"></i>
                        </a>
                    </div>
                </div>
                <div class="pt-4 pb-3 px-4">
                    <a href="#">
                        <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                            Velvet Botua</h4>
                    </a>
                    <div class="flex items-baseline mb-1 space-x-2">
                        <p class="text-xl text-orange-700 text-primary font-semibold">Rs 450/-</p>
                        <p class="text-sm text-gray-400 line-through">Rs550/-</p>
                    </div>
                </div>
                <a href="#"
                    class="block w-full bg-red-500 py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                    to cart</a>
            </div>
        </div>
    </div>
    
    
  </div>
  )
}

export default Home