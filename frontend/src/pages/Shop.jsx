import React from 'react'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import {useEffect, useState } from 'react'


const fetchProducts= async () => {
  const res= await axios.get("http://localhost:4000/products");
 const data= res.data;
  console.log(data);
  return data;
};

const Shop = () => {
  const [data, setData] = useState([]);

  const assignData= async () => {
    const fetchedData = await fetchProducts();

    setData(fetchedData);

  };

  useEffect(()=> {
assignData();
  }, []);
  
  return (
    <div>
      <div class="container ml-12 mr-6 pb-16">
    <h2 class="text-6xl mb-12 mt-12 underline decoration-red-800 bg-gradient-to-r from-orange-800 from-5% via-orange-700 via-20% to-yellow-200 to-80% text-transparent font-extrabold bg-clip-text  text-center  uppercase">ALL PRODUCTS</h2>
        <div class="grid grid-cols-1 md:grid-cols-4  content-center gap-6">
        
          {data.map ((product)=> {
            return(
              <ProductCard key={product._id} title={product.title} price={product.price} imgUrl={product.imgUrl} />
            );
          } )}
        
</div>
</div>
</div>


    
  )
}

export default Shop