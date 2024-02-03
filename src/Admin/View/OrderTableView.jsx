import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelOrder, confirmOrder, deleteOrder, deliverOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';

const OrdersTableView = () => {
  const dispatch = useDispatch();

  const { adminOrder } = useSelector(store => store);

  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.canceled,adminOrder.deletedOrder])
  console.log("admin order", adminOrder)

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event,index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose();
  }
  const handleConfirmOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose();
  }
  const handleDeliveredOrder = (orderId) => {
    dispatch(deliverOrder(orderId));
    handleClose();
  }
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  }
  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
    handleClose();
  }

  return (
    <div className='p-5'>
      <Card className='mt-2'>
        <CardHeader title="Recent Order" />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders.map((item, index) => (
                <TableRow
                  key={item.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {/* console.log("item Id ",item.id) */}
                  <TableCell align="left">
                    <AvatarGroup max={3} sx={{ justifyContent: "start" }}>{item.orderItems.map((orderItem) => <Avatar src={orderItem.product.imageUrl}></Avatar>)}</AvatarGroup>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.orderItems.map((orderItem) => <p>{orderItem.product.title}</p>)}
                  </TableCell>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">{item.totalItem}</TableCell>
                  <TableCell align="left">
                    <span className={`text-white px-5 py-2 rounded-full
    ${item.orderStatus === "CONFIRMED" ? "bg-[green]" :
                        item.orderStatus === "SHIPPED" ? "bg-[blue]" :
                          item.orderStatus === "PLACED" ? "bg-[#35bdb6]" :
                            item.orderStatus === "PENDING" ? "bg-[#3f3880]" :
                              item.orderStatus === "DELIVERED" ? "bg-[#2e807d]" :
                                "bg-[#820824]"}`}>{item.orderStatus}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default OrdersTableView