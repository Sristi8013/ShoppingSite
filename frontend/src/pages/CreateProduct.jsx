import React from 'react'
import { useForm } from "react-hook-form"
import  axios  from 'axios'

const CreateProduct = () => {
const {
    handleSubmit,
    register,
    formState: { errors },
}= useForm();

const submitHandler =async ({ title, description, price, imgUrl })=> {
  const res= await axios.post("http://localhost:4000/products", {
    title, description, price, imgUrl,
  });
    if (res.status === 201){
      alert("Product created successfully!");
    }
  }


  return (
    <form onSubmit={handleSubmit (submitHandler)}>
        <div> 
            <label htmlFor="title">Title</label>
            <input type="text" id="title" className='border' {...register("title", {required: "Please enter Product title"})}/>
            {errors.title && (<div className=' text-red-600'>{errors.title.message}</div>)}
        </div>
        <div>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" className='border' {...register("description", {required: "Please enter Product description"})}/>
            {errors.description && (<div className=' text-red-600'>{errors.description.message}</div>)}
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" className='border' {...register("price", {required: "Please enter Product price"})}/>
            {errors.price && (<div className=' text-red-600'>{errors.price.message}</div>)}
        </div>
        <div>
            <label htmlFor="imgUrl">ImgUrl</label>
            <input type="text" id="imgUrl" className='border' {...register("imgUrl", {required: "Please enter Product ImgUrl"})}/>
            {errors.imgUrl && (<div className=' text-red-600'>{errors.imgUrl.message}</div>)}
        </div>
        <div className='flex justify-end mt-10'>
          <button type="submit" className='bg-black text-white p-2 rounded-full'>Create Product</button>
        </div>
    </form>
    
  )
}

export default CreateProduct