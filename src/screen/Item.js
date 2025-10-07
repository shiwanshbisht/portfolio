import React from 'react'
import Card from '../components/Card'
import Cart from '../components/Cart'


const Item = () => {
  return (
    <>
    <Card/>
    <Card name ="cake" price ={120}/>
    <Card name ="rice" price ={110}/>
    <Card name ="xyz" price ={10}/>
    <Card name ="eleke" price ={25}/>
    <Card name ="hello" price ={100}/>
    <Cart/>
    </>
  )
}

export default Item
