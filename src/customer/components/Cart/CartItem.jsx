import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>

            <div className="flex items-center">
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://sslimages.shoppersstop.com/sys-master/images/h47/h03/31381584019486/A23HMKT054_OLIVE.jpg_230Wx334H" alt="" />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">Solid Cotton Polo Men's T-Shirt</p>
                    <p className="opacity-70">size L , White</p>
                    <p className="opacity-70 mt-2">Seller:Tommy Hilfiger</p>
                    <div className="flex space-x-4 item-center text-gray-900 p-3">
                        <p className="font-semibold">₹500</p>
                        <p className="line-through opacity-50">₹600</p>
                        <p className="text-green-600 font-semibold">10% off</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>

                <div className='flex items-center lg:space-x-2'>
                    <IconButton sx={{ color: "RGB(145 85 253)" }}>
                        <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">2
                    </span>
                    <IconButton sx={{ color: "RGB(145 85 253)" }}>
                        <AddCircleOutlineIcon></AddCircleOutlineIcon>
                    </IconButton>
                </div>

                <div sx={{ color: "RGB(145 85 253)" }}>
                    <Button>remove</Button>
                </div>

            </div>

        </div>
    )
}

export default CartItem