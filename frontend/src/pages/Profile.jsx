import React, { useState} from 'react'
//import "../styles/profile.css"
const Profile = () => {

  const [action, setAction]= useState("LOGIN");

  return (
    <div>
    <body class="flex items-center justify-center
              min-h-screen bg-yellow-200">
    <div class="main bg-white rounded-lg shadow-md p-10 
    transition-transform w-96 text-center">
        <h1 class="text-white  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]  bg-gradient-to-r from-orange-700 from-5% via-orange-700 via-20% to-yellow-300 to-80%  font-semibold text-4xl">{action}</h1>
        {action==="SIGN UP"?<h3 class="text-lg mt-1 font-sans ">Fill up for Registration</h3>: <h3 class="text-lg mt-1">
              Enter your login credentials
          </h3>}
        <div>
          {action==="SIGN UP"?<div className=' block mb-2 mt-4 text-left text-gray-700 font-bold'>Full Name<input type="text" placeholder='Enter your full name' class='block w-full mb-6 px-4 py-2 border 
                border-orange-600 rounded-md focus:outline-none
                 focus:border-green-600'required/><div className='block mb-2 mt-4 text-left text-gray-700 font-bold'>Email Id<input type='email' placeholder='Enter your email id' class='block w-full mb-6 px-4 py-2 border  border-orange-600 rounded-md focus:outline-none
                 focus:border-green-600'required/></div></div>:<div></div>}

          <label for="name" class="block mb-2 mt-4 text-left
             text-gray-700 font-bold">Username</label>
            <input type="text" id="name" name="username"
                   placeholder="Enter your Username"
                   class="block w-full mb-6 px-4 py-2 border 
                border-orange-600 rounded-md focus:outline-none
                 focus:border-green-600" required/>
                 <label for="password" class="block mb-2 text-left
             text-gray-700 font-bold">Password:</label>
            <input type="password" id="password" name="password"
                   placeholder="Enter your Password"
                   class="block w-full mb-6 px-4 py-2  border 
                border-orange-600 rounded-md focus:outline-none
                 focus:border-green-600" required/>
 
            <div class="flex justify-center items-center">
             {action==="LOGIN"?<button type="submit"
                        class=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] bg-yellow-400 text-white py-3 px-6  rounded-full
                    -md cursor-pointer font-bold transition-colors 
                    duration-300 hover:bg-orange-700" onClick={()=>{setAction("LOGIN")}}>
                    LOG IN
                </button>:
   <button type="submit"
                        class=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] bg-gray-400 text-white py-3 px-6  rounded-full
                    -md cursor-pointer font-bold transition-colors 
                    duration-300 hover:bg-orange-700" onClick={()=>{setAction("LOGIN")}}>
                    LOG IN
                </button>} 
                 </div>
 </div>
  
      <div class="flex justify-center mt-3 items-center">
        {action==="SIGN UP"?<div></div>:<p class="mt-4">Not registered?</p>}
        {action ==="SIGN UP"?<button type="submit"
                        class=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)] bg-orange-700 rounded-full text-white py-3 px-6 
                     cursor-pointer font-bold ml-2
                   hover:bg-yellow-400" onClick={()=>{setAction("SIGN UP")}} >
                    SIGN UP
                </button>:
<button type="submit"
                        class=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]  bg-gray-400 rounded-full text-white py-3 px-6 
                     cursor-pointer font-bold ml-2
                   hover:bg-orange-700" onClick={()=>{setAction("SIGN UP")}} >
                    SIGN UP
                </button>}
      </div>
    </div>
</body>
    </div>
  )
}

export default Profile