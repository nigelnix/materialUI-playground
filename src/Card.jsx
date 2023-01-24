
import {Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography } from '@mui/material'




function CardElement() {
  return (
    
    <Card sx={{maxWidth: '20em' }}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
      
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

<CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1661961110372-8a7682543120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant='body2' component='h4' align='left' sx={{color:'dark-gray'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardElement