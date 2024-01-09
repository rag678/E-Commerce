import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-semibold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          xs={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={9}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://sslimages.shoppersstop.com/sys-master/images/h23/hfc/31381395734558/A23HMKT054_OLIVE_alt1.jpg_2000Wx3000H"
                alt=""
              />

              <div className="ml-5 space-y-2">
                <p className="font-semibold">Solid Cotton Polo Men's T-Shirt</p>
                <p className="opacity-50 text-xs font-semibold space-x-5">
                  <span>Color : Black</span> <span>Size: M</span>
                </p>
                <p className="opacity-50 text-xs font-semibold">
                  Seller : Tommy Hilfiger
                </p>
                <p>Rs 2099</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={3} >
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
};

export default OrderDetails;
