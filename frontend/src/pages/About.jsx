import React from 'react'

const About = () => {
  return (
    <div>
          <div class="container ml-7 py-16">
      <h2 class="text-4xl  mb-6 mt-12 bg-gradient-to-r from-orange-800 from-30% via-yellow-600 via-50% to-yellow-300 to-90% text-transparent font-extrabold bg-clip-text text-center uppercase"><span class=' text-6xl'>Let's pack</span>  offers you</h2>
</div>        
<div class="w-10/12 grid grid-cols-1  md:grid-cols-3 gap-6 mx-auto justify-center">
            <div class=" border-4 bg-gradient-to-r from-orange-600 to-yellow-500   border-yellow-800 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="./plant.png" alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-bold text-yellow-50 capitalize text-xl">Cruelty Free</h4>
                    <p class="text-orange-800 text-sm">We believe in crafting the good. In fact, we are a PeTA approved Vegan brand. So, you can happily say - no animals were harmed in making this.</p>
                </div>
            </div>
            <div class="border-4 bg-gradient-to-r from-orange-600 to-yellow-500  border-yellow-800 border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="./proud.png" alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-bold capitalize text-yellow-50 text-xl">Proudly Indian</h4>
                    <p class="text-orange-800 text-sm">We are unapologetically Indian. Proud but humble. Weaving tradition with the contemporary, we bring the modern Indian classic to the world.</p>
                </div>
            </div>
            <div class="border-4 bg-gradient-to-r from-orange-600 to-yellow-500 border-yellow-800 border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="./handcraft.png" alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class=" font-bold  text-yellow-50 text-xl">Handcrafted</h4>
                    <p class="text-orange-800 text-sm">Everything is thoughtfully designed. Our artisans then sculpt them to life. By hand. We thus make something that is authentically you.</p>
                </div>
            </div>
        </div>


      <div class="container ml-9 py-16">
      <h2 class="text-4xl mb-12 mt-2 bg-gradient-to-r from-orange-800 from-30% via-yellow-600 via-50% to-yellow-300 to-90% text-transparent font-extrabold bg-clip-text text-center  uppercase">Why choose us!</h2>

        <div class="w-10/12 grid grid-cols-1  md:grid-cols-3 gap-6 mx-auto justify-center">
            <div class=" border-4  border-orange-200 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="./truck.png" alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
                    <p class="text-gray-500 text-sm">Order over Rs 500/-</p>
                </div>
            </div>
            <div class="border-4 border-yellow-300 border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="./money.png" alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-medium capitalize text-lg">Money Returns</h4>
                    <p class="text-gray-500 text-sm">15Days Full Refund</p>
                </div>
            </div>
            <div class="border-4 border-orange-300 border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                <img src="./clock.png" alt="Delivery" class="w-12 h-12 object-contain"/>
                <div>
                    <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
                    <p class="text-gray-500 text-sm">Customer support</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About