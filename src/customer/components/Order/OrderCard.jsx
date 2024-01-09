import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>


            <Grid item sx={6}>

                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://sslimages.shoppersstop.com/sys-master/images/h23/hfc/31381395734558/A23HMKT054_OLIVE_alt1.jpg_2000Wx3000H" alt="" />
                    <div className="ml-5 space-y-2">
                        <p >Solid Cotton Polo Men's T-Shirt</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color : Black</p>
                    </div>
                </div>
            </Grid>

            <Grid item sx={2}>
                <p>Rs 2099</p>
            </Grid>
            <Grid item sx={4}>
                {true && <div>
                    <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered On March 03
                    </span>
                </p>
                <p className='text-sm'>Your Item has been Delivered</p>
                </div>
                }
                {false && <p>
                    <span>
                        Expected Delivery On March 03
                    </span>
                </p>}
            </Grid>


        </Grid>
    </div>
  )
}

export default OrderCard