import React from 'react'
import './ProductCard.css'

const ProductCard = ({data}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top' src={data.imageUrl} alt="" />
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>{data.brand}</p>
                <p>{data.title}</p>
            </div>
            <div className='flex item-center space-x-2'>
                <p className='font-semibold'><span class="WebRupee">&#x20B9;</span> {data.discountedPrice}</p>
                <p className='line-through opacity-50'><span class="WebRupee">&#x20B9;</span> {data.price}</p>
                <p className='text-green-600 font-semibold'>{data.discountPersent}% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard