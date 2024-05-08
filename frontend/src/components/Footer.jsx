 import React from 'react'
 import { Link } from "react-router-dom";

 
 const Footer = () => {
   return (
     <footer className=' mb-0 text-center text-white bg-gradient-to-r from-orange-800 from-30% via-yellow-600 via-50% to-yellow-300 to-90% ... '>
     <div className='flex px-6 justify-between  mb-0 pt-6 mx-3  '>
  <section> <h1 className=' text-3xl text-yellow-300 border-l-4 p-1 font-semibold'>USEFUL LINK</h1>
            <ul className=' flex-col  text-2xl font-serif'>
              <br/>
              <li className=" hover:text-yellow-300 rounded-lg hover:text-4xl"><Link to="/">Home</Link></li>
      <li className="  hover:text-yellow-300 rounded-lg hover:text-4xl "><Link to="/Shop">Shop</Link></li>
      <li className=" hover:text-yellow-300 rounded-lg hover:text-4xl "><Link to="/Cart">Cart</Link></li>
      <li className=" hover:text-yellow-300 rounded-lg hover:text-4xl"><Link to="/Profile">Profile</Link></li>
        </ul>
</section>

  <div class="px-6 pt-6">
    <form>
      <div
        class="grid-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
        <div class="md:mb-6 text-2xl md:ms-auto">
          <p>
            <strong>Sign up for our newsletter</strong>
          </p>
        </div>

        <div class="relative md:mb-6" data-twe-input-wrapper-init>
          <input type="email"class="peer text-2xl block min-h-[auto] w-full rounded border-0 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputEmail2"
            placeholder="Email address text-2xl " />
          <label
            for="exampleFormControlInputEmail2"
            class="pointer-events-none text-xl absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >Email address
          </label>
        </div>

        <div class="mb-6  md:me-auto">
          <button
            type="button"
            class="inline-block rounded bg-orange-800 text-xl px-6 pb-2 pt-2.5 hover:bg-yellow-400  font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  </div>
  <section> <h1 className=' text-3xl border-l-4 text-orange-800 font-semibold'>CONTACT US</h1>
            <br/>
            <ul className='flex-col'>
            <li className='flex text-lg font-semibold text-orange-800 gap-2'><img className=' size-8 ' src="home.png"/>11,AJC Bose Road, Kolkata</li>
            <li className='flex text-lg font-semibold text-orange-800 gap-2'><img className=' size-8' src="mail.png" /> Official@let's_pack.com</li>
            <li className='flex text-lg font-semibold text-orange-800 gap-2'><img className=' size-8' src="phone.png"/> 123456789</li>
            
        </ul></section>          
        </div> 

        <div className='  align-middle'>     
       <p className='text-white text-xl'> © 2023 <span className=" text-yellow-100  drop-shadow-xl   font-extrabold italic  text-4xl mt-0 mb-0 pl-4">Let's</span><span className="text-white text-4xl drop-shadow-xl  font-extrabold italic mt-0 mb-0 pl-4">Pack.</span><span className='text-white text-xl'>All Rights Reserved</span></p>
 <br/>
  </div>
</footer>
     

     
  
   )
 }
 
 export default Footer