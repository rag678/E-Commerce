import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'

const TrignleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})


const Achivement = () => {
  return (
    <Card className='' sx={{position:"relative"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                Shop with Anurag
            </Typography>
            <Typography variant='body2'>
                Congratulation 😀
            </Typography>
            <Typography variant='h5' sx={{my:3.1}}> 420.8K</Typography>

            <Button size='small' variant='contained'> view sales</Button>

            <TrignleImg src=''></TrignleImg>
            <TrophyImg src='https://img.freepik.com/free-vector/trophy-flat-style_78370-3222.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1706745600&semt=ais'/>
        </CardContent>
    </Card>
  )
}


export default Achivement