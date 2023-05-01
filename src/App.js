import React from 'react'
import { HashRouter, Routes, Route, Link, json } from "react-router-dom";
import './style.css'
import { useState, useEffect } from 'react'
import Home from './home';
import Products from './Products'
import Info from './info'
import table from './img/table.png'
import lamp from './img/lamp.png'
import door from './img/door.png'
import desk from './img/desk.png'
import chair from './img/chair.png'
import bed from './img/bed.png'
import Pay from './pay';

export default function App() {
  const items = [
    {id: 1, src: table, name: 'Table', price: 139, count: 1},
    {id: 2, src: lamp, name: 'Lamp', price: 20, count: 1},
    {id: 3, src: door, name: 'Door', price: 235, count: 1},
    {id: 4, src: desk, name: 'Desk', price: 185, count: 1},
    {id: 5, src: chair, name: 'Chair', price: 127, count: 1},
    {id: 6, src: bed, name: 'Bed', price: 356, count: 1}
  ];

  if(!localStorage.getItem('cart')){
    localStorage.setItem('cart', JSON.stringify([]))
  }

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [total, setTotal] = useState(0);
  const [all, setAllt] = useState(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  useEffect(() => {
    let al = cart.reduce((total, i) => {
      return total + i.count
    },0)
    setAllt(al)

    let tot = cart.reduce((total, i) => {
      return total + (i.price * i.count)
    },0)
    setTotal(tot)
  },[])

  function addOne(i){
    if (cart.filter((e)=> e.id === i.id).length > 0){
      setCart(current => current.map(item => {
        if (item.id === i.id) {
          return {
            ...item,
            count: item.count + 1
          }
        } else {
          return item;
        }
      }));
      setTotal(total + i.price)
      setAllt(all + 1)
    } 
  }

  function removeOne(i){
    if (cart.filter((e)=> e.id === i.id).length > 0){
      setCart(current => current.map(item => {
        if (item.id === i.id) {
          return {
            ...item,
            count: item.count - 1
          }
        } else {
          return item;
        }
      }));
      setTotal(total - i.price)
      setAllt(all - 1)
    } 
    if(i.count === 1){
        const newCart = cart.filter((e)=> e.id !== i.id)
        setCart(newCart)
    }
  }

  function openCart(){
    const cart = document.querySelector('.cart');
    cart.classList.add('cart-on')
    const cover = document.querySelector('.cover');
    cover.classList.add('cover-on')
  }
  function removeCart(){
    const cart = document.querySelector('.cart');
    cart.classList.remove('cart-on')
    const cover = document.querySelector('.cover');
    cover.classList.remove('cover-on')
  }

  return (
      
      <HashRouter>
        <span onClick={removeCart} className='cover'></span>
        <header>
          <h1>Not a shop</h1>
          <nav>
            <div className='left'>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/products">Products</Link></div>
              <div><Link to="/info">Info</Link></div>
            </div>
          
            <div className='right'>
              <img className='imgcart' onClick={openCart} alt='cart' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADkElEQVR4nO2ba4hMYRjHH/fc2VYrd7JLkmS1tS6tLxYffGGjlGtpv0jaJcIHPsjKF5cUSYRa5JJySZZCrdS0iSwfdqXNNawol8X66TVn6/SYndmZOWfOuzPzq7em807/55n/nHPmvM/zjkiWLFnaAEYAhe2MkZLOABuBP7RPq3mPpCtAM7H5CvSTdAR4SMdYJukIMBG4AITUeKEMuCyZBDBVGdACDJZMAqhXJqySTALYqQy4LpkE4fuDm1/AEMkkgMfKhNdAYycctUBRIgZsJ314logBBaQPH+I2wADUkR5ck0QANishY8i4TjBqVN6bEjVglFowmQXScLEYoKs55ZUBhckIPlBiG8RigGkq309At2QEK5TgfbF/me/mkhdFk1aXoLkkxoilAFeVAeu9EL3nyU3FZ4DuwGeV62QvhNcp0ZBYCFCs8nwHdPFCeCjwW4nni2UAW1WOZ7wUv63Et4llADdVjuVeipcr8UdiEUBPp4bppsDLALnOstjNJLEEoETl9sqPIDdUkB1iCSYXldtJP4KsSXqZ6RPAXZXbaj+CDHKKpG6meB4o/rz6AD9UXv48rAFXVKBdvgSKL6dSlVODn8GWq2CNnjxsJJfTbpXTUT+D9Qe+qYDTfQuY2IrV324WcFEF3OtrwNhfiP55HuZ30KUqYFNQlwGwUOVSn4qgfSM8dR0GqgIY+ufvkO8GGICz2MliSQXAIuzDFGtyU2VAb+ALdnEuJR++DeC0SiDklNKDGCuBXhLwHbgp6IeiINbgH5UJxZJJAMeVAfskkwDmKwNeRtl76McItlMF9ADeExymZ1ERtAlHCJbmoA2YFbABdYEaYADWOh2kUIrHeWDCvySy2NmrKwUqnTHXHEtAZ7zTlzCdnxVAntgO4Tq9KZdpGoDZHdQYAFRH0PhpapFmM4TYCFAUoUrr5nusXRvO2aPX+pqDYiP8X6OLRG2cPYj2lr9TxSaAsRESPRVh5WgYHUcX6gmwB3ijjleJTQDzVII1rrlbaq40is7zSO14oMzTLTBeA8xRCdY7xRMznqq5kig6+r0LnONb1PFqsQnC7TNdpjan7dsId/KBUXTMZeOmxTFF/8+pUmwDOEFsjsXQmBHjT104+4Hs28UO5Dg3rfYwczkJtLzdmLOsTGyF8KVwwNmo2IZ5vd/MxaGzRG3dN8vfO8BM6QwQrheYnef55nUSOnmmFR+PeVmyZBHNX8jYhRMxlIR5AAAAAElFTkSuQmCC"/>
              <span>{all}</span>
            </div>
          </nav>
          
        </header>

        <article className='cart'>
            <h1>Shopping Cart</h1>
            {cart.map((i) => 
              <div key={i.id} className='itemscart'>
                <div className='cartview'>
                  <img src={i.src} alt='' />
                  <h3>{i.name}</h3>
                </div>
                <div className='edit'>
                  <button onClick={() => removeOne(i)}>-</button>
                  <p>{i.count}</p>
                  <button onClick={() => addOne(i)}>+</button>
                </div>
              </div>)}
              <h4>Total: {total}$</h4> 
                <Link onClick={removeCart} className='buy' to="/payment">Buy</Link>
              <button onClick={removeCart} className='close'>Close</button>
        </article>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products items={items} cart={cart} setCart={setCart} total={total} setTotal={setTotal} all={all}
          setAllt={setAllt} />} />
          <Route path="/info" element={<Info />} />
          <Route path="/payment" element={<Pay cart={cart} total={total}/>} />
        </Routes>
      </HashRouter>
  )
}
